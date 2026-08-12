import { MagneticButton } from "./MagneticButton";
import { RevealWords } from "./Reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[85svh] items-center overflow-hidden border-t border-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-28 md:px-10">
        <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
          Have a project in mind?
        </p>
        <h2 className="font-display mt-10 text-[clamp(2.8rem,10vw,8.5rem)] leading-[0.9] uppercase">
          <span className="block">
            <RevealWords text="Let's build" />
          </span>
          <span className="block">
            <RevealWords text="something" delay={0.07} />
          </span>
          <span className="block">
            <RevealWords text="great." delay={0.14} />
          </span>
        </h2>

        <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <MagneticButton href="https://wa.me/919518661588" target="_blank" rel="noopener noreferrer">
            Start a Project
          </MagneticButton>
          <div className="md:text-right">
            <a
              href="mailto:Hello@alsolutions.in"
              data-cursor="hover"
              className="link-underline font-display text-xl md:text-3xl"
            >
              Hello@alsolutions.in
            </a>
            <p className="mt-4 text-[0.6875rem] tracking-[0.22em] text-muted-foreground uppercase">
              808B, DLF Prime Tower, Okhla Phase I, New Delhi 110020, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}