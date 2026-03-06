import { Helmet } from "react-helmet";

/**
 * SEO Component — dynamically sets page title, meta description,
 * Open Graph tags, Twitter Card, and JSON-LD structured data per page.
 *
 * Usage:
 *   <SEO
 *     title="Projects | Harsh Kumar Pandey"
 *     description="Explore AI and ML projects..."
 *     path="/projects"
 *   />
 */
const SEO = ({
  title = "Harsh Kumar Pandey | Machine Learning Engineer Portfolio",
  description = "Machine Learning Engineer portfolio showcasing AI systems, ML pipelines, LLM integrations, and full stack applications.",
  keywords = "machine learning engineer portfolio, AI developer portfolio, ML projects, LLM engineer, Harsh Kumar Pandey",
  path = "/",
  image = "/preview.png",
  type = "website",
  structuredData = null,
}) => {
  const siteUrl = "https://harshkumarpandey.vercel.app";
  const fullUrl = `${siteUrl}${path}`;
  const fullImage = `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Harsh Kumar Pandey" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Harsh Kumar Pandey Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@harshkumarpandey" />

      {/* Optional per-page JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
