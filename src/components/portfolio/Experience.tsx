import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeUp, stagger, viewport } from "./motion-presets";

const experiences = [
  {
    year: "May 2025 — Present",
    company: "ORBIT Technology Inc.",
    role: "Chief Technology Officer",
    points: [
      "Own company-wide technology strategy across manufacturing, supply chain, distribution and retail operations for a ~30-year Nigerian FMCG conglomerate.",
      "Direct digital transformation agenda and serve as technology owner for retail distribution covering 190,000+ outlets across 15 Nigerian states.",
      "Own the group's retail execution stack end to end—field order capture, inventory management, POS and merchant payment devices including sound boxes.",
      "Lead engineering, infrastructure and data functions; set architecture standards, security posture and vendor selection across the group.",
    ],
  },
  {
    year: "Sep 2023 — May 2025",
    company: "GIGX Technologies Inc. (GigXPAD)",
    role: "Chief Technology Officer",
    points: [
      "Architected core platform for cross-border payments and multi-currency wallet across African and North American corridors.",
      "Built engineering function and delivery process for regulated, multi-jurisdiction product carrying FINTRAC (Canada) compliance and Bank of Zambia licensing.",
      "Platform serves 50,000+ active users across 15+ countries.",
    ],
  },
  {
    year: "Jan 2022 — Sep 2023",
    company: "Stellas Bank — The GIG Group",
    role: "Chief Technology Officer",
    points: [
      "Owned end-to-end technology strategy and execution for a licensed digital bank, taking product from project team to national public launch in February 2022.",
      "Built and scaled backend systems for secure, high-volume financial transactions and customer-facing APIs.",
      "Led successful migration of core banking ledger for millions of records from Appzone (Qore) to Udara360 ensuring zero loss of transaction integrity.",
      "By March 2023 the platform served ~27,000 customers and had processed £31M+ in transaction value.",
    ],
  },
  {
    year: "Jun 2021 — Jan 2022",
    company: "Stellas Bank — The GIG Group",
    role: "Team Lead — Digital Bank Project",
    points: [
      "Led founding project team that built the digital bank from inception; promoted to Chief Technology Officer ahead of February 2022 launch.",
    ],
  },
  {
    year: "Nov 2020 — May 2021",
    company: "GIG Mobility — The GIG Group",
    role: "Lead Engineer",
    points: [
      "Led backend engineering for logistics and mobility systems supporting national transport and last-mile delivery network.",
      "Built geospatial routing and tracking capability on Google Maps APIs, improving route planning and passenger experience.",
    ],
  },
  {
    year: "Aug 2019 — Nov 2020",
    company: "Intelligent Innovations Co.",
    role: "Senior Software Engineer",
    points: [
      "Designed and implemented server-side systems within core engineering team.",
      "Extended the company's enterprise software capability across its product portfolio.",
    ],
  },
  {
    year: "Jul 2016 — Jul 2019",
    company: "Cousant Connect",
    role: "Software Engineer",
    points: [
      "Built scalable, automated business solutions for clients across multiple sectors.",
      "Maintained and extended production systems against evolving customer requirements.",
    ],
  },
  {
    year: "2009 — 2016",
    company: "Pedachess Educational Ltd",
    role: "IT Coordinator & Network Engineer",
    points: [
      "Ran organization's IT function end to end: network design and administration, systems and user support, hardware procurement and vendor management.",
      "Delivered ICT training programmes to staff and candidates, authoring training material used across sessions.",
    ],
  },
];

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 30%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative py-32 lg:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold/60" />
            <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
              Experience
            </span>
          </motion.div>
            <motion.h2
              id="experience-title"
              variants={fadeUp}
              className="font-display text-4xl lg:text-5xl leading-tight"
            >
              17 years of<br />
              <span className="gold-text italic">shipping in production.</span>
            </motion.h2>
        </motion.div>

        <div ref={trackRef} className="relative">
          {/* rail */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/8" />
          <motion.div
            style={{ height }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-gold via-gold/60 to-transparent origin-top"
          />

          <div className="space-y-16">
            {experiences.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={e.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${
                    left ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* node */}
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />

                  <div className={left ? "md:text-right md:pr-8" : "md:pl-8 md:col-start-2"}>
                    <div className="font-button text-[11px] uppercase tracking-[0.24em] text-gold">
                      {e.year}
                    </div>
                    <h3 className="mt-3 font-display text-2xl">{e.company}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {e.role}
                    </div>
                    <ul className={`mt-5 space-y-2 text-sm text-muted-foreground leading-relaxed ${left ? "md:ml-auto" : ""} max-w-md`}>
                      {e.points.map((p) => (
                        <li key={p} className={`flex gap-2 ${left ? "md:flex-row-reverse md:text-right" : ""}`}>
                          <span className="text-gold mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
