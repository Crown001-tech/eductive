"use client";

import React from "react";
import { motion } from "motion/react";
import { Clock, FileText, Download, ShieldCheck, Check, Calendar, AlertTriangle } from "lucide-react";

export function LookInsidePortalsSection() {
  return (
    <section className="relative w-full bg-[#031A15] text-white py-20 sm:py-28 xl:py-36 overflow-hidden border-t border-b border-emerald-500/20 select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lookInsideGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3DDC97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lookInsideGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-14 z-10">
        
        {/* =====================================================================
            SECTION HEADER
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16 xl:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 mb-2 sm:mb-3">
            MORE WORKSPACES
          </span>
          <h2 className="font-display font-bold text-white text-2xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-3 text-balance">
            Look inside the portals.
          </h2>
          <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed text-balance">
            Tests, classwork, gate records and timetables live inside the portals your people already use.
          </p>
        </div>

        {/* =====================================================================
            4 RICH MOCK BENTO GRID
            Tile 1: CBT Exams (7 Cols)
            Tile 2: Classwork (5 Cols)
            Tile 3: Gate & Visitors (5 Cols)
            Tile 4: Timetable & Calendar (7 Cols)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-12">
          
          {/* -------------------------------------------------------------------
              TILE 1: CBT EXAMS (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-300 mb-2 block">
                Subject Teacher + Student
              </span>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                CBT exams
              </h3>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Teachers set tests. Students sit them on screen. Results are processed for you.
              </p>
            </div>

            {/* Student CBT Terminal Viewport */}
            <div className="w-full bg-[#0A2620] rounded-2xl border border-emerald-500/30 overflow-hidden font-sans text-xs">
              <div className="bg-[#051C17] px-4 py-3 border-b border-emerald-500/20 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-xs">JSS 2 Mathematics · Term 2 CBT</p>
                  <p className="text-[10px] text-emerald-300 font-mono">Candidate: Adeyemi Femi</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-bold">
                  <Clock className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>42m : 18s remaining</span>
                </div>
              </div>

              <div className="p-4 bg-[#07241C] space-y-3 text-left">
                <div className="flex items-center justify-between text-[10px] font-mono text-surface/70">
                  <span className="text-emerald-300 font-bold">Question 14 of 30</span>
                  <span className="text-surface/60">28 Answered</span>
                </div>
                <p className="text-white text-xs sm:text-sm font-medium">
                  Solve for x in: <span className="font-mono text-emerald-300 font-bold">4x - 5 = 19</span>
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                  <div className="p-2 rounded-lg bg-[#092B22] border border-emerald-500/20 text-surface/70">
                    A) x = 4
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400 text-white font-bold flex items-center justify-between">
                    <span>B) x = 6</span>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                  </div>
                </div>
              </div>

              <div className="bg-[#051C17] px-4 py-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-surface/70">
                <span>Safe screen lock enabled</span>
                <span className="text-emerald-300 font-mono">Automatic marking</span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              TILE 2: CLASSWORK AND MATERIALS (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-300 mb-2 block">
                Subject Teacher + Student
              </span>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                Classwork and materials
              </h3>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Subject teachers post assignments and notes. Students open them from their own portal.
              </p>
            </div>

            {/* Assignment Docket Artifact */}
            <div className="w-full bg-[#0A2620] rounded-2xl border border-emerald-500/30 p-4 text-left text-xs font-sans space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                <div>
                  <p className="font-bold text-white text-xs">Mathematics · Homework #04</p>
                  <p className="text-[10px] text-emerald-300/80">Posted by Mr. T. Balogun</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-2 py-0.5 rounded">
                  Due Friday 4pm
                </span>
              </div>

              <div className="bg-[#07241C] rounded-xl p-2.5 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[11px] text-white font-mono">Worksheet_Ch3_Algebra.pdf</p>
                    <p className="text-[9px] text-surface/60">240 KB · Lesson notes</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-emerald-300" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-surface/75">Class Submissions</span>
                  <span className="font-mono font-bold text-emerald-300">38 of 42 submitted</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-ink-900 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              TILE 3: GATE AND VISITORS (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-300 mb-2 block">
                Security Portal
              </span>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                Gate and visitors
              </h3>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Reception registers every visitor and records entries and exits. Leadership can see the log.
              </p>
            </div>

            {/* Official Stamped Visitor Pass Slip */}
            <div className="w-full bg-[#FAF8F2] text-charcoal-900 rounded-2xl border border-[#D8CEBA] p-4 sm:p-5 font-mono text-xs shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-2 mb-2">
                <div>
                  <p className="font-display font-bold text-xs text-ink-900">
                    OAKLAND COMPREHENSIVE
                  </p>
                  <p className="text-[9px] text-charcoal-600 font-sans">
                    VISITOR PASS · GATE 1
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  NO. 0092
                </span>
              </div>

              <div className="space-y-1.5 text-charcoal-800 font-sans text-xs mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-charcoal-600 text-[10px]">Visitor:</span>
                  <span className="font-bold text-ink-900 font-mono">Alh. G. Mohammed</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-charcoal-600 text-[10px]">Host:</span>
                  <span className="font-medium text-ink-900">Rev. Dr. Okonjo</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-charcoal-600 text-[10px]">Time In:</span>
                  <span className="font-mono font-bold text-emerald-800">08:15 AM · Verified</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#EDE6D8] text-[9px] text-charcoal-600">
                <span>Officer: S. Danjuma</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 uppercase">
                  ENTRY PERMITTED
                </span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              TILE 4: TIMETABLE AND CALENDAR (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-300 mb-2 block">
                Principal Portal
              </span>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                Timetable and calendar
              </h3>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Build the school timetable and calendar. EDUCTIVE flags clashes before they reach the classroom.
              </p>
            </div>

            {/* Timetable Clash-Detection Grid Artifact */}
            <div className="w-full bg-[#0A2620] rounded-2xl border border-emerald-500/30 p-4 text-left font-sans text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span className="font-bold text-white text-xs">Master School Timetable · Tuesday Schedule</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-400/30">
                  Auto-Check Active
                </span>
              </div>

              {/* Clash Warning Callout */}
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-between text-amber-200 text-xs">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="font-medium">
                    Clash prevented: Hall B was double-booked for SS 2 Chemistry & JSS 3 Basic Science.
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/40 shrink-0 ml-2">
                  Resolved
                </span>
              </div>

              {/* Schedule row chips */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-[#07241C] border border-emerald-500/20">
                  <span className="text-surface/60 block text-[9px]">08:30 - 09:15</span>
                  <span className="font-bold text-white">JSS 2 Gold · Math</span>
                </div>
                <div className="p-2 rounded-lg bg-[#07241C] border border-emerald-500/20">
                  <span className="text-surface/60 block text-[9px]">09:15 - 10:00</span>
                  <span className="font-bold text-white">SS 1 B · Physics</span>
                </div>
                <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-200 font-bold">
                  <span className="text-surface/70 block text-[9px]">10:00 - 10:45</span>
                  <span>Short Break</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =====================================================================
            BOTTOM STRIP: ADDITIONAL WORKSPACES
           ===================================================================== */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#05261F] border border-emerald-500/25 text-center text-xs sm:text-sm text-surface/85 font-sans leading-relaxed max-w-4xl mx-auto shadow-md">
          <strong className="text-white font-display">Also in the Principal portal:</strong>{" "}
          admissions, staff leave, documents, inventory, procurement, announcements and reports.
        </div>

      </div>
    </section>
  );
}
