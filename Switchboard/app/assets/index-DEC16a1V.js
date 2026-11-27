var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){if(typeof e!=`string`)return!1;let t=e.toLowerCase();return!t.includes(`</style`)&&!t.includes(`@import`)&&!t.includes(`javascript:`)&&!t.includes(`expression(`)}function r(e){return typeof e==`string`&&e.startsWith(y)&&e.length>29&&!/[\s"'<>]/.test(e)}function i(e){let t=[],n=new Set;if(Array.isArray(e)){for(let i of e)if(i&&i.enabled&&Array.isArray(i.fontUrls))for(let e of i.fontUrls)r(e)&&!n.has(e)&&(n.add(e),t.push(e))}let i=Array.from(document.querySelectorAll(`link[data-switchboard-mod-font="true"]`));for(let e of i){let t=e.getAttribute(`href`);n.has(t)||e.remove()}let a=new Set(Array.from(document.querySelectorAll(`link[data-switchboard-mod-font="true"]`)).map(e=>e.getAttribute(`href`)));for(let e of t)if(!a.has(e)){let t=document.createElement(`link`);t.rel=`stylesheet`,t.href=e,t.setAttribute(`data-switchboard-mod-font`,`true`),document.head.appendChild(t)}}function a(e,t,n,r){if(e)for(let i of e){if(i.styleSheet)try{a(i.styleSheet.cssRules,t,n,r)}catch{}if(i.cssRules&&a(i.cssRules,t,n,r),typeof i.selectorText==`string`){t.lastIndex=0;let e;for(;(e=t.exec(i.selectorText))!==null;){let t=(e[1]||e[2]||e[3]||``).trim();t&&!n.has(t)&&(n.add(t),r.push(t))}}}}function o(e){let t=new Set,n=[];for(let r of Array.from(document.styleSheets))if(!(r.ownerNode&&r.ownerNode.id===v))try{a(r.cssRules,e,t,n)}catch{}return n}function s(e){let t=document.getElementById(v);if(!t||!t.sheet)return[];let n=new Set,r=[];try{a(t.sheet.cssRules,e,n,r)}catch{return[]}return r}function c(){return o(b)}function l(){return s(b)}function u(){return o(x)}function d(){return s(x)}function f(e=1500){return document.readyState===`complete`?Promise.resolve():new Promise(t=>{let n=!1,r=()=>{n||(n=!0,t())};window.addEventListener(`load`,r,{once:!0}),setTimeout(r,e)})}function p(e){if(!Array.isArray(e))return``;let t=[];for(let r of e)if(r&&r.enabled){if(r.kind===`token_json`&&r.variables&&typeof r.variables==`object`){let e=[];for(let[t,i]of Object.entries(r.variables))/^--[a-zA-Z0-9_-]+$/.test(t)&&typeof i==`string`&&!/[;{}]/.test(i)&&n(i)&&e.push(`    ${t}: ${i};`);e.length>0&&t.push(`/* Mod: ${String(r.name||`theme`)} */\n:root {\n${e.join(`
`)}\n}`)}else r.kind===`custom_css`&&typeof r.cssText==`string`&&n(r.cssText)&&t.push(`/* Mod: ${String(r.name||`custom`)} */\n${r.cssText}`)}return t.length===0?``:`@layer mod {\n${t.join(`

