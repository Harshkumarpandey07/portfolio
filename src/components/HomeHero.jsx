import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="hero-label">Machine Learning Engineer · Full Stack Developer · Open to Work</p>
        <h1 id="hero-heading">
          Hi, I'm <span className="accent">Harsh Kumar Pandey</span>
        </h1>
        <p className="hero-bio">
          Final year B.Tech CSE student building <strong>production-grade AI systems</strong>.
          I shipped <strong>HireAI</strong> — an LLM-powered HR automation platform using
          Groq API (Llama 3.3-70B) with real-time resume scoring, deployed on Vercel.
          I build end-to-end ML pipelines, REST APIs, and full-stack applications.
          Seeking a <strong>fresher ML / Software Engineer role</strong> at a startup or MNC.
        </p>
        <div className="hero-skills">
          {[
            "Python", "TensorFlow", "scikit-learn", "LLM APIs",
            "Prompt Engineering", "Flask", "React.js", "Node.js",
            "Pandas", "NumPy", "SQL", "Vercel",
          ].map((s) => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
        </div>
        <div className="hero-cta">
          <a
            href="https://ai-resume-screener-hr-automation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🚀 Live Project
          </a>
          <Link to="/projects" className="btn-secondary">View Projects</Link>
          <a
            href="https://github.com/Harshkumarpandey07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub →
          </a>
        </div>

        <div className="hero-badges">
          <span className="badge">🎓 B.Tech CSE 2026 — UCER Prayagraj</span>
          <span className="badge">🏅 NPTEL Elite — Python for Data Science (IIT Madras)</span>
          <span className="badge">🤖 IBM AI Virtual Internship</span>
        </div>
      </div>

      <div className="hero-terminal" aria-hidden="true">
        <div className="terminal-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terminal-title">harsh_pandey.py</span>
        </div>
        <pre className="terminal-body">
          <code>{`# Harsh Kumar Pandey
# ML Engineer · Full Stack Dev

profile = {
  "name": "Harsh Kumar Pandey",
  "role": "ML Engineer",
  "education": "B.Tech CSE 2026",
  "college": "UCER, Prayagraj",
  "cgpa": 7.0,
  "flagship_project": "HireAI",
  "llm_used": "Llama 3.3-70B (Groq)",
  "status": "Open to Work 🟢"
}

# Live project ↓
# ai-resume-screener-hr-automation
#           .vercel.app`}</code>
        </pre>
      </div>
    </section>
  );
}
