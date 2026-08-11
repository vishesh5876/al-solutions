import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index]!;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section aria-label="Testimonials" className="border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-start justify-between gap-8">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Client voices
          </p>
          <span
            aria-hidden="true"
            className="font-display -mt-6 text-[clamp(4rem,10vw,9rem)] leading-none text-muted-foreground/25"
          >
            &ldquo;
          </span>
        </div>

        <div className="min-h-[18rem] md:min-h-[22rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl"
            >
              <p className="font-display text-[clamp(1.5rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.02em]">
                {active.quote}
              </p>
              <footer className="mt-12 flex items-center gap-4">
                <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
                <cite className="text-[0.6875rem] tracking-[0.24em] uppercase not-italic">
                  {active.name}
                  <span className="ml-3 text-muted-foreground">{active.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
          <span className="text-[0.6875rem] tracking-[0.22em] text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              data-cursor="hover"
              className="border border-line p-3 transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              data-cursor="hover"
              className="border border-line p-3 transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}