`)}\n}`}function m(e){i(e);let t=p(e),n=document.getElementById(v);t?(n||(n=document.createElement(`style`),n.id=v,document.head.appendChild(n)),n.textContent=t):n&&n.remove()}function h(e,t){e.ports&&e.ports.saveToStorage&&e.ports.saveToStorage.subscribe(async n=>{try{await t(n),e.ports.onStorageResult&&e.ports.onStorageResult.send({ok:!0,error:null})}catch(t){console.error(`[IndexedDB] Save error:`,t),e.ports.onStorageResult&&e.ports.onStorageResult.send({ok:!1,error:t&&t.message?t.message:`保存に失敗しました`})}}),e.ports&&e.ports.applyStyleMods&&e.ports.applyStyleMods.subscribe(t=>{m(t),e.ports.onModTonesUpdated&&e.ports.onModTonesUpdated.send(l()),e.ports.onModStatusColorsUpdated&&e.ports.onModStatusColorsUpdated.send(d())}),e.ports&&e.ports.exitSafeMode&&e.ports.exitSafeMode.subscribe(()=>{let e=new URL(window.location.href);e.searchParams.delete(`safemode`),window.location.href=e.toString()}),e.ports&&e.ports.setFavicon&&e.ports.setFavicon.subscribe(e=>{let t=document.getElementById(`app-favicon`);t&&(t.href=e?_:g)}),e.ports&&e.ports.copyToClipboard&&e.ports.copyToClipboard.subscribe(async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)}}catch(e){console.error(`[Clipboard] Copy failed:`,e)}}),e.ports&&e.ports.onPageHide&&window.addEventListener(`pagehide`,()=>{e.ports.onPageHide.send(null)})}var g,_,v,y,b,x,S=e((()=>{g=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%233b5bdb'/%3E%3Crect x='6' y='7' width='8' height='8' rx='2' fill='%23ffffff'/%3E%3Crect x='18' y='7' width='8' height='8' rx='2' fill='%23dbe4ff'/%3E%3Crect x='6' y='17' width='8' height='8' rx='2' fill='%23dbe4ff'/%3E%3Crect x='18' y='17' width='8' height='8' rx='2' fill='%23ffffff'/%3E%3C/svg%3E`,_=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23e03131'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%23ffffff'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23e03131'/%3E%3C/svg%3E`,v=`switchboard-mod-styles`,y=`https://fonts.googleapis.com/`,b=/\[data-bg-tone\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\]\s]+))\]/g,x=/\[data-status-color\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\]\s]+))\]/g})),C,w=e((()=>{C=`/* @fontUrl: https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=IBM+Plex+Sans+JP:wght@400;500;700&display=swap */\r
\r
@layer mod {\r
  /* =========================================================\r
     1. Design Tokens (工業都市の情報端末 & サイバーパンク発光色)\r
     ========================================================= */\r
  :root {\r
    --font-sans: "IBM Plex Sans JP", "Hiragino Sans", "BIZ UDPGothic", "Yu Gothic UI", sans-serif;\r
    --font-display: "Chakra Petch", "IBM Plex Sans JP", "Hiragino Sans", "BIZ UDPGothic", sans-serif;\r
    /* 入力欄専用：Webフォントの漢字単位遅延ロード(display=swap)を防ぐためローカルフォントのみ */\r
    --font-input: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", "Yu Gothic UI", "Noto Sans CJK JP", "Meiryo", sans-serif;\r
    --font-handwriting: var(--font-sans);\r
    --font-mono: ui-monospace, "Cascadia Mono", Consolas, "IBM Plex Sans JP", monospace;\r
\r
    /* 基調：チャコールグレー、スチールブルー、ダークネイビー */\r
    --bg-app: #0c1017;\r
    --bg-surface: #121822;\r
    --bg-surface-subtle: #0d121a;\r
    --bg-surface-hover: #1a2433;\r
\r
    --border-color: #2b3e54;\r
    --border-color-subtle: #1c2838;\r
\r
    --text-main: #e2f1fa;\r
    --text-muted: #85a0b8;\r
    --text-faint: #51687d;\r
\r
    /* 発光色：シアン＆エメラルド / 警告：オレンジ＆レッド */\r
    --color-primary: #00e5ff;\r
    --color-primary-hover: #42eeff;\r
    --color-primary-light: rgba(0, 229, 255, 0.14);\r
\r
    --color-danger: #ff334b;\r
    --color-danger-hover: #ff5569;\r
    --color-danger-light: rgba(255, 51, 75, 0.18);\r
\r
    --emerald-glow: #00e699;\r
    --warn-orange: #ff8c1a;\r
\r
    /* 8色ステータス（暗黒HUD端末上で白系文字がくっきり読める発光カラー） */\r
    --status-yellow: #ffd000;\r
    --status-yellow-bg: #362c08;\r
    --status-blue: #00d9ff;\r
    --status-blue-bg: #0b3045;\r
    --status-green: #00e699;\r
    --status-green-bg: #083828;\r
    --status-orange: #ff8c1a;\r
    --status-orange-bg: #402107;\r
    --status-purple: #b56bff;\r
    --status-purple-bg: #2c1747;\r
    --status-gray: #8ea1b8;\r
    --status-gray-bg: #202833;\r
    --status-pink: #ff4da6;\r
    --status-pink-bg: #3f122b;\r
    --status-red: #ff334b;\r
    --status-red-bg: #421018;\r
\r
    /* 角張った工業的ジオメトリ（円形パーツ用の --radius-full は維持） */\r
    --radius-sm: 2px;\r
    --radius-md: 3px;\r
    --radius-lg: 4px;\r
    --radius-full: 9999px;\r
\r
    --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.45);\r
    --shadow-md: 0 6px 16px rgba(0, 0, 0, 0.55);\r
    --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.72);\r
    --shadow-card: 0 6px 20px rgba(0, 0, 0, 0.55);\r
\r
    --transition-fast: 110ms ease-out;\r
    --transition-base: 180ms ease-out;\r
\r
    /* 安全策としてのデフォルト背景変数 */\r
    --bg-main: #0f141c;\r
    --pattern-color: rgba(0, 229, 255, 0.18);\r
  }\r
\r
  /* =========================================================\r
     2. Background Tones & Patterns\r
        ※最初の "megacity" がフォールバック時のデフォルトになります\r
     ========================================================= */\r
\r
  /* ① デフォルト：巨大都市端末（チャコール×シアン＆エメラルドグロー） */\r
  [data-bg-tone="megacity"] {\r
    --bg-main: #0f141c;\r
    --pattern-color: rgba(0, 229, 255, 0.18);\r
    background-color: var(--bg-main);\r
  }\r
\r
  [data-bg-tone="megacity"][data-bg-pattern="plain"],\r
  [data-bg-tone="megacity"][data-bg-pattern="none"] {\r
    background-image:\r
      radial-gradient(ellipse 60% 45% at 85% 95%, rgba(0, 229, 255, 0.12) 0%, transparent 100%),\r
      linear-gradient(180deg, #0b0f16 0%, #111924 100%);\r
  }\r
\r
  /* ② スチール・セクター（スチールブルー×エメラルド発光） */\r
  [data-bg-tone="steel"] {\r
    --bg-main: #13202e;\r
    --pattern-color: rgba(0, 230, 153, 0.2);\r
    background-color: var(--bg-main);\r
  }\r
\r
  [data-bg-tone="steel"][data-bg-pattern="plain"],\r
  [data-bg-tone="steel"][data-bg-pattern="none"] {\r
    background-image:\r
      radial-gradient(ellipse 55% 45% at 20% 15%, rgba(0, 230, 153, 0.1) 0%, transparent 100%),\r
      linear-gradient(180deg, #162638 0%, #0f1a26 100%);\r
  }\r
\r
  /* ③ ダークネイビー・コア（深層ネットワーク空間） */\r
  [data-bg-tone="navy"] {\r
    --bg-main: #0a1026;\r
    --pattern-color: rgba(0, 229, 255, 0.22);\r
    background-color: var(--bg-main);\r
  }\r
\r
  [data-bg-tone="navy"][data-bg-pattern="plain"],\r
  [data-bg-tone="navy"][data-bg-pattern="none"] {\r
    background-image:\r
      radial-gradient(circle 320px at 80% 78%, rgba(0, 229, 255, 0.1) 0%, transparent 100%),\r
      linear-gradient(180deg, #070c1c 0%, #0d1633 100%);\r
  }\r
\r
  /* ④ ハザード・セクター（重工業警告オレンジ＆レッド） */\r
  [data-bg-tone="hazard"] {\r
    --bg-main: #171316;\r
    --pattern-color: rgba(255, 140, 26, 0.22);\r
    background-color: var(--bg-main);\r
  }\r
\r
  [data-bg-tone="hazard"][data-bg-pattern="plain"],\r
  [data-bg-tone="hazard"][data-bg-pattern="none"] {\r
    background-image:\r
      radial-gradient(ellipse 65% 45% at 50% 100%, rgba(255, 51, 75, 0.14) 0%, transparent 100%),\r
      linear-gradient(180deg, #120f12 0%, #1c1518 100%);\r
  }\r
\r
  /* =========================================================\r
     3. Typography\r
     ========================================================= */\r
  body {\r
    font-family: var(--font-sans);\r
    color: var(--text-main);\r
  }\r
\r
  /* display は上書きしない（省略記号 text-overflow: ellipsis を維持） */\r
  .workspace-header__title {\r
    font-family: var(--font-display);\r
    font-size: 1.38rem;\r
    font-weight: 700;\r
    letter-spacing: 0.07em;\r
    text-transform: uppercase;\r
    color: var(--text-main);\r
  }\r
\r
  /* 端末のLEDインジケータランプ */\r
  .workspace-header__title::before {\r
    content: "";\r
    display: inline-block;\r
    vertical-align: -2px;\r
    margin-right: 10px;\r
    width: 8px;\r
    height: 18px;\r
    background: linear-gradient(180deg, var(--color-primary) 0%, var(--emerald-glow) 100%);\r
    box-shadow: 0 0 10px var(--color-primary);\r
  }\r
\r
  .sidebar__brand-title {\r
    font-family: var(--font-display);\r
    font-size: 1.24rem;\r
    font-weight: 700;\r
    letter-spacing: 0.09em;\r
    text-transform: uppercase;\r
    color: var(--color-primary);\r
  }\r
\r
  .modal-header__title,\r
  .side-card-list__heading {\r
    font-family: var(--font-display);\r
    font-weight: 700;\r
    letter-spacing: 0.06em;\r
    text-transform: uppercase;\r
  }\r
\r
  .sidebar__section-header,\r
  .bg-picker-popover__label,\r
  .schedule-form__heading,\r
  .form-field__label {\r
    font-family: var(--font-sans);\r
    font-size: 0.78rem;\r
    font-weight: 700;\r
    letter-spacing: 0.06em;\r
    text-transform: uppercase;\r
    color: var(--text-muted);\r
  }\r
\r
  /* =========================================================\r
     4. Mechanical Control Buttons & Compact Icon Isolation\r
        ※ box-shadow / transform の transition は使用しない\r
     ========================================================= */\r
  .btn:not(.btn--ghost):not(.btn--primary):not(.btn--danger):not(.mobile-fab):not(.header-menu-summary):not(.project-menu-summary):not(.card-box__menu-summary):not(.sidebar__dropdown-summary):not(.card-box__icon-btn):not(.workspace-header__menu-btn):not(.board-control-btn):not(.header-dropdown-item):not(.project-dropdown-item):not(.sidebar__dropdown-item):not(.card-box__dropdown-item):not(.card-box__link-jump):not(.card-box__link-unlink),\r
  .bg-picker-option,\r
  .sidebar__schedule-btn,\r
  .weekday-btn {\r
    font-family: var(--font-sans);\r
    font-weight: 700;\r
    letter-spacing: 0.03em;\r
    border-radius: var(--radius-sm);\r
    background: linear-gradient(180deg, #1d2736 0%, #131a24 100%);\r
    color: var(--text-main);\r
    border: 1px solid #344a63;\r
    box-shadow:\r
      inset 0 1px 0 rgba(255, 255, 255, 0.1),\r
      inset 3px 0 0 rgba(0, 229, 255, 0.45),\r
      0 2px 4px rgba(0, 0, 0, 0.45);\r
    transition: border-color var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);\r
  }\r
\r
  .btn:not(.btn--ghost):not(.btn--primary):not(.btn--danger):not(.mobile-fab):not(.header-menu-summary):not(.project-menu-summary):not(.card-box__menu-summary):not(.sidebar__dropdown-summary):not(.card-box__icon-btn):not(.workspace-header__menu-btn):not(.board-control-btn):not(.header-dropdown-item):not(.project-dropdown-item):not(.sidebar__dropdown-item):not(.card-box__dropdown-item):not(.card-box__link-jump):not(.card-box__link-unlink):hover:not(:disabled),\r
  .bg-picker-option:hover:not(:disabled),\r
  .sidebar__schedule-btn:hover:not(:disabled),\r
  .weekday-btn:hover:not(:disabled) {\r
    border-color: var(--color-primary);\r
    box-shadow:\r
      inset 0 1px 0 rgba(255, 255, 255, 0.16),\r
      inset 3px 0 0 var(--color-primary),\r
      0 0 12px rgba(0, 229, 255, 0.25);\r
  }\r
\r
  /* プライマリスイッチ：高輝度シアン＆エメラルド */\r
  .btn--primary {\r
    font-family: var(--font-sans);\r
    font-weight: 700;\r
    letter-spacing: 0.03em;\r
    border-radius: var(--radius-sm);\r
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--emerald-glow) 100%);\r
    color: #06141a;\r
    border: 1px solid #80f6ff;\r
    box-shadow:\r
      inset 0 1px 0 rgba(255, 255, 255, 0.6),\r
      0 0 14px rgba(0, 229, 255, 0.35);\r
    transition: border-color var(--transition-fast), background-color var(--transition-fast);\r
  }\r
\r
  .btn--primary:hover:not(:disabled) {\r
    background: linear-gradient(135deg, #4df0ff 0%, #33f5b2 100%);\r
    border-color: #ffffff;\r
    box-shadow:\r
      inset 0 1px 0 rgba(255, 255, 255, 0.75),\r
      0 0 18px rgba(0, 230, 153, 0.5);\r
  }\r
\r
  /* 危険・警告スイッチ（ドロップダウン外の独立ボタン用） */\r
  .btn--danger {\r
    font-family: var(--font-sans);\r
    font-weight: 700;\r
    letter-spacing: 0.03em;\r
    border-radius: var(--radius-sm);\r
    background-color: #3b1018;\r
    background-image: linear-gradient(135deg, rgba(255, 51, 75, 0.28) 0%, rgba(255, 140, 26, 0.18) 100%);\r
    color: #ffd9de;\r
    border: 1px solid var(--color-danger);\r
    box-shadow:\r
      inset 3px 0 0 var(--warn-orange),\r
      0 0 10px rgba(255, 51, 75, 0.28);\r
    transition: border-color var(--transition-fast), background-color var(--transition-fast);\r
  }\r
\r
  .btn--danger:hover:not(:disabled) {\r
    background-color: #541420;\r
    border-color: #ff6b7d;\r
    box-shadow:\r
      inset 3px 0 0 var(--warn-orange),\r
      0 0 14px rgba(255, 51, 75, 0.45);\r
  }\r
\r
  /* コンパクトなアイコン・省略記号・ゴーストボタン（軽量・枠線や影を盛らない） */\r
  .header-menu-summary,\r
  .project-menu-summary,\r
  .card-box__menu-summary,\r
  .sidebar__dropdown-summary,\r
  .card-box__icon-btn,\r
  .workspace-header__menu-btn,\r
  .btn--ghost {\r
    background-color: transparent;\r
    background-image: none;\r
    color: var(--text-muted);\r
    border: 1px solid transparent;\r
    border-radius: var(--radius-sm);\r
    box-shadow: none;\r
    transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);\r
  }\r
\r
  .header-menu-summary:hover:not(:disabled),\r
  .project-menu-summary:hover:not(:disabled),\r
  .card-box__menu-summary:hover:not(:disabled),\r
  .sidebar__dropdown-summary:hover:not(:disabled),\r
  .card-box__icon-btn:hover:not(:disabled),\r
  .workspace-header__menu-btn:hover:not(:disabled),\r
  .btn--ghost:hover:not(:disabled) {\r
    background-color: var(--bg-surface-hover);\r
    color: var(--color-primary);\r
    border-color: var(--border-color);\r
    box-shadow: none;\r
  }\r
\r
  /* モバイルFABは円形ジオメトリを厳密に保持 */\r
  .mobile-fab {\r
    border-radius: 50%;\r
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--emerald-glow) 100%);\r
    color: #06141a;\r
    border: 1px solid #80f6ff;\r
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.65), 0 0 16px rgba(0, 229, 255, 0.45);\r
  }\r
\r
  /* =========================================================\r
     5. Header, Inputs & Sidebar\r
     ========================================================= */\r
  .workspace-header {\r
    background-color: #0f151e;\r
    border-bottom: 2px solid var(--color-primary);\r
    box-shadow: 0 2px 12px rgba(0, 229, 255, 0.14);\r
  }\r
\r
  /* 入力欄：ローカル標準ゴシックのみ＋ぼかしinsetシャドウなし＋カード本文と密度を揃える */\r
  .workspace-header__search,\r
  .form-field__input,\r
  .form-field__select,\r
  .form-field__textarea,\r
  .sidebar__add-project-input {\r
    font-family: var(--font-input);\r
    font-weight: 400;\r
    line-height: 1.6;\r
    letter-spacing: 0.01em;\r
    background-color: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-sm);\r
    box-shadow: none;\r
  }\r
