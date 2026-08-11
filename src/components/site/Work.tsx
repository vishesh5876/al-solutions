import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import aurelis from "@/assets/work-aurelis.jpg";
import finora from "@/assets/work-finora.jpg";
import noir from "@/assets/work-noir.jpg";
import vantage from "@/assets/work-vantage.jpg";
import { Reveal, RevealWords } from "./Reveal";

const PROJECTS = [
  {
    num: "01",
    name: "Aurelis",
    subtitle: "Luxury E-Commerce Platform",
    tags: "Web Design / Development / Ecommerce",
    image: aurelis,
    width: 1600,
    height: 1000,
    span: "md:col-span-12",
    ratio: "aspect-[16/10]",
  },
  {
    num: "02",
    name: "Finora",
    subtitle: "Fintech Dashboard",
    tags: "Product Design / Software / Development",
    image: finora,
    width: 1200,
    height: 1400,
    span: "md:col-span-6",
    ratio: "aspect-[4/5]",
  },
  {
    num: "03",
    name: "Noir Studios",
    subtitle: "Fashion Brand Digital Experience",
    tags: "Branding / Web / Social",
    image: noir,
    width: 1200,
    height: 1400,
    span: "md:col-span-6 md:mt-24",
    ratio: "aspect-[4/5]",
  },
  {
    num: "04",
    name: "Vantage",
    subtitle: "Performance Growth Campaign",
    tags: "Social / SEO / Performance",
    image: vantage,
    width: 1920,
    height: 900,
    span: "md:col-span-12",
    ratio: "aspect-[21/9]",
  },
];

export function Work() {
  const reduced = useReducedMotion();

  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.9] uppercase">
            <span className="block">
              <RevealWords text="Selected" />
            </span>
            <span className="block">
              <RevealWords text="Work." delay={0.08} />
            </span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A selection of digital experiences, products and campaigns built to create impact.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.num} delay={0.05} className={project.span}>
              <a href="#contact" data-cursor="view" className="group block">
                <div className={`relative overflow-hidden bg-surface ${project.ratio}`}>
                  <motion.img
                    src={project.image}
                    alt={`${project.name} — ${project.subtitle}`}
                    width={project.width}
                    height={project.height}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover grayscale transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                    whileHover={reduced ? {} : { opacity: 0.86 }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-background/0 transition-colors duration-700 group-hover:bg-background/25"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6 border-t border-line pt-5">
                  <div>
                    <p className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
                      {project.num} — {project.tags}
                    </p>
                    <h3 className="font-display mt-3 text-2xl uppercase transition-transform duration-700 group-hover:translate-x-2 md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}