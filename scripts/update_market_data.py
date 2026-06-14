import requests
import json
import time
import os

def run():
    print("=== Steam Market Data Syncer for Task Bar Hero ===")
    print("Target AppID: 3678970")
    
    all_items = []
    start = 0
    # Steam APIが1回あたり最大10件しか返さない仕様になっているため、10件ずつ巡回します
    count = 10 
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://steamcommunity.com/market/search?appid=3678970"
    }
    
    retry_count = 0
    max_retries = 3
    
    while True:
        url = f"https://steamcommunity.com/market/search/render/?query=&start={start}&count={count}&appid=3678970&norender=1"
        print(f"Fetching start={start}...")
        
        try:
            res = requests.get(url, headers=headers, timeout=15)
            
            # レートリミット（429や一時的な403）に引っかかった場合の対策
            if res.status_code == 429 or res.status_code == 403:
                retry_count += 1
                if retry_count <= max_retries:
                    wait_time = 15 * retry_count
                    print(f"Rate limited (Status {res.status_code}). Waiting {wait_time}s before retry (Attempt {retry_count}/{max_retries})...")
                    time.sleep(wait_time)
                    continue
                else:
                    print("Error: Max retries exceeded due to rate limiting.")
                    break
            
            if res.status_code != 200:
                print(f"Error: Status code {res.status_code}")
                break
            
            data = res.json()
            if not data.get("success"):
                print("Error: Steam API returned success=False")
                break
                
            results = data.get("results", [])
            if not results:
                break
                
            # 正常に取得できたのでリトライカウントをリセット
            retry_count = 0
            
            for item in results:
                price = item.get("sell_price", 0)
                price_text = item.get("sell_price_text", "")
                
                # 米ドルの場合はセント表記なので、ドルに変換
                if "$" in price_text or "USD" in price_text:
                    price_val = price / 100.0
                else:
                    price_val = price
                
                asset = item.get("asset_description", {})
                
                all_items.append({
                    "hash_name": item.get("hash_name"),
                    "name": item.get("name"),
                    "sell_price": price_val,
                    "sell_price_text": price_text,
                    "listings": item.get("sell_listings", 0),
                    "icon_url": asset.get("icon_url", ""),
                    "type": asset.get("type", "Gear"),
                    "id": asset.get("classid", ""),
                    "updated_at": int(time.time())
                })
                
            total_count = data.get("total_count", 0)
            print(f"Fetched {len(results)} items (Total progress: {len(all_items)}/{total_count})")
            
            if len(all_items) >= total_count:
                break
                
            start += len(results)
            time.sleep(1.2) # ブロック防止のための安全な待機
            
        except Exception as e:
            print("Failed during synchronization:", str(e))
            break
            
    if all_items:
        # 重複を排除 (hash_name をキーにする)
        unique_items = {}
        for item in all_items:
            unique_items[item["hash_name"]] = item
            
        final_list = list(unique_items.values())
        
        output_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "market_init.js")
        print(f"Writing data to {output_path}...")
        
        js_content = f"window.DEFAULT_MARKET_DATA = {json.dumps(final_list, ensure_ascii=False)};"
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print("=== Synchronization Completed Successfully! ===")
        print(f"Total synced items: {len(final_list)} (Raw fetched: {len(all_items)})")
    else:
        print("Error: No items fetched.")

if __name__ == "__main__":
    run()
