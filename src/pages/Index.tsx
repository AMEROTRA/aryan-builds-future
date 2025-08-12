import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { TechStack } from "@/components/portfolio/TechStack";
import { Leadership } from "@/components/portfolio/Leadership";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Leadership />
        <Contact />
      </main>
      <footer className="container mx-auto py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aryan Mehrotra. Built with React, Tailwind, and care for performance.
      </footer>
    </div>
  );
};

export default Index;
