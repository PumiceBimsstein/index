/**
 * 掲載コンテンツのデータ定義
 * カテゴリーやアイテムの追加・変更・削除・並び替えはここを編集します。
 * thumbnail は任意項目です。省略時は画像領域が表示されません。
 */
const contents = [
  {
    title: "Web Apps",
    items: [
      {
        title: "Pumice",
        description: "Markdown対応のドキュメント作成・閲覧ツール。データはローカルに保存され、AI機能はなし。自信作。",
        url: "https://pumicebimsstein.github.io/Pumice/",
        // thumbnail: "./images/Pumice.png"
      },
      {
        title: "Mica",
        description: "CSVやJSONをカード形式で表示するデータビューア。電子書籍の本棚として作りました。フィルターがいい感じ。",
        url: "https://pumicebimsstein.github.io/Mica/",
        // thumbnail: "./images/palette.png"
      }
    ]
  },
  {
    title: "Tools",
    items: [
      {
        title: "ページデザインランダム生成",
        description: "ウェブページのデザイン案をランダムに組み合わせてAI用プロンプトを生成するツール。思いもよらないデザインが生まれます。",
        url: "./randomdesign/",
        // thumbnail: "./images/notes-design.png"
      },
      {
        title: "書籍データ収集のためのブラウザ拡張機能(現在非公開)",
        description: "電子書籍サイトから購入済みの書籍のデータを取得して一覧にする拡張機能。Micaで使用するデータを収集するために作成。面倒なので使う価値なし。",
        url: ""
        // thumbnail 省略例
      },
      {
        title: "書籍データ収集ツール（簡易版）",
        description: "電子書籍サイトから購入済みの書籍の一覧と最低限の情報を取得する。Micaで使用するデータを収集するために作成。",
        url: "./bookmarklet/"
        // thumbnail 省略例
      }
    ]
  },
  {
    title: "Notes & Documents",
    items: [
      {
        title: "リサジュー図形を眺める",
        description: "SVGで動くリサジュー図形を眺める。",
        url: "./Lissajousgraph/",
        // thumbnail: "./images/notes-design.png"
      },
      // {
      //   title: "エディトリアルデザインの配色規則",
      //   description: "書籍・雑誌の装丁から学ぶアースカラーのトーンバランスまとめ。",
      //   url: "./notes/editorial-colors/"
      // },
      // {
      //   title: "個人サイト運用チェックリスト",
      //   description: "GitHub Pagesの運用とアクセシビリティを維持するための覚え書き。",
      //   url: "./notes/deployment-checklist/"
      // }
    ]
  }
];