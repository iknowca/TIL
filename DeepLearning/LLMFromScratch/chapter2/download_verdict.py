import urllib.request

url = "https://raw.githubusercontent.com/rickiepark/llm-from-scratch/main/ch02/01_main-chapter-code/the-verdict.txt"
file_path = "the_verdict.txt"
urllib.request.urlretrieve(url, file_path)