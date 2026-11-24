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
  admins: [
    // 承認・差し戻し・設定変更ができる人のメールアドレス（例："taro@madoguchi.inc"）
    "m.kawai@madoguchi.inc"
  ]
};
