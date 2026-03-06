import { lazy, Suspense } from "react";
import SEO from "../components/SEO";
const HomeHero = lazy(() => import("../components/HomeHero"));
const FeaturedProjects = lazy(() => import("../components/FeaturedProjects"));
const LatestPosts = lazy(() => import("../components/LatestPosts"));

export default function Home() {
  return (
    <>
      <SEO
        title="Machine Learning Engineer Portfolio | Harsh Kumar Pandey"
        description="Machine Learning Engineer specializing in LLMs, NLP, computer vision, and scalable AI systems."
        keywords="machine learning engineer portfolio, AI developer portfolio, ML engineer projects, LLM developer portfolio, Harsh Kumar Pandey"
        path="/"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <HomeHero />
        <FeaturedProjects />
        <LatestPosts />
      </Suspense>
    </>
  );
}
