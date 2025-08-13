import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Oracle",
    role: "Software Developer",
    location: "Bengaluru, IN",
    start: "2024-07",
    end: "Present",
    highlights: [
      "Improved page load by 15% via bundle splitting, caching, and image optimization.",
      "Shipped infinite scroll and skeleton loading, boosting session duration by ~10%.",
      "Eliminated non‑essential third‑party scripts in critical paths (100% reduction).",
      "Led adoption of React Query and request de‑duplication for snappier UX.",
    ],
  },
  {
    company: "Oracle",
    role: "SDE Intern",
    location: "Bengaluru, IN",
    start: "2023-05",
    end: "2024-06",
    highlights: [
      "Built internal dashboards with accessible charts and real‑time updates.",
      "Designed telemetry to surface Core Web Vitals across services for faster triage.",
      "Automated regression checks, reducing manual QA cycles by ~30%.",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const dotVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2 },
};

const Experience = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: experience.map((exp, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Organization',
        name: exp.company,
        employee: {
          '@type': 'Person',
          jobTitle: exp.role,
        },
        description: exp.highlights.join(' '),
      },
    })),
  };

  return (
    <section aria-labelledby="experience-heading" className="border-t">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 id="experience-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
            Experience
          </h2>
          <p className="mt-2 text-muted-foreground">
            A journey from intern to building performant, resilient interfaces at scale.
          </p>
        </div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative border-l pl-6 md:pl-8"
        >
          {experience.map((exp, i) => (
            <motion.li
              key={exp.company + exp.role + i}
              variants={item}
              className="group relative pb-10 last:pb-0"
            >
              <motion.span
                variants={dotVariants}
                initial="rest"
                whileHover="hover"
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border bg-background shadow ring-2 ring-primary"
                aria-hidden
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-medium">
                  {exp.role} · <span className="text-primary">{exp.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{exp.location}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {formatPeriod(exp.start, exp.end)}
              </p>

              <ul className="mt-3 space-y-2">
                {exp.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="relative rounded-md border bg-card p-3 text-sm leading-relaxed text-card-foreground transition-colors hover:bg-accent/30"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {metricsFromHighlights(exp.highlights).map((m, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};

function formatPeriod(start: string, end: string) {
  const s = toMonthYear(start);
  const e = end === 'Present' ? 'Present' : toMonthYear(end);
  return `${s} — ${e}`;
}

function toMonthYear(iso: string) {
  if (iso === 'Present') return iso;
  const d = new Date(iso + '-01');
  const fmt = new Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' });
  return fmt.format(d);
}

function metricsFromHighlights(highlights: string[]) {
  const re = /(\d+%|\+?\d+%|\~?\d+%|\d+\s?x|\d+\.\d+\s?s|\d+\s?ms)/gi;
  const found = new Set<string>();
  highlights.forEach((h) => {
    const m = h.match(re);
    if (m) m.forEach((x) => found.add(x));
  });
  return Array.from(found);
}

export default Experience;
