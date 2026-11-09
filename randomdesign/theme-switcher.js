/**
 * テーマ設定リスト（data-theme 属性値と名称）
 */
const themeList = [
  { id: "modern", name: "モダンミニマル" },
  { id: "taisho-roman", name: "大正浪漫" },
  { id: "retro-future", name: "レトロフューチャー" },
  { id: "witch-lab", name: "魔女の研究室" },
  { id: "deep-sea", name: "深海の生態系" },
  { id: "galactic-empire", name: "銀河帝国の行政機関" },
];

const STORAGE_KEY = "generator_selected_theme";

// 初期化
function initThemeSwitcher() {
  const themeSelect = document.getElementById("themeSwitcherSelect");
  const wrapper = document.querySelector(".theme-switcher-wrapper");
  if (!themeSelect) return;

  // プルダウンの選択肢を動的に生成
  themeSelect.innerHTML = "";
  themeList.forEach((theme) => {
    const opt = document.createElement("option");
    opt.value = theme.id;
    opt.textContent = theme.name;
    themeSelect.appendChild(opt);
  });

  // 初期テーマの適用
  const currentTheme = document.documentElement.getAttribute("data-theme") || themeList[0].id;
  switchTheme(currentTheme);

  // ドロップダウンでの選択切り替えイベント
  themeSelect.addEventListener("change", (e) => {
    switchTheme(e.target.value);
  });

  // ★ マウスホイールでのテーマ切り替え操作
  if (wrapper) {
    wrapper.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault(); // 画面全体のスクロールを抑止

        const currentIndex = themeSelect.selectedIndex;
        const total = themeList.length;

        if (e.deltaY > 0) {
          // 下スクロール：次のテーマへ（終端なら先頭にループ）
          themeSelect.selectedIndex = (currentIndex + 1) % total;
        } else if (e.deltaY < 0) {
          // 上スクロール：前のテーマへ（先頭なら終端にループ）
          themeSelect.selectedIndex = (currentIndex - 1 + total) % total;
        }

        switchTheme(themeSelect.value);
      },
      { passive: false }
    );
  }
}

// テーマの切り替え実行（data-theme属性を更新）
function switchTheme(themeId) {
  const themeSelect = document.getElementById("themeSwitcherSelect");
  document.documentElement.setAttribute("data-theme", themeId);

  if (themeSelect && themeSelect.value !== themeId) {
    themeSelect.value = themeId;
  }
}

// DOM読み込み完了時に実行
document.addEventListener("DOMContentLoaded", initThemeSwitcher);
