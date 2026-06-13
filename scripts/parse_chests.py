import json
import os

rsc_path = r"d:\ガチャ\data\raw_chests_rsc.txt"
dest_path = r"d:\ガチャ\data\chests.json"

if not os.path.exists(rsc_path):
    print(f"File not found: {rsc_path}")
    exit(1)

with open(rsc_path, "r", encoding="utf-8") as f:
    content = f.read()

# "chests":[ の始まりの位置を探す
start_key = '"chests":['
idx = content.find(start_key)

if idx == -1:
    # もう一つの可能性: {"chests":[
    start_key = '{"chests":'
    idx = content.find(start_key)

if idx == -1:
    print("Could not find chests key in payload.")
    exit(1)

# "chests" から始まる JSON 構造をパースするために、
# 大括弧 '[' または中括弧 '{' のネストを数えて切り出す
start_pos = idx + len(start_key) - 1  # '[' または '{' の位置
nest = 0
end_pos = -1

for i in range(start_pos, len(content)):
    char = content[i]
    if char in ('[', '{'):
        nest += 1
    elif char in (']', '}'):
        nest -= 1
        if nest == 0:
            end_pos = i + 1
            break

if end_pos == -1:
    print("Could not find matching closing brackets.")
    exit(1)

json_str = content[start_pos:end_pos]

# chests キーをつけて完全な JSON オブジェクトにする
if start_key.startswith('"chests":'):
    full_json_str = '{"chests":' + json_str + '}'
else:
    full_json_str = json_str

try:
    data = json.loads(full_json_str)
    # データを書き出す
    with open(dest_path, "w", encoding="utf-8") as f:
        json.dump(data["chests"], f, ensure_ascii=False, indent=2)
    print(f"Successfully extracted {len(data['chests'])} chests to {dest_path}")
except json.JSONDecodeError as e:
    print("JSON decode error:", e)
    # 切り出しが不完全だった場合、もう少し広い範囲でトライするか、
    # 前後の文字を削って試す
    print("Snippet around error:")
    print(full_json_str[:500])
    print("...")
    print(full_json_str[-500:])
