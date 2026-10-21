"use client";

import React from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";

export function ProductEnginesSection() {
  return (
    <section
      id="operating-engines"
      className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-16 sm:py-20 xl:py-28 border-t border-line/70 select-none overflow-hidden"
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

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-14 z-10">
        
        {/* =====================================================================
            SECTION HEADER (Strict AGENTS.md: Heading <= 6 words, Intro <= 18 words)
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-16 xl:mb-20">
          <h2 className="font-display font-bold text-ink-900 text-2xl sm:text-4xl xl:text-[46px] leading-[1.15] tracking-[-1.2px] mb-3 text-balance">
            Four desks every school knows.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed text-balance">
            Fees, attendance, results and oversight: the paperwork you already do, without the paper.
          </p>
        </div>

        {/* =====================================================================
            ASYMMETRIC BENTO MATRIX (All 4 Desks Visible · Zero Picking/Tabs)
            Row 1: 7 Cols (Bursary) + 5 Cols (Attendance)
            Row 2: 5 Cols (Assessment) + 7 Cols (Principal's Morning View)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 xl:gap-8">
          
          {/* -------------------------------------------------------------------
              CARD 01: TUITION FEES (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 xl:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[80px] sm:text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              01
            </span>

            {/* Header & Copy */}
            <div className="mb-5 sm:mb-6 relative z-10">
              <h3 className="font-display font-bold text-ink-900 text-xl sm:text-[26px] leading-tight mb-2">
                Fees and receipts
              </h3>
              <p className="text-xs sm:text-base text-charcoal-600 font-sans leading-relaxed max-w-xl">
                Record payments in seconds. Balances update and parents see receipts in their portal.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: Stamped Bursary Receipt */}
            <div className="relative z-10 bg-[#FFFDF8] rounded-xl sm:rounded-2xl border border-[#D8CEBA] p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-mono text-xs">
              {/* Perforated top tear line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] flex justify-between px-3 -mt-[2px] overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="w-[4px] h-[4px] rounded-full bg-white border border-[#D8CEBA] shrink-0" />
                ))}
              </div>

              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1.5 border-b border-dashed border-[#D2C7B2] pb-3 mb-3 pt-1">
                <div className="min-w-0">
                  <p className="font-display font-bold text-ink-900 text-xs sm:text-sm tracking-wide truncate">
                    OAKLAND COMPREHENSIVE HIGH SCHOOL
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-sans">
                    BURSARY E-RECEIPT · FIRST TERM 2024/2025
                  </p>
                </div>
                <span className="self-start xs:self-auto text-[10px] bg-emerald-500/15 text-emerald-800 font-bold px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                  REC #0417
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs mb-4 font-sans">
                <div>
                  <span className="text-[10px] sm:text-[11px] text-charcoal-500 block">Student Name</span>
                  <span className="font-bold text-ink-900">Adeyemi Femi (JSS 2 Gold)</span>
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-charcoal-500 block">Tuition & Levies</span>
                  <span className="font-mono font-bold text-ink-900">₦185,000.00</span>
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-charcoal-500 block">Amount Paid (Direct Transfer)</span>
                  <span className="font-mono font-bold text-emerald-700">₦185,000.00</span>
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-charcoal-500 block">Outstanding Balance</span>
                  <span className="font-mono font-black text-emerald-700">₦0.00</span>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 pt-3 border-t border-[#EDE6D8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-emerald-800 font-sans font-medium">
                    Official receipt generated for parent record (08:12 AM)
                  </span>
                </div>
                <div className="self-start xs:self-auto border border-emerald-700/60 rounded px-2.5 py-0.5 bg-emerald-700/10 -rotate-2 shrink-0">
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
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 xl:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[80px] sm:text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              02
            </span>

            {/* Header & Copy */}
            <div className="mb-5 sm:mb-6 relative z-10">
              <h3 className="font-display font-bold text-ink-900 text-xl sm:text-[26px] leading-tight mb-2">
                Daily attendance register
              </h3>
              <p className="text-xs sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Teachers take roll-call on any phone. Absences are visible to leadership as soon as it's saved.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: Ruled Morning Register */}
            <div className="relative z-10 bg-[#FAF9F5] rounded-xl sm:rounded-2xl border border-[#E5DEC9] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-sans text-xs">
              {/* Ruled Red margin */}
              <div className="absolute top-0 bottom-0 left-[24px] sm:left-[28px] w-[1px] bg-red-400/40" />

              <div className="pl-3 sm:pl-4 pb-2.5 border-b border-[#E5DEC9] mb-3 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1.5">
                <div className="min-w-0">
                  <p className="font-display font-bold text-ink-900 text-xs uppercase tracking-wide truncate">
                    CLASS REGISTER · JSS 2 GOLD
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-mono">Roll-Call Time: 8:02 AM</p>
                </div>
                <span className="self-start xs:self-auto text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono shrink-0 whitespace-nowrap">
                  41 Present / 1 Absent
                </span>
              </div>

              <div className="pl-3 sm:pl-4 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-1.5">
                  <span className="text-charcoal-800 font-medium">1. Abubakar Ibrahim</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono text-[11px] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" /> 08:00 AM
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-1.5">
                  <span className="text-charcoal-800 font-medium">2. Adeyemi Femi</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono text-[11px] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" /> 07:58 AM
                  </span>
                </div>

                <div className="flex items-center justify-between bg-tangerine-500/10 px-2 -mx-1 sm:-mx-2 rounded py-1">
                  <span className="text-tangerine-900 font-medium truncate mr-2">3. Chukwuma David</span>
                  <span className="text-tangerine-700 font-bold text-[10px] font-mono uppercase shrink-0 whitespace-nowrap">
                    ABSENT · NOTIFIED
                  </span>
                </div>
              </div>

              <div className="pl-3 sm:pl-4 pt-3 border-t border-[#EDE6D8] mt-3 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 text-charcoal-500 text-[10px]">
                <span>Form Teacher: Mrs. B. Okon</span>
                <span className="text-emerald-700 font-bold font-mono">Signed at 8:04 AM</span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              CARD 03: RESULTS & BROADSHEETS (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 xl:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[80px] sm:text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              03
            </span>

            {/* Header & Copy */}
            <div className="mb-5 sm:mb-6 relative z-10">
              <h3 className="font-display font-bold text-ink-900 text-xl sm:text-[26px] leading-tight mb-2">
                Results and broadsheets
              </h3>
              <p className="text-xs sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Enter scores once. Totals, grades and positions are worked out, then the principal approves and locks them.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: CA Terminal Score Sheet */}
            <div className="relative z-10 bg-[#FAF9F5] rounded-xl sm:rounded-2xl border border-[#E5DEC9] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] font-mono text-xs">
              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1.5 border-b border-[#E5DEC9] pb-2.5 mb-3">
                <div className="min-w-0">
                  <p className="font-display font-bold text-ink-900 text-xs truncate">
                    MATHEMATICS · JSS 2 GOLD
                  </p>
                  <p className="text-[10px] text-charcoal-500 font-sans">
                    Student: Adeyemi Femi
                  </p>
                </div>
                <div className="self-start xs:self-auto flex items-center gap-1 text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 whitespace-nowrap">
                  <Lock className="w-2.5 h-2.5 shrink-0" />
                  <span>SCORES LOCKED</span>
                </div>
              </div>

              {/* Assessment Breakdown: 18 + 17 + 52 = 87 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-3">
                <div className="bg-white rounded-lg p-2 border border-[#E8E2D2]">
                  <span className="text-[9px] text-charcoal-500 block uppercase">1st CA (20)</span>
                  <span className="font-bold text-ink-900 text-sm">18</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-[#E8E2D2]">
                  <span className="text-[9px] text-charcoal-500 block uppercase">2nd CA (20)</span>
                  <span className="font-bold text-ink-900 text-sm">17</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-[#E8E2D2]">
                  <span className="text-[9px] text-charcoal-500 block uppercase">Exam (60)</span>
                  <span className="font-bold text-ink-900 text-sm">52</span>
                </div>
                <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-200 text-emerald-800">
                  <span className="text-[9px] block uppercase font-bold">Total (100)</span>
                  <span className="font-black text-sm">87</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2.5 border-t border-[#EDE6D8] font-sans">
                <div className="text-[10px] sm:text-[11px] text-charcoal-600">
                  Grade: <span className="font-bold font-mono text-emerald-700">A1 (Distinction)</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-ink-900">
                  Position: <span className="text-emerald-700 font-mono">3rd of 42</span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              CARD 04: PRINCIPAL'S MORNING VIEW (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 xl:p-8 border border-line/80 shadow-[0_12px_36px_rgba(7,51,42,0.06)] hover:shadow-[0_20px_50px_rgba(7,51,42,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Number */}
            <span className="absolute -top-6 -right-2 text-[80px] sm:text-[100px] font-display font-black text-emerald-500/[0.06] pointer-events-none select-none">
              04
            </span>

            {/* Header & Copy */}
            <div className="mb-5 sm:mb-6 relative z-10">
              <h3 className="font-display font-bold text-ink-900 text-xl sm:text-[26px] leading-tight mb-2">
                Principal's morning view
              </h3>
              <p className="text-xs sm:text-base text-charcoal-600 font-sans leading-relaxed max-w-xl">
                Attendance, fees and staff on duty on one screen, from the office or your phone.
              </p>
            </div>

            {/* Authentic Nigerian School Paperwork Artifact: Leadership Morning Console */}
            <div className="relative z-10 bg-[#07332A] text-white rounded-xl sm:rounded-2xl border border-emerald-500/30 p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] font-sans text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-emerald-500/20 pb-3 mb-4">
                <div className="min-w-0">
                  <p className="font-display font-bold text-white text-xs sm:text-sm">
                    OAKLAND EXECUTIVE LEADERSHIP CONSOLE
                  </p>
                  <p className="text-[10px] text-emerald-300/80 font-mono">
                    Morning Rollup · Term 2 Active
                  </p>
                </div>
                <div className="self-start sm:self-auto flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded border border-emerald-400/30 font-bold shrink-0 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>ALL 18 ARMS REPORTED</span>
                </div>
              </div>

              {/* 3 Executive Metric Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4">
                <div className="bg-ink-800/80 rounded-xl p-3 border border-emerald-500/20">
                  <span className="text-[10px] text-surface/70 font-mono uppercase block mb-1">
                    Fee Collection
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-white text-base sm:text-lg">₦42.85M</span>
                    <span className="text-[10px] text-emerald-300 font-mono">92.8%</span>
                  </div>
                </div>

                <div className="bg-ink-800/80 rounded-xl p-3 border border-emerald-500/20">
                  <span className="text-[10px] text-surface/70 font-mono uppercase block mb-1">
                    Daily Attendance
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-emerald-300 text-base sm:text-lg">98.4%</span>
                    <span className="text-[10px] text-surface/60 font-mono">Present</span>
                  </div>
                </div>

                <div className="bg-ink-800/80 rounded-xl p-3 border border-emerald-500/20">
                  <span className="text-[10px] text-surface/70 font-mono uppercase block mb-1">
                    Staff on Duty
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-white text-base sm:text-lg">34 / 34</span>
                    <span className="text-[10px] text-emerald-300 font-mono">Checked In</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pt-3 border-t border-emerald-500/20 text-[10px] sm:text-[11px] text-surface/75">
                <span>
                  Principal: <span className="font-bold text-white">Rev. Dr. Okonjo</span>
                </span>
                <span className="font-mono text-emerald-300 font-bold">
                  Synced across office & mobile
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* =====================================================================
            BOTTOM CONNECTED RIBBON
           ===================================================================== */}
        <div className="mt-12 sm:mt-16 text-center py-4 px-6 rounded-2xl bg-white border border-line/80 shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-charcoal-700">
          <span className="font-bold text-emerald-800 font-display">ONE RECORD · NO DUPLICATE WORK</span>
          <span className="hidden sm:inline text-charcoal-400">·</span>
          <span>Record something once. Everyone who needs it can see it.</span>
        </div>

      </div>
    </section>
  );
}
