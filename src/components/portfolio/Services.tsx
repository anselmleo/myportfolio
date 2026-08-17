import { motion } from "motion/react";
import {
  Compass,
  Layers,
  CreditCard,
  CloudCog,
  Plug,
  Users,
} from "lucide-react";
import { fadeUp, stagger, viewport } from "./motion-presets";

const services = [
  {
    icon: Compass,
    title: "Technology Strategy",
    desc: "Company-wide technology roadmaps that translate investment into measurable business outcomes.",
  },
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "End-to-end transformation across manufacturing, supply chain, distribution, and retail operations.",
  },
  {
    icon: CreditCard,
    title: "Fintech & Payments Platforms",
    desc: "Architecture for cross-border payments, settlements, and licensed financial-services products.",
  },
  {
    icon: Plug,
    title: "Scalable Systems & APIs",
    desc: "Microservice architectures and typed APIs engineered for regulatory compliance and scale.",
  },
  {
    icon: CloudCog,
    title: "Cloud Architecture",
    desc: "Cloud strategy, cost optimization, and scalable infrastructure.",
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    desc: "Building, mentoring, and leading cross-functional engineering, infrastructure, and data teams.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative py-32 lg:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold/60" />
            <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
              Services
            </span>
          </motion.div>
          <motion.h2
            id="services-title"
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl leading-tight"
          >
            Where I do<br />
            <span className="gold-text italic">my sharpest work.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-muted-foreground max-w-2xl">
            17 years spanning network infrastructure, software engineering and C-suite leadership, 
            distilled into a focused practice for founders and executives.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="glass-card p-7 group cursor-default"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                <s.icon size={20} />
              </div>
              <h3 className="mt-6 font-display text-xl leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
