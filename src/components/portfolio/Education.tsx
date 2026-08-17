import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, HandHeart } from "lucide-react";
import { fadeUp, stagger, viewport } from "./motion-presets";

const education = [
  {
    icon: GraduationCap,
    title: "Master of Business Administration (in progress)",
    org: "Nexford University, Washington DC",
    year: "",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science",
    org: "Lagos State University (LASU), Lagos, Nigeria",
    year: "2016",
  },
];

const recognition = [
  {
    icon: Award,
    title: "Most Innovative Fintech (OFI category)",
    org: "Qore Nexus Awards — Stellas Bank",
    year: "2023",
  },
  {
    icon: Award,
    title: "AWS Activate Ambassador",
    org: "Selected for 2023 pilot programme",
    year: "2023",
  },
];

const community = [
  {
    icon: HandHeart,
    title: "Technical Mentor",
    org: "AltSchool Africa",
    year: "2023 – 2024",
    desc: "Mentored aspiring engineers and new graduates entering the industry.",
  },
  {
    icon: HandHeart,
    title: "Engineering Leadership",
    org: "Stellas, GIGX and ORBIT",
    year: "",
    desc: "Hired, led and mentored ~50 engineers; trained ~230 professionals across multiple organizations.",
  },
];

const publications = [
  {
    icon: BookOpen,
    title: "Data Structures in Laravel and SQL",
    org: "The Startup & Level Up Coding (Medium)",
    year: "2020",
    desc: "Technical bylines on managing data structures in Laravel SQL databases.",
  },
  {
    icon: BookOpen,
    title: "Make Better Software Pricing Decisions",
    org: "Published article",
    year: "2023",
    desc: "Guidance on software pricing strategy and decision-making.",
  },
];

type Item = {
  icon: typeof GraduationCap;
  title: string;
  org: string;
  year: string;
  desc?: string;
};

function Column({ label, items }: { label: string; items: Item[] }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <motion.div
        variants={fadeUp}
        className="font-button text-[11px] uppercase tracking-[0.28em] text-gold mb-6"
      >
        {label}
      </motion.div>
      <div className="space-y-4">
        {items.map((it) => (
          <motion.div
            key={it.title}
            variants={fadeUp}
            className="glass-card p-6 flex gap-4"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/10 text-gold shrink-0">
              <it.icon size={16} />
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg leading-snug">{it.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {it.org}
                {it.year && <span className="text-gold/80"> · {it.year}</span>}
              </div>
              {it.desc && (
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
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
              Education & Recognition
            </span>
          </motion.div>
          <motion.h2
            id="education-title"
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl leading-tight"
          >
            Credentials, community,<br />
            <span className="gold-text italic">and the written record.</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <Column label="Education" items={education} />
          <Column label="Recognition" items={recognition} />
          <Column label="Volunteering" items={community} />
          <Column label="Publications" items={publications} />
        </div>
      </div>
    </section>
  );
}
