import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 h-1 origin-left bg-brand z-[60]"
    />
  );
};
