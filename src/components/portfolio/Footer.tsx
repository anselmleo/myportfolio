import { Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/5">
                <span className="font-display text-sm text-gold">AM</span>
              </span>
              <span className="font-display text-lg">
                Anselm<span className="text-gold">.</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Group CTO and AWS Activate Ambassador — technology strategy, fintech
              platforms, and engineering leadership at scale.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com/in/anselmmba"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:me@anselmmba.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          <div>
            <div className="font-button text-[10px] uppercase tracking-[0.22em] text-gold">
              Navigate
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-button text-[10px] uppercase tracking-[0.22em] text-gold">
              Get in touch
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Available for advisory, fractional, and strategic engagements.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Email · </span>
                <a href="mailto:me@anselmmba.com" className="hover:text-gold transition-colors">
                  me@anselmmba.com
                </a>
              </div>
              <div className="text-muted-foreground">Based in Lagos · Working globally</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Anselm Mba. All rights reserved.</div>
          <div className="font-button uppercase tracking-[0.18em]">
            Designed & built with intent.
          </div>
        </div>
      </div>
    </footer>
  );
}
