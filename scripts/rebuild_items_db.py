import os
import json
import time
import sys
import urllib.parse
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

STEAM_APPID = 3678970
# ログイン不要で一般公開されているデータだけでも十分に動くようにします
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def log(msg):
    print(msg)
    sys.stdout.flush()

def build_hash_name(item):
    name = item.get("name")
    if item.get("type") == "GEAR":
        grade = item.get("grade", "COMMON")
        grade_str = grade[0] + grade[1:].lower()
        key_str = str(item.get("key", ""))
        suffix = ""
        if key_str.endswith("1"):
            suffix = "A"
        elif key_str.endswith("2"):
            suffix = "B"
        
        if suffix:
            return f"{name} ({grade_str}) {suffix}"
        else:
            return f"{name} ({grade_str})"
    return name

def fetch_search_results():
    """フェーズ1: 出品中の全アイテムを100件ずつ一括取得 (429制限付き)"""
    log("--- フェーズ1: 出品中アイテムの一括検索API取得開始 ---")
    all_market_items = {}
    start = 0
    count = 100
    rate_limit_hits = 0
    
    while True:
        url = f"https://steamcommunity.com/market/search/render/?query=&start={start}&count={count}&appid={str(STEAM_APPID)}&norender=1"
        log(f"Fetching start={start}...")
        try:
            res = requests.get(url, headers=HEADERS, timeout=15)
            if res.status_code == 429 or res.status_code == 403:
                rate_limit_hits += 1
                log(f"Rate limit hit ({res.status_code}). Attempt {rate_limit_hits}/3. Waiting 15s...")
                if rate_limit_hits >= 3:
                    log("Max rate limit attempts reached. Aborting search loop.")
                    break
                time.sleep(15)
                continue
                
            if res.status_code != 200:
                log(f"Failed with status: {res.status_code}")
                break
            
            data = res.json()
            if not data.get("success"):
                log("Success flag is False")
                break
                
            results = data.get("results", [])
            if not results:
                log("No more results returned.")
                break
                
            rate_limit_hits = 0 # リセット
            for it in results:
                hash_name = it.get("hash_name")
                asset = it.get("asset_description", {})
                all_market_items[hash_name] = {
                    "hash_name": hash_name,
                    "sell_price": it.get("sell_price", 0) / 100.0 if "$" in it.get("sell_price_text", "") else it.get("sell_price", 0),
                    "listings": it.get("sell_listings", 0),
                    "icon_url": asset.get("icon_url", ""),
                    "type": asset.get("type", ""),
                    "classid": asset.get("classid", ""),
                    "descriptions": asset.get("descriptions", [])
                }
            
            total_count = data.get("total_count", 0)
            log(f"Acquired {len(results)} items (Total: {len(all_market_items)}/{total_count})")
            if start + len(results) >= total_count:
                break
            start += len(results)
            time.sleep(2)
        except Exception as e:
            log(f"Error during search fetch: {e}")
            time.sleep(5)
            
    return all_market_items

def fetch_single_item(hash_name):
    """フェーズ2: 出品が0のアイテムの個別クロール"""
    encoded_name = urllib.parse.quote(hash_name)
    url = f"https://steamcommunity.com/market/listings/{str(STEAM_APPID)}/{encoded_name}"
    
    for attempt in range(2):
        try:
            res = requests.get(url, headers=HEADERS, timeout=10)
            if res.status_code == 429 or res.status_code == 403:
                time.sleep(10 * (attempt + 1))
                continue
            if res.status_code != 200:
                return hash_name, None
                
            html = res.text
            # HTML内の直接の asset_description を正規表現で探す代替手段
            icon_url = ""
            icon_match = html.find("economy/image/")
            if icon_match != -1:
                start_img = html.find("economy/image/", icon_match)
                end_img = html.find('"', start_img)
                if end_img != -1:
                    icon_url = html[start_img:end_img].replace("economy/image/", "")
            
            return hash_name, {
                "hash_name": hash_name,
                "sell_price": None,
                "listings": 0,
                "icon_url": icon_url,
                "descriptions": []
            }
        except Exception as e:
            time.sleep(1)
            
    return hash_name, None

def rebuild():
    # 1. 既存の items.json を読み込む
    items_path = "../data/items.json"
    if not os.path.exists(items_path):
        items_path = "data/items.json"
    
    with open(items_path, "r", encoding="utf-8") as f:
        original_items = json.load(f)
        
    # 2. 対象アイテム (obtainable & tradable & type != STAGEBOX) を抽出
    target_items = []
    for it in original_items:
        if it.get("obtainable") == True and it.get("tradable") == True and it.get("type") != "STAGEBOX":
            target_items.append(it)
            
    log(f"再構築対象アイテム数: {len(target_items)} 件")
    
    # 3. フェーズ1: 一括APIのフェッチ
    market_data_map = fetch_search_results()
    
    # 4. フェーズ2: 出品0のアイテムの特定
    missing_items = []
    for it in target_items:
        hash_name = build_hash_name(it)
        it["_hash_name"] = hash_name
        if hash_name not in market_data_map:
            missing_items.append(hash_name)
            
    log(f"出品がない（個別巡回が必要な）アイテム数: {len(missing_items)} 件")
    
    # 5. 出品0のアイテムを並行処理で個別取得 (3並行でやさしく)
    if missing_items:
        log("--- フェーズ2: 出品0アイテムの個別ページ巡回開始 ---")
        # レートリミット回避のため、個別巡回の件数を最大200件に制限（または全件やさしく巡回）
        # 実際には大半のアイテム情報が以前のままで良い場合は、新規で画像URLがないものだけを優先します
        with ThreadPoolExecutor(max_workers=3) as executor:
            futures = {executor.submit(fetch_single_item, name): name for name in missing_items}
            for i, future in enumerate(as_completed(futures), 1):
                name, data = future.result()
                if data:
                    market_data_map[name] = data
                    log(f"[{i}/{len(missing_items)}] {name} の取得成功")
                else:
                    log(f"[{i}/{len(missing_items)}] {name} は取得できませんでした")
                time.sleep(1.2)
                
    # 6. 新しいデータベースの構築とクレンジング
    new_items_list = []
    for it in original_items:
        if not (it.get("obtainable") == True and it.get("tradable") == True and it.get("type") != "STAGEBOX"):
            new_items_list.append(it)
            continue
            
        hash_name = build_hash_name(it)
        m_info = market_data_map.get(hash_name)
        
        if m_info:
            if m_info.get("icon_url"):
                it["icon_steam"] = m_info.get("icon_url")
            
        new_items_list.append(it)
        
    # 7. 新しい items.json に書き出し
    with open(items_path, "w", encoding="utf-8") as f:
        json.dump(new_items_list, f, ensure_ascii=False, indent=2)
        
    log(f"新しい items.json の出力が完了しました！ 件数: {len(new_items_list)}")

if __name__ == "__main__":
    rebuild()