\r
  .workspace-header__search {\r
    font-size: 0.88rem;\r
  }\r
\r
  .workspace-header__search:focus,\r
  .form-field__input:focus,\r
  .form-field__select:focus,\r
  .form-field__textarea:focus,\r
  .sidebar__add-project-input:focus {\r
    outline: 2px solid rgba(0, 229, 255, 0.35);\r
    outline-offset: 0;\r
    border-color: var(--color-primary);\r
    box-shadow: none;\r
  }\r
\r
  .sidebar {\r
    background-color: #0e141d;\r
    border-right: 2px solid var(--border-color);\r
  }\r
\r
  .sidebar__brand {\r
    border-bottom: 2px solid var(--warn-orange);\r
  }\r
\r
  .sidebar__item-button {\r
    font-family: var(--font-sans);\r
    font-weight: 500;\r
    border-radius: var(--radius-sm);\r
    border: 1px solid transparent;\r
  }\r
\r
  .sidebar__item-button:hover {\r
    background-color: var(--bg-surface-hover);\r
    border-color: var(--border-color);\r
  }\r
\r
  .sidebar__item[data-active="true"] .sidebar__item-button {\r
    background: linear-gradient(90deg, rgba(0, 230, 153, 0.18) 0%, rgba(0, 229, 255, 0.08) 100%);\r
    color: #ffffff;\r
    font-weight: 700;\r
    border: 1px solid var(--emerald-glow);\r
    box-shadow: inset 4px 0 0 var(--emerald-glow), 0 0 12px rgba(0, 230, 153, 0.18);\r
  }\r
\r
  /* デジタル計器風の予定バッジ（英数字主体） */\r
  .sidebar__schedule-badge {\r
    font-family: var(--font-mono);\r
    font-weight: 700;\r
    background-color: rgba(255, 140, 26, 0.16);\r
    color: var(--warn-orange);\r
    border: 1px solid var(--warn-orange);\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .sidebar__add-project-btn {\r
    font-family: var(--font-sans);\r
    font-size: 0.84rem;\r
    font-weight: 700;\r
    border: 1px dashed var(--color-primary);\r
    border-radius: var(--radius-sm);\r
    background-color: rgba(0, 229, 255, 0.05);\r
    color: var(--color-primary);\r
  }\r
\r
  .sidebar__add-project-btn:hover {\r
    background-color: rgba(0, 229, 255, 0.12);\r
  }\r
\r
  .sidebar__footer {\r
    border-top: 1px solid var(--border-color);\r
    background-color: #0a0f16;\r
  }\r
\r
  /* =========================================================\r
     6. Cards (情報端末パネル & 固体表面・単一外側シャドウ)\r
     ※ overflow: hidden / clip-path / position は上書きしない\r
     ※ box-shadow の transition は付けない\r
     ========================================================= */\r
  .card-box {\r
    background-color: var(--bg-surface);\r
    border: 1px solid var(--border-color);\r
    border-top: 3px solid var(--status-current);\r
    border-radius: var(--radius-md);\r
    box-shadow: var(--shadow-card);\r
    transition: border-color var(--transition-fast);\r
  }\r
\r
  .card-box:hover {\r
    border-color: var(--status-current);\r
    box-shadow: 0 0 16px rgba(0, 229, 255, 0.22);\r
  }\r
\r
  .card-box[data-selected="true"] {\r
    outline: 2px solid var(--color-primary);\r
    outline-offset: 2px;\r
    box-shadow: 0 0 22px rgba(0, 229, 255, 0.42);\r
  }\r
\r
  .card-box[data-link-highlight="true"],\r
  .mobile-card-wrapper[data-drop-zone="link"] .card-box,\r
  .mobile-card-wrapper[data-link-highlight="true"] .card-box {\r
    outline: 2px solid var(--warn-orange);\r
    outline-offset: 2px;\r
    box-shadow: 0 0 20px rgba(255, 140, 26, 0.48);\r
  }\r
\r
  .card-box__header {\r
    background-color: var(--status-current-bg);\r
    border-bottom: 1px solid var(--status-current);\r
    border-radius: 2px 2px 0 0;\r
  }\r
\r
  .card-box--collapsed .card-box__header {\r
    border-bottom: none;\r
    border-radius: 2px;\r
  }\r
\r
  .card-box__title {\r
    font-family: var(--font-display);\r
    font-weight: 700;\r
    font-size: 1.02rem;\r
    letter-spacing: 0.04em;\r
    color: #ffffff;\r
  }\r
\r
  .card-box__status-select {\r
    font-family: var(--font-sans);\r
    font-size: 0.75rem;\r
    font-weight: 700;\r
    background-color: #0a0f16;\r
    color: var(--text-main);\r
    border: 1px solid var(--status-current);\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .card-box__body {\r
    font-family: var(--font-sans);\r
    color: var(--text-main);\r
    line-height: 1.6;\r
    letter-spacing: 0.01em;\r
  }\r
\r
  .card-box__footer {\r
    border-top: 1px dashed var(--border-color);\r
    background-color: var(--bg-surface-subtle);\r
    border-radius: 0 0 2px 2px;\r
  }\r
\r
  /* タイトルのみ表示カード：コンパクト計器プレート */\r
  .card-box--title-only {\r
    background-color: var(--status-current-bg);\r
    color: #ffffff;\r
    border: 1px solid var(--status-current);\r
    border-left: 5px solid var(--status-current);\r
    border-radius: var(--radius-sm);\r
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);\r
  }\r
\r
  .card-box--title-only[data-selected="true"] {\r
    outline: 2px solid var(--color-primary);\r
    outline-offset: 2px;\r
  }\r
\r
  /* リンクチップ（外側のみ枠線・影、内部ボタンはフラット） */\r
  .card-box__link-chip {\r
    background-color: #0b111a;\r
    border: 1px solid var(--color-primary);\r
    border-radius: var(--radius-sm);\r
    box-shadow: 0 0 6px rgba(0, 229, 255, 0.15);\r
  }\r
\r
  .card-box__link-jump,\r
  .card-box__link-unlink {\r
    background: transparent;\r
    border: none;\r
    box-shadow: none;\r
  }\r
\r
  .card-box__link-jump {\r
    font-family: var(--font-sans);\r
    font-size: 0.78rem;\r
    color: var(--color-primary);\r
  }\r
\r
  /* 折りたたみホバーツールチップ（位置・display・::beforeは不変） */\r
  .card-box__tooltip {\r
    background-color: #0e1520;\r
    color: var(--text-main);\r
    border: 1px solid var(--color-primary);\r
    border-radius: var(--radius-sm);\r
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.75);\r
  }\r
\r
  /* =========================================================\r
     7. Side Card List & Board Controls (単一ボーダー原則)\r
     ========================================================= */\r
  .side-card-list {\r
    background-color: #0e141d;\r
    border-left: 2px solid var(--border-color);\r
  }\r
\r
  .side-card-list__header {\r
    border-bottom: 1px solid var(--border-color);\r
    background-color: var(--bg-surface-subtle);\r
  }\r
\r
  .side-card-list__btn {\r
    font-family: var(--font-sans);\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color-subtle);\r
    border-left: 4px solid var(--status-current);\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .side-card-list__btn:hover {\r
    background-color: var(--status-current-bg);\r
    border-color: var(--status-current);\r
  }\r
\r
  .side-card-list__btn[data-selected="true"] {\r
    background-color: rgba(0, 229, 255, 0.12);\r
    border-color: var(--color-primary);\r
    border-left-width: 5px;\r
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);\r
  }\r
\r
  /* 外枠にボーダーを持たせ、内部ズームボタンはフラットに */\r
  .board-controls {\r
    background-color: #0e141d;\r
    border: 1px solid var(--color-primary);\r
    border-radius: var(--radius-md);\r
    padding: 4px;\r
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.55);\r
  }\r
\r
  .board-control-btn {\r
    font-family: var(--font-mono);\r
    font-weight: 700;\r
    background: transparent;\r
    color: var(--text-main);\r
    border: none;\r
    border-radius: var(--radius-sm);\r
    box-shadow: none;\r
  }\r
\r
  .board-control-btn:hover:not(:disabled) {\r
    background-color: var(--bg-surface-hover);\r
    color: var(--color-primary);\r
  }\r
\r
  .board-empty-hint__text {\r
    font-family: var(--font-sans);\r
    background-color: rgba(14, 20, 29, 0.92);\r
    color: var(--color-primary);\r
    border: 1px dashed var(--color-primary);\r
    border-radius: var(--radius-sm);\r
    padding: 12px 20px;\r
  }\r
\r
  /* =========================================================\r
     8. Dropdown Menus (位置・display・方向は維持、項目はフラット左揃え)\r
     ========================================================= */\r
  .header-dropdown-menu,\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu,\r
  .card-box__dropdown-menu {\r
    background-color: #111822;\r
    border: 1px solid var(--color-primary);\r
    border-radius: var(--radius-sm);\r
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.78);\r
    padding: 4px;\r
  }\r
