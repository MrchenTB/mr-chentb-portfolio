export interface ProjectDetail {
  overview: string;
  goal: string;
  role: string;
  process: string[];
  challenges: string;
  solution: string;
  outcome: string;
  reflection: string;
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  type: string;
  tools: string[];
  role: string;
  year: string;
  /** Optional cover image path (e.g. '/projects/my-cover.png'). Takes priority over coverGradient. */
  coverImage?: string;
  /** Two short HSL/HEX tokens used for the gradient placeholder cover. */
  coverGradient?: [string, string];
  /** Optional GitHub repository URL. */
  github?: string;
  detail: ProjectDetail;
  /** Enhanced case study fields — currently used by the AI Cup project only. */
  metrics?: Array<{ label: string; value: string }>;
  paf?: { problem: string; approach: string; output?: string };
  pipeline?: string[];
  roleCards?: Array<{ title: string; description: string }>;
  leaderboardImage?: string;
  /** Enhanced case study fields — currently used by the FresIQ project only. */
  processImages?: Array<{ src: string; alt: string; caption: string }>;
  pitchDeck?: { title: string; file: string; coverImage?: string; embed?: boolean };
  pitchSlides?: Array<{ src: string; alt: string; caption?: string }>;
  awardImage?: { src: string; alt: string; caption: string };
  featureCards?: Array<{ title: string; description: string }>;
  demoFlow?: Array<{ label: string; description: string }>;
  esgCards?: Array<{ label: string; title: string; description: string }>;
  /** Enhanced case study fields — used by the SAS and Tableau projects. */
  caseMetrics?: Array<{ label: string; value: string }>;
  dataFields?: Array<{ name: string; description: string; note?: string }>;
  analysisFlow?: Array<{ title: string; description: string }>;
  sasScreenshots?: Array<{ src: string; alt: string; caption: string; category?: string }>;
  analysisPlanSlides?: Array<{ src: string; alt: string; caption?: string }>;
  toolCards?: Array<{ title: string; description: string }>;
  /** Enhanced case study fields — currently used by the Tableau project only. */
  userStoryCards?: Array<{ title: string; description: string }>;
  prototypeImages?: Array<{ src: string; alt: string; caption: string; category?: string }>;
  dashboardImages?: Array<{ src: string; alt: string; caption: string; category?: string }>;
  designProcess?: Array<{ title: string; description: string }>;
  tableauLink?: string;
  /** Localized prose used by the per-project Detail components. */
  summary?: string;
  challengeContext?: string;
  problemInsight?: string;
  esgIntro?: string;
  outcomeText?: string;
  reflectionText?: string;
  pitchDescription?: string;
  competitionContext?: string;
  businessQuestion?: string;
  modelingObjective?: string;
  dataIntro?: string;
  userStoryContext?: string;
  tableauLinkDesc?: string;
  leaderboardDesc?: string;
  leaderboardCaption?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-cup-table-tennis',
    title: 'AI Cup — Table Tennis Rally Prediction',
    blurb:
      'A sequence-based multi-task classification model that predicts the next-shot action, landing position, and scoring outcome from each table tennis rally.',
    type: 'Deep Learning',
    tools: ['Python', 'PyTorch', 'pandas', 'LSTM', 'MLflow'],
    role: 'Model Development & Experiment Tracking',
    year: '2025',
    coverImage: '/ai-cup-table-tennis-cover.png',
    coverGradient: ['#f7f0dd', '#d5ad48'],
    github: 'https://github.com/MrchenTB/AI-CUP-Table-Tennis-Prediction.git',
    metrics: [
      { label: 'Public LB Score', value: '0.3165533' },
      { label: 'Best Rank', value: '39th' },
      { label: 'Task Type', value: 'Multi-task Sequence Classification' },
      { label: 'Model', value: 'LSTM' },
    ],
    paf: {
      problem:
        'How can we use rally-level sequence data to reliably predict the next-shot action, landing position, and whether the server will score?',
      approach:
        'Treat each rally as sequence data, then apply preprocessing, categorical feature encoding, and feature engineering such as previous-shot information, rally-order indicators, and landing-position interaction features. A multi-task LSTM model is used to predict the next-shot action, landing position, and scoring outcome, while TensorBoard and MLflow help track experiments, compare model performance, and refine training strategies.',
    },
    pipeline: ['Rally Sequence', 'Prefix Samples', 'Feature Engineering', 'LSTM Backbone'],
    roleCards: [
      {
        title: 'Prefix Sample Design',
        description:
          'Designed prefix samples for each rally so the training setup matched the partial-sequence conditions at test time.',
      },
      {
        title: 'Feature Engineering',
        description:
          'Added contextual signals such as previous-shot features, rally-order indicators, and landing-position interaction features.',
      },
      {
        title: 'Model Development',
        description:
          'Built a multi-task LSTM model in PyTorch with a dedicated prediction head for each task.',
      },
      {
        title: 'Experiment Tracking',
        description:
          'Tracked experiments with MLflow and TensorBoard, then adjusted training strategies based on the results.',
      },
    ],
    leaderboardImage: '/Leaderboard.png',
    leaderboardDesc:
      'The model reached a Public Leaderboard score of 0.3165533 and a best rank of 39th.',
    leaderboardCaption: 'Public Leaderboard result: 0.3165533, best rank 39th.',
    detail: {
      overview:
        'This project was developed for the 2025 AI Cup Table Tennis Rally Prediction competition. The task was to use rally-level sequence data to predict the next-shot action, landing position, and whether the server would score.',
      goal: 'Build a sequence-based deep learning model that can make stable predictions even when only a partial rally segment is available.',
      role: 'Worked on prefix-sample design, feature engineering, building a multi-task LSTM model in PyTorch, experiment tracking, and validation-based model tuning.',
      process: [
        'Analyzed the competition task and reframed it as a multi-task sequence classification problem.',
        'Generated prefix samples from complete rallies so the training data better reflected the partial sequences seen at test time.',
        'Engineered shot-level and contextual features, including previous-shot information, rally order, and landing-position interactions.',
        'Built a PyTorch-based LSTM model with three task-specific output heads.',
        'Tracked experiments with MLflow and TensorBoard, then tuned parameters based on validation performance.',
      ],
      challenges:
        'The main challenge was the gap between full rally data and the partial fragments used at test time. A model trained only on complete sequences may struggle to stay stable when given only a few opening shots.',
      solution:
        'To close that gap, I generated prefix samples from complete rallies and added contextual features such as previous-shot attributes, rally order, and landing-position interactions. The final model used an LSTM backbone with dedicated heads for action, landing position, and scoring.',
      outcome:
        'The model reached a Public Leaderboard score of 0.3165533, with a best rank of 39th.',
      reflection:
        'This was my first deep-learning modeling competition. The experience taught me how to choose data preparation methods and models based on how the problem is framed, and how to use experiment-tracking tools to manage the development process. In future competitions, I would explore more diverse model architectures along with more refined feature engineering and hyperparameter tuning.',
    },
  },
  {
    id: 'fresiq-smart-food-box',
    title: 'FresIQ — Smart Food Inventory Box',
    blurb:
      'An AI-powered fridge management MVP that pairs image recognition with a dashboard to help users track freshness and reduce food waste.',
    type: 'AI Application',
    tools: ['FastAPI', 'Gemini API', 'JavaScript', 'Jinja2', 'JSON'],
    role: 'IoT Vision & Software Development',
    year: '2025',
    coverImage: '/fresiq-smart-food-box-cover.jpg',
    coverGradient: ['#eaf7f4', '#8fcfc2'],
    processImages: [
      {
        src: '/projects/fresiq/process-01.jpg',
        alt: 'FresIQ hackathon process photo',
        caption: 'Development process and team discussions at the hackathon.',
      },
      {
        src: '/projects/fresiq/process-02.jpg',
        alt: 'FresIQ MVP two-phone demo setup',
        caption:
          'Two-phone MVP demo setup: one handles food recognition while the other displays the dashboard.',
      },
    ],
    pitchDeck: {
      title: 'Pitch Deck',
      file: '/projects/fresiq/fresiq-pitch-deck.pdf',
      embed: true,
    },
    pitchSlides: [
      { src: '/projects/fresiq/deck/page-01.png', alt: 'FresIQ pitch deck slide 1' },
      { src: '/projects/fresiq/deck/page-02.png', alt: 'FresIQ pitch deck slide 2' },
      { src: '/projects/fresiq/deck/page-03.png', alt: 'FresIQ pitch deck slide 3' },
      { src: '/projects/fresiq/deck/page-04.png', alt: 'FresIQ pitch deck slide 4' },
      { src: '/projects/fresiq/deck/page-05.png', alt: 'FresIQ pitch deck slide 5' },
      { src: '/projects/fresiq/deck/page-06.png', alt: 'FresIQ pitch deck slide 6' },
      { src: '/projects/fresiq/deck/page-07.png', alt: 'FresIQ pitch deck slide 7' },
      { src: '/projects/fresiq/deck/page-08.png', alt: 'FresIQ pitch deck slide 8' },
      { src: '/projects/fresiq/deck/page-09.png', alt: 'FresIQ pitch deck slide 9' },
      { src: '/projects/fresiq/deck/page-10.png', alt: 'FresIQ pitch deck slide 10' },
      { src: '/projects/fresiq/deck/page-11.png', alt: 'FresIQ pitch deck slide 11' },
      { src: '/projects/fresiq/deck/page-12.png', alt: 'FresIQ pitch deck slide 12' },
      { src: '/projects/fresiq/deck/page-13.png', alt: 'FresIQ pitch deck slide 13' },
    ],
    awardImage: {
      src: '/projects/fresiq/award-photo.jpg',
      alt: 'FresIQ team award photo',
      caption:
        'Awarded the Special Jury Award for Best Value Creation and advanced to the national finals.',
    },
    featureCards: [
      {
        title: 'Food Recognition',
        description:
          'Captures food images through the in-box camera and identifies items using the Gemini API.',
      },
      {
        title: 'Inventory Tracking',
        description:
          "Displays each item's name, category, storage days, remaining days, and freshness status.",
      },
      {
        title: 'Priority Reminders',
        description:
          'Uses visual status cards to nudge users toward ingredients that are about to expire.',
      },
      {
        title: 'Shopping Suggestions',
        description:
          "Reminds users of what's already in the fridge before they shop, to help avoid duplicate purchases.",
      },
      {
        title: 'Waste Reduction Estimate',
        description:
          'Estimates the potential savings and waste reduction that better food management can deliver.',
      },
    ],
    demoFlow: [
      {
        label: 'Phone A',
        description: 'Acts as the in-box camera and captures food images.',
      },
      {
        label: 'Gemini API',
        description:
          'Identifies the food and returns structured ingredient information.',
      },
      {
        label: 'Phone B',
        description:
          'Displays the dashboard: inventory status, reminders, and suggestions.',
      },
    ],
    esgCards: [
      {
        label: 'E',
        title: 'Environmental',
        description:
          'Helps users finish ingredients before they expire, reducing household food waste.',
      },
      {
        label: 'S',
        title: 'Social',
        description:
          'Eases the burden of managing food at home, especially for students, renters, and small households.',
      },
      {
        label: 'G',
        title: 'Governance',
        description:
          'Turns sustainable behavior into trackable inventory data, reminders, and decision support.',
      },
    ],
    summary:
      'FresIQ is an MVP our team built during a national vocational hackathon. The brief asked for a workable ESG-aligned shift in consumer behavior in response to environmental change. We focused on everyday food waste and designed a smart storage box that makes hidden fridge information visible.',
    challengeContext:
      'The brief asked teams to propose meaningful changes to industry or everyday consumption patterns in response to environmental change, framed around ESG values. Rather than treating ESG as an abstract idea, we returned to a familiar daily scene — how people forget the food they once bought.',
    problemInsight:
      "Food waste isn't always carelessness. In many everyday situations, users simply can't see what's inside the fridge: ingredients get forgotten, expiry dates blur, and repeat purchases happen. FresIQ exists to turn the unseen fridge into visible reminders, inventory status, and shopping suggestions.",
    esgIntro:
      'FresIQ links ESG with everyday behavior change. By helping users see what they already have, prioritize ingredients close to expiry, and avoid duplicate purchases, the system encourages more responsible consumption while reducing household food waste.',
    outcomeText:
      "The project earned the Special Jury Award for Best Value Creation in the national regional round and advanced to the finals. The experience taught me that the value of a technical project doesn't come from complex or sophisticated technology — it comes from whether it answers a real need, lightens the user's load, and can be clearly understood by others.",
    reflectionText:
      'This project taught me how to put the user at the center, combine technology to address real pain points, and ship a working prototype in a very short window while still conveying every key idea.',
    pitchDescription:
      'The pitch deck covers the competition context, problem insight, MVP concept, demo flow, user value, and the sustainability impact behind FresIQ.',
    detail: {
      overview:
        "FresIQ is a smart fridge storage box MVP built during a national vocational hackathon. It addresses a small but universal everyday problem: ingredients get forgotten, expire unnoticed, or are re-bought simply because the fridge's contents aren't easy to see.",
      goal: 'Make fridge inventory visible through image recognition, freshness tracking, and a clean dashboard — helping users handle soon-to-expire ingredients first and cut down on waste.',
      role: 'Contributed to product concept development, user scenario design, system flow planning, MVP implementation, and pitch storytelling. Helped break the broad problem of food waste into four core features: food recognition, inventory tracking, status reminders, and shopping suggestions.',
      process: [
        'Mapped out fridge management pain points: forgotten ingredients, unclear expiry dates, and repeated purchases.',
        'Framed the MVP concept around making invisible fridge information visible through a smart storage box and dashboard.',
        'Designed a two-phone demo flow — one phone as the in-box camera, the other displaying the user dashboard.',
        'Built the prototype with FastAPI, Gemini API, HTML, CSS, JavaScript, Jinja2, and local JSON storage.',
        'Structured the pitch narrative around user value, food waste reduction, and ESG impact.',
      ],
      challenges:
        'The main challenge was narrowing a broad sustainability topic into an understandable, demonstrable, user-relevant MVP within the limited time of a hackathon.',
      solution:
        'We built a two-phone MVP: one phone acted as the in-box camera capturing food images, while the other displayed a dashboard with recognition results, inventory status, freshness, reminders, and shopping suggestions. FastAPI connected the front-end interface, the Gemini API image recognition, and local JSON-based inventory updates.',
      outcome:
        "The project earned the Special Jury Award for Best Value Creation in the national regional round and advanced to the finals. The experience showed me that a technical project's value lies less in feature completeness and more in whether it answers a real need, reduces user effort, and is clearly understood by others.",
      reflection:
        "This project taught me how to connect product thinking, AI capability, and user-centered storytelling. If I were to continue it, I'd first improve recognition stability, add a more complete database, and test the dashboard with real users in everyday fridge scenarios.",
    },
  },
  {
    id: 'sas-customer-churn-prediction',
    title: 'SAS Hackathon — Customer Churn Prediction',
    blurb:
      'A customer churn prediction project that brings together business problem framing, EDA, feature engineering, and model evaluation.',
    type: 'Data Analytics',
    tools: ['SAS Viya', 'SAS Visual Analytics', 'SAS Model Studio', 'Python'],
    role: 'Analytics Planning & Model Building',
    year: '2025',
    coverImage: '/sas-customer-churn-cover.png',
    coverGradient: ['#eef4fb', '#7aa7d9'],
    caseMetrics: [
      { label: 'Project Type', value: 'Customer Churn Prediction' },
      { label: 'Domain', value: 'Telecom Analytics' },
      { label: 'Target', value: 'CHURN' },
      { label: 'Method', value: 'EDA · Feature Engineering · Model Comparison' },
    ],
    dataFields: [
      {
        name: 'AGE',
        description: 'Customer age',
        note: 'Contains unusual values such as -1 and 129 that need to be validated first.',
      },
      {
        name: 'P_TYPE',
        description: 'Contract plan type',
        note: 'Includes leased phone, purchased phone, and bring-your-own plans.',
      },
      {
        name: 'MINUTES',
        description: 'Voice minutes used in the most recent month',
        note: 'Contains anomalies such as negative values that need to be addressed.',
      },
      {
        name: 'DATA',
        description: 'Monthly mobile data allowance (GB)',
        note: 'Range includes unusual values and requires careful handling.',
      },
      {
        name: 'TECH_PROBLEM',
        description: 'Technical issues reported in the most recent month',
      },
      {
        name: 'TOTAL_TECH_PROBLEM',
        description: 'Total technical issues reported over the past 12 months',
      },
      { name: 'CP', description: 'Customer complaints in the most recent month' },
      {
        name: 'CHURN',
        description: 'Whether the customer churned within 12 months',
        note: 'Target variable: 1 = churned, 0 = retained.',
      },
    ],
    analysisFlow: [
      {
        title: 'Problem Definition',
        description: 'Reframe the customer retention question as a binary churn prediction problem.',
      },
      {
        title: 'Data Understanding',
        description:
          'Examine customer profiles, contract information, service usage behavior, and complaint-related variables.',
      },
      {
        title: 'EDA & Data Quality Checks',
        description:
          'Explore churn distribution, abnormal value ranges, missing values, outliers, and the possible business meaning behind each variable.',
      },
      {
        title: 'Feature Engineering',
        description:
          'Design derived features such as service usage level, dissatisfaction index, customer segmentation, and monthly device burden.',
      },
      {
        title: 'Model Building & Comparison',
        description:
          'Compare models such as Logistic Regression, SVM, GBM, and Random Forest.',
      },
      {
        title: 'Evaluation & Application',
        description:
          'Evaluate performance with AUC, F1 Score, and Accuracy, and consider how model results can support retention strategies.',
      },
    ],
    toolCards: [
      {
        title: 'SAS Visual Analytics',
        description:
          'Used for exploratory analysis, visualizing churn patterns, and understanding how customer attributes relate to churn risk.',
      },
      {
        title: 'SAS Model Studio',
        description:
          'Used for preprocessing, model building, model comparison, and predictive performance evaluation.',
      },
      {
        title: 'SAS Studio',
        description:
          'Used for manual feature engineering, transformation logic, and code-based custom analysis.',
      },
      {
        title: 'Generative AI',
        description:
          'Supports analysis planning, prompt engineering, and idea generation for business interpretation.',
      },
    ],
    sasScreenshots: [
      {
        src: '/projects/sas/screenshots/visual-analytics.jpg',
        alt: 'SAS Visual Analytics customer churn visualization screenshot',
        caption: 'Exploring churn patterns and customer behavior through SAS Visual Analytics.',
        category: 'Visual Analytics',
      },
      {
        src: '/projects/sas/screenshots/model-studio.jpg',
        alt: 'SAS Model Studio model building screenshot',
        caption: 'Building and comparing predictive models in SAS Model Studio.',
        category: 'Model Studio',
      },
      {
        src: '/projects/sas/screenshots/feature-engineering-code.jpg',
        alt: 'SAS Studio feature engineering code screenshot',
        caption: 'Writing custom transformation logic for feature engineering and data preparation.',
        category: 'Feature Engineering',
      },
    ],
    analysisPlanSlides: [
      { src: '/projects/sas/analysis-plan/page-01.jpg', alt: 'SAS analysis plan slide 1' },
      { src: '/projects/sas/analysis-plan/page-02.jpg', alt: 'SAS analysis plan slide 2' },
      { src: '/projects/sas/analysis-plan/page-03.jpg', alt: 'SAS analysis plan slide 3' },
      { src: '/projects/sas/analysis-plan/page-04.jpg', alt: 'SAS analysis plan slide 4' },
      { src: '/projects/sas/analysis-plan/page-05.jpg', alt: 'SAS analysis plan slide 5' },
      { src: '/projects/sas/analysis-plan/page-06.jpg', alt: 'SAS analysis plan slide 6' },
      { src: '/projects/sas/analysis-plan/page-07.jpg', alt: 'SAS analysis plan slide 7' },
      { src: '/projects/sas/analysis-plan/page-08.jpg', alt: 'SAS analysis plan slide 8' },
      { src: '/projects/sas/analysis-plan/page-09.jpg', alt: 'SAS analysis plan slide 9' },
      { src: '/projects/sas/analysis-plan/page-10.jpg', alt: 'SAS analysis plan slide 10' },
    ],
    summary:
      'This project was developed for the SAS Campus Data Science Hackathon. The scenario centered on a telecom company looking to identify customers at high risk of churn, using data analysis to inform future retention strategies.',
    competitionContext:
      'Teams were asked to design a complete analysis plan around a telecom churn scenario and dataset. The preliminary round focused on analytical reasoning, SAS tool planning, and an online assessment. Rather than jumping straight to modeling, we had to explain how the business problem, data structure, preprocessing strategy, modeling approach, and evaluation plan all connected into a coherent workflow.',
    businessQuestion:
      'Pinpoint customers at high risk of churn and maximize both the ROI of retention campaigns and overall retention rate.',
    modelingObjective:
      'Translate the business goal into a data science task: predict whether each customer will churn in the next 12 months, and use those predictions to prioritize retention outreach.',
    dataIntro:
      'Used the telecom customer dataset provided by the organizer — covering customer profile, contract plan, usage behavior, technical issue reports, and complaint records — with CHURN as the target variable.',
    outcomeText:
      'Our team advanced to the final round through the preliminary proposal and online assessment, then carried out on-site data modeling and prediction analysis. The experience showed me that a data science project is an iterative loop — from business problem framing and data quality checks to feature engineering, model evaluation, and decision application, each step feeding into the next.',
    reflectionText:
      'The project reminded me that machine learning is only one part of a business analytics solution. A genuinely useful churn prediction workflow has to connect model performance with business interpretation, customer segmentation, and actionable retention strategies. If I continued this project, I would strengthen feature validation, segment-level analysis, and explainability for business users.',
    detail: {
      overview:
        'This project was developed for the SAS Campus Data Science Hackathon. The scenario was a telecom company seeking to identify customers at high risk of churn, with data analysis supporting future retention strategies.',
      goal: 'Translate the business goal of improving customer retention into a binary classification task, using customer profiles, contract information, usage behavior, and complaint records to predict churn risk.',
      role: 'Led the analysis planning, EDA direction, feature engineering ideas, and model evaluation strategy. Helped connect the workflow from business problem definition through data exploration, feature design, model comparison, and real-world application.',
      process: [
        'Reframed the business need of customer retention as a churn prediction problem.',
        'Planned the EDA direction: churn distribution, customer profiles, contract information, usage behavior, and complaint-related variables.',
        'Designed the preprocessing flow: missing-value handling, outlier checks, data splitting, and variable role definitions.',
        'Drafted derived features such as service usage level, customer segmentation, dissatisfaction index, and monthly device burden.',
        'Compared several machine learning models: Logistic Regression, SVM, GBM, and Random Forest.',
        'Evaluated model performance with AUC, F1 Score, Accuracy, and cross-validation.',
      ],
      challenges:
        "The main challenge wasn't just building a predictive model, but designing an analysis workflow the business could actually understand and apply. The dataset combined customer profiles, contracts, usage behavior, and complaint records — different kinds of variables that called for careful EDA and feature design.",
      solution:
        'We connected the full workflow with SAS Viya, SAS Visual Analytics, and SAS Model Studio — covering problem definition, exploratory analysis, preprocessing, feature engineering, model comparison, and evaluation. The goal was to make churn-risk identification directly usable for targeted retention actions.',
      outcome:
        'Our team advanced to the final round through the preliminary proposal and online assessment, then carried out on-site data modeling and prediction analysis. The experience showed me that a data science project is an iterative loop — from business problem framing and data quality checks to feature engineering, model evaluation, and decision application, each step feeding into the next.',
      reflection:
        'The project showed me that machine learning is only a small part of solving a business problem. A genuinely useful churn prediction workflow has to connect model performance with business interpretation, customer segmentation, and actionable retention strategies. If I continued this project, I would strengthen feature validation, segment-level analysis, and explainability for business users.',
    },
  },
  {
    id: 'tableau-sales-customer-dashboard',
    title: 'Tableau — Sales & Customer Dashboard',
    blurb:
      'A Tableau dashboard project built from user stories, translating business requirements into sales and customer analytics views.',
    type: 'Data Visualization',
    tools: ['Tableau', 'Figma'],
    role: 'Dashboard Design & Data Visualization',
    year: '2025',
    coverImage: '/projects/tableau/tableau-dashboard-cover.jpg',
    coverGradient: ['#edf4f8', '#85b7cf'],
    caseMetrics: [
      { label: 'Project Type', value: 'BI Dashboard' },
      { label: 'Tool', value: 'Tableau' },
      { label: 'Focus', value: 'Sales · Customers' },
      { label: 'Input', value: 'User Story' },
    ],
    userStoryCards: [
      {
        title: 'Sales Dashboard',
        description:
          'Surfaces sales metrics, year-over-year comparisons, monthly KPI trends, product subcategory comparisons, and weekly patterns of sales and profit.',
      },
      {
        title: 'Customer Dashboard',
        description:
          'Provides a customer overview, trends, customer distribution by number of orders, and the top 10 customers by profit.',
      },
      {
        title: 'Interactivity',
        description:
          'Supports year selection, navigation between dashboards, chart-driven filtering, and filters for product and region.',
      },
    ],
    designProcess: [
      {
        title: 'Read the User Story',
        description:
          'Break the dashboard requirements down into sales, customer, KPI, trend, comparison, and filter dimensions.',
      },
      {
        title: 'Sketch the Dashboard Structure',
        description:
          'Rough out which charts, KPI cards, and filters should appear on the dashboard.',
      },
      {
        title: 'Plan Tableau Containers',
        description:
          'Arrange Tableau containers so the layout stays clean and visually consistent.',
      },
      {
        title: 'Build the Final Dashboard',
        description:
          'Finalize layout and interactivity in Tableau and publish to Tableau Public.',
      },
    ],
    prototypeImages: [
      {
        src: '/projects/tableau/prototype/dashboard-wireframe.jpg',
        alt: 'Dashboard wireframe prototype screenshot',
        caption:
          'Initial dashboard prototype — planning the placement of KPI cards, charts, filters, and navigation.',
        category: 'Wireframe',
      },
      {
        src: '/projects/tableau/prototype/container-layout.jpg',
        alt: 'Tableau container layout planning screenshot',
        caption:
          'Container layout prototype — mapping how each section of the dashboard fits together in Tableau.',
        category: 'Container Layout',
      },
    ],
    dashboardImages: [
      {
        src: '/projects/tableau/final-dashboard/sales-dashboard.jpg',
        alt: 'Final Tableau sales dashboard screenshot',
        caption:
          'Final Sales Dashboard — analyzing sales performance, trends, and product subcategory results.',
        category: 'Sales Dashboard',
      },
      {
        src: '/projects/tableau/final-dashboard/customer-dashboard.jpg',
        alt: 'Final Tableau customer dashboard screenshot',
        caption:
          'Final Customer Dashboard — analyzing customer behavior, order distribution, and top-profit customers.',
        category: 'Customer Dashboard',
      },
    ],
    tableauLink: 'https://reurl.cc/YDo3O0',
    summary:
      'This Tableau project started from a single user story and translated business requirements into dashboard architecture, layout planning, and interactive visualizations for sales and customer analysis.',
    userStoryContext:
      'The user story called for two dashboards: a Sales Dashboard for year-over-year performance and trend analysis, and a Customer Dashboard for understanding customer data, behavior, and profitability. The dashboards also needed dynamic year selection, navigation between dashboards, interactive chart filtering, and filters for product and region.',
    tableauLinkDesc: 'Explore the interactive dashboard on Tableau Public.',
    outcomeText:
      'This project taught me that dashboard design begins long before the first chart is built. Turning a user story into a usable BI dashboard meant clarifying stakeholder goals, deciding which metrics mattered most, planning the layout structure, and making sure the final dashboard was both interactive and readable.',
    reflectionText:
      "The biggest lesson was that a dashboard isn't just a collection of charts. A genuinely useful dashboard needs a clear information hierarchy, intentional layout decisions, and interactions that let users answer business questions with less effort.",
    detail: {
      overview:
        'This Tableau project started from a sales performance user story, translating business requirements into dashboard architecture, layout planning, and interactive visualizations for sales and customer analysis.',
      goal: 'Build a Sales Dashboard and a Customer Dashboard in Tableau to help stakeholders analyze year-over-year sales performance, customer behavior, and profitability through interactive views.',
      role: 'Sole dashboard designer — translated the user story into architecture, sketched the layout prototype, planned the Tableau container hierarchy, and shipped the final published version.',
      process: [
        'Read the user story and broke it into sales, customer, KPI, trend, comparison, and filter requirements.',
        'Sketched a dashboard prototype to position KPI cards, charts, filters, and navigation.',
        'Planned the Tableau container layout so the design would stay clean and consistent once interactions were added.',
        'Built the dashboards in Tableau, refined the layout and interactivity, and published to Tableau Public.',
      ],
      challenges:
        'Turning a user story into a usable dashboard meant deciding which metrics mattered most, balancing KPI cards against trend and comparison charts, and keeping the layout clean once filters and interactions were layered in.',
      solution:
        'I worked in three layers: a wireframe prototype to validate component placement, a container plan to lock down the layout structure, and a final dashboard pass to refine the visual hierarchy, interactivity, and consistency between the Sales and Customer views.',
      outcome:
        "This project taught me that dashboard design begins long before the first chart is built. Turning a user story into a usable BI dashboard meant thinking from the stakeholder's perspective, deciding which metrics mattered most, planning the layout structure, and making sure the final dashboard was both interactive and readable.",
      reflection:
        "The biggest lesson was that a dashboard isn't just a collection of charts. A genuinely useful dashboard needs a clear information hierarchy, intentional layout decisions, and interactions that let users answer business questions with less effort.",
    },
  },
];
