import { motion } from "motion/react";
import { TrendingUp, RefreshCw, Globe2, Award } from "lucide-react";
import { fadeUp, stagger, viewport } from "./motion-presets";

const highlights = [
  {
    icon: TrendingUp,
    tag: "Business Generation",
    title: "Diversified a single-product company into four revenue lines.",
    desc: "Expanded the company's technology offering from one product to four revenue-generating products through disciplined strategy and execution.",
  },
  {
    icon: Award,
    tag: "Adoption",
    title: "Exceeded product adoption targets by 90%.",
    desc: "Drove market traction with rigorous roadmap prioritization, tight engineering delivery, and go-to-market alignment.",
  },
  {
    icon: RefreshCw,
    tag: "Turnaround",
    title: "Revived a failing product into profitability.",
    desc: "Reversed the trajectory of an underperforming product through smart technology decisions, architectural simplification, and steep cost reductions.",
  },
  {
    icon: Globe2,
    tag: "Global Impact",
    title: "AWS Activate Ambassador for startups across Sub-Saharan Africa.",
    desc: "Advise founders and engineering teams on cloud strategy, product architecture, and scalable infrastructure at regional scale.",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative py-32 lg:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/60" />
              <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
                Key Achievements
              </span>
            </motion.div>
            <motion.h2
              id="portfolio-title"
              variants={fadeUp}
              className="font-display text-4xl lg:text-5xl leading-tight"
            >
              Products shipped.<br />
              <span className="gold-text italic">Outcomes measured.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-muted-foreground max-w-xl">
              Selected results from a decade of engineering leadership across FMCG, fintech, and logistics.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {highlights.map((h) => (
            <motion.article
              key={h.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass-card p-8 lg:p-10 flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold shrink-0">
                  <h.icon size={20} />
                </div>
                <span className="font-button text-[10px] uppercase tracking-[0.24em] text-gold">
                  {h.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl leading-snug">
                {h.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {h.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
