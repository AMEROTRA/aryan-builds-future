import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Initialize theme from localStorage or system
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored ?? (prefersDark ? "dark" : "light");
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          Aryan Mehrotra
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground story-link">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/aryan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/aryan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <Button variant="outline" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
          <a href="#contact" className="hidden md:block">
            <Button size="sm">Let’s Connect</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
