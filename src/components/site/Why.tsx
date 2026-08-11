import { DIFFERENTIATORS } from "@/data/site";
import { Reveal, RevealWords } from "./Reveal";

export function Why() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Why AL Solutions?
          </p>
          <h2 className="font-display mt-8 text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] uppercase">
            <span className="block">
              <RevealWords text="We don't just build." />
            </span>
            <span className="block text-muted-foreground">
              <RevealWords text="We solve." delay={0.1} />
            </span>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We work as an embedded partner — aligning product, engineering and marketing around
              one commercial objective, then measuring against it.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <dl className="border-t border-line">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.06}>
                <div className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8">
                  <span className="font-display text-4xl text-muted-foreground/50 md:col-span-2 md:text-5xl">
                    {item.num}
                  </span>
                  <dt className="font-display text-xl uppercase md:col-span-4 md:text-2xl">
                    {item.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
                    {item.text}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}