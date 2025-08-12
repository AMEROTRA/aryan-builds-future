import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const Section = ({ id, title, children }: PropsWithChildren<{ id: string; title: string }>) => {
  return (
    <section id={id} className="container mx-auto py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="font-display text-2xl md:text-3xl font-semibold mb-8"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
};
