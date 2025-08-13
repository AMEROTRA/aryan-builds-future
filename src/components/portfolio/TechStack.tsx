import { Badge } from "@/components/ui/badge";

const stack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "React Query",
  "Vite",
  "Ethereum",
  "Solidity",
  "Flutter",
];

export default function TechStack() {
  return (
    <section id="tech" aria-labelledby="tech-heading" className="border-t">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        <h2 id="tech-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Tech Stack</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((t) => (
            <Badge key={t} variant="secondary" className="text-sm">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
