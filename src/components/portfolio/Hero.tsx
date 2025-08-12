import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Hero = () => {
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div onMouseMove={move} className="container mx-auto pt-16 md:pt-24 pb-14 md:pb-20 relative">
        <div className="absolute inset-0 hero-ambient" style={{ background: "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), hsl(var(--brand)/.25), transparent 60%)" }} />

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-muted-foreground mb-3"
        >
          Software Developer @ Oracle • Builder • UI/UX-minded Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Engineer. Optimizer. Creator of beautiful code and experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          I'm Aryan Mehrotra — CSE grad from Ramaiah Institute of Technology, now crafting performant, elegant interfaces and full‑stack systems. I bridge design precision with engineering rigor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button
            variant="hero"
            onClick={() => toast("Resume coming soon. Reach out below to connect!")}
          >
            View Resume
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Let's Connect</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
