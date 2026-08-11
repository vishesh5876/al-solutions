import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PROCESS } from "@/data/site";
import { RevealWords } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="process" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.92] uppercase">
            <span className="block">
              <RevealWords text="From idea" />
            </span>
            <span className="block">
              <RevealWords text="to impact." delay={0.08} />
            </span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A repeatable six-stage engagement model that keeps decisions transparent from first
            conversation to ongoing growth.
          </p>
        </div>

        <div ref={ref} className="relative mt-20 pl-8 md:pl-14">
          <div aria-hidden="true" className="absolute top-0 left-0 h-full w-px bg-line" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-0 left-0 h-full w-px origin-top bg-foreground"
          />
          <ol>
            {PROCESS.map((step, i) => (
              <Step key={step.num} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: { num: string; title: string; text: string };
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "start 45%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const dot = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li ref={ref} style={{ opacity }} className="relative border-b border-line py-10">
      <motion.span
        aria-hidden="true"
        style={{ scale: dot }}
        className="absolute top-[3.25rem] -left-8 h-2 w-2 -translate-x-1/2 rounded-full bg-foreground md:-left-14"
      />
      <div className="grid gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
        <span className="text-[0.6875rem] tracking-[0.24em] text-muted-foreground uppercase md:col-span-2">
          {step.num}
        </span>
        <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] uppercase md:col-span-5">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">{step.text}</p>
      </div>
      <span className="sr-only">Stage {index + 1} of 6</span>
    </motion.li>
  );
}