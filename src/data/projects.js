export const projects = [
  {
    id: 1,
    title: "HireAI — AI-Powered HR Automation Platform",
    slug: "hireai-hr-automation",
    description:
      "Production-grade dual-role SPA (Recruiter + Job Seeker) deployed live on Vercel. Features LLM-powered resume scoring using Groq API (Llama 3.3-70B) with structured prompt engineering — delivers 0–100 match scores with strengths, skill gaps, and recommendations in under 2 seconds.",
    tags: ["Groq API", "Llama 3.3-70B", "Node.js", "React.js", "Vercel", "Chart.js", "LLM", "Prompt Engineering"],
    category: "LLM Application",
    github: "https://github.com/Harshkumarpandey07",
    demo: "https://ai-resume-screener-hr-automation.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "PhytoSense — Plant Disease Detection System",
    slug: "plant-disease-detection",
    description:
      "Multi-class CNN (TensorFlow/Keras) that classifies plant leaf diseases from images. Applied data augmentation (rotation, flipping, zoom, normalization) to improve generalization on limited data. Deployed as a real-time Flask REST API enabling live image-based disease diagnosis.",
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Flask", "NumPy", "REST API"],
    category: "Computer Vision",
    github: "https://github.com/Harshkumarpandey07/Plant-disease-detection-system",
    demo: "https://plant-disease-detection-system-uvik.onrender.com",
    featured: true,
  },
  {
    id: 3,
    title: "Salary IQ — Salary Prediction System",
    slug: "salary-prediction",
    description:
      "Complete ML pipeline from raw data to production — data cleaning, feature engineering, Random Forest Regressor with GridSearchCV, evaluated using MAE/RMSE/R². Deployed as an interactive Streamlit web app and Flask REST API with real-time salary estimates.",
    tags: ["Python", "scikit-learn", "Random Forest", "Streamlit", "Flask", "Pandas", "NumPy"],
    category: "ML Pipeline",
    github: "https://github.com/Harshkumarpandey07",
    demo: "https://salarypredictionproject-lu6mlarosgwyp9me86zavz.streamlit.app/",
    featured: true,
  },
  {
    id: 4,
    title: "FreshBite — Online Food Delivery SPA",
    slug: "freshbite-food-delivery",
    description:
      "Fully responsive food delivery single-page application built in React.js with menu browsing, cart management, and complete order flow. Deployed live on Vercel.",
    tags: ["React.js", "JavaScript", "CSS3", "Vercel", "SPA"],
    category: "Full Stack",
    github: "https://github.com/Harshkumarpandey07",
    demo: "https://salarypredictionproject-lu6mlarosgwyp9me86zavz.streamlit.app/",
    featured: false,
  },
];
