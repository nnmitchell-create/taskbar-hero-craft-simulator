import json
import os

data_dir = 'd:/ガチャ/data'

with open(os.path.join(data_dir, 'meta.json'), 'r', encoding='utf-8') as f:
    meta = json.load(f)

with open(os.path.join(data_dir, 'items.json'), 'r', encoding='utf-8') as f:
    items = json.load(f)

with open(os.path.join(data_dir, 'effects.json'), 'r', encoding='utf-8') as f:
    effects = json.load(f)

with open(os.path.join(data_dir, 'chests.json'), 'r', encoding='utf-8') as f:
    chests = json.load(f)

with open(os.path.join(data_dir, 'heroes.json'), 'r', encoding='utf-8') as f:
    heroes = json.load(f)

with open(os.path.join(data_dir, 'runes.json'), 'r', encoding='utf-8') as f:
    runes = json.load(f)

# JavaScriptのコードを作成する
js_content = f"""// Auto-generated data file to bypass CORS restrictions
var WIKI_META = {json.dumps(meta, ensure_ascii=False)};
var WIKI_ITEMS = {json.dumps(items, ensure_ascii=False)};
var WIKI_EFFECTS = {json.dumps(effects, ensure_ascii=False)};
var WIKI_CHESTS = {json.dumps(chests, ensure_ascii=False)};
var WIKI_HEROES = {json.dumps(heroes, ensure_ascii=False)};
var WIKI_RUNES = {json.dumps(runes, ensure_ascii=False)};
"""

output_path = os.path.join(data_dir, 'data.js')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Successfully generated data.js")
