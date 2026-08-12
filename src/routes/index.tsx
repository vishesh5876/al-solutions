import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ClientMarquee } from "@/components/site/ClientMarquee";
import { Intro } from "@/components/site/Intro";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { MarqueeBreak } from "@/components/site/MarqueeBreak";
import { Why } from "@/components/site/Why";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Growth } from "@/components/site/Growth";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const TITLE = "AL Solutions — Web, App, Software & Digital Marketing Agency";
const DESCRIPTION =
  "AL Solutions builds high-performance websites, apps and software while helping brands grow through social media marketing, performance marketing and SEO.";

const DOMAIN = "https://alsolutions.in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: DOMAIN },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: DOMAIN }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "AL Solutions",
          url: DOMAIN,
          description: DESCRIPTION,
          email: "Hello@alsolutions.in",
          areaServed: "Worldwide",
          serviceType: [
            "Website Design & Development",
            "Web Application Development",
            "Mobile App Development",
            "Custom Software Development",
            "Social Media Marketing",
            "Performance Marketing",
            "SEO Services",
            "Branding & Digital Strategy",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        {/* <ClientMarquee /> */}
        <Intro />
        <Services />
        {/* <Work /> */}
        <MarqueeBreak />
        <Why />
        <Process />
        <Stats />
        <Growth />
        <Testimonials />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
