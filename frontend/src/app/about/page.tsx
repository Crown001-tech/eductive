import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsEductive } from "@/components/about/WhatIsEductive";
import { CrownTechSection } from "@/components/about/CrownTechSection";
import { SchoolPrinciplesSection } from "@/components/about/SchoolPrinciplesSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export const metadata: Metadata = {
  title: "About EDUCTIVE — Developed by Crown Tech",
  description:
    "EDUCTIVE was created to help schools bring essential academic, administrative and financial activities into a more organised digital environment.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <NavBar />
      <AboutHero />
      <WhatIsEductive />
      <CrownTechSection />
      <SchoolPrinciplesSection />
      <DemoCtaSection />
      <Footer />
    </main>
  );
}
