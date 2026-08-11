import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { STATS } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="By the numbers" className="border-t border-line">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-line px-6 py-14 md:border-r md:px-10 md:py-20 md:last:border-r-0"
          >
            <p className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-5 text-[0.6875rem] tracking-[0.24em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}