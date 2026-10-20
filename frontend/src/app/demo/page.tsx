import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { DemoBookingCard } from "@/components/demo/DemoBookingCard";
import { Check, ShieldCheck, PhoneCall, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo — EDUCTIVE School Management System",
  description:
    "Request a personalised walkthrough of EDUCTIVE. Explore the features relevant to your school and discuss your administrative, academic and financial workflows with our team.",
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
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 mb-3 block">
                SEE EDUCTIVE IN ACTION
              </span>

              <h1 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[46px] leading-[1.08] tracking-[-1.2px] mb-4 text-balance">
                See how EDUCTIVE fits your school.
              </h1>

              <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed mb-8 text-balance">
                Request a personalised walkthrough of the platform. Explore the features relevant to your school and discuss your administrative, academic and financial workflows with our team.
              </p>

              {/* 3 Calm Proof Points */}
              <div className="space-y-4 mb-10 w-full">
                <div className="flex items-start gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">A practical walkthrough</span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5">
                      See relevant features through the actual platform rather than relying on descriptions alone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">Relevant to your school</span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5">
                      Tell us about your school's size, structure and priorities so the walkthrough can focus on what matters to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">A clear next step</span>
                    <p className="text-xs text-surface/75 font-sans mt-0.5">
                      Discuss the available features, setup requirements and what adopting EDUCTIVE would involve.
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
                    Demonstration school: Explore sample student records, class registers and fee receipt workflows.
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
