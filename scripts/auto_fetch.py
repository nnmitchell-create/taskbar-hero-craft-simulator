import os
import sys
import json
import base64
import sqlite3
import shutil
import ctypes
from ctypes import wintypes
import subprocess
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

# ==========================================
# Windows API 定数と構造体
# ==========================================
class DATA_BLOB(ctypes.Structure):
    _fields_ = [("cbData", wintypes.DWORD), ("pbData", ctypes.POINTER(ctypes.c_byte))]

# ==========================================
# Windows DPAPI (CryptUnprotectData)
# ==========================================
def decrypt_dpapi(encrypted_data):
    dpapi = ctypes.windll.crypt32
    
    blob_in = DATA_BLOB()
    blob_in.cbData = len(encrypted_data)
    blob_in.pbData = ctypes.cast(ctypes.create_string_buffer(encrypted_data), ctypes.POINTER(ctypes.c_byte))
    
    blob_out = DATA_BLOB()
    
    result = dpapi.CryptUnprotectData(ctypes.byref(blob_in), None, None, None, None, 0, ctypes.byref(blob_out))
    if not result:
        raise ctypes.WinError()
        
    cbData = blob_out.cbData
    pbData = blob_out.pbData
    
    buffer = ctypes.string_at(pbData, cbData)
    ctypes.windll.kernel32.LocalFree(pbData)
    
    return buffer

# ==========================================
# Chrome Cookie 抽出・復号
# ==========================================
def get_chrome_master_key():
    local_state_path = os.path.expandvars(r'%LocalAppData%\Google\Chrome\User Data\Local State')
    if not os.path.exists(local_state_path):
        raise FileNotFoundError("Chromeの環境設定ファイルが見つかりません。")
        
    with open(local_state_path, 'r', encoding='utf-8') as f:
        local_state = json.load(f)
        
    encrypted_key = base64.b64decode(local_state['os_crypt']['encrypted_key'])
    encrypted_key = encrypted_key[5:]
    
    master_key = decrypt_dpapi(encrypted_key)
    return master_key

def decrypt_chrome_value(encrypted_val, master_key):
    try:
        if encrypted_val.startswith(b'v10') or encrypted_val.startswith(b'v11'):
            nonce = encrypted_val[3:15]
            ciphertext = encrypted_val[15:]
            aesgcm = AESGCM(master_key)
            decrypted = aesgcm.decrypt(nonce, ciphertext, None)
            return decrypted.decode('utf-8', errors='ignore')
    except Exception as e:
        return f"DecryptError: {str(e)}"
    return ""

def find_steam_cookie():
    user_data_dir = os.path.expandvars(r'%LocalAppData%\Google\Chrome\User Data')
    master_key = get_chrome_master_key()
    
    profiles = ['Default']
    for folder in os.listdir(user_data_dir):
        if folder.startswith('Profile '):
            profiles.append(folder)
            
    for profile in profiles:
        cookies_db_path = os.path.join(user_data_dir, profile, 'Network', 'Cookies')
        if not os.path.exists(cookies_db_path):
            cookies_db_path = os.path.join(user_data_dir, profile, 'Cookies')
            
        if not os.path.exists(cookies_db_path):
            continue
            
        # 一時ファイルにコピー
        temp_cookies_path = os.path.join(os.environ.get('TEMP', '.'), f'temp_cookies_{profile}')
        try:
            shutil.copyfile(cookies_db_path, temp_cookies_path)
            
            conn = sqlite3.connect(temp_cookies_path)
            cursor = conn.cursor()
            
            cursor.execute("SELECT host_key, name, encrypted_value FROM cookies WHERE host_key LIKE '%steamcommunity.com%'")
            rows = cursor.fetchall()
            
            for host_key, name, encrypted_value in rows:
                if name == 'steamLoginSecure':
                    decrypted_val = decrypt_chrome_value(encrypted_value, master_key)
                    if decrypted_val and not decrypted_val.startswith('DecryptError'):
                        conn.close()
                        os.remove(temp_cookies_path)
                        return f"steamLoginSecure={decrypted_val}"
            conn.close()
        except Exception as e:
            # ロック中などのエラー
            raise e
        finally:
            if os.path.exists(temp_cookies_path):
                os.remove(temp_cookies_path)
                
    return None

def inject_cookie_into_scripts(cookie_value):
    scripts = ['scripts/initial_fetch.js', 'scripts/daily_sync.js']
    for script_name in scripts:
        script_path = os.path.join(os.path.dirname(__file__), '..', script_name)
        if os.path.exists(script_path):
            with open(script_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # const STEAM_COOKIE = '...'; の部分を置換
            # 正規表現で const STEAM_COOKIE = '.*'; または const STEAM_COOKIE = ".*"; を見つけて置換
            import re
            new_content = re.sub(
                r'const STEAM_COOKIE = [\'\"].*?[\'\"];',
                f"const STEAM_COOKIE = '{cookie_value}';",
                content
            )
            
            with open(script_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  -> {script_name} に本物のCookieを書き込みました。")

if __name__ == "__main__":
    print("====================================================")
    print("   TBH Steamマーケットデータ自動取得アシスタント")
    print("====================================================")
    print("※本スクリプトは、ChromeブラウザからSteamのCookieを")
    print("  自動的に取り出し、データ取得バッチを実行します。")
    print("----------------------------------------------------")
    print("【重要】")
    print("Chromeブラウザが起動していると、Cookieのファイルがロックされて")
    print("読み取ることができません。")
    print("一度、Google Chromeを完全に終了（閉じる）させてください。")
    print("----------------------------------------------------")
    
    input("Chromeを閉じたあと、Enterキーを押してください...")
    
    print("\nCookieの取得を試みています...")
    try:
        cookie = find_steam_cookie()
        if cookie:
            print("\n[成功] SteamのログインCookieを取得しました！")
            inject_cookie_into_scripts(cookie)
            
            print("\n----------------------------------------------------")
            print("続けて、サービス開始日(5月27日)から6月9日23:59までの")
            print("本物データの一括取得バッチを自動起動します。")
            print("※IPブロックを避けるため、1点あたり数秒間隔で取得します。")
            print("  途中で中止したい場合は、Ctrl + C を押してください。")
            print("----------------------------------------------------")
            
            # initial_fetch.js を起動
            js_path = os.path.join(os.path.dirname(__file__), 'initial_fetch.js')
            subprocess.run(['node', js_path], check=True)
            
        else:
            print("\n[エラー] SteamのログインCookieが見つかりませんでした。")
            print("先にChromeブラウザ上でSteamにログインしていることをご確認ください。")
    except Exception as e:
        print(f"\n[エラー] 取得に失敗しました: {e}")
        print("Google Chromeが完全に閉じられているか再度ご確認ください。")
        print("（バックグラウンドでChromeプロセスが残っている場合は、タスクマネージャー等で終了させてください）")
