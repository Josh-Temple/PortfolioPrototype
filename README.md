# PortfolioPrototype

## この構成を選んだ理由
既存の構成が空に近いので、ビルド不要で静的ホスティングにそのまま置ける「HTML + CSS + JavaScript」のシンプル構成にしました。
依存がなく、読み込みが軽く、将来の編集点も1箇所に集約しやすいのが理由です。

## ローカル起動
```bash
python -m http.server 8080
```
ブラウザで `http://localhost:8080` を開いてください。

## ビルド
ビルド不要です。静的ファイルをそのままホスティングできます。

## 編集ポイント
- (a) 文章: `index.html` / `about.html` / `contact.html`
- (b) 作品: `data/projects.js`
- (c) リンク: `index.html` の Links セクション、`contact.html`
- (d) アクセント色: `styles.css` の `--accent`

## 静的ホスティング
GitHub Pages などに、リポジトリのルートをそのまま配置すれば動きます。

## ページ一覧
- `index.html`: トップ
- `projects.html`: 作品一覧
- `about.html`: プロフィール
- `contact.html`: 連絡先・リンク集
