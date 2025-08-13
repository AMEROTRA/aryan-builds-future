import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cryptum",
    blurb: "AI + NFT marketplace with generative visuals and creator tooling.",
    image: "/placeholder.svg",
    github: "https://github.com/aryan/cryptum",
    demo: "#",
  },
  {
    title: "VisionaryFunds",
    blurb: "Crowdfunding using Ethereum smart contracts and a minimal dApp UI.",
    image: "/placeholder.svg",
    github: "https://github.com/aryan/visionaryfunds",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t">
      <div className="container mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 id="projects-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="overflow-hidden">
                <img src={p.image} alt={`${p.title} cover image`} loading="lazy" className="h-44 w-full object-cover" />
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline">GitHub</Button>
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <Button size="sm">Demo</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
