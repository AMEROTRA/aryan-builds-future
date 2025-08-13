import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        <h2 id="about-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">About Aryan</h2>
        <motion.p
          className="mt-4 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          I’m a Computer Science graduate from Ramaiah Institute of Technology, now building performant
          frontends and reliable experiences at Oracle in Bengaluru. I love the intersection of design and
          engineering—optimizing Core Web Vitals, simplifying flows, and translating ideas into polished products.
        </motion.p>
      </div>
    </section>
  );
}
