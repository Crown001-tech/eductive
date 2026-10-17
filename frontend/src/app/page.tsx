import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SynchronizedFlowSection } from "@/components/home/SynchronizedFlowSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { LayeredRolesSection } from "@/components/home/LayeredRolesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { ImplementationSection } from "@/components/home/ImplementationSection";
import { FaqSection } from "@/components/home/FaqSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal-900 selection:bg-emerald-300 selection:text-ink-900">
      {/* Universal Fixed Sticky Navigation Bar with Smooth Scroll & Mobile Drawer */}
      <NavBar />

      <main className="flex-1 flex flex-col">
        {/* Section 1: Immaculate Hero Section with Integrated Top Nav */}
        <HeroSection />

        {/* Section 2: Authentic Operational Coordination Engine */}
        <SynchronizedFlowSection />

        {/* Section 3: Core Operational Capabilities (The 8 Pillars) */}
        <CapabilitiesSection />

        {/* Section 4: The 4 Stakeholder Roles */}
        <LayeredRolesSection />

        {/* Section 5: About EDUCTIVE (Purpose & Mission for Nigerian Schools) */}
        <AboutSection />

        {/* Section 6: Oakland School Pilot Case Study & Transformation */}
        <CaseStudySection />

        {/* Section 7: Implementation Walkthrough (72-Hour Onboarding) */}
        <ImplementationSection />

        {/* Section 7: Frequently Answered Questions (High-Conviction FAQ) */}
        <FaqSection />

        {/* Section 8: Demo Call-To-Action & Booking */}
        <DemoCtaSection />
      </main>
      <Footer />
    </div>
  );
}
