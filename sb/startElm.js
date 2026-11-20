// public/startElm.js
import { applyModStyles, initSwitchboardPorts } from "./app.js";

const DB_NAME = "switchboardDB";
const STORE_NAME = "kv";
const DATA_KEY = "switchboardData";

let cachedDb = null;

function getDbConnection() {
    if (cachedDb) return Promise.resolve(cachedDb);
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            db.onclose = () => { cachedDb = null; };
            db.onversionchange = () => {
                db.close();
                cachedDb = null;
            };
            cachedDb = db;
            resolve(db);
        };
        request.onerror = (e) => reject(e);
    });
}

async function getSavedData() {
    try {
        const db = await getDbConnection();
        return new Promise((resolve) => {
            const tx = db.transaction(STORE_NAME, "readonly");
            const store = tx.objectStore(STORE_NAME);
            const req = store.get(DATA_KEY);
            req.onsuccess = () => resolve(req.result ?? null);
            req.onerror = () => resolve(null);
        });
    } catch (err) {
        console.error("[IndexedDB] Failed to open DB:", err);
        return null;
    }
}

async function saveData(data) {
    const db = await getDbConnection();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        store.put(data, DATA_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

async function requestPersistentStorage() {
    if (navigator.storage && navigator.storage.persist) {
        try {
            await navigator.storage.persist();
        } catch (err) {
            console.warn("[Storage] 永続化リクエスト失敗:", err);
        }
    }
}

async function initializeApp() {
    requestPersistentStorage();

    const params = new URLSearchParams(window.location.search);
    const isSafeMode = params.get("safemode") === "1";

    const rawData = await getSavedData();
    let savedData = rawData;
    if (typeof rawData === "string") {
        try {
            savedData = JSON.parse(rawData);
        } catch (e) {
            console.error("[JSON] Corrupted data string:", e);
            savedData = null;
        }
    }

    // 起動時のフラッシュ防止: Elm 描画前に Mod CSS を <head> へ注入
    if (!isSafeMode && savedData && Array.isArray(savedData.styleMods)) {
        applyModStyles(savedData.styleMods);
    }

    const seedArray = Array.from(crypto.getRandomValues(new Uint32Array(4)));

    const app = Elm.Main.init({
        node: document.getElementById("app"),
        flags: {
            storageData: savedData,
            seed: seedArray,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            isSafeMode: isSafeMode
        }
    });

    initSwitchboardPorts(app, saveData);
    return app;
}

window.elmAppPromise = initializeApp();
