/**
 * テーマ（CSS）設定リスト
 */
const themeList = [
  { name: "モダンミニマル", file: "style.css" },
  { name: "大正浪漫", file: "style-taisho-roman.css" },
  { name: "レトロフューチャー", file: "style-retro-future.css" },
  { name: "魔女の研究室", file: "style-witch-lab.css" },
  { name: "深海の生態系", file: "style-deep-sea.css" },
  { name: "銀河帝国の行政機関", file: "style-galactic-empire.css" },
];

const STORAGE_KEY = "generator_selected_theme";

// 初期化
function initThemeSwitcher() {
  const themeSelect = document.getElementById("themeSwitcherSelect");
  if (!themeSelect) return;

  // プルダウンの選択肢を動的に生成
  themeSelect.innerHTML = "";
  themeList.forEach((theme) => {
    const opt = document.createElement("option");
    opt.value = theme.file;
    opt.textContent = theme.name;
    themeSelect.appendChild(opt);
  });

  // 保存されているテーマ、なければ先頭のテーマを適用
  // const savedTheme = localStorage.getItem(STORAGE_KEY) || themeList[0].file;
  // switchTheme(savedTheme);

  // 切り替えイベント
  themeSelect.addEventListener("change", (e) => {
    switchTheme(e.target.value);
  });
}

// テーマの切り替え実行（シームレス・バトンタッチ方式）
function switchTheme(newFilePath) {
  const currentLink = document.getElementById("themeLink");
  const themeSelect = document.getElementById("themeSwitcherSelect");

  if (themeSelect) {
    themeSelect.value = newFilePath;
  }
  // localStorage.setItem(STORAGE_KEY, newFilePath);

  // 既に同じファイルが適用されている場合は何もしない
  if (currentLink && currentLink.getAttribute("href") === newFilePath) {
    return;
  }

  // ① 新しい <link> 要素を裏で作成
  const newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = newFilePath;

  // ② 新しいCSSのダウンロード＆解析が完全に終わった瞬間に発火
  newLink.onload = () => {
    newLink.id = "themeLink"; // 新しい方をメインに昇格
    if (currentLink && currentLink.parentNode) {
      currentLink.parentNode.removeChild(currentLink); // 古い方を安全に削除
    }
  };

  // エラー時のフォールバック（ファイルが見つからない等）
  newLink.onerror = () => {
    console.error(`CSSファイルの読み込みに失敗しました: ${newFilePath}`);
  };

  // ③ headタグに挿入してフェッチ開始（この間、画面には古いCSSが適用され続けます）
  document.head.appendChild(newLink);
}

// DOM読み込み完了時に実行
document.addEventListener("DOMContentLoaded", initThemeSwitcher);