import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO
        title={`${post.title} | Harsh Kumar Pandey`}
        description={post.excerpt}
        keywords={post.keywords}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <main className="page-container">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / {post.title}
        </nav>
        <article className="blog-post">
          <header className="post-header">
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>by Harsh Kumar Pandey</span>
            </div>
          </header>
          <div className="post-content">
            <p>{post.excerpt}</p>
            <p>{post.content}</p>
          </div>
          <footer className="post-footer">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
          </footer>
        </article>
      </main>
    </>
  );
}
