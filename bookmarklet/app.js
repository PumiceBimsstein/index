const KEY = 'ebookLibrary.v1';
const FIELDS = ['title', 'author', 'ebookSite', 'bookPage', 'readingURL', 'coverImage'];
const SITES = ['dbook', 'bookwalker'];
const $ = s => document.querySelector(s);

let books = [], view = [], sel = new Set(), sort = { key: null, asc: true }, dirty = false;

// ---------- 保存・正規化 ----------
function load() {
  try { const a = JSON.parse(localStorage.getItem(KEY) || '[]'); books = Array.isArray(a) ? a.flatMap((o, i) => { try { return [norm(o, i)]; } catch { return []; } }) : []; } catch { books = []; }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(books)); } catch (e) { setStatus('ブラウザへの保存に失敗しました: ' + e.message, 'err'); }
}
function norm(o, i) {
  if (!o || typeof o !== 'object' || Array.isArray(o)) throw new Error(`[${i}] オブジェクトではありません`);
  const b = {};
  for (const k of FIELDS) b[k] = typeof o[k] === 'string' ? o[k].trim() : '';
  for (const k of ['bookPage', 'readingURL', 'coverImage']) b[k] = b[k].replace(/\\/g, '');
  if (!b.bookPage) delete b.bookPage; // bookWalker など bookPage を持たない書籍は項目ごと省く
  if (!b.title) throw new Error(`[${i}] title が空です`);
  if (!SITES.includes(b.ebookSite)) throw new Error(`[${i}] ebookSite は "dbook" か "bookwalker" にしてください`);
  return b;
}
function parse(text) {
  let a;
  try { a = JSON.parse(text); } catch (e) {
    const m = /position (\d+)/.exec(e.message); let loc = '';
    if (m) { const lines = text.slice(0, +m[1]).split('\n'); loc = `（${lines.length}行 ${lines[lines.length - 1].length + 1}列目）`; }
    throw new Error('JSONの構文エラー' + loc + ': ' + e.message);
  }
  if (!Array.isArray(a)) throw new Error('配列([...])ではありません');
  return a.map(norm);
}
const keyOf = b => b.ebookSite + '|' + (b.bookPage || b.title);

// ---------- 表示 ----------
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safe = u => /^https?:\/\//i.test(u || '') ? esc(u) : '';

function row(b, i) {
  const p = safe(b.bookPage), r = safe(b.readingURL), c = safe(b.coverImage), on = sel.has(b);
  return `<tr class="${on ? 'sel' : ''}">
    <td><input type="checkbox" data-i="${i}" ${on ? 'checked' : ''}></td>
    <td class="cv">${c ? `<img src="${c}" loading="lazy" referrerpolicy="no-referrer" alt="">` : ''}</td>
    <td><b>${esc(b.title)}</b></td><td>${esc(b.author)}</td>
    <td><span class="tag ${esc(b.ebookSite)}">${esc(b.ebookSite)}</span></td>
    <td class="ops">${p ? `<a class="lnk" href="${p}" target="_blank" rel="noopener noreferrer">page</a>` : ''}${r ? `<a class="lnk read" href="${r}" target="_blank" rel="noopener noreferrer">read</a>` : ''}<button class="x" data-del="${i}" title="削除">×</button></td>
  </tr>`;
}

function render() {
  const q = $('#search').value.trim().toLowerCase(), site = $('#site-filter').value;
  view = books.filter(b => (!site || b.ebookSite === site) && (!q || (b.title + ' ' + b.author).toLowerCase().includes(q)));
  $('#rows').innerHTML = view.length ? view.map(row).join('')
    : `<tr><td colspan="6" class="empty">${books.length ? '条件に一致する書籍がありません。' : 'まだ書籍がありません。json タブからデータを貼り付けてください。'}</td></tr>`;
  $('#count').textContent = books.length;
  $('#sel-count').textContent = sel.size;
  $('#chk-all').checked = view.length > 0 && view.every(b => sel.has(b));
  $('#hint').textContent = sel.size ? `出力対象: 選択した ${sel.size} 件のみ` : `出力対象: 全 ${books.length} 件（選択すると選択分のみ出力）`;
  document.querySelectorAll('th.sortable').forEach(th => {
    const on = th.dataset.sort === sort.key;
    th.classList.toggle('sorted', on);
    th.querySelector('i').textContent = on ? (sort.asc ? '▲' : '▼') : '↕';
  });
}

function setStatus(msg, cls = '') { const s = $('#status'); s.textContent = msg; s.className = 'mono ' + cls; }

// ---------- 出力 ----------
const targets = () => sel.size ? books.filter(b => sel.has(b)) : books;
const stamp = () => new Date().toISOString().slice(0, 10).replace(/-/g, '');
function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function exportCSV() {
  const t = targets(); if (!t.length) return alert('出力する書籍がありません。');
  const csv = [FIELDS, ...t.map(b => FIELDS.map(k => b[k] || ''))]
    .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\r\n');
  download(`ebooks_${stamp()}.csv`, '\uFEFF' + csv, 'text/csv;charset=utf-8');
}
function exportJSON() {
  const t = targets(); if (!t.length) return alert('出力する書籍がありません。');
  download(`ebooks_${stamp()}.json`, JSON.stringify(t, null, 2), 'application/json');
}
async function copyJSON() {
  const t = targets(); if (!t.length) return alert('出力する書籍がありません。');
  try { await navigator.clipboard.writeText(JSON.stringify(t, null, 2)); alert(t.length + '件をクリップボードにコピーしました。'); }
  catch { alert('コピーに失敗しました。JSONボタンでファイル出力してください。'); }
}

