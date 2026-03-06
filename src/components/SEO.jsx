import { Helmet } from "react-helmet-async";

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
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Harsh Kumar Pandey" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Harsh Kumar Pandey Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
