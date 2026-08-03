import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X, Linkedin, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-6">
          <a
            href="#top"
            className="flex items-center gap-2 shrink-0"
            aria-label="Anselm Mba — Home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/5">
              <span className="font-display text-sm tracking-tight text-gold">
                AM
              </span>
            </span>
            <span className="hidden sm:inline font-display text-lg tracking-tight">
              Anselm<span className="text-gold">.</span>
            </span>
          </a>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-button text-[13px] uppercase tracking-[0.16em] text-muted-foreground hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="font-button text-sm px-5 py-2.5 rounded-full bg-gold text-primary-foreground hover:bg-gold/90 transition-all hover:shadow-[0_0_30px_-6px_rgba(200,161,90,0.6)]"
            >
              Book a Call
            </a>
            <a
              href="https://linkedin.com/in/anselmmba"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-6 border-t border-white/5"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-button text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center font-button text-sm px-5 py-3 rounded-full bg-gold text-primary-foreground"
                >
                  <Phone size={14} className="inline mr-2" />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
