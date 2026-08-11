import { CLIENTS } from "@/data/site";
import { Marquee } from "./Marquee";

export function ClientMarquee() {
  return (
    <section aria-label="Clients" className="border-y border-line py-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
          Trusted by ambitious brands
        </p>
      </div>
      <Marquee duration={38} className="mt-8">
        {CLIENTS.concat(CLIENTS).map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="font-display px-10 text-2xl tracking-[0.14em] text-muted-foreground uppercase transition-colors duration-500 hover:text-foreground md:px-16 md:text-4xl"
          >
            {client}
          </span>
        ))}
      </Marquee>
    </section>
  );
}