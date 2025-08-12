import { motion } from "framer-motion";
import { Cpu, Rocket, Boxes, Braces, Layers, CircuitBoard, Github, Atom, Coins } from "lucide-react";

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="size-10 rounded-full flex items-center justify-center bg-secondary text-foreground/90 border border-white/10 shadow-glow">
    {children}
  </div>
);

export const TechStack = () => {
  return (
    <section id="tech" className="container mx-auto py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Tech Stack</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-muted-foreground">
            I work across the stack: React/TypeScript, Node.js, Flutter, databases, and web3. I ship performant, accessible, and maintainable experiences.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Flutter', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Ethereum', 'Vite'].map((t) => (
              <span key={t} className="text-xs bg-brand/10 text-foreground/90 border border-brand/20 rounded-full px-2 py-1">{t}</span>
            ))}
          </div>
        </div>
        <div className="relative h-64">
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <IconWrap><Rocket className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <IconWrap><Atom className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute right-2 top-1/3">
            <IconWrap><Cpu className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute left-4 top-1/3">
            <IconWrap><Boxes className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute right-1/4 bottom-3">
            <IconWrap><Layers className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute left-1/4 bottom-4">
            <IconWrap><CircuitBoard className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute left-2 bottom-1/2">
            <IconWrap><Github className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute right-6 bottom-1/2">
            <IconWrap><Braces className="h-5 w-5" /></IconWrap>
          </div>
          <div className="absolute right-1/2 top-1/2">
            <IconWrap><Coins className="h-5 w-5" /></IconWrap>
          </div>
        </div>
      </div>
    </section>
  );
};
