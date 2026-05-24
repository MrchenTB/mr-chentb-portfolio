interface TranslationDict {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
    cta: string;
    langLabel: string;
    en: string;
    zh: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleName: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    personalNote: string;
    motto: string;
    lead: string;
    paragraph2: string;
    paragraph3: string;
    factCurrentlyLabel: string;
    factCurrentlyValue: string;
    factFocusLabel: string;
    factFocusValue: string;
    factStrengthsLabel: string;
    factStrengthsValue: string;
    photoAlt: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    sub: string;
    cardToolsLabel: string;
    cardRoleLabel: string;
    cardViewDetails: string;
    cardOpenAria: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    sub: string;
    groups: {
      dataAi: { label: string; desc: string };
      web: { label: string; desc: string };
      business: { label: string; desc: string };
      language: { label: string; desc: string };
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    primary: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    backToTop: string;
  };
  modal: {
    caseStudy: string;
    role: string;
    tools: string;
    year: string;
    type: string;
    close: string;
    viewGithub: string;
    projectOverview: string;
    goal: string;
    myRole: string;
    process: string;
    challenges: string;
    solution: string;
    outcome: string;
    reflection: string;
  };
  detail: {
    keyMetrics: string;
    pafTitle: string;
    pafProblem: string;
    pafApproach: string;
    modelPipeline: string;
    outputHeads: string;
    pipelineHeads: string[];
    myRole: string;
    outcome: string;
    leaderboardResult: string;
    reflection: string;
    leaderboardAlt: string;
    challengeContext: string;
    hackathonBrief: string;
    problemInsight: string;
    mvpDemoFlow: string;
    featureHighlights: string;
    esgConnection: string;
    behindTheBuild: string;
    pitchDeck: string;
    openPdf: string;
    pdfAriaLabel: string;
    pdfFallbackLead: string;
    pdfFallbackLink: string;
    competitionContext: string;
    businessProblem: string;
    businessQuestion: string;
    modelingObjective: string;
    dataStructure: string;
    tableVariable: string;
    tableDescription: string;
    tableNote: string;
    targetBadge: string;
    analysisFlow: string;
    sasToolUsage: string;
    analysisProcessScreens: string;
    analysisProcessSubtitle: string;
    analysisPlan: string;
    userStoryContext: string;
    businessRequirements: string;
    userStoryBreakdown: string;
    designProcess: string;
    prototypePlanning: string;
    finalDashboard: string;
    viewInteractiveDashboard: string;
    openTableau: string;
  };
}

