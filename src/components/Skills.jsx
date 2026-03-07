const skillCategories = [
  {
    title: "ML / AI",
    icon: "🤖",
    skills: [
      "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy",
      "CNN", "Random Forest", "NLP", "Feature Engineering",
      "Prompt Engineering", "LLM API Integration", "Model Deployment",
    ],
  },
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript (ES6+)", "C", "C++", "SQL"],
  },
  {
    title: "Web / Backend",
    icon: "🌐",
    skills: ["React.js", "Node.js", "Flask", "REST API", "Streamlit", "HTML5", "CSS3"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Concepts",
    icon: "🛠️",
    skills: [
      "Git", "GitHub", "Vercel", "Jupyter Notebook", "VS Code",
      "OOP", "DSA", "DBMS", "API Security",
      "Supervised Learning", "Unsupervised Learning",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" aria-labelledby="skills-heading">
      <div className="section-header">
        <h2 id="skills-heading">Skills & Tools</h2>
        <p className="section-subtitle">
          Technologies I use to build production AI systems and full-stack applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skills-card">
            <div className="skills-card-header">
              <span className="skills-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="skills-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
