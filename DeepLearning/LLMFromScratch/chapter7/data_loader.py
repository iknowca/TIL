from torch.utils.data import DataLoader
from dataset import InstructionDataset, custom_collate_draft_fn
import dataset as ds
import torch

import tiktoken
tokenizer = tiktoken.get_encoding("gpt2")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
if torch.backends.mps.is_available():
    device = torch.device("mps")

from functools import partial
customized_collate_fn = partial(custom_collate_draft_fn, device=device, allowed_max_length=1024)

num_workers = 0
batch_size = 8

data = ds.download_and_load_file(ds.file_path, ds.url)
train_portion = int(len(data) * 0.85)
test_portion = int(len(data) * 0.1)
val_portion = len(data) -train_portion - test_portion

train_data = data[:train_portion]
val_data = data[train_portion:train_portion+val_portion]
test_data = data[train_portion+val_portion:]

train_dataset = InstructionDataset(train_data, tokenizer)
train_loader = DataLoader(
    train_dataset,
    batch_size=batch_size,
    collate_fn=customized_collate_fn,
    shuffle=True,
    drop_last=True,
    num_workers=num_workers
)

val_dataset = InstructionDataset(val_data, tokenizer)
val_loader = DataLoader(
    val_dataset,
    batch_size=batch_size,
    collate_fn=customized_collate_fn,
    shuffle=False,
    drop_last=False,
)

test_dataset = InstructionDataset(test_data, tokenizer)
test_loader = DataLoader(
    test_dataset,
    batch_size=batch_size,
    collate_fn=customized_collate_fn,
    shuffle=False,
    drop_last=False,
)