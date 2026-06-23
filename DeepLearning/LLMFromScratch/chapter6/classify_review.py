import torch

def classify_review(text, model, tokenizer, device, max_length=None, pad_token_id=50256):
    model.eval()

    input_ids = tokenizer.encode(text)
    supported_context_length = model.pos_emb.weight.shape[0]

    input_ids = input_ids[:min(
        max_length, supported_context_length
    )]

    assert max_length is not None, (
        "max_length must be specified. "
        "If you want to use the maximum context length of the model, "
        f"set max_length={supported_context_length}."
    )

    assert max_length <= supported_context_length, (
        f"max_length must be less than or equal to the maximum context length of the model, "
        f"which is {supported_context_length}."
    )

    input_ids += [pad_token_id] * (max_length - len(input_ids))
    input_tensor = torch.tensor(
        input_ids, device=device
    ).unsqueeze(0)

    with torch.no_grad():
        logits = model(input_tensor)[:, -1, :]
    predicted_label = torch.argmax(logits, dim=-1).item()

    return "spam" if predicted_label == 1 else "ham"