\r
  .header-dropdown-item,\r
  .project-dropdown-item,\r
  .sidebar__dropdown-item,\r
  .card-box__dropdown-item,\r
  .header-dropdown-menu .btn--danger,\r
  .project-dropdown-menu .btn--danger,\r
  .sidebar__dropdown-menu .btn--danger,\r
  .card-box__dropdown-menu .btn--danger {\r
    width: 100%;\r
    text-align: left;\r
    justify-content: flex-start;\r
    font-family: var(--font-sans);\r
    font-size: 0.86rem;\r
    font-weight: 500;\r
    background: transparent;\r
    background-image: none;\r
    color: var(--text-main);\r
    border: none;\r
    border-radius: var(--radius-sm);\r
    box-shadow: none;\r
  }\r
\r
  .header-dropdown-menu .btn--danger,\r
  .project-dropdown-menu .btn--danger,\r
  .sidebar__dropdown-menu .btn--danger,\r
  .card-box__dropdown-menu .btn--danger {\r
    color: var(--color-danger);\r
  }\r
\r
  .header-dropdown-item:hover:not(:disabled),\r
  .project-dropdown-item:hover:not(:disabled),\r
  .sidebar__dropdown-item:hover:not(:disabled),\r
  .card-box__dropdown-item:hover:not(:disabled) {\r
    background-color: rgba(0, 229, 255, 0.14);\r
    color: var(--color-primary);\r
  }\r
\r
  .header-dropdown-menu .btn--danger:hover:not(:disabled),\r
  .project-dropdown-menu .btn--danger:hover:not(:disabled),\r
  .sidebar__dropdown-menu .btn--danger:hover:not(:disabled),\r
  .card-box__dropdown-menu .btn--danger:hover:not(:disabled) {\r
    background-color: var(--color-danger-light);\r
    color: #ffd9de;\r
    box-shadow: none;\r
  }\r
\r
  /* =========================================================\r
     9. Modals & Background Picker (システム端末ウィンドウ)\r
     ========================================================= */\r
  .modal-panel {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border: 1px solid var(--color-primary);\r
    border-top: 3px solid var(--color-primary);\r
    border-radius: var(--radius-md);\r
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.75);\r
  }\r
\r
  .modal-header:not([data-bg-tone]) {\r
    background-color: var(--bg-surface-subtle);\r
    border-bottom: 1px solid var(--border-color);\r
  }\r
\r
  .modal-header[data-bg-tone] {\r
    border-bottom: 1px solid var(--color-primary);\r
  }\r
\r
  .modal-header[data-bg-tone] .modal-header__title {\r
    background-color: rgba(12, 16, 23, 0.88);\r
    color: var(--color-primary);\r
    border: 1px solid var(--color-primary);\r
    padding: 3px 12px;\r
  }\r
\r
  .modal-footer {\r
    background-color: var(--bg-surface-subtle);\r
    border-top: 1px solid var(--border-color);\r
  }\r
\r
  .status-color-swatch {\r
    background-color: var(--status-current);\r
    border: 1px solid #ffffff;\r
    border-radius: var(--radius-sm);\r
    box-shadow: 0 0 8px var(--status-current);\r
  }\r
\r
  .archive-item,\r
  .schedule-item,\r
  .export-card-item,\r
  .mod-item {\r
    background-color: var(--bg-surface-subtle);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .weekday-btn--active {\r
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--emerald-glow) 100%);\r
    color: #06141a;\r
    border-color: #80f6ff;\r
  }\r
\r
  /* Background Picker コントロールの明示的スタイル */\r
  .bg-picker-popover__label {\r
    display: inline-block;\r
    background-color: rgba(12, 16, 23, 0.9);\r
    color: var(--color-primary);\r
    border: 1px solid var(--border-color);\r
    padding: 2px 10px;\r
    margin-bottom: 8px;\r
  }\r
\r
  .bg-picker-option {\r
    background: var(--bg-surface);\r
    color: var(--text-main);\r
    border-color: var(--border-color);\r
  }\r
\r
  .bg-picker-option--active {\r
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--emerald-glow) 100%);\r
    color: #06141a;\r
    border-color: #ffffff;\r
    box-shadow: 0 0 14px rgba(0, 229, 255, 0.45);\r
  }\r
\r
  /* =========================================================\r
     10. Toast Notification (HUDシステムログ・警告アラート)\r
     ========================================================= */\r
  .toast {\r
    background-color: #0e1621;\r
    color: var(--emerald-glow);\r
    border: 1px solid var(--emerald-glow);\r
    border-radius: var(--radius-sm);\r
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);\r
    font-family: var(--font-sans);\r
  }\r
\r
  .toast--error {\r
    background-color: #290b12;\r
    color: #ffd4da;\r
    border-color: var(--color-danger);\r
    border-left: 4px solid var(--warn-orange);\r
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.75);\r
  }\r
}`})),T,E=e((()=>{T=`/* @fontUrl: https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap */\r
\r
@layer mod {\r
\r
  :root {\r
    /* Typography */\r
    --font-sans: "Noto Sans JP", "Hiragino Sans", "BIZ UDPGothic", "Yu Gothic UI", sans-serif;\r
    --font-handwriting: "Shippori Mincho", "Yu Mincho", Georgia, serif;\r
    --font-mono: "JetBrains Mono", Consolas, monospace;\r
\r
    /* Core */\r
    --bg-app: #120507;\r
    --bg-main: #1d0a0e;\r
    --pattern-color: #6b1d2a;\r
\r
    --bg-surface: #2a0f15;\r
    --bg-surface-subtle: #1d0a0e;\r
    --bg-surface-hover: #3b171f;\r
\r
    --border-color: #5c222b;\r
    --border-color-subtle: #3b171f;\r
\r
    --text-main: #f4ead5;\r
    --text-muted: #c5b79f;\r
    --text-faint: #8d7f6e;\r
\r
    --color-primary: #d4af37;\r
    --color-primary-hover: #e6c865;\r
    --color-primary-light: #3b2a08;\r
\r
    --color-danger: #b64b52;\r
    --color-danger-hover: #c85a61;\r
    --color-danger-light: #3a1418;\r
\r
    /* Status Palette (Base 8 colors) */\r
    --status-yellow: #d9b54a;\r
    --status-yellow-bg: #4b3912;\r
\r
    --status-blue: #6f9ccf;\r
    --status-blue-bg: #1e2e45;\r
\r
    --status-green: #6ea76e;\r
    --status-green-bg: #233924;\r
\r
    --status-orange: #d78642;\r
    --status-orange-bg: #4a2712;\r
\r
    --status-purple: #9d7ad4;\r
    --status-purple-bg: #342047;\r
\r
    --status-gray: #a6a09b;\r
    --status-gray-bg: #37322f;\r
\r
    --status-pink: #d889a8;\r
    --status-pink-bg: #4a2433;\r
\r
    --status-red: #d46363;\r
    --status-red-bg: #4a1e1e;\r
\r
    /* Radius */\r
    --radius-sm: 3px;\r
    --radius-md: 6px;\r
    --radius-lg: 10px;\r
    --radius-full: 9999px;\r
\r
    /* Shadow (Single outer shadow) */\r
    --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.35);\r
    --shadow-md: 0 4px 14px rgba(0, 0, 0, 0.45);\r
    --shadow-lg: 0 8px 28px rgba(0, 0, 0, 0.55);\r
    --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.35);\r
\r
    --transition-fast: 120ms ease;\r
    --transition-base: 220ms ease;\r
  }\r
\r
  /* Keep input controls on local system Japanese fonts (avoids Web Font Kanji swap flicker) */\r
  .workspace-header__search,\r
  .form-field__input,\r
  .form-field__select,\r
  .form-field__textarea,\r
  .sidebar__add-project-input {\r
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", "Yu Gothic UI", "Noto Sans CJK JP", "Meiryo", sans-serif;\r
    box-shadow: none;\r
  }\r
\r
  /* ==================================================\r
     Background Tones (First tone acts as default)\r
     ================================================== */\r
\r
  [data-bg-tone="grimorium"] {\r
    --bg-main: #1d0a0e;\r
    --pattern-color: #6b1d2a;\r
\r
    --bg-surface: #2a0f15;\r
    --bg-surface-subtle: #1a090c;\r
    --bg-surface-hover: #3b171f;\r
\r
    --border-color: #5c222b;\r
    --border-color-subtle: #3b171f;\r
\r
    --text-main: #f4ead5;\r
    --text-muted: #c5b79f;\r
    --text-faint: #8d7f6e;\r
  }\r
\r
  [data-bg-tone="forbidden-library"] {\r
    --bg-main: #120507;\r
    --pattern-color: #d4af37;\r
\r
    --bg-surface: #241014;\r
    --bg-surface-subtle: #18090b;\r
    --bg-surface-hover: #35161b;\r
\r
    --border-color: #86631f;\r
    --border-color-subtle: #4e3912;\r
\r
    --text-main: #f7ecd8;\r
    --text-muted: #d2c2ac;\r
    --text-faint: #988672;\r
  }\r
\r
  [data-bg-tone="ancient-parchment"] {\r
    --bg-main: #efe2c7;\r
    --pattern-color: #c3aa78;\r
\r
    --bg-surface: #f6eedf;\r
    --bg-surface-subtle: #ece1ce;\r
    --bg-surface-hover: #e3d3b7;\r
\r
    --border-color: #af9160;\r
    --border-color-subtle: #d4c09e;\r
\r
    --text-main: #34261d;\r
    --text-muted: #6c5848;\r
    --text-faint: #968371;\r
\r
    --color-primary: #8a6418;\r
    --color-primary-hover: #704f0e;\r
    --color-primary-light: #ebdcc0;\r
\r
    --color-danger: #a6343c;\r
    --color-danger-hover: #8b262d;\r
    --color-danger-light: #f6e0e1;\r
\r
    --status-yellow: #9c7416;\r
    --status-yellow-bg: #f3e4bd;\r
\r
    --status-blue: #355f8c;\r
    --status-blue-bg: #dde7f2;\r
\r
    --status-green: #386b3a;\r
    --status-green-bg: #ddebd9;\r
\r
    --status-orange: #a8561c;\r
    --status-orange-bg: #f4e0cf;\r
\r
    --status-purple: #644594;\r
    --status-purple-bg: #e8dff2;\r
\r
    --status-gray: #635d58;\r
    --status-gray-bg: #e7e1d8;\r
\r
    --status-pink: #9c4767;\r
    --status-pink-bg: #f3dde6;\r
\r
    --status-red: #9e3838;\r
    --status-red-bg: #f4dada;\r
\r
    --shadow-sm: 0 2px 6px rgba(52, 38, 29, 0.14);\r
    --shadow-md: 0 4px 14px rgba(52, 38, 29, 0.18);\r
    --shadow-lg: 0 8px 28px rgba(52, 38, 29, 0.22);\r
    --shadow-card: 0 3px 10px rgba(52, 38, 29, 0.16);\r
  }\r
