import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anselm Mba — Group CTO, Technology Executive & AWS Activate Ambassador" },
      {
        name: "description",
        content:
          "Anselm Mba is a Group CTO and AWS Activate Ambassador with 10+ years driving digital transformation across FMCG, fintech, and logistics in West Africa.",
      },
      { property: "og:title", content: "Anselm Mba — Group CTO & Technology Executive" },
      {
        property: "og:description",
        content:
          "Technology strategy, fintech and payments platforms, cloud architecture, and engineering leadership at scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anselm Mba",
          jobTitle: "Group Chief Technology Officer",
          url: "https://anselmmba.com",
          sameAs: ["https://linkedin.com/in/anselmmba"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <Toaster theme="dark" position="bottom-right" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
