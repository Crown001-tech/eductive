import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { DemoBookingCard } from "@/components/demo/DemoBookingCard";
import { Check, Building2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo — EDUCTIVE School Management System",
  description:
    "A 15-minute walkthrough of all eight portals, set up with your school's classes. Built for Nigerian schools.",
};

export default function DemoPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#07332A] text-white overflow-x-hidden">
      <NavBar />

      <section className="relative w-full pt-36 pb-20 xl:pt-44 xl:pb-28 overflow-hidden select-none">
        {/* Architectural hairline grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="demoPageGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#12A26B" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#demoPageGrid)" />
          </svg>
        </div>

        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-[1340px] mx-auto px-4 sm:px-8 xl:px-14 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Why Book a Walkthrough (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 mb-3 block">
                15-MINUTE WALKTHROUGH
              </span>

              {/* Headline (<= 6 words) */}
              <h1 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
                See all eight portals working.
              </h1>

              {/* Intro (<= 18 words) */}
              <p className="text-base sm:text-lg text-surface/90 font-sans leading-relaxed mb-8 text-balance">
                A 15-minute walkthrough of all eight portals, set up with your school&apos;s classes.
              </p>

              {/* 3 Calm Proof Points */}
              <div className="space-y-3.5 mb-8 w-full">
                <div className="flex items-start gap-3 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">
                      Realistic school data
                    </span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5 leading-relaxed">
                      See fee receipts, class registers, CBT tests and gate logs working together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">
                      Works on any phone
                    </span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5 leading-relaxed">
                      Runs in the browser on Android, iPhone and laptops. Nothing to install.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block">
                      We handle setup
                    </span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5 leading-relaxed">
                      Our team sets up your classes and staff and trains your teachers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Showcase School Link Card */}
              <div className="w-full p-4 rounded-2xl bg-[#05261F] border border-emerald-500/25 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs min-w-0">
                    <p className="font-display font-bold text-white truncate">
                      Oakland Comprehensive High School
                    </p>
                    <p className="text-[11px] text-surface/70 font-sans truncate">
                      Sample student records &amp; fee receipts
                    </p>
                  </div>
                </div>
                <a
                  href="https://oakland-school.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-white text-xs font-semibold shrink-0 transition-colors"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: High-Converting Demo Booking Form (7 Cols) */}
            <div className="lg:col-span-7">
              <DemoBookingCard />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
