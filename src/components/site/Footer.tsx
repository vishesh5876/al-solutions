import { ArrowUp } from "lucide-react";
import { NAV_LINKS, FOOTER_SERVICES, SOCIALS } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="font-display text-2xl tracking-[0.06em] uppercase">AL Solutions</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Digital products and growth for ambitious businesses.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="md:col-span-2">
          <p className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
            Navigation
          </p>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  data-cursor="hover"
                  className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
            Services
          </p>
          <ul className="mt-6 space-y-3">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  data-cursor="hover"
                  className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
            Social
          </p>
          <ul className="mt-6 space-y-3">
            {SOCIALS.map((social) => (
              <li key={social}>
                <a
                  href="#contact"
                  data-cursor="hover"
                  className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#top"
            data-cursor="hover"
            className="group mt-10 inline-flex items-center gap-3 text-[0.6875rem] tracking-[0.22em] uppercase"
          >
            Back to top
            <span className="border border-line p-2 transition-colors duration-500 group-hover:bg-foreground group-hover:text-background">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-8 text-[0.6875rem] tracking-[0.18em] text-muted-foreground uppercase md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 AL Solutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="link-underline hover:text-foreground">
              Privacy
            </a>
            <a href="#top" className="link-underline hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}