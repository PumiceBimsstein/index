/**
 * contents.js のデータを読み込み、DOM要素を安全に生成して表示します。
 * また、右上のトグルスイッチによるテーマ（Paper / Dark）の切り替えを制御します。
 */
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. コンテンツ一覧の生成
  // ==========================================
  const mainContainer = document.getElementById("main-content");

  if (!mainContainer) return;

  if (typeof contents === "undefined" || !Array.isArray(contents)) {
    console.error("contents.js のデータが正しく読み込まれていません。");
  } else {
    contents.forEach((category) => {
      const section = document.createElement("section");
      section.className = "category-section";

      const heading = document.createElement("h2");
      heading.className = "category-title";
      heading.textContent = category.title || "Untitled Category";
      section.appendChild(heading);

      const list = document.createElement("ul");
      list.className = "items-grid";

      if (Array.isArray(category.items)) {
        category.items.forEach((item) => {
          const itemLi = document.createElement("li");
          itemLi.className = "content-item";

          // サムネイル画像
          if (item.thumbnail && typeof item.thumbnail === "string" && item.thumbnail.trim() !== "") {
            const thumbLink = document.createElement("a");
            thumbLink.href = item.url || "#";
            thumbLink.className = "item-thumbnail-wrap";
            thumbLink.setAttribute("tabindex", "-1");
            thumbLink.setAttribute("aria-hidden", "true");

            const img = document.createElement("img");
            img.className = "item-thumbnail";
            img.src = item.thumbnail;
            img.alt = "";
            img.loading = "lazy";

            thumbLink.appendChild(img);
            itemLi.appendChild(thumbLink);
          }

          // タイトル
          const titleH3 = document.createElement("h3");
          titleH3.className = "item-title";

          const titleLink = document.createElement("a");
          titleLink.href = item.url || "#";
          titleLink.className = "item-title-link";
          titleLink.textContent = item.title || "Untitled";

          titleH3.appendChild(titleLink);
          itemLi.appendChild(titleH3);

          // 説明文
          if (item.description) {
            const descP = document.createElement("p");
            descP.className = "item-description";
            descP.textContent = item.description;
            itemLi.appendChild(descP);
          }

          list.appendChild(itemLi);
        });
      }

      section.appendChild(list);
      mainContainer.appendChild(section);
    });
  }

  // ==========================================
  // 2. 右上トグルスイッチによるテーマ切り替え
  // ==========================================
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("selected-theme");
  const isDark = savedTheme === "dark";

  // 初期状態の設定（DarkならスイッチをON状態に）
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-checked", isDark ? "true" : "false");
  }

  function setTheme(theme) {
    const oldLink = document.getElementById("theme-style");
    const targetHref = `./style-${theme}.css`;

    if (oldLink && oldLink.getAttribute("href") === targetHref) {
      return;
    }

    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.id = "theme-style";
    newLink.href = targetHref;

    // ロード完了後に古いスタイルを削除（チラつき防止）
    newLink.onload = () => {
      if (oldLink && oldLink !== newLink) {
        oldLink.remove();
      }
    };

    if (oldLink && oldLink.parentNode) {
      oldLink.parentNode.insertBefore(newLink, oldLink.nextSibling);
    } else {
      document.head.appendChild(newLink);
    }

    const isCurrentDark = theme === "dark";
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-checked", isCurrentDark ? "true" : "false");
    }
    localStorage.setItem("selected-theme", theme);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isChecked = toggleBtn.getAttribute("aria-checked") === "true";
      // ON（Dark）なら Paper に、OFF（Paper）なら Dark に切り替え
      setTheme(isChecked ? "paper" : "dark");
    });
  }
});
