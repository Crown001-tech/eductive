import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { DemoBookingCard } from "@/components/demo/DemoBookingCard";
import { Check, ShieldCheck, PhoneCall, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo — EDUCTIVE Nigerian School Operating System",
  description:
    "Schedule a 15-minute personalized walkthrough of Eductive for your school. See how bursary receipts, class registers, and CA broadsheets run on your mobile phone.",
};

export default function DemoPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#07332A] text-white overflow-x-hidden">
      <NavBar />

      <section className="relative w-full pt-36 pb-24 xl:pt-44 xl:pb-32 overflow-hidden select-none">
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

        <div className="relative max-w-[1340px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* Left Column: Why Book a Walkthrough (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Strict AGENTS.md: Heading <= 6 words */}
              <h1 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[46px] leading-[1.08] tracking-[-1.2px] mb-4 text-balance">
                See Eductive in your school.
              </h1>

              {/* Strict AGENTS.md: Intro line <= 18 words */}
              <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed mb-8 text-balance">
                Book a 15-minute walkthrough. We show you how fees, attendance, and broadsheets run on your phone.
              </p>

              {/* 3 Calm Proof Points */}
              <div className="space-y-4 mb-10 w-full">
                <div className="flex items-start gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">Real school data</span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5">
                      See ₦85,000 fee receipts, JSS 2 Gold registers, and automated CA score broadsheets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">Zero computer lab needed</span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5">
                      Runs on everyday Android phones and staff laptops with zero costly server setup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">Crown Tech deployment</span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5">
                      Our Nigerian engineering team handles your roster setup and trains your teachers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Showcase Partner Badge */}
              <div className="w-full p-5 rounded-2xl bg-[#05261F] border border-emerald-500/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Oakland Comprehensive High School</p>
                  <p className="text-surface/60 font-sans mt-0.5">
                    Live pilot: 420 students, 14 class arms, zero debt disputes this term.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Card (7 Cols) */}
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
