import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <>
      <SEO
        title="AI Engineering Notes | Harsh Kumar Pandey"
        description="Technical blog on machine learning engineering: LLM development, ML deployment, MLOps, and prompt engineering."
        keywords="ML engineering blog, LLM developer blog, machine learning tutorials, prompt engineering guide"
        path="/blog"
      />
      <main className="page-container">
        <header className="page-header">
          <h1>AI Engineering Notes</h1>
          <p className="page-subtitle">Practical guides on ML engineering, LLM development, and building production AI systems.</p>
        </header>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-meta">
                <time dateTime={post.date}>{post.date}</time>
                <span className="read-time">{post.readTime}</span>
              </div>
              <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <div className="post-tags">
                {post.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <Link to={`/blog/${post.slug}`} className="read-more">Read more →</Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