export const content: { en: TranslationDict; zh: TranslationDict } = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      cta: "Let's talk",
      langLabel: 'Language',
      en: 'EN',
      zh: '中文',
    },
    hero: {
      eyebrow: 'Portfolio · 2026',
      titleLead: "Hey, I'm ",
      titleName: 'Mr.ChenTB',
      subtitle:
        "A personal portfolio space — a clean, modern way to record the things I've worked on and explored along the way.",
      primaryCta: 'View My Work',
      secondaryCta: 'About Me',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'ABOUT',
      heading:
        'A cross-disciplinary learner navigating between technology, data, and business.',
      personalNote: 'A personal note',
      motto:
        "I've faced more setbacks and failures than I can count, yet I keep moving forward — not driven by lofty ideals or pure passion, but because I know that stopping was never an option.",
      lead:
        "I'm a cross-disciplinary learner. Technology, data, and business are the three fields I keep coming back to. I believe the connections between them often reveal a more complete view of any problem — and that's where I find room to create distinctive value.",
      paragraph2:
        "My path has been built layer by layer through self-directed learning and exploration. I've gradually moved into programming, data analysis, machine learning, project management, and business thinking — learning how to approach unfamiliar fields, build my own learning system, and turn curiosity into direction.",
      paragraph3:
        'Outside of coursework and projects, I spend my time keeping up with new technologies, reading across fields, exchanging ideas with others, and following my curiosity wherever it leads.',
      factCurrentlyLabel: 'Currently',
      factCurrentlyValue: 'Cross-disciplinary Learner',
      factFocusLabel: 'Focus',
      factFocusValue: 'Technology · AI · Business',
      factStrengthsLabel: 'Strengths',
      factStrengthsValue: 'Problem Solving · Self-learning · Communication',
      photoAlt: 'Portrait',
    },
    projects: {
      eyebrow: 'FEATURED PROJECTS',
      title: 'My Side Projects',
      sub: 'A collection of work across data analysis, AI applications, and business problem-solving — a record of how I learn by building.',
      cardToolsLabel: 'Tools',
      cardRoleLabel: 'Role',
      cardViewDetails: 'View details',
      cardOpenAria: 'Open case study',
    },
    skills: {
      eyebrow: 'SKILLS & TOOLS',
      title: 'My Toolkit',
      sub: "The skills and tools I've gathered through study and hands-on projects — what I rely on to analyze problems, organize ideas, and turn concepts into something that actually runs.",
      groups: {
        dataAi: {
          label: 'Data Science',
          desc: 'Exploring patterns in data, building models, and turning information into insight.',
        },
        web: {
          label: 'Web Design & Prototyping',
          desc: 'Crafting clean interfaces and shaping ideas into interactive prototypes.',
        },
        business: {
          label: 'Business & Analytics',
          desc: 'Understanding problems through strategy, analysis, and structured thinking.',
        },
        language: {
          label: 'Language & Communication',
          desc: 'Communicating clearly across teams, cultures, and presentation settings.',
        },
      },
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Thanks for stopping by.',
      sub: 'I check my inbox often, so an email is the fastest way to reach me — chances are you’ll hear back the same day.',
      primary: 'Send me an email',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      copyright: 'All rights reserved.',
      tagline: '',
      backToTop: 'Back to top',
    },
    modal: {
      caseStudy: 'Case Study',
      role: 'Role',
      tools: 'Tools',
      year: 'Year',
      type: 'Type',
      close: 'Close case study',
      viewGithub: 'View GitHub Repository',
      projectOverview: 'Project Overview',
      goal: 'Goal',
      myRole: 'My Role',
      process: 'Process',
      challenges: 'Challenges',
      solution: 'Solution',
      outcome: 'Outcome',
      reflection: 'Reflection',
    },
    detail: {
      // AI Cup
      keyMetrics: 'Key Metrics',
      pafTitle: 'Problem · Approach',
      pafProblem: 'Problem',
      pafApproach: 'Approach',
      modelPipeline: 'Model Pipeline',
      outputHeads: 'Output Heads',
      pipelineHeads: ['Action Head', 'Landing Head', 'Score Head'],
      myRole: 'My Role',
      outcome: 'Outcome',
      leaderboardResult: 'Leaderboard Result',
      reflection: 'Reflection',
      leaderboardAlt: 'AI Cup public leaderboard screenshot',
      // FresIQ
      challengeContext: 'Challenge Context',
      hackathonBrief: 'Hackathon Brief',
      problemInsight: 'Problem Insight',
      mvpDemoFlow: 'MVP Demo Flow',
      featureHighlights: 'Feature Highlights',
      esgConnection: 'ESG Connection',
      behindTheBuild: 'Behind the Build',
      pitchDeck: 'Pitch Deck',
      openPdf: 'Open PDF in a new tab',
      pdfAriaLabel: 'FresIQ pitch deck PDF viewer',
      pdfFallbackLead: 'Your browser may not be able to display the embedded PDF.',
      pdfFallbackLink: 'Open the pitch deck in a new tab',
      // SAS
      competitionContext: 'Competition Context',
      businessProblem: 'Business Problem',
      businessQuestion: 'Business Question',
      modelingObjective: 'Modeling Objective',
      dataStructure: 'Data Structure',
      tableVariable: 'Variable',
      tableDescription: 'Description',
      tableNote: 'Note',
      targetBadge: 'target',
      analysisFlow: 'Analysis Flow',
      sasToolUsage: 'SAS Tool Usage',
      analysisProcessScreens: 'Analysis Process Screens',
      analysisProcessSubtitle:
        'A few moments captured from visual exploration, feature engineering, and model building in SAS.',
      analysisPlan: 'Analysis Plan',
      // Tableau
      userStoryContext: 'User Story Context',
      businessRequirements: 'Business Requirements',
      userStoryBreakdown: 'User Story Breakdown',
      designProcess: 'Design Process',
      prototypePlanning: 'Prototype Planning',
      finalDashboard: 'Final Tableau Dashboard',
      viewInteractiveDashboard: 'View Interactive Dashboard',
      openTableau: 'Open Tableau Public',
    },
  },
  zh: {
    nav: {
      about: '關於我',
      projects: '作品',
      skills: '技能',
      contact: '聯絡',
      cta: '聊聊',
      langLabel: '語言',
      en: 'EN',
      zh: '中文',
    },
    hero: {
      eyebrow: 'Portfolio · 2026',
      titleLead: '哈嘍～我是 ',
      titleName: 'Mr.ChenTB',
      subtitle:
        '這是我個人專屬的作品集網站，我希望透過清晰、現代且有質感的方式，來記錄我曾經做過的事。',
      primaryCta: '看我的作品',
      secondaryCta: '關於我',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'ABOUT',
      heading:
        '一位在科技、數據與商業之間探索的跨領域學習者',
      personalNote: '屬於我的個人筆記',
      motto:
        '儘管我經歷過無數次的挫折與失敗，我還是持續的前進。不是為了不切實際的理想與熱情，而是因為我知道──停下來，從來不是一個選擇。',
      lead:
        '我是一位跨領域學習者，科技、資料與商業，是我持續探索的三個領域。我相信不同領域之間的連結，往往能帶來更全面的視角，並賦予我創造出獨特價值的能力。',
      paragraph2:
        '我的學習路徑是由自學與探索堆疊而成的。我逐步走入程式設計、數據分析、機器學習與商業思維，學習如何面對不同的領域、建立屬於自己的學習系統，並把好奇心轉化成方向。',
      paragraph3:
        '在課業與專案之餘，我喜歡把時間花在探索最新的科技、跨域閱讀與交流，並跟隨著自己的好奇心往前走。',
      factCurrentlyLabel: '目前',
      factCurrentlyValue: '跨領域學習者',
      factFocusLabel: '關注領域',
      factFocusValue: '科技 · AI · 商業',
      factStrengthsLabel: '擅長',
      factStrengthsValue: '問題解決 · 自主學習 · 溝通與表達',
      photoAlt: '個人照片',
    },
    projects: {
      eyebrow: 'FEATURED PROJECTS',
      title: '我的Side Project',
      sub: '這些作品橫跨資料分析、AI 應用與商業問題探索，記錄我如何透過實作來學習的。',
      cardToolsLabel: '工具',
      cardRoleLabel: '角色',
      cardViewDetails: '查看詳情',
      cardOpenAria: '開啟個案研究',
    },
    skills: {
      eyebrow: 'SKILLS & TOOLS',
      title: '我的技能組合',
      sub: '這些技能和工具，是我在學習與實踐專案的過程中逐漸累積的，它們幫助我更有效地分析問題、整理想法，並將概念真正落實成可執行的成果。',
      groups: {
        dataAi: {
          label: '資料科學',
          desc: '探索資料的模式、建立模型，並把資料轉化為洞察。',
        },
        web: {
          label: '網頁設計與原型製作',
          desc: '打造乾淨的介面，把想法做成可操作的原型。',
        },
        business: {
          label: '商業與分析',
          desc: '透過策略、分析與結構化思考來理解問題。',
        },
        language: {
          label: '語言與溝通',
          desc: '在跨團隊、跨文化與簡報場景中清楚表達。',
        },
      },
    },
    contact: {
      eyebrow: 'CONTACT',
      title: '謝謝你的瀏覽~',
      sub: '我很喜歡看Email，所以你寄信給我的話，很有可能在當天我就能回覆了。',
      primary: '寄信給我',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      copyright: '保留所有權利。',
      tagline: '',
      backToTop: '回到頂部',
    },
    modal: {
      caseStudy: '專案內容',
      role: '角色',
      tools: '工具',
      year: '年份',
      type: '類型',
      close: '關閉個案研究',
      viewGithub: '查看 GitHub 專案',
      projectOverview: '專案概述',
      goal: '專案目標',
      myRole: '我的角色',
      process: '流程',
      challenges: '挑戰',
      solution: '解法',
      outcome: '成果',
      reflection: '反思',
    },
    detail: {
      // AI Cup
      keyMetrics: '關鍵指標',
      pafTitle: '問題 · 方法',
      pafProblem: '問題',
      pafApproach: '方法',
      modelPipeline: '模型流程',
      outputHeads: '輸出頭',
      pipelineHeads: ['動作預測頭', '落點預測頭', '得分預測頭'],
      myRole: '我的角色',
      outcome: '成果',
      leaderboardResult: '排行榜結果',
      reflection: '反思',
      leaderboardAlt: 'AI CUP 公開排行榜截圖',
      // FresIQ
      challengeContext: '競賽情境',
      hackathonBrief: '黑客松主題',
      problemInsight: '問題洞察',
      mvpDemoFlow: 'MVP 展示流程',
      featureHighlights: '功能亮點',
      esgConnection: 'ESG 連結',
      behindTheBuild: '開發過程',
      pitchDeck: '簡報',
      openPdf: '在新分頁開啟 PDF',
      pdfAriaLabel: 'FresIQ 簡報 PDF 檢視器',
      pdfFallbackLead: '你的瀏覽器可能無法直接顯示 PDF。',
      pdfFallbackLink: '在新分頁開啟簡報',
      // SAS
      competitionContext: '競賽情境',
      businessProblem: '商業問題',
      businessQuestion: '商業問題',
      modelingObjective: '建模目標',
      dataStructure: '資料結構',
      tableVariable: '欄位',
      tableDescription: '說明',
      tableNote: '備註',
      targetBadge: '目標',
      analysisFlow: '分析流程',
      sasToolUsage: 'SAS 工具運用',
      analysisProcessScreens: '分析過程畫面',
      analysisProcessSubtitle:
        '在 SAS 中進行視覺探索、特徵工程與模型建立過程的幾個片段。',
      analysisPlan: '分析計畫',
      // Tableau
      userStoryContext: '使用者故事情境',
      businessRequirements: '商業需求',
      userStoryBreakdown: '使用者故事拆解',
      designProcess: '設計流程',
      prototypePlanning: '原型規劃',
      finalDashboard: '最終 Tableau 儀表板',
      viewInteractiveDashboard: '互動式儀表板',
      openTableau: '開啟 Tableau Public',
    },
  },
};
