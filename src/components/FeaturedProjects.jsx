import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section featured-projects" aria-labelledby="projects-heading">
      <div className="section-header">
        <h2 id="projects-heading">Projects</h2>
        <p className="section-subtitle">
          Production AI systems and end-to-end ML pipelines — built, deployed, and live.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  🚀 Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="section-cta">
        <Link to="/projects" className="btn-secondary">View All Projects →</Link>
      </div>
    </section>
  );
}
