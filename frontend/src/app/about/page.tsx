import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsEductive } from "@/components/about/WhatIsEductive";
import { CrownTechSection } from "@/components/about/CrownTechSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export const metadata: Metadata = {
  title: "About EDUCTIVE — Built for Nigerian Schools",
  description:
    "EDUCTIVE replaces scattered registers, receipt books and spreadsheets with one connected platform for the whole school.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <NavBar />
      <AboutHero />
      <WhatIsEductive />
      <CrownTechSection />
      <DemoCtaSection />
      <Footer />
    </main>
  );
}
