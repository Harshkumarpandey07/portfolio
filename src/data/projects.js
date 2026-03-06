export const projects = [
  {
    id: 1,
    title: "HireAI — AI-Powered HR Automation Platform",
    slug: "hireai-hr-automation",
    description:
      "Production-grade SPA with dual-role portals (Recruiter + Job Seeker). Features AI resume scoring using Groq API (Llama 3.3-70B), Kanban candidate pipeline, job postings, email campaigns, and a real-time analytics dashboard. Scores resumes 0–100 against job descriptions in under 2 seconds.",
    tags: ["Groq API", "Llama 3.3-70B", "Node.js", "JavaScript", "Vercel", "Chart.js", "LLM", "Prompt Engineering"],
    category: "LLM Application",
    github: "https://github.com/Harshkumarpandey07",
    demo: "https://ai-resume-screener-hr-automation.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Plant Disease Detection System",
    slug: "plant-disease-detection",
    description:
      "CNN-based multi-class plant disease classifier built with TensorFlow/Keras. Applied image preprocessing and augmentation (rotation, flipping, zoom, normalization) to improve generalization on limited data. Deployed as a real-time prediction REST API via Flask.",
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Flask", "NumPy", "REST API"],
    category: "Computer Vision",
    github: "https://github.com/Harshkumarpandey07/Plant-disease-detection-system",
    demo: "https://plant-disease-detection-system-uvik.onrender.com",
    featured: true,
  },
  {
    id: 3,
    title: "Salary Prediction System",
    slug: "salary-prediction",
    description:
      "End-to-end ML pipeline using Random Forest Regressor with GridSearchCV hyperparameter tuning. Covers full lifecycle: data cleaning, feature engineering, categorical encoding, model evaluation (MAE/RMSE/R²), and deployment as a Flask REST API.",
    tags: ["Python", "scikit-learn", "Random Forest", "Flask", "Pandas", "NumPy"],
    category: "ML Pipeline",
    github: "https://github.com/Harshkumarpandey07",
    demo: null,
    featured: true,
  },
];
