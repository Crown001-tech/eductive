import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SynchronizedFlowSection } from "@/components/home/SynchronizedFlowSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { TheCliffhangerSection } from "@/components/home/TheCliffhangerSection";
import { FaqSection } from "@/components/home/FaqSection";
import { DemoCtaSection } from "@/components/home/DemoCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal-900 selection:bg-emerald-300 selection:text-ink-900">
      {/* Universal Fixed Sticky Navigation Bar */}
      <NavBar />

      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Synchronized Flow Story */}
        <SynchronizedFlowSection />

        {/* Section 3: Core Capabilities (4 Desks) */}
        <CapabilitiesSection />

        {/* Section 3b: The Cliffhanger (CBT, Classwork, Gate & Visitors) */}
        <TheCliffhangerSection />

        {/* Section 4: Frequently Answered Questions */}
        <FaqSection />

        {/* Section 5: Demo Call-To-Action */}
        <DemoCtaSection />
      </main>
      <Footer />
    </div>
  );
}
