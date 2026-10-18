import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { RoleOrbitalStation } from "@/components/product/RoleOrbitalStation";
import { ProductEnginesSection } from "@/components/product/ProductEnginesSection";
import { PaperComparisonSection } from "@/components/product/PaperComparisonSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export const metadata: Metadata = {
  title: "Product Overview — EDUCTIVE Nigerian School Operating System",
  description:
    "Explore the complete school operating system for Nigerian primary and secondary schools. Purpose-built for Proprietors, Principals, Teachers, and Bursars.",
};

export default function ProductPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <NavBar />
      <ProductHero />
      <RoleOrbitalStation />
      <ProductEnginesSection />
      <PaperComparisonSection />
      <DemoCtaSection />
      <Footer />
    </main>
  );
}
