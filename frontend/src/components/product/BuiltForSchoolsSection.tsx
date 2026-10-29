"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, Banknote, Lock, Users, ShieldCheck, Check, RotateCcw } from "lucide-react";

export function BuiltForSchoolsSection() {
  return (
    <section className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-16 sm:py-24 xl:py-32 border-t border-line/70 select-none overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="builtSchoolsGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#12A26B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#builtSchoolsGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-14 z-10">
        
        {/* =====================================================================
            SECTION HEADER (Strict AGENTS.md caps: Heading <= 6 words, Intro <= 18 words)
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16 xl:mb-20">
          <h2 className="font-display font-bold text-ink-900 text-2xl sm:text-4xl xl:text-[46px] leading-[1.15] tracking-[-1.2px] mb-3 text-balance">
            Built for how schools work
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed text-balance">
            Made for Nigerian phones, Nigerian classes and the way Nigerian schools actually run.
          </p>
        </div>

        {/* =====================================================================
            ASYMMETRIC EDITORIAL WORKBENCH
            Left: iPhone 14 Pro Mockup (Works on any phone)
            Right: 3 Stacked Operational Pillars (Naira/JSS/SS, Locked results, Setup)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* -------------------------------------------------------------------
              PILLAR 1: WORKS ON ANY PHONE (7 Columns - iPhone 14 Pro Mockup)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 xl:p-10 border border-[#E5DEC9] shadow-[0_12px_40px_rgba(7,51,42,0.06)] flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-bl-[100px] pointer-events-none" />

            <div className="relative z-10 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
                <Smartphone className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-display font-bold text-ink-900 text-xl sm:text-2xl xl:text-[28px] mb-2 leading-tight">
                Works on any phone
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed max-w-lg">
                Open it in the browser and add it to your home screen. No app store needed.
              </p>
            </div>

            {/* =================================================================
                ACCURATE IPHONE 14 PRO HARDWARE MOCKUP
                - Proper 19.5:9 slender smartphone aspect ratio
                - Dark titanium frame with physical side buttons
                - Floating Dynamic Island with camera & indicator
                - iOS Safari browser address bar
                - Authentic Add to Home Screen sheet with EDUCTIVE logo
               ================================================================= */}
            <div className="relative z-10 w-full flex justify-center py-2">
              {/* Outer Phone Chassis with Physical Buttons */}
              <div className="relative w-[280px] sm:w-[310px] h-[580px] sm:h-[620px] bg-[#141F1B] rounded-[50px] p-[10px] shadow-[0_25px_70px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_0_2px_#273B33] ring-1 ring-black/40 shrink-0">
                
                {/* Physical Side Hardware Buttons */}
                {/* Left: Mute switch */}
                <span className="absolute -left-[4px] top-[95px] w-[3px] h-[22px] bg-[#273B33] rounded-l-xs" />
                {/* Left: Volume Up */}
                <span className="absolute -left-[4px] top-[135px] w-[3px] h-[44px] bg-[#273B33] rounded-l-xs" />
                {/* Left: Volume Down */}
                <span className="absolute -left-[4px] top-[190px] w-[3px] h-[44px] bg-[#273B33] rounded-l-xs" />
                {/* Right: Power / Side button */}
                <span className="absolute -right-[4px] top-[145px] w-[3px] h-[64px] bg-[#273B33] rounded-r-xs" />

                {/* Inner Screen Display (Edge-to-Edge Glass) */}
                <div className="w-full h-full bg-[#051C17] rounded-[40px] overflow-hidden border border-emerald-500/20 relative flex flex-col justify-between text-white font-sans">
                  
                  {/* TOP SYSTEM BAR & DYNAMIC ISLAND */}
                  <div className="relative pt-3 px-5 flex items-center justify-between z-30 select-none">
                    {/* Left: Clock */}
                    <span className="text-[12px] font-bold text-white tracking-tight">9:41</span>

                    {/* Center: iPhone 14 Pro Dynamic Island */}
                    <div className="w-[84px] h-[23px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
                      {/* Front camera lens */}
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0F241F] ring-1 ring-[#1A3830]" />
                      {/* Live microphone / privacy sensor */}
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Right: Cellular, WiFi, Battery */}
                    <div className="flex items-center gap-1.5 text-[11px] text-white">
                      <span className="text-[10px] font-mono font-semibold">5G</span>
                      {/* Battery icon with charge fill */}
                      <div className="w-[19px] h-[10px] border border-white/70 rounded-[3px] p-[1.5px] flex items-center">
                        <div className="h-full w-[80%] bg-white rounded-[1.5px]" />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE SAFARI URL ADDRESS BAR */}
                  <div className="mx-3 mt-2 mb-2 bg-[#092B22]/90 border border-emerald-500/25 rounded-2xl px-3 py-1.5 flex items-center justify-between text-[11px] backdrop-blur-md shadow-sm">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="font-mono text-emerald-100 text-[10.5px] truncate">
                        eductiveschools.com/oakland
                      </span>
                    </div>
                    <RotateCcw className="w-3 h-3 text-surface/60 shrink-0" />
                  </div>

                  {/* SCREEN BODY: OAKLAND SCHOOL PORTAL PREVIEW */}
                  <div className="px-3 space-y-2.5 flex-1 overflow-hidden">
                    {/* Portal Header */}
                    <div className="bg-[#0A2E24] rounded-2xl p-3 border border-emerald-500/25 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
                          OAKLAND SCHOOL
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="font-display font-bold text-white text-xs leading-tight">
                        Parent & Staff Portal
                      </p>
                      <p className="text-[10px] text-surface/75 mt-0.5">
                        Adeyemi Femi · JSS 2 Gold
                      </p>
                    </div>

                    {/* Quick Metric Pill */}
                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="bg-[#08241D] p-2 rounded-xl border border-emerald-500/20">
                        <span className="text-[9px] text-surface/65 block">Today&apos;s Roll-Call</span>
                        <span className="font-bold text-emerald-300 text-xs">Present (8:02 AM)</span>
                      </div>
                      <div className="bg-[#08241D] p-2 rounded-xl border border-emerald-500/20">
                        <span className="text-[9px] text-surface/65 block">Term 2 Tuition</span>
                        <span className="font-bold text-white text-xs">₦0.00 Due</span>
                      </div>
                    </div>

                    {/* IOS NATIVE "ADD TO HOME SCREEN" SHEET */}
                    <div className="bg-[#082921]/95 backdrop-blur-md rounded-2xl p-3 border border-emerald-400/40 shadow-xl space-y-2.5">
                      {/* App Identity Row */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#07332A] border border-emerald-400/40 p-1 shadow-md shrink-0 flex items-center justify-center">
                          <Image
                            src="/favicon.svg"
                            alt="EDUCTIVE Logo"
                            width={36}
                            height={36}
                            unoptimized
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-display font-black text-white text-xs tracking-wide">
                              EDUCTIVE
                            </span>
                            <span className="text-[9px] text-emerald-300 font-mono">App</span>
                          </div>
                          <p className="text-[10px] text-surface/75 truncate">
                            Oakland School
                          </p>
                        </div>
                      </div>

                      {/* Plain-English Explanation */}
                      <p className="text-[10px] text-surface/85 leading-snug">
                        Add to your home screen for one-tap daily access without downloading from an app store.
                      </p>

                      {/* Primary Action Button */}
                      <div className="w-full py-2 px-3 rounded-full bg-emerald-400 text-ink-900 font-display font-bold text-xs text-center shadow-md">
                        Add to Home Screen
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM IPHONE HOME INDICATOR */}
                  <div className="pt-2 pb-2.5 flex justify-center shrink-0">
                    <span className="w-28 h-1 bg-white/40 rounded-full" />
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: 3 SPECIALIZED PILLARS (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            
            {/* PILLAR 2: NAIRA, JSS AND SS */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5DEC9] shadow-[0_8px_30px_rgba(7,51,42,0.04)] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center shrink-0">
                  <Banknote className="w-5 h-5 text-amber-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-ink-900 text-lg mb-1">
                    Naira and real classes
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed mb-3">
                    Fees in naira, classes from Nursery to SS 3.
                  </p>

                  {/* Micro Badges */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                      ₦ Naira (NGN)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF9F5] text-charcoal-700 border border-[#E5DEC9]">
                      Nursery 1 - 3
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF9F5] text-charcoal-700 border border-[#E5DEC9]">
                      Primary 1 - 6
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF9F5] text-charcoal-700 border border-[#E5DEC9]">
                      JSS 1 - 3
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FAF9F5] text-charcoal-700 border border-[#E5DEC9]">
                      SS 1 - 3 (Arts, Science, Comm)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PILLAR 3: LOCKED RESULTS */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5DEC9] shadow-[0_8px_30px_rgba(7,51,42,0.04)] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-ink-900 text-lg mb-1">
                    Locked results
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed mb-3">
                    Once the principal approves scores, they can&apos;t be changed.
                  </p>

                  {/* Security Proof Strip */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF9F5] border border-[#E5DEC9] text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium text-charcoal-800">
                      Tamper-proof score lock after approval sign-off
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PILLAR 4: WE SET IT UP */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5DEC9] shadow-[0_8px_30px_rgba(7,51,42,0.04)] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-ink-900 text-lg mb-1">
                    We set it up
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed mb-3">
                    We set up your classes and staff and train your teachers.
                  </p>

                  {/* Hands-on support pill */}
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-bold">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-700" />
                    <span>Personal onboarding and WhatsApp phone support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
