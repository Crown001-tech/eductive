import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { RoleOrbitalStation } from "@/components/product/RoleOrbitalStation";
import { ProductEnginesSection } from "@/components/product/ProductEnginesSection";
import { LookInsidePortalsSection } from "@/components/product/LookInsidePortalsSection";
import { BuiltForSchoolsSection } from "@/components/product/BuiltForSchoolsSection";
import { PaperComparisonSection } from "@/components/product/PaperComparisonSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export const metadata: Metadata = {
  title: "Eight Portals. One Connected School — EDUCTIVE",
  description:
    "Administration, teaching, exams, tuition fees and security, with a workspace for every person. Built for Nigerian schools.",
};

export default function ProductPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <NavBar />
      <ProductHero />
      <RoleOrbitalStation />
      <ProductEnginesSection />
      <LookInsidePortalsSection />
      <BuiltForSchoolsSection />
      <PaperComparisonSection />
      <DemoCtaSection />
      <Footer />
    </main>
  );
}
