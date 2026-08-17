import { motion, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";
import portrait from "@/assets/portrait-about.jpg";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "./motion-presets";

const stats = [
  { value: 17, suffix: "", label: "Years in Technology" },
  { value: 190000, suffix: "+", label: "Retail Outlets Served" },
  { value: 50, suffix: "~", label: "Engineers Led" },
  { value: 3, suffix: "", label: "Regulated Markets" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix, mv]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/60" />
              <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
                About
              </span>
            </motion.div>

            <motion.h2
              id="about-title"
              variants={fadeUp}
              className="font-display text-4xl lg:text-5xl leading-tight"
            >
              An engineer's rigor.
              <br />
              <span className="gold-text italic">A founder's vision.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-muted-foreground leading-relaxed"
            >
              Technology executive with 17 years spanning network infrastructure, 
              software engineering and C-suite leadership—the last four years 
              continuously in Chief Technology Officer roles. I currently lead 
              technology for ORBIT Technology, covering a distribution network 
              reaching 190,000+ retail outlets across 15 Nigerian states.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-muted-foreground leading-relaxed"
            >
              Before that I built the technology function for two regulated financial 
              platforms, taking one from project team to a licensed digital bank serving 
              ~27,000 customers. My career began in networks and systems administration 
              and ran through enterprise architecture to board-level strategy.
            </motion.p>

            <motion.div
              variants={slideRight}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-6"
                >
                  <div className="font-display text-4xl gold-text">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 font-button text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden max-w-md lg:ml-auto">
              <img
                src={portrait}
                alt="Anselm at work"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
