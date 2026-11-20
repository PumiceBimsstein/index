// public/app.js

const NORMAL_FAVICON =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%233b5bdb'/%3E%3Crect x='6' y='7' width='8' height='8' rx='2' fill='%23ffffff'/%3E%3Crect x='18' y='7' width='8' height='8' rx='2' fill='%23dbe4ff'/%3E%3Crect x='6' y='17' width='8' height='8' rx='2' fill='%23dbe4ff'/%3E%3Crect x='18' y='17' width='8' height='8' rx='2' fill='%23ffffff'/%3E%3C/svg%3E";

const ALERT_FAVICON =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23e03131'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23ffffff'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23e03131'/%3E%3C/svg%3E";

const MOD_STYLE_ELEMENT_ID = "switchboard-mod-styles";
const ALLOWED_FONT_PREFIX = "https://fonts.googleapis.com/";

function isSafeCssToken(str) {
    if (typeof str !== "string") return false;
    const lower = str.toLowerCase();
    return (
        !lower.includes("</style") &&
        !lower.includes("@import") &&
        !lower.includes("javascript:") &&
        !lower.includes("expression(")
    );
}

function isAllowedFontUrl(url) {
    return (
        typeof url === "string" &&
        url.startsWith(ALLOWED_FONT_PREFIX) &&
        url.length > ALLOWED_FONT_PREFIX.length &&
        !/[\s"'<>]/.test(url)
    );
}

function syncModFontLinks(mods) {
    const desiredUrls = [];
    const seen = new Set();

    if (Array.isArray(mods)) {
        for (const mod of mods) {
            if (!mod || !mod.enabled || !Array.isArray(mod.fontUrls)) continue;
            for (const url of mod.fontUrls) {
                if (isAllowedFontUrl(url) && !seen.has(url)) {
                    seen.add(url);
                    desiredUrls.push(url);
                }
            }
        }
    }

    const existingLinks = Array.from(
        document.querySelectorAll('link[data-switchboard-mod-font="true"]')
    );
    for (const el of existingLinks) {
        const href = el.getAttribute("href");
        if (!seen.has(href)) {
            el.remove();
        }
    }

    const currentHrefs = new Set(
        Array.from(document.querySelectorAll('link[data-switchboard-mod-font="true"]'))
            .map((el) => el.getAttribute("href"))
    );
    for (const url of desiredUrls) {
        if (!currentHrefs.has(url)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;
            link.setAttribute("data-switchboard-mod-font", "true");
            document.head.appendChild(link);
        }
    }
}

export function compileModCss(mods) {
    if (!Array.isArray(mods)) return "";
    const chunks = [];

    for (const mod of mods) {
        if (!mod || !mod.enabled) continue;

        if (mod.kind === "token_json" && mod.variables && typeof mod.variables === "object") {
            const lines = [];
            for (const [key, val] of Object.entries(mod.variables)) {
                if (
                    /^--[a-zA-Z0-9_-]+$/.test(key) &&
                    typeof val === "string" &&
                    !/[;{}]/.test(val) &&
                    isSafeCssToken(val)
                ) {
                    lines.push(`    ${key}: ${val};`);
                }
            }
            if (lines.length > 0) {
                chunks.push(`/* Mod: ${String(mod.name || "theme")} */\n:root {\n${lines.join("\n")}\n}`);
            }
        } else if (mod.kind === "custom_css" && typeof mod.cssText === "string") {
            if (isSafeCssToken(mod.cssText)) {
                chunks.push(`/* Mod: ${String(mod.name || "custom")} */\n${mod.cssText}`);
            }
        }
    }

    if (chunks.length === 0) return "";
    return `@layer mod {\n${chunks.join("\n\n")}\n}`;
}

export function applyModStyles(mods) {
    syncModFontLinks(mods);

    const css = compileModCss(mods);
    let styleEl = document.getElementById(MOD_STYLE_ELEMENT_ID);

    if (!css) {
        if (styleEl) styleEl.remove();
        return;
    }

    if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = MOD_STYLE_ELEMENT_ID;
        document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;
}

export function initSwitchboardPorts(app, saveData) {
    if (app.ports && app.ports.saveToStorage) {
        app.ports.saveToStorage.subscribe(async (payload) => {
            try {
                await saveData(payload);
                if (app.ports.onStorageResult) {
                    app.ports.onStorageResult.send({ ok: true, error: null });
                }
            } catch (err) {
                console.error("[IndexedDB] Save error:", err);
                if (app.ports.onStorageResult) {
                    app.ports.onStorageResult.send({
                        ok: false,
                        error: err && err.message ? err.message : "保存に失敗しました"
                    });
                }
            }
        });
    }

    if (app.ports && app.ports.applyStyleMods) {
        app.ports.applyStyleMods.subscribe((mods) => {
            applyModStyles(mods);
        });
    }

    if (app.ports && app.ports.exitSafeMode) {
        app.ports.exitSafeMode.subscribe(() => {
            const url = new URL(window.location.href);
            url.searchParams.delete("safemode");
            window.location.href = url.toString();
        });
    }

    if (app.ports && app.ports.setFavicon) {
        app.ports.setFavicon.subscribe((isAlerting) => {
            const link = document.getElementById("app-favicon");
            if (link) {
                link.href = isAlerting ? ALERT_FAVICON : NORMAL_FAVICON;
            }
        });
    }

    if (app.ports && app.ports.copyToClipboard) {
        app.ports.copyToClipboard.subscribe(async (text) => {
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(text);
                } else {
                    const textarea = document.createElement("textarea");
                    textarea.value = text;
                    textarea.style.position = "fixed";
                    textarea.style.opacity = "0";
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                }
            } catch (err) {
                console.error("[Clipboard] Copy failed:", err);
            }
        });
    }

    if (app.ports && app.ports.onPageHide) {
        window.addEventListener("pagehide", () => {
            app.ports.onPageHide.send(null);
        });
    }
}
