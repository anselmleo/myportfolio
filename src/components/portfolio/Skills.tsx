import { motion } from "motion/react";
import { fadeUp, stagger, viewport } from "./motion-presets";

const groups = [
  {
    label: "Strategy & Leadership",
    skills: [
      "Technology Strategy & Roadmap",
      "Digital Transformation",
      "IT Governance",
      "Executive & Board Reporting",
      "Team Building & Mentorship",
    ],
  },
  {
    label: "Delivery & Operations",
    skills: [
      "Enterprise Architecture",
      "Project Portfolio Governance",
      "Cross-functional Delivery",
      "Vendor Selection & Contracts",
    ],
  },
  {
    label: "Domain Expertise",
    skills: [
      "Retail Execution (POS, Order Capture, Inventory)",
      "Distribution & Supply Chain",
      "Payments, Settlement & Core Banking",
      "E-commerce",
    ],
  },
  {
    label: "Technical",
    skills: [
      "AWS Cloud Infrastructure",
      "Cybersecurity & Regulatory Compliance",
      "Data Management & Migration",
      "Network Engineering",
      "APIs & Microservices",
      "PHP/Laravel",
      "TypeScript",
      "SQL & MongoDB",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative py-32 lg:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold/60" />
            <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
              Core Skills
            </span>
          </motion.div>
          <motion.h2
            id="skills-title"
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl leading-tight"
          >
            The disciplines behind<br />
            <span className="gold-text italic">the outcomes.</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {groups.map((g) => (
            <motion.div
              key={g.label}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="glass-card p-8 lg:p-10"
            >
              <motion.div variants={fadeUp} className="font-button text-[11px] uppercase tracking-[0.28em] text-gold mb-6">
                {g.label}
              </motion.div>
              <motion.div variants={stagger} className="flex flex-wrap gap-3">
                {g.skills.map((s) => (
                  <motion.span
                    key={s}
                    variants={fadeUp}
                    whileHover={{ y: -2, borderColor: "rgba(200,161,90,0.6)" }}
                    className="font-display text-sm px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-gold/[0.06] transition-colors"
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
