import { motion } from "framer-motion";
import { experiences } from "./data";

export const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        <ul className="space-y-10">
          {experiences.map((exp, i) => (
            <li key={i} className="relative">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/2 md:pr-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-surface p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{exp.role} · {exp.company}</h3>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.metrics.map((m, idx) => (
                        <span key={idx} className="text-xs bg-brand/10 text-foreground/90 border border-brand/20 rounded-full px-2 py-1">
                          {m}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
