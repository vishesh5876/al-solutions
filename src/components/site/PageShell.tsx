import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";
import { ScrollProgress } from "./ScrollProgress";
import { WhatsAppButton } from "./WhatsAppButton";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