\r
  /* ==================================================\r
     General Layout\r
     ================================================== */\r
\r
  .workspace-header,\r
  .sidebar,\r
  .side-card-list,\r
  .modal-panel {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border-color: var(--border-color);\r
    box-shadow: var(--shadow-md);\r
  }\r
\r
  .workspace-header {\r
    border-bottom: 2px solid var(--border-color);\r
  }\r
\r
  .workspace-header__title,\r
  .modal-header__title,\r
  .sidebar__brand-title,\r
  .card-box__title {\r
    font-family: "Shippori Mincho", "Yu Mincho", serif;\r
    letter-spacing: 0.02em;\r
  }\r
\r
  .workspace-header__title::before,\r
  .modal-header__title::before {\r
    content: "✦";\r
    color: var(--color-primary);\r
    margin-right: 0.4rem;\r
  }\r
\r
  .sidebar__brand-title {\r
    color: var(--color-primary);\r
    letter-spacing: 0.08em;\r
  }\r
\r
  .side-card-list__header {\r
    border-bottom: 1px solid var(--border-color-subtle);\r
  }\r
\r
  /* ==================================================\r
     Grimorium Card System (Solid surfaces, no overflow:hidden)\r
     ================================================== */\r
\r
  .card-box,\r
  .card-box--title-only {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border-width: 2px;\r
    border-style: solid;\r
    border-color: color-mix(in srgb, var(--status-current) 70%, var(--color-primary));\r
    border-radius: var(--radius-md);\r
    box-shadow: var(--shadow-card);\r
    transition:\r
      border-color var(--transition-base),\r
      box-shadow var(--transition-base);\r
  }\r
\r
  .card-box[data-status-color] {\r
    background-color: color-mix(in srgb, var(--status-current-bg) 82%, var(--bg-surface));\r
  }\r
\r
  .card-box--title-only[data-status-color] {\r
    background-color: var(--status-current-bg);\r
  }\r
\r
  .card-box__header {\r
    background-color: var(--status-current-bg);\r
    border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 28%, transparent);\r
    color: var(--text-main);\r
    border-radius: calc(var(--radius-md) - 2px) calc(var(--radius-md) - 2px) 0 0;\r
  }\r
\r
  .card-box--collapsed .card-box__header {\r
    border-radius: calc(var(--radius-md) - 2px);\r
    border-bottom-color: transparent;\r
  }\r
\r
  .card-box__body {\r
    background: transparent;\r
    color: var(--text-main);\r
  }\r
\r
  .card-box__footer {\r
    border-top: 1px solid color-mix(in srgb, var(--color-primary) 18%, transparent);\r
  }\r
\r
  /* Hover */\r
  .card-box:hover,\r
  .card-box--title-only:hover {\r
    border-color: var(--color-primary);\r
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);\r
  }\r
\r
  /* Selected */\r
  .card-box[data-selected="true"],\r
  .card-box--title-only[data-selected="true"] {\r
    border-color: var(--color-primary);\r
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 35%, transparent), var(--shadow-md);\r
  }\r
\r
  /* Search Match */\r
  .card-box[data-search-match="true"],\r
  .card-box--title-only[data-search-match="true"] {\r
    border-color: var(--color-primary-hover);\r
    box-shadow: 0 0 18px color-mix(in srgb, var(--color-primary-hover) 35%, transparent);\r
  }\r
\r
  /* Link Highlight */\r
  .card-box[data-link-highlight="true"],\r
  .card-box--title-only[data-link-highlight="true"],\r
  .mobile-card-wrapper[data-drop-zone="link"] .card-box,\r
  .mobile-card-wrapper[data-link-highlight="true"] .card-box {\r
    border-color: var(--color-primary-hover);\r
    box-shadow: 0 0 0 2px var(--color-primary), var(--shadow-lg);\r
  }\r
\r
  /* Collapsed Card Hover Tooltip (preserve position, top: 100%, ::before bridge) */\r
  .card-box__tooltip {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-md);\r
    box-shadow: var(--shadow-lg);\r
  }\r
\r
  /* Link Chips (Single-border principle) */\r
  .card-box__link-chip {\r
    background-color: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-sm);\r
    box-shadow: none;\r
  }\r
\r
  .card-box__link-jump,\r
  .card-box__link-unlink {\r
    background-color: transparent;\r
    border: none;\r
    box-shadow: none;\r
    color: var(--text-main);\r
  }\r
\r
  .card-box__link-jump:hover {\r
    color: var(--color-primary);\r
  }\r
\r
  .card-box__link-unlink:hover {\r
    color: var(--color-danger);\r
  }\r
\r
  /* ==================================================\r
     Status Selector & Status Manager UI\r
     ================================================== */\r
\r
  .card-box__status-select {\r
    background-color: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
    border: 1px solid color-mix(in srgb, var(--color-primary) 30%, var(--border-color));\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .card-box__status-select:hover,\r
  .card-box__status-select:focus {\r
    border-color: var(--color-primary);\r
    outline: none;\r
  }\r
\r
  .card-box__status-option {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
  }\r
\r
  .status-color-select-btn {\r
    background-color: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .status-color-select-btn:hover,\r
  .status-color-select-btn:focus {\r
    border-color: var(--color-primary);\r
    outline: none;\r
  }\r
\r
  /* ==================================================\r
     Buttons & Compact Icon Controls\r
     ================================================== */\r
\r
  .btn--primary,\r
  .mobile-fab {\r
    background-color: #4a0e17;\r
    color: #f4ead5;\r
    border: 1px solid #d4af37;\r
  }\r
\r
  .btn--primary:hover,\r
  .mobile-fab:hover {\r
    background-color: #d4af37;\r
    color: #120507;\r
  }\r
\r
  .btn--danger {\r
    background-color: var(--color-danger-light);\r
    color: var(--color-danger);\r
    border: 1px solid var(--color-danger);\r
  }\r
\r
  .btn--danger:hover {\r
    background-color: var(--color-danger);\r
    color: #f4ead5;\r
  }\r
\r
  .modal-footer__cancel {\r
    background-color: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .modal-footer__cancel:hover {\r
    background-color: var(--bg-surface-hover);\r
    border-color: var(--color-primary);\r
  }\r
\r
  /* Compact icon / summary buttons (keep lightweight, no heavy borders/shadows/transforms) */\r
  .header-menu-summary,\r
  .project-menu-summary,\r
  .card-box__menu-summary,\r
  .sidebar__dropdown-summary,\r
  .card-box__icon-btn,\r
  .workspace-header__menu-btn,\r
  .undo-btn,\r
  .btn--ghost {\r
    background-color: transparent;\r
    background-image: none;\r
    color: var(--text-muted);\r
    border: none;\r
    box-shadow: none;\r
  }\r
\r
  .header-menu-summary:hover,\r
  .project-menu-summary:hover,\r
  .card-box__menu-summary:hover,\r
  .sidebar__dropdown-summary:hover,\r
  .card-box__icon-btn:hover,\r
  .workspace-header__menu-btn:hover,\r
  .undo-btn:hover,\r
  .btn--ghost:hover {\r
    background-color: var(--bg-surface-hover);\r
    color: var(--text-main);\r
  }\r
\r
  /* Board Zoom Controls (Single-border principle) */\r
  .board-controls {\r
    background-color: var(--bg-surface);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-md);\r
    box-shadow: var(--shadow-sm);\r
  }\r
\r
  .board-control-btn {\r
    background-color: transparent;\r
    color: var(--text-main);\r
    border: none;\r
    box-shadow: none;\r
  }\r
\r
  .board-control-btn:hover {\r
    background-color: var(--bg-surface-hover);\r
    color: var(--color-primary);\r
  }\r
\r
  /* Sidebar Schedule Button */\r
  .sidebar__schedule-btn {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    line-height: 1;\r
    min-height: 38px;\r
    padding: 0.55rem 0.8rem;\r
    background-color: var(--bg-surface-subtle);\r
    border: 1px solid var(--border-color);\r
    color: var(--text-main);\r
    font-family: var(--font-sans);\r
  }\r
\r
  .sidebar__schedule-btn:hover {\r
    border-color: var(--color-primary);\r
    color: var(--color-primary);\r
  }\r
\r
  /* ==================================================\r
     Forms\r
     ================================================== */\r
\r
  .workspace-header__search,\r
  .form-field__input,\r
  .form-field__textarea,\r
  .form-field__select,\r
  .sidebar__add-project-input {\r
    background-color: var(--bg-surface-subtle);\r
    border: 1px solid var(--border-color);\r
    color: var(--text-main);\r
    border-radius: var(--radius-sm);\r
  }\r
\r
  .workspace-header__search::placeholder,\r
  .form-field__input::placeholder,\r
  .form-field__textarea::placeholder,\r
  .sidebar__add-project-input::placeholder {\r
    color: var(--text-faint);\r
  }\r
\r
  .workspace-header__search:focus,\r
  .form-field__input:focus,\r
  .form-field__textarea:focus,\r
  .form-field__select:focus,\r
  .sidebar__add-project-input:focus {\r
    outline: none;\r
    border-color: var(--color-primary);\r
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 22%, transparent);\r
  }\r
\r
  /* ==================================================\r
     Dropdown Menus (Preserve display/position/direction/overflow)\r
     ================================================== */\r
\r
  .header-dropdown-menu,\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu,\r
  .card-box__dropdown-menu,\r
  .status-color-dropdown-menu {\r
    background-color: var(--bg-surface);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-md);\r
    box-shadow: var(--shadow-lg);\r
  }\r
