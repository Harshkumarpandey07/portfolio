import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Harsh Kumar Pandey</p>
          <p className="footer-title">Machine Learning Engineer · Full Stack Developer</p>
          <p className="footer-desc">
            Final year B.Tech CSE student building production AI systems.
            Open to ML Engineer / Software Engineer roles at startups and MNCs.
          </p>
          <p className="footer-contact">
            📧{" "}
            <a href="mailto:harshkumaranipandey@gmail.com">
              harshkumaranipandey@gmail.com
            </a>
          </p>
          <p className="footer-contact">📍 Prayagraj, Uttar Pradesh, India</p>
        </div>

        <nav aria-label="Footer navigation" className="footer-nav">
          <p className="footer-nav-title">Navigation</p>
          <ul role="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        <div className="footer-social">
          <p className="footer-nav-title">Connect</p>
          <a
            href="https://github.com/Harshkumarpandey07"
            target="_blank"
            rel="noopener noreferrer me"
          >
            GitHub — Harshkumarpandey07
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-kumar-pandey-0011382a3/"
            target="_blank"
            rel="noopener noreferrer me"
          >
            LinkedIn — Harsh Kumar Pandey
          </a>
          <a
            href="https://ai-resume-screener-hr-automation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 Live Project — HireAI
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <small>
            © {new Date().getFullYear()} Harsh Kumar Pandey · ML Engineer Portfolio ·
            B.Tech CSE, United College of Engineering &amp; Research, Prayagraj
          </small>
        </p>
      </div>
    </footer>
  );
}
