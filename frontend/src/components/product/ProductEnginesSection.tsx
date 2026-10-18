"use client";

import React from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";

export function ProductEnginesSection() {
  return (
    <section
      id="operating-engines"
      className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-20 xl:py-28 border-t border-line/70 select-none overflow-hidden"
    >
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bentoGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#12A26B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bentoGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-14 z-10">
        
        {/* =====================================================================
            SECTION HEADER (Strict AGENTS.md: Heading <= 6 words, Intro <= 18 words)
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-20">
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            Four tools. Zero paper headaches.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Every school record updates in one clean place, with no lost sheets or manual maths.
          </p>
        </div>

        {/* =====================================================================
            ASYMMETRIC BENTO MATRIX (All 4 Engines Visible · Zero Picking/Tabs)
            Row 1: 7 Cols (Bursary) + 5 Cols (Attendance)
            Row 2: 5 Cols (Assessment) + 7 Cols (Leadership Rollup)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-12">
          
          {/* -------------------------------------------------------------------
              CARD 01: BURSARY & FEE CLEARANCE (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              01
            </span>

            {/* Header & Copy */}
            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  Zero debt
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  Instant receipts
                </span>
              </div>
              <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-[26px] leading-tight mb-2">
                Bursary and fee clearance
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed max-w-xl">
                Record tuition in seconds. Balance clears to zero and parents receive stamped WhatsApp receipts.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: Stamped Bursary Receipt */}
            <div className="relative z-10 bg-[#FFFDF8] rounded-2xl border border-[#D8CEBA] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-mono text-xs">
              {/* Perforated top tear line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] flex justify-between px-3 -mt-[2px]">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="w-[4px] h-[4px] rounded-full bg-white border border-[#D8CEBA]" />
                ))}
              </div>

              <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-3 mb-3 pt-1">
                <div>
                  <p className="font-display font-bold text-ink-900 text-xs sm:text-sm tracking-wide">
                    OAKLAND COMPREHENSIVE HIGH SCHOOL
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-sans">
                    BURSARY E-RECEIPT · FIRST TERM 2024/2025
                  </p>
                </div>
                <span className="text-[10px] bg-emerald-500/15 text-emerald-800 font-bold px-2 py-0.5 rounded">
                  REC #0417
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4 font-sans">
                <div>
                  <span className="text-[11px] text-charcoal-500 block">Student Name</span>
                  <span className="font-bold text-ink-900">Adeyemi Femi (JSS 2 Gold)</span>
                </div>
                <div>
                  <span className="text-[11px] text-charcoal-500 block">Tuition & Levies</span>
                  <span className="font-mono font-bold text-ink-900">₦85,000.00</span>
                </div>
                <div>
                  <span className="text-[11px] text-charcoal-500 block">Amount Paid (Direct Transfer)</span>
                  <span className="font-mono font-bold text-emerald-700">₦85,000.00</span>
                </div>
                <div>
                  <span className="text-[11px] text-charcoal-500 block">Outstanding Balance</span>
                  <span className="font-mono font-black text-emerald-700">₦0.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#EDE6D8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-emerald-800 font-sans font-medium">
                    WhatsApp receipt delivered to parent (08:12 AM)
                  </span>
                </div>
                <div className="border border-emerald-700/60 rounded px-2.5 py-0.5 bg-emerald-700/10 -rotate-2">
                  <span className="font-display font-black text-emerald-800 text-xs tracking-widest uppercase">
                    PAID
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              CARD 02: DAILY MORNING ATTENDANCE (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              02
            </span>

            {/* Header & Copy */}
            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  30 seconds
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  Parent alert
                </span>
              </div>
              <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-[26px] leading-tight mb-2">
                Daily morning attendance register
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Teachers mark roll-call on any phone. Absent students are flagged before morning assembly ends.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: Ruled Morning Register */}
            <div className="relative z-10 bg-[#FAF9F5] rounded-2xl border border-[#E5DEC9] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-sans text-xs">
              {/* Ruled Red margin */}
              <div className="absolute top-0 bottom-0 left-[28px] w-[1px] bg-red-400/40" />

              <div className="pl-4 pb-2.5 border-b border-[#E5DEC9] mb-3 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-ink-900 text-xs uppercase tracking-wide">
                    CLASS REGISTER · JSS 2 GOLD
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-mono">Roll-Call Time: 8:02 AM</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono">
                  41 Present / 1 Absent
                </span>
              </div>

              <div className="pl-4 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-1.5">
                  <span className="text-charcoal-800 font-medium">1. Adeyemi Femi</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono text-[11px]">
                    <Check className="w-3 h-3 stroke-[3]" /> 07:48 AM
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-1.5">
                  <span className="text-charcoal-800 font-medium">2. Okon Blessing</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono text-[11px]">
                    <Check className="w-3 h-3 stroke-[3]" /> 07:54 AM
                  </span>
                </div>

                <div className="flex items-center justify-between bg-tangerine-500/10 px-2 -mx-2 rounded py-1">
                  <span className="text-tangerine-900 font-medium">3. Chukwuma David</span>
                  <span className="text-tangerine-700 font-bold text-[10px] font-mono uppercase">
                    ABSENT · SMS SENT
                  </span>
                </div>
              </div>

              <div className="pl-4 pt-3 border-t border-[#EDE6D8] mt-3 flex items-center justify-between text-charcoal-500 text-[10px]">
                <span>Form Teacher: Mrs. B. Okon</span>
                <span className="text-emerald-700 font-bold font-mono">Signed at 8:04 AM</span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              CARD 03: CONTINUOUS ASSESSMENT BROADSHEET (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              03
            </span>

            {/* Header & Copy */}
            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  Auto grades
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  Zero errors
                </span>
              </div>
              <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-[26px] leading-tight mb-2">
                Continuous assessment terminal broadsheet
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Enter CA test scores once. The system calculates totals, grades, and positions automatically.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: CA Terminal Score Sheet */}
            <div className="relative z-10 bg-[#FAF9F5] rounded-2xl border border-[#E5DEC9] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#E5DEC9] pb-2.5 mb-3">
                <div>
                  <p className="font-display font-bold text-ink-900 text-xs">
                    MATHEMATICS · JSS 2 GOLD
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-sans">
                    Student: Adeyemi Femi
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <Lock className="w-2.5 h-2.5" />
                  <span>SCORES LOCKED</span>
                </div>
              </div>

              {/* Assessment Breakdown: 20 + 20 + 60 */}
              <div className="grid grid-cols-4 gap-2 text-center mb-3">
                <div className="bg-white rounded-lg p-2 border border-[#E8E2D2]">
                  <span className="text-[9px] text-charcoal-500 block uppercase">1st CA (20)</span>
                  <span className="font-bold text-ink-900 text-sm">18</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-[#E8E2D2]">
                  <span className="text-[9px] text-charcoal-500 block uppercase">2nd CA (20)</span>
                  <span className="font-bold text-ink-900 text-sm">19</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-[#E8E2D2]">
                  <span className="text-[9px] text-charcoal-500 block uppercase">Exam (60)</span>
                  <span className="font-bold text-ink-900 text-sm">54</span>
                </div>
                <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-200 text-emerald-800">
                  <span className="text-[9px] block uppercase font-bold">Total (100)</span>
                  <span className="font-black text-sm">91</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2.5 border-t border-[#EDE6D8] font-sans">
                <div className="text-[11px] text-charcoal-600">
                  Grade: <span className="font-bold font-mono text-emerald-700">A (Distinction)</span>
                </div>
                <div className="text-[11px] font-bold text-ink-900">
                  Position: <span className="text-emerald-700 font-mono">1st of 42</span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              CARD 04: PRINCIPAL EXECUTIVE ROLLUP (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              04
            </span>

            {/* Header & Copy */}
            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  Daily rollup
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200">
                  One tap
                </span>
              </div>
              <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-[26px] leading-tight mb-2">
                Principal morning executive rollup
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed max-w-xl">
                Inspect attendance and fee totals on one screen from your office desk or phone.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: Principal Summary Desk */}
            <div className="relative z-10 bg-[#FAF9F5] rounded-2xl border border-[#E5DEC9] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-sans text-xs">
              <div className="flex items-center justify-between border-b border-[#E5DEC9] pb-3 mb-4">
                <div>
                  <p className="font-display font-bold text-ink-900 text-xs sm:text-sm">
                    DAILY CAMPUS EXECUTIVE BRIEFING
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-mono">
                    OAKLAND HIGH · TODAY (TERM 1)
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ALL 14 REGISTERS LOCKED</span>
                </div>
              </div>

              {/* 3 Executive Metric Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-xl p-3 border border-[#E8E2D2]">
                  <span className="text-[10px] text-charcoal-500 font-mono uppercase block mb-1">
                    Student Attendance
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-ink-900 text-lg">97.6%</span>
                    <span className="text-[10px] text-emerald-700 font-mono font-bold">342/350</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-[#E8E2D2]">
                  <span className="text-[10px] text-charcoal-500 font-mono uppercase block mb-1">
                    Fees Collected Today
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-emerald-800 text-lg">₦4.25M</span>
                    <span className="text-[10px] text-charcoal-500 font-mono">88% Target</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-[#E8E2D2]">
                  <span className="text-[10px] text-charcoal-500 font-mono uppercase block mb-1">
                    Teachers on Duty
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-ink-900 text-lg">18 / 18</span>
                    <span className="text-[10px] text-emerald-700 font-mono font-bold">100% Signed</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#EDE6D8] text-[11px]">
                <span className="text-charcoal-600">
                  Principal sign-off: <span className="font-bold text-ink-900">Dr. (Mrs.) E. Adeleke</span>
                </span>
                <span className="font-mono text-emerald-700 font-bold">
                  Ready for Termly Ministry Audit
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* =====================================================================
            SYNCHRONIZED TELEMETRY BUS (Quiet proof moment)
           ===================================================================== */}
        <div className="w-full bg-emerald-900/5 rounded-2xl border border-emerald-900/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping flex-shrink-0" />
            <span className="text-charcoal-700">
              When a bursar records one payment, student clearance, class roll-call, and principal audit update together.
            </span>
          </div>
          <span className="font-mono font-bold text-emerald-800 text-[11px] uppercase tracking-wider flex-shrink-0">
            ONE SYSTEM · ZERO DUPLICATE WORK
          </span>
        </div>

      </div>
    </section>
  );
}