\r
  .header-dropdown-item,\r
  .project-dropdown-item,\r
  .project-dropdown-menu .btn--danger,\r
  .sidebar__dropdown-item,\r
  .card-box__dropdown-item,\r
  .bg-picker-btn,\r
  .status-color-dropdown-item {\r
    width: 100%;\r
    white-space: nowrap;\r
    background-color: transparent;\r
    background-image: none;\r
    color: var(--text-main);\r
    border: none;\r
    box-shadow: none;\r
  }\r
\r
  .header-dropdown-item:hover,\r
  .project-dropdown-item:hover,\r
  .sidebar__dropdown-item:hover,\r
  .card-box__dropdown-item:hover,\r
  .bg-picker-btn:hover,\r
  .status-color-dropdown-item:hover {\r
    background-color: var(--bg-surface-hover);\r
    color: var(--color-primary);\r
  }\r
\r
  .project-dropdown-menu .btn--danger {\r
    color: var(--color-danger);\r
  }\r
\r
  .project-dropdown-menu .btn--danger:hover {\r
    background-color: var(--color-danger-light);\r
    color: var(--color-danger-hover);\r
  }\r
\r
  .status-color-dropdown-item--active {\r
    background-color: var(--color-primary-light);\r
    color: var(--color-primary);\r
  }\r
\r
  /* Centered items */\r
  .project-dropdown-item,\r
  .project-dropdown-menu .btn--danger,\r
  .sidebar__dropdown-item {\r
    justify-content: center;\r
    text-align: center;\r
  }\r
\r
  /* Left-aligned items */\r
  .header-dropdown-item,\r
  .card-box__dropdown-item,\r
  .bg-picker-btn,\r
  .status-color-dropdown-item {\r
    justify-content: flex-start;\r
    text-align: left;\r
  }\r
\r
  /* ==================================================\r
     Lists & Sidebar\r
     ================================================== */\r
\r
  .sidebar__item-button {\r
    color: var(--text-main);\r
  }\r
\r
  .sidebar__item-button:hover {\r
    background-color: var(--bg-surface-hover);\r
  }\r
\r
  .sidebar__item[data-active="true"] {\r
    border-left: 3px solid var(--color-primary);\r
    background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);\r
  }\r
\r
  .side-card-list__btn {\r
    color: var(--text-main);\r
  }\r
\r
  .side-card-list__btn:hover {\r
    background-color: var(--bg-surface-hover);\r
  }\r
\r
  .side-card-list__btn[data-selected="true"] {\r
    background-color: color-mix(in srgb, var(--color-primary) 14%, transparent);\r
    color: var(--color-primary);\r
  }\r
\r
  /* ==================================================\r
     Modal\r
     ================================================== */\r
\r
  .modal-panel {\r
    border: 2px solid var(--border-color);\r
  }\r
\r
  .modal-header {\r
    border-bottom: 1px solid var(--border-color);\r
  }\r
\r
  .modal-footer {\r
    border-top: 1px solid var(--border-color-subtle);\r
  }\r
