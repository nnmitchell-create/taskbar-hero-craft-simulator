import urllib.request
import urllib.error
import json
import re
import os
from html.parser import HTMLParser

# 出力先ディレクトリ
output_dir = r"d:\ガチャ\data"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# ターゲットURL
base_url = "https://taskbarherowiki.com"

# ヘッダー設定（User-Agent）
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def fetch_url(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return response.read()
    except urllib.error.URLError as e:
        print(f"Error fetching {url}: {e}")
        return None

def fetch_json(url_path):
    url = f"{base_url}{url_path}"
    print(f"Checking JSON endpoint: {url}")
    data = fetch_url(url)
    if data:
        try:
            return json.loads(data.decode('utf-8'))
        except json.JSONDecodeError:
            print(f"Failed to parse JSON from {url}")
            return None
    return None

def parse_next_f_payloads(html_content):
    """
    Next.js の self.__next_f.push[...] 内のデータを抽出する簡易パーサー
    """
    payloads = []
    # self.__next_f.push([1,"..."]) などのパターンを抽出
    pattern = re.compile(r'self\.__next_f\.push\(\[\s*\d+\s*,\s*"(.*?)"\s*\]\)', re.DOTALL)
    matches = pattern.findall(html_content)
    
    combined_text = ""
    for match in matches:
        # エスケープされた文字列をデコード
        # unicode_escape でデコードするためにバイト列に直してからデコード
        try:
            decoded = bytes(match, "utf-8").decode("unicode_escape")
            combined_text += decoded
        except Exception as e:
            # デコードに失敗した場合はそのまま結合
            combined_text += match
            
    return combined_text

# HTMLパーサーを使って chests ページや effects ページのフォールバックパースも考慮するが、
# まずは JSON エンドポイントを調べる
endpoints = {
    "items.json": "/data/items.json",
    "meta.json": "/data/meta.json",
    "chests.json": "/data/chests.json",
    "effects.json": "/data/effects.json",
    "materials.json": "/data/materials.json",
    "runes.json": "/data/runes.json",
    "pets.json": "/data/pets.json",
    "heroes.json": "/data/heroes.json",
}

extracted_data = {}

# 1. 直接 JSON 取得を試みる
for filename, path in endpoints.items():
    json_data = fetch_json(path)
    if json_data:
        dest_path = os.path.join(output_dir, filename)
        with open(dest_path, "w", encoding="utf-8") as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully saved {filename} to {dest_path}")
        extracted_data[filename] = True
    else:
        print(f"JSON endpoint not available for: {filename}")
        extracted_data[filename] = False

# 2. chests.json や effects.json が取得できなかった場合のスクレイピング処理
# chests ページの HTML からデータを抽出する
if not extracted_data.get("chests.json"):
    print("Chests JSON not found directly. Attempting to parse from HTML...")
    html_data = fetch_url(f"{base_url}/chests")
    if html_data:
        html_str = html_data.decode('utf-8', errors='ignore')
        # RSCペイロードの解析を試みる
        rsc_text = parse_next_f_payloads(html_str)
        # RSCテキスト内に含まれる JSON や 宝箱名などの手がかりを探す
        # chests データの正規表現抽出
        # 例: [{"id":..., "name":"Normal Monster Box 1", ...}] のような構造
        # Next.js のデータ構造は、最終的にシリアライズされた JSON として RSC 内に存在する
        # 簡易的な抽出: JSONの配列やオブジェクトを正規表現で探す
        # chests のデータパターン: name, drops, rates, levels などのキーが含まれるオブジェクト
        # 宝箱の名前のリスト
        chest_names = re.findall(r'"name":"([^"]*?(?:Box|Chest)[^"]*?)"', rsc_text)
        print(f"Found chest names in RSC: {list(set(chest_names))}")
        
        # 保存しておく
        with open(os.path.join(output_dir, "raw_chests_rsc.txt"), "w", encoding="utf-8") as f:
            f.write(rsc_text)
        print("Saved raw chests RSC payload to raw_chests_rsc.txt")

if not extracted_data.get("effects.json") and not extracted_data.get("materials.json"):
    print("Effects/Materials JSON not found directly. Attempting to parse from HTML...")
    html_data = fetch_url(f"{base_url}/effects")
    if html_data:
        html_str = html_data.decode('utf-8', errors='ignore')
        rsc_text = parse_next_f_payloads(html_str)
        with open(os.path.join(output_dir, "raw_effects_rsc.txt"), "w", encoding="utf-8") as f:
            f.write(rsc_text)
        print("Saved raw effects RSC payload to raw_effects_rsc.txt")

print("Data extraction process completed.")
