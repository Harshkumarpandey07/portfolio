import SEO from "../components/SEO";
import { projects } from "../data/projects";

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI & Machine Learning Projects — Harsh Kumar Pandey",
  url: "https://harshkumarpandey.vercel.app/projects",
  description:
    "Portfolio of machine learning and AI projects including LLM applications, NLP pipelines, computer vision systems, and full stack ML applications.",
  author: {
    "@type": "Person",
    name: "Harsh Kumar Pandey",
    jobTitle: "Machine Learning Engineer",
  },
};

export default function Projects() {
  return (
    <>
      <SEO
        title="AI & Machine Learning Projects | Harsh Kumar Pandey"
        description="Explore AI and ML portfolio projects: LLM-powered apps, NLP pipelines, computer vision APIs, RAG systems, and full stack machine learning applications by Harsh Kumar Pandey."
        keywords="ML engineer projects portfolio, machine learning projects GitHub, LLM application examples, AI developer projects, NLP projects Python, computer vision projects, RAG system project, MLOps pipeline"
        path="/projects"
        structuredData={projectsStructuredData}
      />

      <main className="page-container">
        <header className="page-header">
          <h1>AI &amp; Machine Learning Projects</h1>
          <p className="page-subtitle">
            Real-world projects spanning LLMs, NLP, computer vision, and
            full-stack AI systems.
          </p>
        </header>

        <div className="projects-grid" role="list" aria-label="ML Projects">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              role="listitem"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <div className="project-category">{project.category}</div>
              <h2 itemProp="name">{project.title}</h2>
              <p itemProp="description">{project.description}</p>
              <div className="project-tags" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  itemProp="codeRepository"
                >
                  GitHub →
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
