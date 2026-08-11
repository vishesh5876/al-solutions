import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, RevealWords } from "@/components/site/Reveal";

const TITLE = "Privacy Policy — AL Solutions";
const DESCRIPTION = "Read the AL Solutions privacy policy to understand how we handle your data.";
const DOMAIN = "https://alsolutions.in";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${DOMAIN}/privacy` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <section className="border-t border-line pb-24 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-[0.625rem] tracking-[0.28em] text-muted-foreground uppercase">
            Legal
          </p>
          <h1 className="font-display mt-8 text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.9] uppercase">
            <RevealWords text="Privacy Policy" />
          </h1>

          <div className="prose prose-invert mt-16 max-w-none border-t border-line pt-12">
            <Reveal>
              <p className="text-muted-foreground">
                Last updated: 12 August 2026
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">1. Introduction</h2>
              <p className="mt-4 text-muted-foreground">
                AL Solutions (“we”, “us”, or “our”) respects your privacy and is committed to
                protecting your personal data. This policy explains how we collect, use and
                safeguard information when you visit our website or engage our services.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">2. Information We Collect</h2>
              <p className="mt-4 text-muted-foreground">
                We may collect contact details such as your name, email address, phone number and
                company information when you submit an inquiry. We also collect standard technical
                data including IP address, browser type and pages visited through analytics tools.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">3. How We Use Your Data</h2>
              <p className="mt-4 text-muted-foreground">
                We use your information to respond to inquiries, deliver services, improve our
                website and communicate updates related to our work. We do not sell your personal
                data to third parties.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">4. Data Security</h2>
              <p className="mt-4 text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your data
                from unauthorized access, alteration or disclosure.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display mt-12 text-2xl uppercase">5. Your Rights</h2>
              <p className="mt-4 text-muted-foreground">
                You have the right to access, correct or request deletion of your personal data. To
                exercise these rights, contact us at{" "}
                <a
                  href="mailto:Hello@alsolutions.in"
                  className="link-underline text-foreground"
                >
                  Hello@alsolutions.in
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
