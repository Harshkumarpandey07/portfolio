import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const postStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://harshkumarpandey.vercel.app/blog/${post.slug}`,
    image: "https://harshkumarpandey.vercel.app/preview.png",
    author: {
      "@type": "Person",
      name: "Harsh Kumar Pandey",
      url: "https://harshkumarpandey.vercel.app",
      jobTitle: "Machine Learning Engineer",
    },
    publisher: {
      "@type": "Person",
      name: "Harsh Kumar Pandey",
      url: "https://harshkumarpandey.vercel.app",
    },
    keywords: post.keywords,
    articleSection: "Machine Learning Engineering",
    inLanguage: "en-US",
  };

  return (
    <>
      <SEO
        title={`${post.title} | Harsh Kumar Pandey`}
        description={post.excerpt}
        keywords={post.keywords}
        path={`/blog/${post.slug}`}
        type="article"
        structuredData={postStructuredData}
      />

      <main className="page-container">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link to="/">Home</Link> /{" "}
          <Link to="/blog">Blog</Link> / {post.title}
        </nav>

        <article
          className="blog-post"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <meta itemProp="author" content="Harsh Kumar Pandey" />
          <meta itemProp="datePublished" content={post.date} />
          <meta itemProp="keywords" content={post.keywords} />

          <header className="post-header">
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h1 itemProp="headline">{post.title}</h1>
            <div className="post-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>by Harsh Kumar Pandey</span>
            </div>
          </header>

          {/* Content rendered as markdown-style text */}
          <div
            className="post-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />

          <footer className="post-footer">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
          </footer>
        </article>
      </main>
    </>
  );
}

/**
 * Simple Markdown-to-HTML renderer for blog post content.
 * In production, use react-markdown or a proper parser.
 */
function renderContent(md) {
  return md
    .replace(/## (.+)/g, "<h2>$1</h2>")
    .replace(/### (.+)/g, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^/, "<p>")
    .concat("</p>");
}
