import type { Project } from '../data/projects';

/**
 * Chinese (zh-Hant) overrides for each project. Only text fields are listed.
 * Image paths, file paths, github links, tableau links, etc. are NOT included
 * — they are inherited from the English source in src/data/projects.ts.
 */
export const projectsZh: Record<string, Partial<Project>> = {
  'ai-cup-table-tennis': {
    title: 'AI CUP — 桌球預測競賽',
    blurb:
      '基於序列的多任務分類模型，從桌球競賽每一回合的序列預測下一拍動作、落點位置與得分結果。',
    type: '深度學習',
    role: '模型開發與實驗管理',
    metrics: [
      { label: 'Public LB 分數', value: '0.3165533' },
      { label: '最佳名次', value: '第 39 名' },
      { label: '任務類型', value: '多任務序列分類' },
      { label: '模型', value: 'LSTM' },
    ],
    paf: {
      problem:
        '如何透過每一回合的序列資料，穩定地預測下一拍的動作、落點位置與發球方是否得分？',
      approach:
        '將每一場 rally 視為序列資料，先進行資料前處理與類別特徵編碼，再設計前一拍資訊、拍次奇偶、落點與持拍手交叉等特徵工程。接著使用多任務 LSTM 模型同時預測下一拍動作、落點與得分結果，並透過 TensorBoard 與 MLflow 追蹤實驗紀錄、比較模型表現與調整訓練策略。',
    },
    pipeline: ['回合序列', '前綴樣本', '特徵工程', 'LSTM 架構'],
    roleCards: [
      {
        title: '前綴樣本設計',
        description:
          '設計每一回合的前綴樣本，讓訓練條件更接近測試時的部分序列情境。',
      },
      {
        title: '特徵工程',
        description:
          '加入前一拍特徵、回合順序指標、落點互動特徵等脈絡資訊。',
      },
      {
        title: '模型開發',
        description:
          '以 PyTorch 建構多任務 LSTM 模型，並為每個任務設計獨立預測頭。',
      },
      {
        title: '實驗追蹤',
        description:
          '使用 MLflow 與 TensorBoard 追蹤實驗，並依據結果調整訓練策略。',
      },
    ],
    leaderboardDesc:
      '模型在 Public Leaderboard 取得 0.3165533 的分數，最高名次達第 39 名。',
    leaderboardCaption: 'Public Leaderboard 結果：0.3165533，最高名次第 39 名。',
    detail: {
      overview:
        '本專案參與 2025 AI CUP 桌球擊球預測競賽，任務是依據桌球回合序列資料，預測下一拍動作、落點位置與發球方是否得分。',
      goal: '建立以序列為核心的深度學習模型，能在僅有部分前段回合資訊的情況下，做出穩定的預測。',
      role: '負責前綴樣本設計、特徵工程、以 PyTorch 建構多任務 LSTM 模型、實驗追蹤，以及依驗證表現調整模型。',
      process: [
        '分析競賽任務，將其重新定義為多任務序列分類問題。',
        '從完整回合中生成前綴樣本，使訓練資料更貼近測試時的部分序列情境。',
        '設計擊球層級與脈絡特徵，包含前一拍資訊、回合順序、落點互動特徵。',
        '以 PyTorch 建構 LSTM 模型，並設計三個任務獨立的輸出頭。',
        '使用 MLflow 與 TensorBoard 追蹤實驗，並依據驗證表現調整參數。',
      ],
      challenges:
        '主要挑戰在於：完整回合資料與測試時的部分片段之間存在落差。若模型只從完整序列學習，可能難以在僅有少量前段拍次時保持穩定表現。',
      solution:
        '為了縮小這個落差，我從完整回合生成前綴樣本，並加入前一拍屬性、回合順序、落點互動等脈絡特徵。最終模型以 LSTM 為骨幹，為動作、落點與得分各自設計輸出頭。',
      outcome:
        '模型在 Public Leaderboard 取得 0.3165533 分，最高排名第 39 名。',
      reflection:
        '這是我第一次參與深度學習的建模競賽，這次的經驗讓我學會如何根據問題的描述選擇對應的資料處理方式與模型，以及如何使用實驗追蹤工具來管理模型開發過程。若有機會繼續參與類似的競賽，我會嘗試引入更多樣化的模型架構，並進行更細緻的特徵工程與超參數調整。',
    },
  },

  'fresiq-smart-food-box': {
    title: 'FresIQ — 智慧食材管理盒',
    blurb:
      '結合影像辨識與APP儀表板的 AI 冰箱管理 MVP，協助使用者掌握食材新鮮度、減少浪費。',
    type: 'AI應用',
    role: 'IoT視覺辨識與軟體開發',
    processImages: [
      {
        src: '/projects/fresiq/process-01.jpg',
        alt: 'FresIQ 黑客松開發過程照片',
        caption: '黑客松開發過程與團隊討論現場。',
      },
      {
        src: '/projects/fresiq/process-02.jpg',
        alt: 'FresIQ MVP 雙手機展示設定',
        caption: '雙手機 MVP 展示設定：一端進行食材辨識，另一端顯示儀表板。',
      },
    ],
    pitchSlides: [
      { src: '/projects/fresiq/deck/page-01.png', alt: 'FresIQ 簡報第 1 頁' },
      { src: '/projects/fresiq/deck/page-02.png', alt: 'FresIQ 簡報第 2 頁' },
      { src: '/projects/fresiq/deck/page-03.png', alt: 'FresIQ 簡報第 3 頁' },
      { src: '/projects/fresiq/deck/page-04.png', alt: 'FresIQ 簡報第 4 頁' },
      { src: '/projects/fresiq/deck/page-05.png', alt: 'FresIQ 簡報第 5 頁' },
      { src: '/projects/fresiq/deck/page-06.png', alt: 'FresIQ 簡報第 6 頁' },
      { src: '/projects/fresiq/deck/page-07.png', alt: 'FresIQ 簡報第 7 頁' },
      { src: '/projects/fresiq/deck/page-08.png', alt: 'FresIQ 簡報第 8 頁' },
      { src: '/projects/fresiq/deck/page-09.png', alt: 'FresIQ 簡報第 9 頁' },
      { src: '/projects/fresiq/deck/page-10.png', alt: 'FresIQ 簡報第 10 頁' },
      { src: '/projects/fresiq/deck/page-11.png', alt: 'FresIQ 簡報第 11 頁' },
      { src: '/projects/fresiq/deck/page-12.png', alt: 'FresIQ 簡報第 12 頁' },
      { src: '/projects/fresiq/deck/page-13.png', alt: 'FresIQ 簡報第 13 頁' },
    ],
    awardImage: {
      src: '/projects/fresiq/award-photo.jpg',
      alt: 'FresIQ 團隊獲獎合照',
      caption: '獲得「最佳價值創造」特別評審獎，並晉級全國決賽。',
    },
    featureCards: [
      {
        title: '食材辨識',
        description:
          '透過盒內鏡頭拍攝食材，並以 Gemini API 辨識品項。',
      },
      {
        title: '庫存追蹤',
        description:
          '顯示食材名稱、分類、保存天數、剩餘天數與新鮮度狀態。',
      },
      {
        title: '優先提醒',
        description:
          '透過視覺化狀態卡片，提醒使用者優先處理即將過期的食材。',
      },
      {
        title: '採買建議',
        description:
          '在採買前提醒已有食材，避免重複購買。',
      },
      {
        title: '食材減少浪費量的估算',
        description:
          '估算更好的食材管理可帶來的節省與減少浪費的潛在效益。',
      },
    ],
    demoFlow: [
      {
        label: '手機 A',
        description: '作為盒內鏡頭，負責拍攝食材影像。',
      },
      {
        label: 'Gemini API',
        description: '辨識食材並回傳結構化資訊。',
      },
      {
        label: '手機 B',
        description: '顯示儀表板：庫存狀態、提醒與建議。',
      },
    ],
    esgCards: [
      {
        label: 'E',
        title: '環境',
        description:
          '幫助使用者在食材過期前就把它吃完，藉此減少食物浪費。',
      },
      {
        label: 'S',
        title: '社會',
        description:
          '降低家庭食材管理的負擔，特別是學生、租屋族與小家庭使用者。',
      },
      {
        label: 'G',
        title: '治理',
        description:
          '把永續行為轉化為可追蹤的庫存資料、提醒與決策支援。',
      },
    ],
    summary:
      'FresIQ 是我們在技職盃黑客松競賽中所開發的MVP。比賽要求在環境變遷下，提出可落地的 ESG 消費行為改變方案；我們將焦點放在日常的食物浪費，設計一款能讓冰箱資訊「被看見」的智慧儲存盒。',
    challengeContext:
      '比賽的題目為：產業或生活消費模式因環境變遷，需做有效的改變。請提出一項符合 ESG 的有效改變消費行為方式。我們不把 ESG 當作抽象概念，而是回到一個熟悉的生活情境──人們如何忘記自己曾經購買的食物。',
    problemInsight:
      '食物浪費並非總是來自疏忽。在許多日常情境裡，使用者其實看不清楚冰箱裡有什麼：食材被遺忘、保存期限變得模糊、又因此重複購買。FresIQ 想做的，是把「看不見的冰箱資訊」轉化為可見的提醒、庫存狀態與採買建議。',
    esgIntro:
      'FresIQ 把 ESG 與日常行為改變連結起來。透過協助使用者認識既有食材、優先處理即將過期的食物、避免重複購買，系統鼓勵更負責任的消費，同時降低家庭食物浪費。',
    outcomeText:
      '本專案在全國分區賽中獲得「最佳價值創造」特別評審獎，並晉級全國決賽。這段經驗讓我體會到：一個技術專案的價值，不來自於複雜且高深的技術，而是能否回應真實需求、降低使用者負擔，並被他人清楚理解。',
    reflectionText:
      '這個專案讓我學會如何以使用者為中心，結合科技打造出能夠解決痛點的產品，並且在極短的時間內完成原形的製作，並傳達所有的重點資訊。',
    pitchDescription:
      '簡報內容涵蓋競賽情境、問題洞察、MVP 概念、展示流程、使用者價值，以及 FresIQ 的永續影響。',
    detail: {
      overview:
        'FresIQ 是一個在全國技職黑客松中開發的智慧冰箱儲存盒 MVP，希望解決一個日常但普遍的問題：食材常被忘記、悄悄過期，或因為冰箱資訊看不清楚而重複購買。',
      goal: '透過影像辨識、新鮮度追蹤與簡潔的儀表板，把冰箱庫存資訊變得可見，協助使用者優先處理即將過期的食材，降低食物浪費。',
      role: '參與產品概念發展、使用者情境設計、系統流程規劃、MVP 開發以及簡報故事設計。協助把「食物浪費」這個問題拆解成四個核心功能：食材辨識、庫存追蹤、狀態提醒與採買建議。',
      process: [
        '盤點冰箱管理痛點：被遺忘的食材、模糊的保存期限、重複購買。',
        '將 MVP 核心概念定義為：透過智慧儲存盒與儀表板，讓被隱藏的冰箱資訊「被看見」。',
        '設計雙手機展示流程：一支手機作為盒內鏡頭，另一支手機顯示使用者儀表板。',
        '使用 FastAPI、Gemini API、HTML、CSS、JavaScript、Jinja2 與本地 JSON 完成原型。',
        '從使用者價值、食物浪費減量與 ESG 影響三個面向，建構簡報故事。',
      ],
      challenges:
        '主要挑戰是：如何在黑客松有限的時間內，把一個廣泛的永續議題收斂成可被理解、可被展示，又真正貼近使用者的 MVP。',
      solution:
        '我們做了一個雙手機 MVP：一支手機作為盒內鏡頭，負責拍攝食材；另一支手機則顯示包含辨識結果、庫存狀態、新鮮度、提醒與採買建議的儀表板。FastAPI 負責串接前端介面、Gemini API 影像辨識，與本地 JSON 的庫存更新。',
      outcome:
        '本專案在全國分區賽中獲得「最佳價值創造」特別評審獎，並晉級全國決賽。這段經驗讓我理解：技術專案的價值，並不只在於功能完成度，而在於能否回應真實需求、降低使用者負擔，並被他人清楚理解。',
      reflection:
        '本專案讓我學會把產品思維、AI 能力與以使用者為中心的敘事串連起來。若延續這個專案，我會優先強化辨識穩定度、加入更完整的資料庫，並在真實的冰箱使用情境中與使用者一起測試。',
    },
  },

  'sas-customer-churn-prediction': {
    title: 'SAS 黑客松 — 顧客流失預測',
    blurb:
      '結合了商業問題定義、EDA、特徵工程與模型建置與評估的顧客流失預測專案。',
    type: '資料分析',
    role: '分析規劃與模型建置',
    caseMetrics: [
      { label: '專案類型', value: '顧客流失預測' },
      { label: '應用領域', value: '電信業分析' },
      { label: '目標變數', value: 'CHURN' },
      { label: '方法', value: 'EDA · 特徵工程 · 模型比較' },
    ],
    dataFields: [
      {
        name: 'AGE',
        description: '顧客年齡',
        note: '資料中含有異常值（如 -1 與 129），需先進行檢驗。',
      },
      {
        name: 'P_TYPE',
        description: '合約方案類型',
        note: '包含租機、購機與既有手機等不同方案。',
      },
      {
        name: 'MINUTES',
        description: '最近一個月語音使用分鐘數',
        note: '含有負值等異常情況需要處理。',
      },
      {
        name: 'DATA',
        description: '每月行動數據量（GB）',
        note: '範圍含有異常值，需謹慎處理。',
      },
      {
        name: 'TECH_PROBLEM',
        description: '最近一個月回報的技術問題次數',
      },
      {
        name: 'TOTAL_TECH_PROBLEM',
        description: '過去 12 個月內回報的技術問題總次數',
      },
      { name: 'CP', description: '最近一個月的客訴次數' },
      {
        name: 'CHURN',
        description: '顧客是否在 12 個月內流失',
        note: '目標變數：1 = 流失，0 = 留存。',
      },
    ],
    analysisFlow: [
      {
        title: '問題定義',
        description: '將顧客留存議題轉換為二元分類的流失預測問題。',
      },
      {
        title: '資料理解',
        description:
          '檢視顧客輪廓、合約資訊、服務使用行為與客訴相關變數。',
      },
      {
        title: 'EDA 與資料品質檢查',
        description:
          '探索流失分佈、異常值範圍、遺漏值、離群值與變數背後可能的商業意義。',
      },
      {
        title: '特徵工程',
        description:
          '設計衍生特徵：服務使用程度、不滿意指標、顧客分群、每月裝置負擔等。',
      },
      {
        title: '模型建置與比較',
        description:
          '比較 Logistic Regression、SVM、GBM、Random Forest 等模型。',
      },
      {
        title: '評估與應用',
        description:
          '以 AUC、F1 Score、Accuracy 評估表現，並思考模型結果如何支援留客策略。',
      },
    ],
    toolCards: [
      {
        title: 'SAS Visual Analytics',
        description:
          '用於探索性分析，視覺化流失樣態，並理解顧客屬性與流失風險之間的關聯。',
      },
      {
        title: 'SAS Model Studio',
        description:
          '用於資料前處理、建模、模型比較與預測表現評估。',
      },
      {
        title: 'SAS Studio',
        description:
          '用於手動特徵工程、轉換邏輯，以及自定義程式碼分析。',
      },
      {
        title: 'Generative AI',
        description:
          '輔助分析規劃、提示工程設計，並協助生成商業詮釋的想法。',
      },
    ],
    sasScreenshots: [
      {
        src: '/projects/sas/screenshots/visual-analytics.jpg',
        alt: 'SAS Visual Analytics 顧客流失視覺化截圖',
        caption: '透過 SAS Visual Analytics 探索流失樣態與顧客行為。',
        category: 'Visual Analytics',
      },
      {
        src: '/projects/sas/screenshots/model-studio.jpg',
        alt: 'SAS Model Studio 建模畫面截圖',
        caption: '在 SAS Model Studio 中建構並比較預測模型。',
        category: 'Model Studio',
      },
      {
        src: '/projects/sas/screenshots/feature-engineering-code.jpg',
        alt: 'SAS Studio 特徵工程程式碼截圖',
        caption: '撰寫自訂的轉換邏輯，用於特徵工程與資料前處理。',
        category: '特徵工程',
      },
    ],
    analysisPlanSlides: [
      { src: '/projects/sas/analysis-plan/page-01.jpg', alt: 'SAS 分析計畫第 1 頁' },
      { src: '/projects/sas/analysis-plan/page-02.jpg', alt: 'SAS 分析計畫第 2 頁' },
      { src: '/projects/sas/analysis-plan/page-03.jpg', alt: 'SAS 分析計畫第 3 頁' },
      { src: '/projects/sas/analysis-plan/page-04.jpg', alt: 'SAS 分析計畫第 4 頁' },
      { src: '/projects/sas/analysis-plan/page-05.jpg', alt: 'SAS 分析計畫第 5 頁' },
      { src: '/projects/sas/analysis-plan/page-06.jpg', alt: 'SAS 分析計畫第 6 頁' },
      { src: '/projects/sas/analysis-plan/page-07.jpg', alt: 'SAS 分析計畫第 7 頁' },
      { src: '/projects/sas/analysis-plan/page-08.jpg', alt: 'SAS 分析計畫第 8 頁' },
      { src: '/projects/sas/analysis-plan/page-09.jpg', alt: 'SAS 分析計畫第 9 頁' },
      { src: '/projects/sas/analysis-plan/page-10.jpg', alt: 'SAS 分析計畫第 10 頁' },
    ],
    summary:
      '本專案為SAS 校園資料科學黑客松。競賽情境為：一家電信公司希望找出高流失風險的顧客，並以資料分析支援未來的留客策略。',
    competitionContext:
      '競賽要求各隊伍以電信公司的客戶流失情境與資料集描述，提出一套完整的分析計畫。初賽聚焦於分析脈絡、SAS 工具運用規劃與線上測驗。比起直接跳入建模，我們需要說明：商業問題、資料結構、前處理策略、建模方法與評估規劃，如何串連成一套完整的分析流程。',
    businessQuestion:
      '精準鎖定具有高流失風險的客戶，並最大化提升挽留客戶活動的投資報酬率與客戶留存率。',
    modelingObjective:
      '將商業目標轉換為資料科學的任務：預測每位顧客在未來 12 個月內是否會流失，並以此排序留客行動的優先順序。',
    dataIntro:
      '使用主辦單位提供的電信顧客資料集，涵蓋顧客輪廓、合約方案、使用行為、技術問題回報、客訴紀錄等，以及作為目標變數的 CHURN。',
    outcomeText:
      '我們透過初賽分析提案與線上測驗晉級複賽，並在現場進行資料建模與預測分析。這段經驗讓我理解：資料科學專案就像是一個不斷迭代的迴圈──從商業問題定義、資料品質檢查，到特徵工程、模型評估與決策應用，環環相扣。',
    reflectionText:
      '這個專案讓我體會：機器學習只是商業分析方案的一部分。一個真正有用的流失預測流程，必須把模型表現、商業詮釋、顧客分群與可執行的留客策略連結起來。若延續這個專案，我會進一步強化特徵驗證、分群層級分析，以及面向商業使用者的可解釋性。',
    detail: {
      overview:
        '本專案為 SAS 校園資料科學黑客松參賽作品。競賽情境是一家電信公司希望辨識高流失風險的顧客，以分析支援未來的留客策略。',
      goal: '把「提升顧客留存率」這個商業目標轉換為二元分類任務，運用顧客輪廓、合約資訊、使用行為與客訴紀錄，預測流失風險。',
      role: '主要負責分析規劃、EDA 方向、特徵工程構思以及模型評估策略。協助把流程從商業問題定義，串到資料探索、特徵設計、模型比較與實際應用。',
      process: [
        '把顧客留存的商業需求，重新定義為流失預測問題。',
        '規劃 EDA 方向：流失分佈、顧客輪廓、合約資訊、使用行為與客訴變數。',
        '設計前處理流程：遺漏值處理、異常值檢查、資料切分與變數角色定義。',
        '構思衍生特徵：服務使用程度、顧客分群、不滿意指標、每月裝置負擔等。',
        '比較多個機器學習模型：Logistic Regression、SVM、GBM、Random Forest。',
        '以 AUC、F1 Score、Accuracy 與交叉驗證評估模型表現。',
      ],
      challenges:
        '主要挑戰並不只是建出一個預測模型，而是設計一套商業可以理解、可以應用的分析流程。資料中包含顧客輪廓、合約、使用行為與客訴等不同類型變數，需要審慎的 EDA 與特徵設計。',
      solution:
        '我們以 SAS Viya、SAS Visual Analytics 與 SAS Model Studio 串接整套分析流程，涵蓋：問題定義、探索性分析、前處理、特徵工程、模型比較與評估。目標是讓流失風險的辨識結果，能直接支援後續的精準留客行動。',
      outcome:
        '我們透過初賽分析提案與線上測驗晉級複賽，並在現場進行資料建模與預測分析。這段經驗讓我理解：資料科學專案就像是一個不斷迭代的迴圈──從商業問題定義、資料品質檢查，到特徵工程、模型評估與決策應用，環環相扣。',
      reflection:
        '這個專案讓我領悟到：機器學習只是解決商業問題的一小部分。一個真正有用的流失預測流程，必須把模型表現、商業詮釋、顧客分群與可執行的留客策略連結起來。若延續這個專案，我會進一步強化特徵驗證、分群層級分析，以及面向商業使用者的可解釋性。',
    },
  },

  'tableau-sales-customer-dashboard': {
    title: 'Tableau — 銷售與顧客儀表板',
    blurb:
      '以 User Story 為起點的 Tableau 儀表板專案，將商業需求轉化為銷售與顧客分析視覺化儀表板。',
    type: '資料視覺化',
    role: '儀表板設計與資料視覺化',
    caseMetrics: [
      { label: '專案類型', value: 'BI 儀表板' },
      { label: '工具', value: 'Tableau' },
      { label: '焦點', value: '銷售 · 顧客' },
      { label: '需求來源', value: 'User Story' },
    ],
    userStoryCards: [
      {
        title: '銷售儀表板',
        description:
          '呈現銷售指標、年度同期比較、月度 KPI 趨勢、產品子類別比較，以及每週的銷售與利潤樣態。',
      },
      {
        title: '顧客儀表板',
        description:
          '提供顧客資料總覽、趨勢、不同訂單數的顧客分佈，以及利潤前 10 名顧客。',
      },
      {
        title: '互動性',
        description:
          '支援年度切換、儀表板間切換、以圖表進行篩選，以及產品、地區的篩選器。',
      },
    ],
    designProcess: [
      {
        title: '解讀 User Story',
        description:
          '把儀表板需求拆解為銷售、顧客、KPI、趨勢、比較與篩選等不同面向。',
      },
      {
        title: '繪製儀表板架構草圖',
        description:
          '初步規劃哪些圖表、KPI 卡片與篩選器應出現在儀表板上。',
      },
      {
        title: '規劃 Tableau 容器配置',
        description:
          '安排 Tableau 容器，使儀表板版面保持整齊、視覺一致。',
      },
      {
        title: '完成最終儀表板',
        description:
          '在 Tableau 中完成版面與互動，並發佈到 Tableau Public。',
      },
    ],
    prototypeImages: [
      {
        src: '/projects/tableau/prototype/dashboard-wireframe.jpg',
        alt: '儀表板線稿原型截圖',
        caption:
          '初步儀表板原型：規劃 KPI 卡片、圖表、篩選器與導覽的擺放位置。',
        category: '線稿',
      },
      {
        src: '/projects/tableau/prototype/container-layout.jpg',
        alt: 'Tableau 容器配置規劃截圖',
        caption:
          '容器配置原型：規劃儀表板各區塊在 Tableau 中的結構。',
        category: '容器配置',
      },
    ],
    dashboardImages: [
      {
        src: '/projects/tableau/final-dashboard/sales-dashboard.jpg',
        alt: '最終 Tableau 銷售儀表板截圖',
        caption:
          '最終銷售儀表板：分析銷售表現、趨勢與產品子類別表現。',
        category: '銷售儀表板',
      },
      {
        src: '/projects/tableau/final-dashboard/customer-dashboard.jpg',
        alt: '最終 Tableau 顧客儀表板截圖',
        caption:
          '最終顧客儀表板：分析顧客行為、訂單分佈與利潤前段顧客。',
        category: '顧客儀表板',
      },
    ],
    summary:
      '本 Tableau 專案以一份 User Story 為起點，將商業需求轉化為儀表板架構、版面規劃，以及銷售與顧客分析的互動式視覺化儀表板。',
    userStoryContext:
      'User Story 要求兩個儀表板：一個銷售儀表板，呈現年度同期比較與趨勢分析；另一個顧客儀表板，理解顧客資料、行為與利潤表現。儀表板還必須支援動態年度切換、儀表板間切換、圖表互動篩選，以及產品與地區的篩選器。',
    tableauLinkDesc: '可至 Tableau Public 體驗互動式儀表板。',
    outcomeText:
      '這個專案讓我理解：儀表板設計從建圖表之前就已經開始。要把一份 User Story 轉化為可用的 BI 儀表板，必須先釐清利害關係人目標、決定哪些指標重要、規劃版面結構，並讓最終儀表板兼具互動性與可讀性。',
    reflectionText:
      '我學到的最大一課是：儀表板不只是圖表的集合。一個真正有用的儀表板，需要清楚的資訊層級、有目的的版面決策，以及能讓使用者用更少力氣就回答商業問題的互動設計。',
    detail: {
      overview:
        '本 Tableau 專案以一份銷售表現的 User Story 為起點，將商業需求轉化為儀表板架構、版面規劃，以及銷售與顧客分析的互動式視覺化。',
      goal: '在 Tableau 中製作一個銷售儀表板與一個顧客儀表板，協助利害關係人透過互動視覺化，分析年度銷售表現、顧客行為與利潤狀況。',
      role: '單獨擔任儀表板設計者──把 User Story 拆解為架構、繪製版面原型、規劃 Tableau 容器階層，並完成最終發佈。',
      process: [
        '解讀 User Story，拆解出銷售、顧客、KPI、趨勢、比較與篩選等需求。',
        '繪製儀表板原型草圖，安排 KPI 卡片、圖表、篩選器與導覽的擺放位置。',
        '規劃 Tableau 容器配置，使版面在加入互動後仍能維持整齊與一致。',
        '在 Tableau 中完成儀表板、調整版面與互動，並發佈到 Tableau Public。',
      ],
      challenges:
        '把 User Story 轉化為可用的儀表板，需要決定哪些指標最重要、如何平衡 KPI 卡片與趨勢比較圖表，以及如何在加入篩選與互動後，仍能維持乾淨的版面結構。',
      solution:
        '我以三個層次推進：先用線稿原型驗證元件位置、再用容器規劃鎖定版面結構，最後在儀表板版本中精煉視覺層級、互動性，並讓銷售與顧客儀表板維持一致。',
      outcome:
        '這個專案讓我理解到：儀表板設計從建圖表之前就已經開始。要把一份 User Story 轉化為可用的 BI 儀表板，必須先站在利害關係人的角度去思考，並決定哪些指標重要、如何規劃版面結構，並讓最終儀表板兼具互動性與可讀性。',
      reflection:
        '我學到的最大一課是：儀表板不只是圖表的集合。一個真正有用的儀表板，需要清楚的資訊層級、有目的的版面決策，以及能讓使用者用更少力氣就回答商業問題的互動設計。',
    },
  },
};
