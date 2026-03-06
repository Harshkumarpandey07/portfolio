import { lazy, Suspense } from "react";
import SEO from "../components/SEO";

const HomeHero = lazy(() => import("../components/HomeHero"));
const FeaturedProjects = lazy(() => import("../components/FeaturedProjects"));
const LatestPosts = lazy(() => import("../components/LatestPosts"));

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Harsh Kumar Pandey - Machine Learning Engineer Portfolio",
  url: "https://harshkumarpandey.vercel.app",
  mainEntity: {
    "@type": "Person",
    name: "Harsh Kumar Pandey",
    jobTitle: "Machine Learning Engineer",
    description:
      "Machine Learning Engineer specializing in LLMs, NLP, computer vision, and full stack AI applications.",
    url: "https://harshkumarpandey.vercel.app",
    sameAs: [
      "https://github.com/harshkumarpandey",
      "https://linkedin.com/in/harshkumarpandey",
    ],
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Machine Learning Engineer Portfolio | Harsh Kumar Pandey"
        description="Machine Learning Engineer and Full Stack Developer specializing in LLMs, NLP, computer vision, and scalable AI systems. Explore real-world AI projects and ML engineering guides."
        keywords="machine learning engineer portfolio, AI developer portfolio, ML engineer projects, LLM developer portfolio, Harsh Kumar Pandey, AI engineer India, deep learning projects, NLP engineer portfolio"
        path="/"
        structuredData={homeStructuredData}
      />
      <Suspense fallback={<div className="loading" aria-label="Loading..." />}>
        <HomeHero />
        <FeaturedProjects />
        <LatestPosts />
      </Suspense>
    </>
  );
}
