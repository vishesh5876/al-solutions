import studio from "@/assets/studio.jpg";
import { Reveal, RevealWords } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            About
          </p>
          <h2 className="font-display mt-8 text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] uppercase">
            <span className="block">
              <RevealWords text="Small team." />
            </span>
            <span className="block text-muted-foreground">
              <RevealWords text="Big thinking." delay={0.1} />
            </span>
          </h2>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
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

        <Reveal delay={0.1} className="md:col-span-7">
          <div className="group relative overflow-hidden bg-surface">
            <img
              src={studio}
              alt="The AL Solutions studio at work, lit by a single desk lamp"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-[7/5] w-full object-cover grayscale transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-8">
              <p className="text-[0.625rem] tracking-[0.26em] uppercase">
                Studio — Remote first
              </p>
              <p className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
                Est. 2019
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}