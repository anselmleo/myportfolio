import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "./motion-presets";

export function Contact() {
  const [pending, setPending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message received. I'll be in touch within 24 hours.");
    }, 900);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative py-32 lg:py-40 border-t border-white/5"
    >
      {/* ambient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 40% at 80% 30%, rgba(200,161,90,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-16">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/60" />
              <span className="font-button text-[11px] uppercase tracking-[0.28em] text-gold">
                Contact
              </span>
            </div>
            <h2
              id="contact-title"
              className="font-display text-4xl lg:text-5xl leading-tight"
            >
              Let's build<br />
              <span className="gold-text italic">something amazing.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Tell me a little about the product, the team, and the timeline.
              I read every message personally and reply within one business day.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <div className="font-button text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                  <div className="text-sm truncate">me@anselmmba.com</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="min-w-0">
                  <div className="font-button text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Base</div>
                  <div className="text-sm">Working globally · Based in Lagos</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit}
            className="glass-card p-8 lg:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Name" required />
              <Field id="email" label="Email" type="email" required />
              <Field id="company" label="Company" />
              <Field id="phone" label="Phone" type="tel" />
            </div>
            <div className="mt-5">
              <label htmlFor="details" className="font-button text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                placeholder="Tell me about your product, team, and timeline…"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={pending}
              type="submit"
              className="mt-8 w-full font-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-primary-foreground text-sm hover:shadow-[0_0_50px_-8px_rgba(200,161,90,0.7)] transition-shadow disabled:opacity-70"
            >
              {pending ? "Sending…" : "Let's Build Something Amazing"}
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-button text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all"
      />
    </div>
  );
}
