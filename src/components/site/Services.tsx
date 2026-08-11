import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/site";

export function Services() {
  const [active, setActive] = useState<string | null>(SERVICES[0]?.num ?? null);

  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] uppercase">
            Services
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Six disciplines, one team. Select a service to see how we approach it and what it
            includes.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1600px] px-6 md:px-10">
        <ul className="border-t border-line">
          {SERVICES.map((service) => {
            const isOpen = active === service.num;
            return (
              <li key={service.num} className="border-b border-line">
                <button
                  type="button"
                  data-cursor="hover"
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? null : service.num)}
                  onMouseEnter={() => setActive(service.num)}
                  className="group flex w-full items-baseline gap-6 py-7 text-left transition-colors duration-500 hover:bg-surface/60 md:gap-12 md:py-9"
                >
                  <span
                    className={`text-[0.6875rem] tracking-[0.2em] tabular-nums transition-colors duration-500 ${
                      isOpen ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {service.num}
                  </span>
                  <span
                    className={`font-display flex-1 text-[clamp(1.6rem,4.2vw,3.25rem)] leading-[1] uppercase transition-all duration-700 ${
                      isOpen
                        ? "translate-x-1 text-foreground md:translate-x-3"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 transition-transform duration-700 ${
                      isOpen ? "translate-x-1 -translate-y-1 rotate-0" : "rotate-45 opacity-40"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 md:grid-cols-12 md:gap-12 md:pl-[calc(3rem+2ch)]">
                        <p className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
                          {service.description}
                        </p>
                        <ul className="md:col-span-6 md:columns-2">
                          {service.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-center gap-3 py-1.5 text-[0.75rem] tracking-[0.14em] uppercase"
                            >
                              <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}