import { Marquee } from "./Marquee";

const ITEMS = ["Design", "Development", "Software", "Marketing", "SEO", "Strategy"];

export function MarqueeBreak() {
  return (
    <section aria-hidden="true" className="border-y border-line py-10 md:py-14">
      <Marquee duration={34}>
        {ITEMS.concat(ITEMS).map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display flex items-center gap-8 px-8 text-[clamp(2.5rem,7vw,6rem)] leading-none uppercase md:gap-14 md:px-14"
          >
            <span
              className={
                i % 2 === 0
                  ? "text-foreground"
                  : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]"
              }
            >
              {item}
            </span>
            <span className="text-lg text-muted-foreground md:text-2xl">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}