import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import cryptumImg from "@/assets/cryptum-hero.jpg";
import visionaryImg from "@/assets/visionaryfunds-hero.jpg";

const items = [
  {
    name: "Cryptum",
    tagline: "AI‑assisted NFT marketplace",
    description:
      "Generative AI meets creator UX — a marketplace exploring AI‑aided minting, discovery and performance.",
    image: cryptumImg,
    badges: ["AI", "NFT", "Next.js", "Design"],
  },
  {
    name: "VisionaryFunds",
    tagline: "Crowdfunding on Ethereum",
    description:
      "Trust‑minimized crowdfunding powered by Ethereum smart contracts with clean UX and transparent progress.",
    image: visionaryImg,
    badges: ["Ethereum", "Smart Contracts", "UX"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="glass-surface overflow-hidden"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={`${p.name} project banner`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
              <p className="text-muted-foreground mt-3">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="text-xs bg-brand/10 text-foreground/90 border border-brand/20 rounded-full px-2 py-1">
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="outline" asChild>
                  <a href="#" aria-disabled className="flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="#" aria-disabled className="flex items-center gap-2"><ExternalLink className="h-4 w-4" /> Live Demo</a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
