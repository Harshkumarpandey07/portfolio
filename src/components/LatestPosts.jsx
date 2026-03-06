import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function LatestPosts() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="section latest-posts" aria-labelledby="blog-heading">
      <div className="section-header">
        <h2 id="blog-heading">AI Engineering Notes</h2>
        <p className="section-subtitle">Practical guides on LLM development, ML deployment, and AI system design.</p>
      </div>
      <div className="blog-list">
        {latest.map((post) => (
          <article key={post.slug} className="blog-card compact">
            <div className="blog-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span className="read-time">{post.readTime}</span>
            </div>
            <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
      <div className="section-cta">
        <Link to="/blog" className="btn-secondary">Read All Posts →</Link>
      </div>
    </section>
  );
}
