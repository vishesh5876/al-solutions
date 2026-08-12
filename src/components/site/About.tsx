import { Reveal, RevealWords } from "./Reveal";

const META = [
  { label: "Founded", value: "2019" },
  { label: "Model", value: "Remote First" },
  { label: "Location", value: "New Delhi, IN" },
];

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
          About
        </p>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 lg:col-span-6">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] uppercase">
              <span className="block">
                <RevealWords text="Small team." />
              </span>
              <span className="block text-muted-foreground">
                <RevealWords text="Big thinking." delay={0.1} />
              </span>
            </h2>
          </div>

          <div className="flex items-end md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  AL Solutions brings together strategy, design, technology and marketing under one
                  roof.
                </p>
                <p>
                  We partner with startups, growing companies and established businesses to create
                  digital products and campaigns that solve meaningful problems and drive measurable
                  growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid gap-px border border-line bg-line md:mt-28 md:grid-cols-3">
            {META.map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-between gap-4 bg-background p-6 md:p-8"
              >
                <p className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="font-display text-xl uppercase tracking-tight md:text-2xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
