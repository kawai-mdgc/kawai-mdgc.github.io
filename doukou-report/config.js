// 動向レポート作成ツールの設定
// firebase: Firebaseコンソール →「プロジェクトの設定」→「マイアプリ(Web)」に出てくる firebaseConfig をそのまま貼る。
//           null のままだと、ローカルで開いた時だけ「デモ」として動き、公開サイトではログインできません。
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDgMxVWqD6OWmiNKowzfaUw6TBboxukaX4",
    authDomain: "doukou-report.firebaseapp.com",
    projectId: "doukou-report",
    storageBucket: "doukou-report.firebasestorage.app",
    messagingSenderId: "674156809468",
    appId: "1:674156809468:web:34152214a491da8f5a9b79"
  },
  /* 例：
  firebase: {
    apiKey: "...", authDomain: "xxxx.firebaseapp.com", projectId: "xxxx",
    storageBucket: "xxxx.appspot.com", messagingSenderId: "...", appId: "..."
  },
  */
  allowedDomain: "madoguchi.inc",   // このドメインのGoogleアカウントだけ入れます
  // 管理者（設定ボタンが見え、編集権限の申請を承認できる人）と、最初から編集・削除できる人。
  // メールアドレスは公開ファイルに載せないよう、SHA-256のハッシュで持っています。
  adminHashes: [
    "0ba11eb556e64819154d3233ddee4b1f907cb8b6980de9582499e8acdc8b8912",
    "b98013a941ecd7b9c63b9836cd9bb80ee998685a4ae9a842a731fb9125566306",
    "11b6eee7f09321e58e52aab284ab2202d7c8e8652a4d48d5f41cd2f45b5fca55"
  ],
  // テスト用：この人のログイン中だけ、日付をずらして表示する（ほかの人には影響しない）。不要になったら削除する
  timeTravel: { "0ba11eb556e64819154d3233ddee4b1f907cb8b6980de9582499e8acdc8b8912": "2026-12-01" },
  // 各事業部の事業部長：この人には、自分の事業部の通知（提出期限・Driveの共有確認）だけが届く。ここにいない人には通知は届かない
  divisionHeads: {
    osouji:   ["1d25105830f33cff654f01703dc4d3e02a0454a5798bfa4f4b360987e5a058d6"],
    fuyouhin: ["eb9d1ae44321deeeac6464179d9eee76ba8911b450d406d3912dd04e29278675"],
    kaitori:  ["0d3e05eb6dcf693f9f4c88e36fe79a5114d8034abe165f46f709fe0891027152"],
    gaiheki:  ["4ca4fc276676d9288a78e41ed5b7862e2bf4bc5bad90f5907a0e96ae48f724da"],
    kaitai:   ["363fb37ebef64220824acd0776036d979d38ec6a6ef6017ba4609181be063923"]
  },
  // Driveへの格納を記録できる人（m.kawai）／共有設定を全事業部ぶん確認できる人（m.kawai）。事業部長は、自分の事業部だけ確認できる
  driveStoreHashes: ["0ba11eb556e64819154d3233ddee4b1f907cb8b6980de9582499e8acdc8b8912"],
  driveCheckHashes: ["0ba11eb556e64819154d3233ddee4b1f907cb8b6980de9582499e8acdc8b8912"],
  editorHashes: [
    "4467215d0c079012bca2b8305a5d7e6df3098d367a0a08807c252884054ef617",
    "d3ed6f4c6c2174d9fcd42a9e7cd1f57fbd614526394c4a1e92cd46062ab6681a",
    "651b80274f10e8ba506649c4731f73085a87877612ea7c0d0b1ab90e7c81ebc2",
    "1d25105830f33cff654f01703dc4d3e02a0454a5798bfa4f4b360987e5a058d6",
    "4ca4fc276676d9288a78e41ed5b7862e2bf4bc5bad90f5907a0e96ae48f724da",
    "eb9d1ae44321deeeac6464179d9eee76ba8911b450d406d3912dd04e29278675",
    "363fb37ebef64220824acd0776036d979d38ec6a6ef6017ba4609181be063923",
    "0d3e05eb6dcf693f9f4c88e36fe79a5114d8034abe165f46f709fe0891027152"
  ]
};
