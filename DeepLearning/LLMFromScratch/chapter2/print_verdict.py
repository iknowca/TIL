with open('the_verdict.txt', "r", encoding="utf-8") as f:
    raw_text = f.read()

    print("total length: ", len(raw_text), "characters")
    print(raw_text[:99])
