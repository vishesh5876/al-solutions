import { motion, useReducedMotion } from "motion/react";
import { GROWTH_CHAIN } from "@/data/site";
import { Reveal, RevealWords } from "./Reveal";

export function Growth() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-line bg-surface py-24 md:py-36">
      <div
        aria-hidden="true"
        className="hairline-grid-sm pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Beyond development
          </p>
          <h2 className="font-display mt-8 text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[0.95] uppercase">
            <span className="block">
              <RevealWords text="Build the product." />
            </span>
            <span className="block text-muted-foreground">
              <RevealWords text="Build the audience." delay={0.1} />
            </span>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground">
              A great digital product is only valuable when people discover it. Our development
              and growth teams work together to create complete digital ecosystems.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <ol className="relative">
            {GROWTH_CHAIN.map((node, i) => (
              <motion.li
                key={node}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-6"
              >
                <span className="text-[0.625rem] tracking-[0.24em] text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-display flex-1 border-b border-line py-4 text-xl tracking-[0.04em] uppercase transition-colors duration-500 group-hover:text-foreground md:text-2xl">
                  {node}
                </span>
                {i < GROWTH_CHAIN.length - 1 ? (
                  <motion.span
                    aria-hidden="true"
                    initial={reduced ? false : { scaleY: 0 }}
                    whileInView={reduced ? {} : { scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.09 }}
                    className="absolute h-0 w-px origin-top"
                  />
                ) : null}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}