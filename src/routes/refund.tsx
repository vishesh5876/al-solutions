import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealWords } from "@/components/site/Reveal";

const TITLE = "Return & Refund Policy — AL Solutions";
const DESCRIPTION = "Learn about the AL Solutions return and refund policy for digital services.";
const DOMAIN = "https://alsolutions.in";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${DOMAIN}/refund` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/refund` }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <PageShell>
      <section className="border-t border-line pb-24 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Legal
          </p>
          <h1 className="font-display mt-8 text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.9] uppercase">
            <RevealWords text="Return &" />
            <span className="block text-muted-foreground">
              <RevealWords text="Refund Policy" delay={0.1} />
            </span>
          </h1>

          <div className="prose prose-invert mt-16 max-w-none border-t border-line pt-12">
            <Reveal>
              <p className="text-muted-foreground">Last updated: 12 August 2026</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">1. Digital Services</h2>
              <p className="mt-4 text-muted-foreground">
                AL Solutions provides bespoke digital services including website development, app
                development, software development and marketing services. Because these services are
                custom and often begin immediately, refund eligibility depends on the stage of work
                completed.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">2. Deposit & Cancellation</h2>
              <p className="mt-4 text-muted-foreground">
                Project deposits are used to reserve capacity and begin discovery. If a project is
                cancelled by the client before work begins, the deposit may be refunded minus any
                administrative or third-party costs already incurred.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">3. Milestone Payments</h2>
              <p className="mt-4 text-muted-foreground">
                Projects are typically billed in milestones. Once a milestone has been delivered and
                approved, payment for that milestone is non-refundable. Disputes about deliverable
                quality will be addressed through revisions as defined in the project agreement.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">4. Marketing Campaigns</h2>
              <p className="mt-4 text-muted-foreground">
                Media spend paid to advertising platforms is non-refundable once campaigns are live.
                Management fees are refundable on a pro-rata basis for unused periods if cancellation
                is requested in writing.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">5. How to Request a Refund</h2>
              <p className="mt-4 text-muted-foreground">
                Refund requests must be sent to{" "}
                <a
                  href="mailto:Hello@alsolutions.in"
                  className="link-underline text-foreground"
                >
                  Hello@alsolutions.in
                </a>{" "}
                with your project details and reason for the request. We aim to review and respond
                within 10 business days.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
