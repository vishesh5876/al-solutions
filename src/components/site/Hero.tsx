import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const LINES = ["We build", "digital experiences", "that move", "businesses forward."];
const TAGS = ["Web", "App", "Software", "Social", "SEO"];

export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) =>
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-10"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hairline-grid absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_75%)]" />
        <div
          className="absolute h-[70vmax] w-[70vmax] rounded-full opacity-[0.22] transition-transform duration-500 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 65%)",
            left: `calc(${pointer.x * 100}% - 35vmax)`,
            top: `calc(${pointer.y * 100}% - 35vmax)`,
          }}
        />
      </div>

      <motion.div
        style={reduced ? {} : { y: yShift }}
        className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-line-strong" />
          <p className="text-[0.6875rem] tracking-[0.28em] text-muted-foreground uppercase">
            Digital Products • Development • Growth
          </p>
        </div>

        <h1 className="font-display mt-10 text-[clamp(2.6rem,8.2vw,7rem)] leading-[0.92] tracking-[-0.04em] uppercase">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="group inline-block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.15, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block transition-[opacity,transform] duration-700 hover:translate-x-2 hover:opacity-70">
                  {line}
                </span>
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-14 grid gap-10 border-t border-line pt-8 md:grid-cols-12">
          <p className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-[1.0625rem]">
            AL Solutions is a digital agency building high-performance websites, apps, software
            and growth strategies for ambitious brands.
          </p>

          <div className="flex flex-wrap items-start gap-3 md:col-span-4">
            <MagneticButton href="#contact">Start a Project</MagneticButton>
            <MagneticButton href="#work" variant="outline" withArrow={false}>
              Explore Our Work
            </MagneticButton>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-3 md:justify-end">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="text-[0.6875rem] tracking-[0.24em] text-muted-foreground uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        style={reduced ? {} : { opacity: fade }}
        className="relative mx-auto mt-12 flex w-full max-w-[1600px] items-center gap-3 px-6 md:mt-16 md:px-10"
      >
        <span className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
          Scroll to explore
        </span>
        <motion.span
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </motion.span>
      </motion.div>
    </section>
  );
}