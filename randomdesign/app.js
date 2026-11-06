// 現在の選択状態
const currentState = {
  moodName: "", // 全体の雰囲気（デザインセット名）
  mood: "",     // 全体の雰囲気（詳細説明）
  color: "",
  font: "",
  deco: ""
};

const categories = ["mood", "color", "font", "deco"];

// 配列からランダムに1つ取得
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 画面の初期化
function init() {
  const setSelect = document.getElementById("setSelect");
  setSelect.innerHTML = "";

  // デザインセットの選択肢を追加
  designSets.forEach((set) => {
    const opt = document.createElement("option");
    opt.value = set.id;
    opt.textContent = set.name;
    setSelect.appendChild(opt);
  });

  // 個別手動セレクトの選択肢を生成
  categories.forEach((cat) => {
    const selectElem = document.getElementById(`select-${cat}`);
    selectElem.innerHTML = "";

    designSets.forEach((set, index) => {
      const opt = document.createElement("option");
      opt.value = index; // designSets内のインデックス
      opt.textContent = `${set.name} の設定`;
      selectElem.appendChild(opt);
    });
  });

  // デフォルトで最初のセットを一括採用
  applyDesignSet(designSets[0].id);
}

// デザインセットを一括適用
function applyDesignSet(setId) {
  const set = designSets.find((s) => s.id === setId);
  if (!set) return;

  const setIndex = designSets.indexOf(set);

  // 雰囲気の名称と詳細を設定
  currentState.moodName = set.name;
  currentState.mood = set.mood || "";

  categories.forEach((cat) => {
    currentState[cat] = set[cat] || "";
    renderPartText(cat, set);
    document.getElementById(`select-${cat}`).value = setIndex;
  });

  document.getElementById("setSelect").value = setId;
  updateOutput();
}

// 一括セレクトボックスが変更された時
function onSetChange(setId) {
  if (setId === "custom") return;
  applyDesignSet(setId);
}

// 手動で特定の項目を変更した時
function onManualSelect(cat, index) {
  const chosenSet = designSets[index];
  if (!chosenSet) return;

  if (cat === "mood") {
    currentState.moodName = chosenSet.name;
    currentState.mood = chosenSet.mood || "";
  } else {
    currentState[cat] = chosenSet[cat];
  }

  renderPartText(cat, chosenSet);
  markAsCustom();
  updateOutput();
}

// 特定の項目だけを再抽選
function rerollPart(cat) {
  const randomSet = getRandomItem(designSets);
  const randomIndex = designSets.indexOf(randomSet);

  if (cat === "mood") {
    currentState.moodName = randomSet.name;
    currentState.mood = randomSet.mood || "";
  } else {
    currentState[cat] = randomSet[cat];
  }

  renderPartText(cat, randomSet);
  document.getElementById(`select-${cat}`).value = randomIndex;

  markAsCustom();
  updateOutput();
}

// すべての項目をランダムに再生成（各項目を個別に抽選）
function generateAllRandom() {
  categories.forEach((cat) => {
    const randomSet = getRandomItem(designSets);
    const randomIndex = designSets.indexOf(randomSet);

    if (cat === "mood") {
      currentState.moodName = randomSet.name;
      currentState.mood = randomSet.mood || "";
    } else {
      currentState[cat] = randomSet[cat];
    }

    renderPartText(cat, randomSet);
    document.getElementById(`select-${cat}`).value = randomIndex;
  });

  markAsCustom();
  updateOutput();
}

// 画面上のテキスト表示を更新
function renderPartText(cat, set) {
  const elem = document.getElementById(`text-${cat}`);
  if (cat === "mood") {
    // 画面上でも分かりやすいようセット名を目立たせて表示
    elem.textContent = set.mood ? `【${set.name}】${set.mood}` : set.name;
  } else {
    elem.textContent = set[cat];
  }
}

// カスタム状態（ランダムまたは手動混合）になった時のセレクトボックス表示調整
function markAsCustom() {
  const setSelect = document.getElementById("setSelect");
  let customOpt = setSelect.querySelector('option[value="custom"]');

  if (!customOpt) {
    customOpt = document.createElement("option");
    customOpt.value = "custom";
    customOpt.textContent = "（カスタム / ランダム）";
    setSelect.prepend(customOpt);
  }
  setSelect.value = "custom";
}

// 完成プロンプトの結合・表示
function updateOutput() {
  // mood（詳細説明）がある場合は「名称（詳細）」、ない場合は「名称」のみをセット
  const moodPrompt = currentState.mood
    ? `${currentState.moodName}（${currentState.mood}）`
    : currentState.moodName;

  const prompt = `個人サイトのトップページ（HTML/CSS）を制作してください。
見た目について、以下のデザイン要件を反映してください：

・全体の雰囲気：${moodPrompt}
・配色：${currentState.color}
・フォント：${currentState.font}
・装飾やUI：${currentState.deco}

まずはファーストビューから主要コンテンツが並ぶ構成で、綺麗に整ったレスポンシブデザインのコードを出力してください。`;

  document.getElementById("output").value = prompt;
}

// クリップボードへコピー
function copyPrompt() {
  const output = document.getElementById("output");
  output.select();
  navigator.clipboard.writeText(output.value).then(() => {
    const btn = document.getElementById("copyBtn");
    const originalText = btn.textContent;
    btn.textContent = "✅ コピー完了！";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 1500);
  });
}

// ページ読み込み時に初期化実行
window.addEventListener("DOMContentLoaded", init);