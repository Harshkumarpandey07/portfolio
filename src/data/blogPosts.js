export const blogPosts = [
  {
    slug: "building-hireai-llm-resume-screener",
    title: "How I Built a Production LLM Resume Screener as a Fresher",
    date: "2025-10-15",
    readTime: "8 min read",
    tags: ["LLM", "Groq API", "Node.js", "Prompt Engineering", "Vercel"],
    excerpt:
      "A deep dive into how I designed and shipped HireAI — a production-grade AI HR automation platform using Groq API (Llama 3.3-70B), serverless Node.js, and structured prompt engineering. From architecture decisions to deployment.",
    keywords:
      "LLM resume screener project, build AI HR tool, Groq API Llama project, prompt engineering resume scoring, LLM application fresher project, production AI project portfolio",
    content:
      "Building HireAI taught me that shipping production AI is less about model accuracy and more about system design. I chose Groq API for its sub-2-second inference on Llama 3.3-70B. The key challenge was structured output — prompting the model to return valid JSON with scores, strengths, and skill gaps every single time. I solved this with strict output format instructions and a validation layer. The serverless Node.js proxy on Vercel secured my API keys and resolved CORS issues cleanly.",
  },
  {
    slug: "cnn-plant-disease-detection-tensorflow",
    title: "Training a CNN for Plant Disease Detection with TensorFlow",
    date: "2025-09-20",
    readTime: "7 min read",
    tags: ["CNN", "TensorFlow", "Keras", "Computer Vision", "Flask"],
    excerpt:
      "How I built a multi-class plant disease classifier using CNNs, tackled limited training data with augmentation, and deployed it as a Flask REST API — a complete computer vision project walkthrough.",
    keywords:
      "CNN plant disease detection TensorFlow, image classification Keras project, computer vision ML project, Flask ML API deployment, deep learning image classification fresher project",
    content:
      "The biggest challenge in this project was limited training data. I used Keras ImageDataGenerator for augmentation — rotation, flipping, zoom, and normalization — which significantly improved validation accuracy. The CNN architecture used three conv-pool blocks followed by dense layers with dropout. Flask made deployment straightforward: one endpoint accepting base64 image input, returning the predicted disease class and confidence score.",
  },
  {
    slug: "end-to-end-ml-pipeline-random-forest",
    title: "Building an End-to-End ML Pipeline with Random Forest",
    date: "2025-08-10",
    readTime: "6 min read",
    tags: ["scikit-learn", "Random Forest", "Flask", "MLOps", "Python"],
    excerpt:
      "A practical walkthrough of building a complete ML pipeline — from raw data to deployed Flask API — using Random Forest, GridSearchCV, and proper model evaluation. The salary prediction project that taught me production ML.",
    keywords:
      "end-to-end machine learning pipeline Python, Random Forest regressor scikit-learn, GridSearchCV hyperparameter tuning, Flask ML REST API, ML pipeline fresher project, machine learning portfolio project",
    content:
      "Most tutorials stop at model training. This project forced me to handle the full lifecycle: messy CSV data, categorical encoding with pandas, feature engineering, cross-validation, hyperparameter tuning with GridSearchCV, and finally wrapping everything in a Flask API. Evaluating with MAE, RMSE, and R² gave me a nuanced view of model performance beyond just accuracy.",
  },
  {
    slug: "prompt-engineering-structured-output-llm",
    title: "Prompt Engineering for Reliable JSON Output from LLMs",
    date: "2025-07-25",
    readTime: "5 min read",
    tags: ["LLM", "Prompt Engineering", "Groq", "AI", "NLP"],
    excerpt:
      "Lessons from building HireAI: how to reliably extract structured JSON from LLMs using prompt engineering, output validation, and the right model instructions — without hallucinations breaking your app.",
    keywords:
      "prompt engineering structured JSON output LLM, reliable LLM output formatting, Groq API prompt engineering, LLM JSON extraction, prevent LLM hallucination structured output",
    content:
      "Getting consistent JSON from an LLM is harder than it looks. In HireAI, I needed the model to always return a score (0-100), an array of strengths, an array of skill gaps, and a recommendation string. My solution: explicit output format in the system prompt, a concrete JSON example, and a validation function that retries on parse failure. With Groq's fast inference, even a retry stays under 4 seconds total.",
  },
];
