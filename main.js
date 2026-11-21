const STORAGE_KEY = "selected-theme";
const toggleInput = document.getElementById("theme-toggle");
const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getActiveTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") {
    return explicit;
  }
  return darkQuery.matches ? "dark" : "light";
}

function applyTheme(theme, { persist = true } = {}) {
  document.documentElement.dataset.theme = theme;
  colorSchemeMeta?.setAttribute("content", theme);

  if (toggleInput) {
    toggleInput.checked = theme === "dark";
  }

  if (persist) {
    localStorage.setItem(STORAGE_KEY, theme);
  }
}

if (toggleInput) {
  // 初期表示時のスイッチ位置を現在のテーマに合わせる
  toggleInput.checked = getActiveTheme() === "dark";

  // ユーザーがトグルを切り替えたとき
  toggleInput.addEventListener("change", () => {
    applyTheme(toggleInput.checked ? "dark" : "light");
  });

  // 未保存の状態なら OS 側のテーマ変更にもスイッチ位置を追従させる
  darkQuery.addEventListener("change", (event) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== "light" && saved !== "dark") {
      toggleInput.checked = event.matches;
    }
  });
}
