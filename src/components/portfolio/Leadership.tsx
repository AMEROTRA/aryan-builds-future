import { motion } from "framer-motion";

export const Leadership = () => {
  return (
    <section id="leadership" className="container mx-auto py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Leadership & Hackathons</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }} className="glass-surface p-6">
          <h3 className="text-xl font-semibold">CentuRITon Hackathon</h3>
          <p className="text-muted-foreground mt-2">Organized and led teams building novel solutions; mentored peers on design systems and shipping quickly with quality.</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {['Leadership', 'Mentorship', 'Rapid Prototyping'].map((b) => (
              <span key={b} className="text-xs bg-brand/10 text-foreground/90 border border-brand/20 rounded-full px-2 py-1">{b}</span>
            ))}
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="glass-surface p-6">
          <h3 className="text-xl font-semibold">eSports Club</h3>
          <p className="text-muted-foreground mt-2">Applied systems thinking to community, events, and operations — fostering collaboration and performance.</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {['Community', 'Operations', 'Systems Thinking'].map((b) => (
              <span key={b} className="text-xs bg-brand/10 text-foreground/90 border border-brand/20 rounded-full px-2 py-1">{b}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
