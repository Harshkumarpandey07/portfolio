import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const roles = ["Machine Learning Engineer", "LLM Application Builder", "Full Stack Developer", "AI Systems Engineer"];
export default function HomeHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) { timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60); }
      else { timeout = setTimeout(() => setTyping(false), 1800); }
    } else {
      if (displayed.length > 0) { timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30); }
      else { setRoleIndex((i) => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">Open to Work · Fresher · B.Tech CSE 2026</p>
        <h1>Hi, I'm <span className="accent">Harsh Kumar Pandey</span></h1>
        <div className="hero-typing"><span className="typing-text">{displayed}</span><span className="typing-cursor">|</span></div>
        <p className="hero-bio">Final year B.Tech CSE student building <strong>production-grade AI systems</strong>. I shipped <strong>HireAI</strong> — an LLM-powered HR automation platform using Groq API (Llama 3.3-70B) — and <strong>PhytoSense</strong>, a CNN-based plant disease detector, both live in production.</p>
        <div className="hero-skills">
          {["Python","TensorFlow","scikit-learn","LLM APIs","Prompt Engineering","Flask","React.js","Node.js","Pandas","NumPy","SQL","Vercel"].map((s) => <span key={s} className="skill-chip">{s}</span>)}
        </div>
        <div className="hero-cta">
          <a href="https://ai-resume-screener-hr-automation.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">🚀 Live Project</a>
          <a href="/Harsh_Kumar_Pandey_Resume.pdf" download="Harsh_Kumar_Pandey_Resume.pdf" className="btn-resume">📄 Download Resume</a>
          <Link to="/projects" className="btn-secondary">View Projects</Link>
          <a href="https://github.com/Harshkumarpandey07" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub →</a>
        </div>
        <div className="hero-badges">
          <span className="badge">🎓 B.Tech CSE 2026 — UCER Prayagraj · CGPA 7.0</span>
          <span className="badge">🏅 NPTEL Elite — Python for Data Science (IIT Madras)</span>
          <span className="badge">🤖 IBM AI Virtual Internship · Sep–Oct 2025</span>
        </div>
      </div>
      <div className="hero-terminal" aria-hidden="true">
        <div className="terminal-header">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <span className="terminal-title">harsh_pandey.py</span>
        </div>
        <pre className="terminal-body"><code>{`# Harsh Kumar Pandey\n# ML Engineer · Full Stack Dev\n\nprofile = {\n  "name": "Harsh Kumar Pandey",\n  "role": "ML Engineer",\n  "education": "B.Tech CSE 2026",\n  "college": "UCER, Prayagraj",\n  "projects_live": 4,\n  "llm_used": "Llama 3.3-70B (Groq)",\n  "status": "Open to Work 🟢"\n}\n\n# Every project is deployed ✓`}</code></pre>
      </div>
    </section>
  );
}
