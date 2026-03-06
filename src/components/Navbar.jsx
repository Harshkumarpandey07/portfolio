import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header role="banner">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <span className="logo-lt">&lt;</span>
          <span className="logo-name">Harsh</span>
          <span className="logo-slash"> /</span>
          <span className="logo-gt">&gt;</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link></li>
          <li><Link to="/projects" className={pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link></li>
          <li><Link to="/blog" className={pathname === "/blog" ? "nav-link active" : "nav-link"}>Blog</Link></li>
        </ul>
        <a href="https://github.com/Harshkumarpandey07" target="_blank" rel="noopener noreferrer" className="nav-cta">GitHub</a>
      </nav>
    </header>
  );
}
