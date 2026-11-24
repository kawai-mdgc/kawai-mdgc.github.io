# 公開までのセットアップ（動向レポート作成ツール）

月次総会スライド生成と同じ「Googleログイン＋Firebase」の構成です。**Firebaseの設定だけ、コンソールで1回やる必要があります**（アカウント・プロジェクト作成は代行できません）。

## 1. Firebaseプロジェクトを作る
1. https://console.firebase.google.com/ → 「プロジェクトを追加」（名前の例：doukou-report）。Googleアナリティクスは不要。
2. **Authentication** → 「始める」→ ログイン方法で **Google** を有効化（サポートメールは自分のアドレス）。
3. Authentication → 設定 → **承認済みドメイン** に `kawai-mdgc.github.io` を追加。
4. **Firestore Database** → 「データベースを作成」→ 本番モード → ロケーションは `asia-northeast1`（東京）。
5. Firestore → 「ルール」に、同梱の `firestore.rules` の中身を貼って「公開」。
   → `@madoguchi.inc` のメール確認済みアカウント以外は、データを読むことも書くこともできません。
6. プロジェクトの設定 → 「マイアプリ」→ Web（`</>`）を追加 → 表示される `firebaseConfig` をコピー。

## 2. config.js に貼る
- `firebase:` に、コピーした設定を貼る。
- `admins:` に、承認・差し戻し・設定変更ができる人のメールアドレスを入れる。

## 3. 公開（GitHub Pages）
`kawai-mdgc.github.io/doukou-report/` にフォルダごと置いて push すると、
https://kawai-mdgc.github.io/doukou-report/ で開けます。

**公開してはいけないもの**：`private/` フォルダ（過去号の中身が入っています）。公開用フォルダには含めません。

## 4. 過去号データの取り込み（最初の1回）
管理者でログイン →「進捗・設定」→「過去号データの取り込み」で `private/seed-data.json` を選ぶ。

## 補足
- 承認などの権限（管理者のみ）は画面上の制御です。データ自体は、`@madoguchi.inc` の人なら誰でも書き換えられる設定です（社内ツールとして想定）。
- 作成者・編集者・提出/承認の履歴は、各レポートに自動で記録されます。
