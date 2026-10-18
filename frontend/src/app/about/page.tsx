import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsEductive } from "@/components/about/WhatIsEductive";
import { CrownTechSection } from "@/components/about/CrownTechSection";
import { SchoolPrinciplesSection } from "@/components/about/SchoolPrinciplesSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export const metadata: Metadata = {
  title: "About EDUCTIVE — Engineered by Crown Tech for Nigerian Schools",
  description:
    "Learn why Crown Tech engineered Eductive, the unified school operating system for Nigerian primary and secondary schools. Zero paper headaches, parent WhatsApp receipts, and total clarity for school owners.",
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
