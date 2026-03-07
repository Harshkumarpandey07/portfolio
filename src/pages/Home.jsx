import { lazy, Suspense } from "react";
import SEO from "../components/SEO";

const HomeHero = lazy(() => import("../components/HomeHero"));
const FeaturedProjects = lazy(() => import("../components/FeaturedProjects"));
const Skills = lazy(() => import("../components/Skills"));
const Certifications = lazy(() => import("../components/Certifications"));
const Contact = lazy(() => import("../components/Contact"));
const LatestPosts = lazy(() => import("../components/LatestPosts"));

export default function Home() {
  return (
    <>
      <SEO
        title="Harsh Kumar Pandey | Machine Learning Engineer Portfolio"
        description="Final year B.Tech CSE student and ML Engineer. Built HireAI (LLM-powered HR platform) and PhytoSense (CNN plant disease detector) — both live in production. Seeking ML Engineer roles."
        keywords="Harsh Kumar Pandey, machine learning engineer portfolio, AI developer portfolio, ML engineer fresher, LLM developer portfolio, HireAI, UCER Prayagraj"
        path="/"
      />
      <Suspense fallback={<div style={{minHeight:"60vh"}} />}>
        <HomeHero />
        <FeaturedProjects />
        <Skills />
        <Certifications />
        <LatestPosts />
        <Contact />
      </Suspense>
    </>
  );
}
