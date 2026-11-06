// 各関数は単体で実行されるため、外部の変数に依存しないこと（toString で javascript: URL にする）
function bmDbook(K) {
  var items = document.querySelectorAll('.p-contents,.bw_listItems_item');
  if (!items.length) { alert('書籍一覧が見つかりませんでした。dbookの一覧ページで実行してください。'); return; }
  var abs = function (u) { try { return u ? new URL(u, location.href).href : ''; } catch (e) { return u || ''; } };
  var saved = JSON.parse(localStorage.getItem(K) || '[]');
  var count = 0;
  items.forEach(function (el) {
    var readBtn = el.querySelector('.btn-read_now');
    if (!readBtn) return; // 「今すぐ読む」ボタンがある（購入済みの）書籍だけを対象にする
    var titleEl = el.querySelector('.bw_listTitle');
    var authorEl = el.querySelector('.bw_listAuthor');
    var pageLinkEl = el.querySelector('a.bw_listLink');
    var imgEl = el.querySelector('img.ad-cover');
    var onclickStr = readBtn.getAttribute('onclick') || '';
    var readMatch = onclickStr.match(/location\.href='([^']+)'/);
    var readingURL = readMatch ? readMatch[1].replace(/&amp;/g, '&').replace(/\\/g, '') : '';
    var title = titleEl ? titleEl.innerText.trim() : '';
    var author = authorEl ? authorEl.innerText.trim() : '';
    var bookPage = pageLinkEl ? pageLinkEl.getAttribute('href') : '';
    var coverImage = imgEl ? imgEl.getAttribute('src') : '';
    if (!title) return;
    if (!saved.some(function (b) { return b.bookPage === abs(bookPage) || b.title === title; })) {
      saved.push({ title: title, author: author, ebookSite: 'dbook', bookPage: abs(bookPage), readingURL: abs(readingURL), coverImage: coverImage });
      count++;
    }
  });
  localStorage.setItem(K, JSON.stringify(saved));
  alert(count + '件の購入済み書籍を追加しました！（蓄積合計: ' + saved.length + '件）');
}

function bmBookwalker(K) {
  if (!location.href.includes('bookwalker.jp/holdBooks')) { alert('BOOK☆WALKERの保有書籍一覧ページ（https://bookwalker.jp/holdBooks/）で実行してください。'); return; }
  var items = document.querySelectorAll('section.book-item');
  if (!items.length) { alert('書籍が見つかりませんでした。'); return; }
  var saved = JSON.parse(localStorage.getItem(K) || '[]');
  var count = 0;
  items.forEach(function (el) {
    var tl = el.querySelector(".book-tl-txt h2 a, a[data-action-label='タイトル']");
    var ae = el.querySelector('.book-meta-item-author');
    var rl = el.querySelector("a.book-status-viewer, a[data-action-label='この本を読む']");
    var im = el.querySelector('.book-img img');
    var title = tl ? tl.textContent.trim() : '';
    if (!title) return;
    var author = '';
    if (ae) { var c = ae.cloneNode(true), bt = c.querySelector('.book-meta-btn'); if (bt) bt.remove(); author = c.textContent.trim(); }
    var bookPage = tl.href;
    var readingURL = rl ? rl.href : '';
    if (saved.some(function (b) { return b.bookPage === bookPage || b.title === title; })) return;
    saved.push({ title: title, author: author, ebookSite: 'bookwalker', bookPage: bookPage, readingURL: readingURL, coverImage: im ? (im.src || im.getAttribute('data-src') || '') : '' });
    count++;
  });
  localStorage.setItem(K, JSON.stringify(saved));
  var m = location.search.match(/page=(\d+)/), next = (m ? parseInt(m[1], 10) : 1) + 1;
  if (confirm(count + '件の書籍を追加しました（蓄積合計: ' + saved.length + '件）\n\n続けて次のページ（page=' + next + '）へ移動しますか？')) {
    location.href = 'https://bookwalker.jp/holdBooks/?page=' + next;
  }
}

function bmCopy(K) {
  var raw = localStorage.getItem(K);
  if (!raw || raw === '[]') { alert('蓄積データがありません。先に本を取得してください。'); return; }
  // 古い版で保存された addedAt などを除き、ebook-library が受け付ける項目だけを出力する
  var list = JSON.parse(raw).map(function (o) {
    var r = { title: o.title || '', author: o.author || '', ebookSite: o.ebookSite || '' };
    if (o.bookPage) r.bookPage = o.bookPage;
    r.readingURL = o.readingURL || '';
    r.coverImage = o.coverImage || '';
    return r;
  });
  var text = JSON.stringify(list, null, 2);
  var done = function () { alert('クリップボードにコピーしました。\nebook-library の「クリップボードから追加」で取り込めます。'); };
  var fb = function () { prompt('以下をCtrl+Cでコピーしてください:', text); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fb); else fb();
}

function bmDel(K) {
  var raw = localStorage.getItem(K);
  if (!raw || raw === '[]') { alert('削除するデータはありません。'); return; }
  if (confirm('このサイトの蓄積データをすべて削除しますか？（取り消せません）')) { localStorage.removeItem(K); alert('削除しました。'); }
}

const BOOKMARKLETS = {
  dbook: { key: 'dbook_purchased_books', items: [['一覧を取得', bmDbook, ''], ['データをコピー', bmCopy, 'copy'], ['蓄積を削除', bmDel, 'del']] },
  bookwalker: { key: 'bookwalker_purchased_books', items: [['一覧を取得', bmBookwalker, ''], ['データをコピー', bmCopy, 'copy'], ['蓄積を削除', bmDel, 'del']] }
};
const bmHref = (fn, key) => 'javascript:' + encodeURIComponent('(' + fn + ')(' + JSON.stringify(key) + ')');
