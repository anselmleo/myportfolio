import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeUp, stagger, viewport } from "./motion-presets";

const experiences = [
  {
    year: "May 2025 — Present",
    company: "ORBIT Technology Inc.",
    role: "Chief Technology Officer",
    points: [
      "Define and execute company-wide technology strategy across a diversified FMCG portfolio spanning pharmaceuticals, personal care, food, and distribution.",
      "Drive end-to-end digital transformation across manufacturing, supply chain, and retail operations.",
      "Architect scalable systems supporting large-scale distribution and retail networks across West Africa.",
      "Lead cross-functional engineering, infrastructure, and data teams aligned with business growth objectives.",
    ],
  },
  {
    year: "Sep 2023 — May 2025",
    company: "The GIG Group · GIGX",
    role: "Chief Technology Officer",
    points: [
      "Led engineering for GIGX, a cross-border payments platform enabling multi-currency transactions across Africa.",
      "Architected robust systems for payments, settlements, and financial integrations, enhancing operational efficiency.",
      "Built scalable backend services improving transaction reliability and system performance at scale.",
    ],
  },
  {
    year: "May 2021 — Sep 2023",
    company: "The GIG Group · Stellas Bank",
    role: "Chief Technology Officer",
    points: [
      "Owned full technology strategy and execution for Stellas Bank, a licensed fintech subsidiary of The GIG Group.",
      "Built and scaled backend systems for secure, high-volume financial transactions and customer-facing APIs.",
      "Designed service architecture ensuring regulatory compliance, security, and enhanced user experience.",
    ],
  },
  {
    year: "Nov 2020 — May 2021",
    company: "The GIG Group · GIG Mobility",
    role: "Lead Engineer",
    points: [
      "Led backend engineering for logistics and mobility systems ensuring efficient and reliable operations.",
      "Developed geospatial solutions using Google Maps APIs to improve routing and user experience.",
      "Collaborated with offshore teams to deliver innovative transport solutions and optimized workflows.",
    ],
  },
  {
    year: "Aug 2019 — Nov 2020",
    company: "Intelligent Innovations Co.",
    role: "Senior Software Engineer",
    points: [
      "Designed innovative software solutions and implemented robust server-side logic in the core engineering team.",
      "Enhanced enterprise software capabilities, improving functionality and end-user experience across products.",
    ],
  },
  {
    year: "Jul 2016 — Jul 2019",
    company: "Cousant Connect",
    role: "Software Engineer",
    points: [
      "Developed scalable, automated solutions tailored to diverse customer needs across multiple verticals.",
      "Extended and maintained software systems to meet evolving demands of key user demographics.",
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
            A decade of<br />
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
