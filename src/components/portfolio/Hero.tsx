import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="home-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[1200px] -translate-x-1/2 rounded-full blur-3xl bg-primary/40" />
      </div>
      <div className="container mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.h1
          id="home-heading"
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aryan Mehrotra — Software Developer
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Engineer. Optimizer. Creator of beautiful code and experiences.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a href="#resume">
            <Button size="lg">View Resume</Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">Let’s Connect</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
