import Navbar from "@/components/portfolio/Navbar";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import TechStack from "@/components/portfolio/TechStack";
import Leadership from "@/components/portfolio/Leadership";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-background text-foreground">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Leadership />
        <Contact />
      </main>
      <footer className="border-t">
        <div className="container mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aryan Mehrotra. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Index;