// ---------- JSONエディタ ----------
function fillEditor(list) { $('#json-text').value = JSON.stringify(list, null, 2); dirty = false; setStatus(''); }
function mergeBooks(list, mode) {
  const m = new Map(mode === 'merge' ? books.map(b => [keyOf(b), b]) : []);
  let added = 0;
  for (const b of list) { const k = keyOf(b); if (!m.has(k)) added++; m.set(k, b); }
  books = [...m.values()]; sel.clear(); save(); render();
  return added;
}
function apply(mode) {
  try {
    const added = mergeBooks(parse($('#json-text').value), mode);
    fillEditor(books);
    setStatus(`反映しました: 全${books.length}件（新規 ${added}件）`, 'ok');
  } catch (e) { setStatus('❌ ' + e.message, 'err'); }
}
async function addFromClipboard() {
  let text = '';
  try {
    text = await navigator.clipboard.readText();
  } catch {
    // 権限がない・ブラウザが拒否した場合は、JSONタブの入力欄から貼り付けてもらう
    showView('editor');
    $('#json-text').focus();
    setStatus('クリップボードを直接読み取れませんでした。JSONを貼り付けてから「マージして反映」を押してください。', 'err');
    return;
  }
  if (!text.trim()) { setStatus('クリップボードにJSONがありません。', 'err'); return; }
  try {
    const list = parse(text);
    const added = mergeBooks(list, 'merge');
    setStatus(`${added}件を追加しました（全${books.length}件）。`, 'ok');
    alert(`${added}件を追加しました（全${books.length}件）。`);
  } catch (e) {
    showView('editor');
    $('#json-text').value = text;
    dirty = true;
    setStatus('❌ ' + e.message, 'err');
  }
}

// ---------- ブックマークレット ----------
function buildBookmarklets() {
  for (const [site, def] of Object.entries(BOOKMARKLETS)) {
    const box = $('#bm-' + site);
    for (const [label, fn, cls] of def.items) {
      const a = document.createElement('a');
      a.className = 'bm ' + cls; a.textContent = label; a.href = bmHref(fn, def.key);
      box.appendChild(a);
    }
  }
}

// ---------- イベント ----------
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + name));
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === name));
  if (name === 'editor' && !dirty) fillEditor(books);
}
document.querySelectorAll('.tab').forEach(t => t.onclick = () => showView(t.dataset.view));
$('#search').oninput = render;
$('#site-filter').onchange = render;
document.querySelectorAll('th.sortable').forEach(th => th.onclick = () => {
  const k = th.dataset.sort;
  sort = sort.key === k ? { key: k, asc: !sort.asc } : { key: k, asc: true };
  // 並べ替え結果を保存データの順序にも反映する（出力・コピーも同じ順序になる）
  books.sort((a, b) => {
    const c = (a[k] || '').localeCompare(b[k] || '', 'ja', { numeric: true, sensitivity: 'base' });
    return sort.asc ? c : -c;
  });
  save(); render();
});
$('#rows').onclick = e => {
  const d = e.target.closest('[data-del]');
  if (d) { const b = view[+d.dataset.del]; if (confirm(`「${b.title}」を削除しますか？`)) { books = books.filter(x => x !== b); sel.delete(b); save(); render(); } return; }
  const c = e.target.closest('input[data-i]');
  if (c) { const b = view[+c.dataset.i]; c.checked ? sel.add(b) : sel.delete(b); render(); }
};
$('#chk-all').onchange = e => { view.forEach(b => e.target.checked ? sel.add(b) : sel.delete(b)); render(); };
$('#sel-all').onclick = () => { view.forEach(b => sel.add(b)); render(); };
$('#sel-none').onclick = () => { sel.clear(); render(); };
$('#del-sel').onclick = () => {
  if (!sel.size) return alert('削除する書籍を選択してください。');
  if (confirm(`選択した ${sel.size} 件を削除しますか？`)) { books = books.filter(b => !sel.has(b)); sel.clear(); save(); render(); }
};
$('#clip-add').onclick = addFromClipboard;
$('#exp-csv').onclick = exportCSV; $('#exp-json').onclick = exportJSON; $('#copy-json').onclick = copyJSON;
$('#json-text').oninput = () => { dirty = true; };
$('#ed-replace').onclick = () => apply('replace');
$('#ed-merge').onclick = () => apply('merge');
$('#ed-format').onclick = () => { try { $('#json-text').value = JSON.stringify(parse($('#json-text').value), null, 2); setStatus('整形しました。', 'ok'); } catch (e) { setStatus('❌ ' + e.message, 'err'); } };
$('#ed-all').onclick = () => fillEditor(books);
$('#ed-selected').onclick = () => sel.size ? fillEditor(books.filter(b => sel.has(b))) : setStatus('ライブラリで書籍を選択してください。', 'err');
$('#ed-file').onclick = () => $('#file-input').click();
$('#file-input').onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  $('#json-text').value = await f.text(); dirty = true; setStatus(`${f.name} を読み込みました。反映ボタンで取り込みます。`); e.target.value = '';
};
const modal = open => $('#overlay').classList.toggle('open', open);
$('#open-bm').onclick = () => modal(true);
$('#close-bm').onclick = () => modal(false);
$('#overlay').onclick = e => { if (e.target.id === 'overlay') modal(false); };
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal(false); });

load(); buildBookmarklets(); render();