\r
  .weekday-btn {\r
    background-color: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .weekday-btn--active {\r
    background-color: var(--color-primary-light);\r
    color: var(--color-primary);\r
    border-color: var(--color-primary);\r
  }\r
\r
  /* ==================================================\r
     Toast (Preserve .toast--auto-dismiss animation)\r
     ================================================== */\r
\r
  .toast {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border: 1px solid var(--color-primary);\r
    box-shadow: var(--shadow-lg);\r
  }\r
\r
  .toast--error {\r
    border-color: var(--color-danger);\r
  }\r
\r
  /* ==================================================\r
     Background Picker\r
     ================================================== */\r
\r
  .bg-picker-popover__label {\r
    font-family: "Shippori Mincho", "Yu Mincho", serif;\r
    color: var(--color-primary);\r
    letter-spacing: 0.05em;\r
    margin-bottom: 0.4rem;\r
  }\r
\r
  .bg-picker-popover__options {\r
    gap: 0.5rem;\r
  }\r
\r
  .bg-picker-option {\r
    background-color: var(--bg-surface);\r
    color: var(--text-main);\r
    border: 1px solid var(--border-color);\r
    border-radius: var(--radius-sm);\r
    box-shadow: none;\r
    transition: border-color var(--transition-base), background-color var(--transition-base), color var(--transition-base);\r
  }\r
\r
  .bg-picker-option:hover {\r
    border-color: var(--color-primary);\r
    background-color: var(--bg-surface-hover);\r
  }\r
\r
  .bg-picker-option--active {\r
    background-color: var(--color-primary-light);\r
    border-color: var(--color-primary);\r
    color: var(--color-primary);\r
  }\r
}`})),D,O=e((()=>{D=`/* @fontUrl: https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap */\r
\r
@layer mod {\r
\r
  :root {\r
\r
    /* Typography */\r
\r
    --font-sans: "Inter", sans-serif;\r
    --font-handwriting: "JetBrains Mono", monospace;\r
    --font-mono: "JetBrains Mono", monospace;\r
\r
    /* Core Colors */\r
\r
    --bg-app: #0f1113;\r
\r
    --bg-surface: #161a1d;\r
    --bg-surface-subtle: #1a1f24;\r
    --bg-surface-hover: #20262c;\r
\r
    --border-color: #2d343c;\r
    --border-color-subtle: #23292f;\r
\r
    --text-main: #f3f5f7;\r
    --text-muted: #a4adb6;\r
    --text-faint: #7c848d;\r
\r
    --color-primary: #38ff8b;\r
    --color-primary-hover: #67ffab;\r
    --color-primary-light: rgba(56, 255, 139, .12);\r
\r
    --color-danger: #ff5d5d;\r
    --color-danger-hover: #ff7474;\r
    --color-danger-light: rgba(255, 93, 93, .15);\r
\r
    /* Status Colors */\r
\r
    --status-yellow: #d2c561;\r
    --status-yellow-bg: #3a3818;\r
\r
    --status-blue: #68a8ff;\r
    --status-blue-bg: #14283f;\r
\r
    --status-green: #48d97c;\r
    --status-green-bg: #142b1c;\r
\r
    --status-orange: #ff9d60;\r
    --status-orange-bg: #3d2413;\r
\r
    --status-purple: #b285ff;\r
    --status-purple-bg: #2b1d44;\r
\r
    --status-gray: #9ea7b1;\r
    --status-gray-bg: #2a2f35;\r
\r
    --status-pink: #ff8bbf;\r
    --status-pink-bg: #422234;\r
\r
    --status-red: #ff6b6b;\r
    --status-red-bg: #421919;\r
\r
    --radius-sm: 0;\r
    --radius-md: 0;\r
    --radius-lg: 0;\r
    --radius-full: 9999px;\r
\r
    --shadow-sm: none;\r
    --shadow-md: 0 0 12px rgba(56, 255, 139, .04);\r
    --shadow-lg: 0 0 18px rgba(56, 255, 139, .08);\r
    --shadow-card: 0 0 0 1px rgba(255, 255, 255, .03);\r
\r
    --transition-fast: 120ms ease;\r
    --transition-base: 200ms ease;\r
  }\r
\r
  /* ==========================================\r
     Background Tones\r
     ========================================== */\r
\r
  [data-bg-tone="terminal"] {\r
    --bg-main: #111417;\r
    --pattern-color: #1f8d54;\r
  }\r
\r
  [data-bg-tone="server-room"] {\r
    --bg-main: #0c0f12;\r
    --pattern-color: #38ff8b;\r
  }\r
\r
  [data-bg-tone="operator-console"] {\r
    --bg-main: #171c20;\r
    --pattern-color: #5fa8ff;\r
  }\r
\r
  [data-bg-tone="workstation"] {\r
    --bg-main: #252b31;\r
    --pattern-color: #38ff8b;\r
  }\r
\r
  /* ==========================================\r
     Global Panels\r
     ========================================== */\r
\r
  .workspace-header,\r
  .sidebar,\r
  .side-card-list,\r
  .modal-panel {\r
    background: var(--bg-surface);\r
    border: 1px solid var(--border-color);\r
    box-shadow: var(--shadow-md);\r
  }\r
\r
  .workspace-header {\r
    border-bottom: 1px solid var(--color-primary);\r
  }\r
\r
  /* ==========================================\r
     Monospace Labels\r
     ========================================== */\r
\r
  .workspace-header__title,\r
  .sidebar__brand-title,\r
  .modal-header__title,\r
  .card-box__title,\r
  .sidebar__section-header,\r
  .sidebar__schedule-badge,\r
  .card-box__footer,\r
  .workspace-header__search,\r
  .side-card-list__heading {\r
    font-family: var(--font-mono);\r
    letter-spacing: .04em;\r
  }\r
\r
  .workspace-header__title::before {\r
    content: "> ";\r
    color: var(--color-primary);\r
  }\r
\r
  .modal-header__title::before {\r
    content: "[Edit] ";\r
    color: var(--color-primary);\r
  }\r
\r
  .sidebar__brand-title {\r
    color: var(--color-primary);\r
    text-transform: uppercase;\r
  }\r
\r
  /* ==========================================\r
     Card System\r
     ========================================== */\r
\r
  .card-box,\r
  .card-box--title-only {\r
\r
    border: 1px solid var(--status-current);\r
\r
    border-radius: 0;\r
\r
    box-shadow:\r
      0 0 0 1px rgba(255, 255, 255, .02);\r
\r
    transition: all var(--transition-base);\r
  }\r
\r
  .card-box[data-status-color] {\r
    background:\r
      linear-gradient(180deg,\r
        color-mix(in srgb,\r
          var(--status-current-bg) 85%,\r
          #111417),\r
        color-mix(in srgb,\r
          var(--status-current-bg) 55%,\r
          #161a1d));\r
  }\r
\r
  .card-box--title-only[data-status-color] {\r
    background:\r
      linear-gradient(180deg,\r
        var(--status-current-bg),\r
        color-mix(in srgb,\r
          var(--status-current-bg) 60%,\r
          #161a1d));\r
  }\r
\r
  .card-box__header {\r
\r
    background:\r
      color-mix(in srgb,\r
        var(--status-current-bg) 92%,\r
        black);\r
\r
    border-bottom:\r
      1px solid var(--status-current);\r
\r
    color: var(--text-main);\r
\r
    border-radius: 0;\r
  }\r
\r
  .card-box--collapsed .card-box__header {\r
    border-radius: 0;\r
  }\r
\r
  .card-box:hover,\r
  .card-box--title-only:hover {\r
\r
    border-color: var(--color-primary);\r
\r
    box-shadow:\r
      0 0 10px rgba(56, 255, 139, .15),\r
      inset 0 0 0 1px rgba(56, 255, 139, .2);\r
  }\r
\r
  .card-box[data-selected="true"],\r
  .card-box--title-only[data-selected="true"] {\r
\r
    border-color: var(--color-primary);\r
\r
    box-shadow:\r
      0 0 14px rgba(56, 255, 139, .25),\r
      inset 0 0 0 1px rgba(56, 255, 139, .2);\r
  }\r
\r
  .card-box[data-search-match="true"],\r
  .card-box--title-only[data-search-match="true"] {\r
\r
    box-shadow:\r
      0 0 18px rgba(56, 255, 139, .3);\r
  }\r
\r
  /* ==========================================\r
     Status Selector\r
     ========================================== */\r
\r
  .card-box__status-select {\r
\r
    background: #101316;\r
\r
    color: var(--text-main);\r
\r
    border: 1px solid var(--status-current);\r
\r
    border-radius: 0;\r
\r
    font-family: var(--font-mono);\r
  }\r
\r
  .card-box__status-option {\r
    background: #101316;\r
    color: var(--text-main);\r
  }\r
\r
  /* ==========================================\r
     Inputs\r
     ========================================== */\r
\r
  .workspace-header__search,\r
  .form-field__input,\r
  .form-field__textarea,\r
  .form-field__select,\r
  .sidebar__add-project-input {\r
\r
    background: #101316;\r
\r
    border: 1px solid var(--border-color);\r
\r
    color: var(--text-main);\r
\r
    border-radius: 0;\r
\r
    font-family: var(--font-mono);\r
  }\r
\r
  .workspace-header__search:focus,\r
  .form-field__input:focus,\r
  .form-field__textarea:focus,\r
  .form-field__select:focus,\r
  .sidebar__add-project-input:focus {\r
\r
    outline: none;\r
\r
    border-color: var(--color-primary);\r
\r
    box-shadow:\r
      0 0 8px rgba(56, 255, 139, .18);\r
  }\r
\r
  /* ==========================================\r
     Buttons\r
     ========================================== */\r
\r
  .btn,\r
  .btn--primary,\r
  .mobile-fab {\r
\r
    border-radius: 0;\r
\r
    font-family: var(--font-mono);\r
\r
    letter-spacing: .05em;\r
  }\r
\r
  .btn--primary,\r
  .mobile-fab {\r
\r
    background: #121518;\r
\r
    color: var(--color-primary);\r
\r
    border: 1px solid var(--color-primary);\r
  }\r
\r
  .btn--primary:hover,\r
  .mobile-fab:hover {\r
\r
    background: rgba(56, 255, 139, .08);\r
\r
    box-shadow:\r
      0 0 12px rgba(56, 255, 139, .22);\r
  }\r
\r
  .undo-btn {\r
\r
    color: var(--color-primary);\r
\r
    border: 1px solid var(--border-color);\r
\r
    background: #13171a;\r
  }\r
\r
  .undo-btn:hover {\r
\r
    border-color: var(--color-primary);\r
\r
    box-shadow:\r
      0 0 10px rgba(56,255,139,.15);\r
  }\r
\r
  /* ==========================================\r
     Schedule Button\r
     ========================================== */\r
\r
  .sidebar__schedule-btn {\r
\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
\r
    min-height: 38px;\r
\r
    line-height: 1;\r
\r
    font-family: var(--font-mono);\r
\r
    border: 1px solid var(--border-color);\r
\r
    background: #13171a;\r
\r
    color: var(--text-main);\r
  }\r
\r
  .sidebar__schedule-btn:hover {\r
\r
    border-color: var(--color-primary);\r
\r
    color: var(--color-primary);\r
\r
    box-shadow:\r
      0 0 10px rgba(56, 255, 139, .15);\r
  }\r
\r
  /* ==========================================\r
     Dropdowns\r
     ========================================== */\r
\r
  .header-dropdown-menu,\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu,\r
  .card-box__dropdown-menu {\r
\r
    background: #13171a;\r
\r
    border: 1px solid var(--border-color);\r
\r
    border-radius: 0;\r
  }\r
\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu {\r
    text-align: center;\r
  }\r
\r
  .project-dropdown-item,\r
  .sidebar__dropdown-item {\r
    justify-content: center;\r
    text-align: center;\r
  }\r
\r
  /* ==========================================\r
     Sidebar Active\r
     ========================================== */\r
\r
  .sidebar__item[data-active="true"] {\r
\r
    border-left:\r
      2px solid var(--color-primary);\r
\r
    background:\r
      rgba(56, 255, 139, .05);\r
  }\r
\r
  .side-card-list__btn[data-selected="true"] {\r
\r
    color: var(--color-primary);\r
\r
    background:\r
      rgba(56, 255, 139, .06);\r
  }\r
\r
  /* ==========================================\r
     Modal\r
     ========================================== */\r
\r
  .modal-panel {\r
    border-radius: 0;\r
  }\r
\r
  .modal-header {\r
    border-bottom: 1px solid var(--color-primary);\r
  }\r
\r
  .modal-footer {\r
    border-top: 1px solid var(--border-color);\r
  }\r
\r
  /* ==========================================\r
     Toast\r
     ========================================== */\r
\r
  .toast {\r
\r
    background: #13171a;\r
\r
    border: 1px solid var(--color-primary);\r
\r
    color: var(--text-main);\r
\r
    box-shadow:\r
      0 0 15px rgba(56, 255, 139, .18);\r
  }\r
\r
  .toast--error {\r
    border-color: var(--color-danger);\r
  }\r
\r
  /* ==========================================\r
    Background Picker\r
    ========================================== */\r
\r
  .bg-picker-popover__label {\r
\r
    font-family: var(--font-mono);\r
\r
    color: var(--color-primary);\r
\r
    text-transform: uppercase;\r
\r
    letter-spacing: .08em;\r
  }\r
\r
  .bg-picker-popover__label::before {\r
    content: "[CFG] ";\r
  }\r
\r
  .bg-picker-popover__options {\r
    gap: .5rem;\r
  }\r
\r
  .bg-picker-option {\r
\r
    background: #13171a;\r
\r
    color: var(--text-main);\r
\r
    border: 1px solid var(--border-color);\r
\r
    border-radius: 0;\r
\r
    font-family: var(--font-mono);\r
\r
    transition: all var(--transition-base);\r
  }\r
\r
  .bg-picker-option:hover {\r
\r
    border-color: var(--color-primary);\r
\r
    box-shadow:\r
      0 0 8px rgba(56, 255, 139, .15);\r
  }\r
\r
  .bg-picker-option--active {\r
\r
    border-color: var(--color-primary);\r
\r
    color: var(--color-primary);\r
\r
    background:\r
      rgba(56, 255, 139, .08);\r
\r
    box-shadow:\r
      0 0 12px rgba(56, 255, 139, .24),\r
      inset 0 0 0 1px rgba(56, 255, 139, .18);\r
  }\r
}`})),k,A=e((()=>{k=`@layer mod {\r
\r
  :root {\r
\r
    /* Typography */\r
\r
    --font-sans: initial;\r
    --font-handwriting: initial;\r
    --font-mono: initial;\r
\r
    /* Core Colors */\r
\r
    --bg-app: #ffffff;\r
\r
    --bg-surface: #ffffff;\r
    --bg-surface-subtle: #f5f5f5;\r
    --bg-surface-hover: #eeeeee;\r
\r
    --border-color: #cccccc;\r
    --border-color-subtle: #dddddd;\r
\r
    --text-main: #000000;\r
    --text-muted: #555555;\r
    --text-faint: #777777;\r
\r
    --color-primary: #333333;\r
    --color-primary-hover: #000000;\r
    --color-primary-light: #f0f0f0;\r
\r
    --color-danger: #666666;\r
    --color-danger-hover: #333333;\r
    --color-danger-light: #f2f2f2;\r
\r
    /* Status Colors */\r
\r
    --status-yellow: #888888;\r
    --status-yellow-bg: #f5f5f5;\r
\r
    --status-blue: #888888;\r
    --status-blue-bg: #f5f5f5;\r
\r
    --status-green: #888888;\r
    --status-green-bg: #f5f5f5;\r
\r
    --status-orange: #888888;\r
    --status-orange-bg: #f5f5f5;\r
\r
    --status-purple: #888888;\r
    --status-purple-bg: #f5f5f5;\r
\r
    --status-gray: #888888;\r
    --status-gray-bg: #f5f5f5;\r
\r
    --status-pink: #888888;\r
    --status-pink-bg: #f5f5f5;\r
\r
    --status-red: #888888;\r
    --status-red-bg: #f5f5f5;\r
\r
    /* Radius */\r
\r
    --radius-sm: 0;\r
    --radius-md: 0;\r
    --radius-lg: 0;\r
    --radius-full: 0;\r
\r
    /* Shadow */\r
\r
    --shadow-sm: none;\r
    --shadow-md: none;\r
    --shadow-lg: none;\r
    --shadow-card: none;\r
\r
    --transition-fast: none;\r
    --transition-base: none;\r
  }\r
\r
  /* ==========================================\r
     Background Tones\r
     ========================================== */\r
\r
  [data-bg-tone="white"] {\r
    --bg-main: #ffffff;\r
    --pattern-color: transparent;\r
  }\r
\r
  [data-bg-tone="gray"] {\r
    --bg-main: #e6e6e6;\r
    --pattern-color: transparent;\r
  }\r
\r
  /* ==========================================\r
     Reset Borders, Shadows & Transitions\r
     ========================================== */\r
\r
  .workspace-header,\r
  .sidebar,\r
  .side-card-list,\r
  .modal-panel,\r
  .card-box,\r
  .card-box--title-only,\r
  .card-box__header,\r
  .card-box__status-select,\r
  .workspace-header__search,\r
  .form-field__input,\r
  .form-field__textarea,\r
  .form-field__select,\r
  .sidebar__add-project-input,\r
  .btn,\r
  .btn--primary,\r
  .mobile-fab,\r
  .undo-btn,\r
  .sidebar__schedule-btn,\r
  .header-dropdown-menu,\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu,\r
  .card-box__dropdown-menu,\r
  .card-box__link-chip,\r
  .card-box__link-jump,\r
  .card-box__link-unlink,\r
  .toast,\r
  .bg-picker-option,\r
  .bg-picker-option--active {\r
    border: none;\r
    border-radius: 0;\r
    box-shadow: none;\r
    transition: none;\r
  }\r
\r
  .card-box:hover,\r
  .card-box--title-only:hover,\r
  .card-box[data-selected="true"],\r
  .card-box--title-only[data-selected="true"],\r
  .card-box[data-search-match="true"],\r
  .card-box--title-only[data-search-match="true"] {\r
    transform: none;\r
    border: none;\r
    box-shadow: none;\r
  }\r
\r
  .card-box__header::before,\r
  .workspace-header__title::before,\r
  .modal-header__title::before,\r
  .bg-picker-popover__label::before {\r
    content: none;\r
  }\r
\r
  /* ==========================================\r
     Borders\r
     ========================================== */\r
\r
  .workspace-header {\r
    border-bottom: 1px solid var(--border-color);\r
  }\r
\r
  .card-box,\r
  .card-box--title-only {\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .card-box:hover,\r
  .card-box--title-only:hover,\r
  .card-box[data-selected="true"],\r
  .card-box--title-only[data-selected="true"],\r
  .card-box[data-search-match="true"],\r
  .card-box--title-only[data-search-match="true"] {\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .card-box__header {\r
    border-bottom: 1px solid var(--border-color);\r
  }\r
\r
  .side-card-list {\r
    border-left: 1px solid var(--border-color);\r
  }\r
\r
  .sidebar {\r
    border-right: 1px solid var(--border-color);\r
  }\r
\r
  .workspace-header__search,\r
  .sidebar__add-project-input {\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .header-dropdown-menu,\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu,\r
  .card-box__dropdown-menu {\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .modal-panel .form-field__select,\r
  .modal-panel .form-field__input[type="time"],\r
  .modal-panel input[type="time"] {\r
    border: 1px solid var(--border-color);\r
  }\r
\r
  .card-box__link-chip {\r
    border: 1px solid var(--border-color);\r
    background: transparent;\r
  }\r
\r
  /* ==========================================\r
     Card Spacing\r
     ========================================== */\r
\r
  .card-box__body {\r
    margin-bottom: 1rem;\r
  }\r
\r
  .card-box__related,\r
  .card-box__linked-cards,\r
  .card-box__links {\r
    margin-top: 1rem;\r
  }\r
\r
  /* ==========================================\r
     Surfaces & Colors\r
     ========================================== */\r
\r
  .workspace-header,\r
  .sidebar,\r
  .side-card-list,\r
  .modal-panel,\r
  .card-box,\r
  .card-box--title-only,\r
  .card-box[data-status-color],\r
  .card-box--title-only[data-status-color],\r
  .card-box__header,\r
  .card-box__status-select,\r
  .card-box__status-option,\r
  .workspace-header__search,\r
  .form-field__input,\r
  .form-field__textarea,\r
  .form-field__select,\r
  .sidebar__add-project-input,\r
  .btn,\r
  .btn--primary,\r
  .mobile-fab,\r
  .undo-btn,\r
  .sidebar__schedule-btn,\r
  .bg-picker-option,\r
  .header-dropdown-menu,\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu,\r
  .card-box__dropdown-menu,\r
  .toast {\r
    background: var(--bg-surface);\r
    color: var(--text-main);\r
  }\r
\r
  .btn:hover,\r
  .btn--primary:hover,\r
  .mobile-fab:hover,\r
  .undo-btn:hover,\r
  .sidebar__schedule-btn:hover,\r
  .bg-picker-option:hover {\r
    background: var(--bg-surface-hover);\r
    color: var(--text-main);\r
  }\r
\r
  .card-box__link-chip:hover,\r
  .card-box__link-jump,\r
  .card-box__link-jump:hover,\r
  .card-box__link-unlink,\r
  .card-box__link-unlink:hover {\r
    background: transparent;\r
    color: var(--text-main);\r
    box-shadow: none;\r
  }\r
\r
  .bg-picker-option--active,\r
  .side-card-list__btn[data-selected="true"] {\r
    background: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
  }\r
\r
  .sidebar__item[data-active="true"] .sidebar__item-button {\r
    background: var(--bg-surface-subtle);\r
    color: var(--text-main);\r
  }\r
\r
  .project-menu-wrapper,\r
  .project-menu-summary,\r
  .project-menu-summary:hover,\r
  .sidebar__item[data-active="true"] .project-menu-wrapper,\r
  .sidebar__item[data-active="true"] .project-menu-summary,\r
  .sidebar__item[data-active="true"] .project-menu-summary:hover {\r
    background: transparent;\r
    color: var(--text-main);\r
    box-shadow: none;\r
  }\r
\r
  .project-dropdown-menu,\r
  .sidebar__dropdown-menu {\r
    text-align: center;\r
  }\r
\r
  .project-dropdown-item,\r
  .sidebar__dropdown-item {\r
    justify-content: center;\r
    text-align: center;\r
  }\r
}`}));function j(e){return typeof e==`string`&&e.startsWith(I)&&e.length>29&&!/[\s"'<>]/.test(e)}function M(e,t){let n=t,r=[],i=new Set;for(let t of e.split(/\r?\n/)){let e=t.trim().replace(/^\/\*\s*\*?/,``).replace(/\*\/$/,``).trim();if(e.startsWith(`@name:`)){let t=e.slice(6).trim();t&&(n=t)}else if(e.startsWith(`@fontUrl:`)){let t=e.slice(9).trim();j(t)&&!i.has(t)&&(i.add(t),r.push(t))}}return{name:n,fontUrls:r}}function N(e){return e.replace(/^\d+-/,``).replace(/\.(css|json)$/i,``)}function P(){return Object.keys(F).sort().flatMap(e=>{let t=F[e],n=e.split(`/`).pop()||e,r=`builtin:${n}`,i=N(n);if(e.toLowerCase().endsWith(`.css`)){let{name:e,fontUrls:n}=M(t,i);return[{id:r,name:e,enabled:!1,fontUrls:n,kind:`custom_css`,cssText:t}]}if(e.toLowerCase().endsWith(`.json`))try{let e=JSON.parse(t),n=Array.isArray(e.fontUrls)?e.fontUrls.filter(j):[];return[{id:r,name:typeof e.modName==`string`&&e.modName.trim()?e.modName.trim():i,enabled:!1,fontUrls:n,kind:`token_json`,author:typeof e.author==`string`?e.author:``,description:typeof e.description==`string`?e.description:``,variables:e.variables&&typeof e.variables==`object`?e.variables:{}}]}catch(t){return console.error(`[BuiltinMods] JSON parse error:`,e,t),[]}return[]})}var F,I,L=e((()=>{w(),E(),O(),A(),F=Object.assign({"./builtin-mods/Cyber-terminal.css":C,"./builtin-mods/Grimoire.css":T,"./builtin-mods/TECH_TERMINAL.css":D,"./builtin-mods/WhiteSimple.css":k}),I=`https://fonts.googleapis.com/`}));t((()=>{S(),L();var e=`switchboardDB`,t=`kv`,n=`switchboardData`,r=null;function i(){return r?Promise.resolve(r):new Promise((n,i)=>{let a=indexedDB.open(e,1);a.onupgradeneeded=e=>{let n=e.target.result;n.objectStoreNames.contains(t)||n.createObjectStore(t)},a.onsuccess=e=>{let t=e.target.result;t.onclose=()=>{r=null},t.onversionchange=()=>{t.close(),r=null},r=t,n(t)},a.onerror=e=>i(e)})}async function a(){try{let e=await i();return new Promise(r=>{let i=e.transaction(t,`readonly`).objectStore(t).get(n);i.onsuccess=()=>r(i.result??null),i.onerror=()=>r(null)})}catch(e){return console.error(`[IndexedDB] Failed to open DB:`,e),null}}async function o(e){let r=await i();return new Promise((i,a)=>{let o=r.transaction(t,`readwrite`);o.objectStore(t).put(e,n),o.oncomplete=()=>i(),o.onerror=()=>a(o.error)})}async function s(){if(navigator.storage&&navigator.storage.persist)try{await navigator.storage.persist()}catch(e){console.warn(`[Storage] 永続化リクエスト失敗:`,e)}}async function p(){s();let e=new URLSearchParams(window.location.search),t=e.get(`safemode`)===`1`,n=e.get(`moddev`)===`1`,[r]=await Promise.all([a(),f()]),i=r;if(typeof r==`string`)try{i=JSON.parse(r)}catch(e){console.error(`[JSON] Corrupted data string:`,e),i=null}let p=P();if(!t&&i){let e=typeof i.activeBuiltinStyleId==`string`?i.activeBuiltinStyleId:null,t=e?p.find(t=>t.id===e):null,n=Array.isArray(i.styleMods)?i.styleMods:[],r=[...t?[{...t,enabled:!0}]:[],...n];r.length>0&&m(r)}let g=Array.from(crypto.getRandomValues(new Uint32Array(4))),_=Elm.Main.init({node:document.getElementById(`app`),flags:{storageData:i,seed:g,viewport:{width:window.innerWidth,height:window.innerHeight},isSafeMode:t,isDevModMode:n,builtinStyleMods:p,cssTones:c(),modCssTones:t?[]:l(),cssStatusColors:u(),modCssStatusColors:t?[]:d()}});return h(_,o),_}window.elmAppPromise=p()}))();