import { Reveal, RevealWords } from "./Reveal";

const WORDS = ["Strategy.", "Design.", "Technology.", "Growth."];

export function Intro() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            What we do
          </p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.95] uppercase">
            {WORDS.map((word, i) => (
              <span key={word} className="block">
                <RevealWords text={word} delay={i * 0.06} />
              </span>
            ))}
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-12 max-w-2xl border-l border-line pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We combine technology, creativity and performance marketing to create digital
              experiences that don&apos;t just look good — they generate measurable business
              results.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}