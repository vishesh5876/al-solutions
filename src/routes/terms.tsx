import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealWords } from "@/components/site/Reveal";

const TITLE = "Terms & Conditions — AL Solutions";
const DESCRIPTION = "Review the terms and conditions for using the AL Solutions website and services.";
const DOMAIN = "https://alsolutions.in";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${DOMAIN}/terms` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <section className="border-t border-line pb-24 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Legal
          </p>
          <h1 className="font-display mt-8 text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.9] uppercase">
            <RevealWords text="Terms &" />
            <span className="block text-muted-foreground">
              <RevealWords text="Conditions" delay={0.1} />
            </span>
          </h1>

          <div className="mt-16 max-w-none border-t border-line pt-12">
            <Reveal>
              <p className="text-muted-foreground">Last updated: 12 August 2026</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">1. Acceptance of Terms</h2>
              <p className="mt-4 text-muted-foreground">
                By accessing or using the AL Solutions website and services, you agree to be bound by
                these terms. If you do not agree, please do not use our website or services.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">2. Services</h2>
              <p className="mt-4 text-muted-foreground">
                AL Solutions provides website development, app development, custom software, social
                media marketing, performance marketing and SEO services. Specific deliverables,
                timelines and fees are defined in individual project agreements.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">3. Intellectual Property</h2>
              <p className="mt-4 text-muted-foreground">
                All content on this website, including text, graphics, logos and code, is the
                property of AL Solutions unless otherwise stated. Client-owned materials remain the
                property of the client. Ownership of deliverables is transferred upon full payment
                unless otherwise agreed in writing.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">4. Limitation of Liability</h2>
              <p className="mt-4 text-muted-foreground">
                AL Solutions is not liable for indirect, incidental or consequential damages arising
                from the use of our website or services. Our total liability is limited to the amount
                paid for the specific service giving rise to the claim.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">5. Governing Law</h2>
              <p className="mt-4 text-muted-foreground">
                These terms are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">6. Changes to Terms</h2>
              <p className="mt-4 text-muted-foreground">
                We may update these terms from time to time. Continued use of the website after
                changes constitutes acceptance of the revised terms.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
