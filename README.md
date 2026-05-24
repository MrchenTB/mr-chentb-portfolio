# Mr.ChenTB Portfolio

我的個人作品集網站，記錄資料分析、AI 應用與商業問題探索的 Side Project。

> 🌐 Live demo: https://mr-chentb-portfolio.vercel.app/#about

## ✨ Features

- 🌏 **雙語支援** — 繁體中文 / English，預設中文，使用者偏好寫入 localStorage
- 📱 **響應式設計** — 桌機 / 平板 / 手機皆已調適
- 🎴 **Project Case Studies** — 4 個 Side Project 個案研究頁
- ✨ **Interactive Hero** — Canvas 粒子網路背景動畫，支援 `prefers-reduced-motion`
- 🎨 **客製化視覺系統** — 暖米色 + 金色點綴，Inter + Fraunces 字體配對

## 🛠 Tech Stack

- **Framework**：React 19 + TypeScript
- **Build Tool**：Vite 8
- **Styling**：CSS Modules + CSS Custom Properties
- **Fonts**：Inter、Fraunces（Google Fonts）
- **Deployment**：Vercel

## 📁 Project Structure

```
my-web/
├── public/              # 靜態資源（圖片、PDF）
│   └── projects/        # 各專案圖片 / 簡報
├── src/
│   ├── components/      # React 元件 + CSS Modules
│   ├── data/            # 專案資料（projects.ts）
│   ├── i18n/            # 雙語 context + 翻譯內容
│   └── styles/          # 全域樣式與設計 token
├── index.html
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/MrchenTB/<repo-name>.git
cd <repo-name>

# 2. Install
npm install

# 3. 開發伺服器
npm run dev

# 4. 生產建置
npm run build

# 5. 預覽建置結果
npm run preview
```

## 📦 Deployment

部署到 Vercel：
1. Import GitHub repo
2. Framework preset 自動選 **Vite**
3. Build command：`npm run build`
4. Output directory：`dist`
5. 無需環境變數

## 📄 License

© 2026 Mr.ChenTB. All rights reserved.
