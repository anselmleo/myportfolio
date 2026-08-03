import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import portraitAsset from "@/assets/portrait-hero.jpg.asset.json";
const portrait = portraitAsset.url;
import { fadeUp, stagger } from "./motion-presets";

const tags = ["Technology Strategy", "Fintech & Payments", "Cloud Architecture", "Engineering Leadership"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, rgba(200,161,90,0.10), transparent 60%), radial-gradient(50% 40% at 85% 80%, rgba(200,161,90,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden">
                <motion.img
                  src={portrait}
                  alt="Anselm Mba, Software Engineer and Founder"
                  width={1024}
                  height={1280}
                  style={{ y, scale }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(11,11,11,0.55) 100%)",
                  }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute z-20 bottom-2 right-5 glass-card px-5 py-4 flex items-center gap-4 ring-1 ring-gold/30"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="font-display text-3xl leading-none gold-text">
                    10+
                  </div>
                  <div className="font-button text-sm uppercase tracking-[0.16em] text-foreground/90 mt-1.5 whitespace-nowrap">
                    Years of Craft
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-1 lg:order-2 min-w-0"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="h-px w-8 bg-gold/60" />
              <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
                Group CTO · AWS Ambassador · CTO Academy Alumni
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95]"
            >
              Anselm <span className="gold-text italic">Mba</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-xl lg:text-2xl leading-snug text-foreground/90 font-display italic max-w-2xl"
            >
              Technology executive translating engineering rigor into
              business outcomes across FMCG, fintech, and logistics.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base lg:text-[17px] leading-relaxed text-muted-foreground max-w-2xl"
            >
              I architect scalable platforms, lead cross-functional
              engineering teams, and drive digital transformation for
              ambitious companies operating at the pace of West Africa
              and beyond.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-button text-xs px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group font-button inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-primary-foreground text-sm hover:shadow-[0_0_40px_-8px_rgba(200,161,90,0.7)] transition-shadow"
              >
                Book a Discovery Call
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
