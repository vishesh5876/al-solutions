import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            data-cursor="hover"
            aria-label="AL Solutions — home"
            className="font-display text-sm leading-[0.95] tracking-[0.14em] uppercase"
          >
            AL
            <br />
            Solutions
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  data-cursor="hover"
                  className="link-underline text-[0.75rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  data-cursor="hover"
                  className="link-underline text-[0.75rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-cursor="hover"
              className="group hidden items-center gap-2 border border-line-strong px-5 py-3 text-[0.6875rem] tracking-[0.18em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background md:inline-flex"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-background md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-sm tracking-[0.14em] uppercase">Menu</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-6">
              {NAV_LINKS.map((link, i) =>
                link.href.startsWith("/") ? (
                  <motion.div
                    key={link.label}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.href}
                      className="font-display block border-b border-line py-5 text-4xl tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display border-b border-line py-5 text-4xl tracking-tight"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
            </nav>
            <div className="px-6 pb-10">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between bg-foreground px-6 py-5 text-[0.75rem] tracking-[0.18em] text-background uppercase"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Hello@alsolutions.in
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}