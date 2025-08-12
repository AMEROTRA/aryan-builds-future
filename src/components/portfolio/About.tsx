import { motion } from "framer-motion";
import { aboutText } from "./data";

export const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="glass-surface p-6 md:p-8"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">About Aryan</h2>
        <p className="text-muted-foreground leading-relaxed">{aboutText}</p>
      </motion.div>
    </section>
  );
};
