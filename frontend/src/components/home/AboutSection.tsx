"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Check,
  Building2,
  Zap,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#07332A] text-white py-24 xl:py-36 border-t border-emerald-500/20 overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="aboutGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#12A26B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Lighting Orbs */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            HEADER: WHY WE BUILT EDUCTIVE
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(18,162,107,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-tangerine-400" />
            <span>OUR MISSION & ORIGIN · BUILT IN NIGERIA</span>
          </div>

          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.1] mb-5 text-balance">
            Why we built EDUCTIVE <br />
            specifically for Nigerian schools.
          </h2>

          <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed text-balance">
            Generic foreign software assumes 24/7 high-speed fiber internet, credit card subscriptions,
            and Western school structures. We built an operating system designed around how
            Nigerian nursery, primary and secondary schools actually operate day-to-day.
          </p>
        </div>

        {/* =======================================================================
            THE 3 FOUNDATIONAL PILLARS (Clean, high-impact editorial cards)
           ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Local Realities */}
          <div className="bg-[#05261F] p-7 rounded-2xl border border-emerald-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2.5">
                Engineered for Local Realities
              </h3>
              <p className="text-sm text-surface/75 font-sans leading-relaxed">
                Direct bank transfer webhooks connect to your school&apos;s existing bank accounts (GTBank, Zenith, First Bank)
                to match transfers in seconds without middleman fees. Offline-first local caching keeps attendance
                and continuous assessment scores saving smoothly during NEPA power cuts or internet outages.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-emerald-500/15 flex items-center gap-2 text-xs font-mono text-emerald-300">
              <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-400" />
              <span>Offline Cache & Direct Bank Settlement</span>
            </div>
          </div>

          {/* Pillar 2: Restoring Teacher Dignity */}
          <div className="bg-[#05261F] p-7 rounded-2xl border border-emerald-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-tangerine-500/20 text-tangerine-400 flex items-center justify-center font-bold mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2.5">
                Restoring Dignity to Educators
              </h3>
              <p className="text-sm text-surface/75 font-sans leading-relaxed">
                Teachers shouldn&apos;t spend their weekends manually copying test marks into paper broadsheets
                with handheld calculators. Continuous Assessment tests (40%) and terminal exams (60%) automatically
                compile into standardized WAEC/NECO cumulative grade registers and parent report cards the same afternoon.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-emerald-500/15 flex items-center gap-2 text-xs font-mono text-tangerine-400">
              <Check className="w-3.5 h-3.5 stroke-[3] text-tangerine-400" />
              <span>Automated Cumulative Broadsheet Math</span>
            </div>
          </div>

          {/* Pillar 3: Protecting School Revenue */}
          <div className="bg-[#05261F] p-7 rounded-2xl border border-emerald-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2.5">
                Securing Every Kobo of Revenue
              </h3>
              <p className="text-sm text-surface/75 font-sans leading-relaxed">
                Private schools thrive on timely fee collections. When receipts are forged or registers lost,
                salaries and infrastructure suffer. EDUCTIVE closes every revenue leak with tamper-proof digital receipts.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-emerald-500/15 flex items-center gap-2 text-xs font-mono text-emerald-300">
              <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-400" />
              <span>Zero Fake Tellers · 100% Auditable</span>
            </div>
          </div>
        </div>

        {/* =======================================================================
            LOCAL HERITAGE & COMMITMENT BANNER
           ======================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-ink-800/80 border border-emerald-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg">
                Headquartered in Lagos, Nigeria
              </h4>
              <p className="text-xs sm:text-sm text-surface/75 font-sans mt-0.5">
                Serving Nursery, Primary, Junior Secondary (JSS), and Senior Secondary (SSS) institutions nationwide.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-emerald-300 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Lagos On-Site Team</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>NDPR Data Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
