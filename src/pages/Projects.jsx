import SEO from "../components/SEO";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <SEO
        title="AI & Machine Learning Projects | Harsh Kumar Pandey"
        description="Explore AI and ML portfolio projects: LLM-powered apps, NLP pipelines, computer vision APIs, RAG systems."
        keywords="ML engineer projects portfolio, machine learning projects, LLM application examples, AI developer projects"
        path="/projects"
      />
      <main className="page-container">
        <header className="page-header">
          <h1>AI &amp; Machine Learning Projects</h1>
          <p className="page-subtitle">Real-world projects spanning LLMs, NLP, computer vision, and full-stack AI systems.</p>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-category">{project.category}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub →</a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
