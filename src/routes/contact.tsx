import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealWords } from "@/components/site/Reveal";

const TITLE = "Contact — AL Solutions";
const DESCRIPTION = "Get in touch with AL Solutions for websites, apps, software and digital marketing.";
const DOMAIN = "https://alsolutions.in";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${DOMAIN}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="border-t border-line pb-24 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.9] uppercase">
            <span className="block">
              <RevealWords text="Let's start" />
            </span>
            <span className="block text-muted-foreground">
              <RevealWords text="a conversation." delay={0.1} />
            </span>
          </h1>

          <div className="mt-20 grid gap-12 border-t border-line pt-12 md:grid-cols-2">
            <Reveal>
              <a
                href="mailto:Hello@alsolutions.in"
                data-cursor="hover"
                className="group block"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
                    Email
                  </span>
                </div>
                <p className="link-underline font-display mt-4 text-2xl md:text-4xl">
                  Hello@alsolutions.in
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <span className="text-[0.625rem] tracking-[0.26em] text-muted-foreground uppercase">
                    Address
                  </span>
                  <address className="font-display mt-4 text-2xl not-italic leading-snug md:text-4xl">
                    808B, DLF Prime Tower
                    <br />
                    Okhla Phase I
                    <br />
                    New Delhi 110020, India
                  </address>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
