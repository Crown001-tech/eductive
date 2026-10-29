"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, FileText, Check, Clock, ShieldCheck, Download } from "lucide-react";

export function TheCliffhangerSection() {
  return (
    <section className="relative w-full bg-[#031A15] text-white py-24 xl:py-36 overflow-hidden border-t border-b border-emerald-500/20 select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle architectural hairline grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cliffGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3DDC97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cliffGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =====================================================================
            SECTION HEADER (Stately, clean, no AI pill tags)
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-24">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            The part most schools don't expect.
          </h2>

          <p className="text-base sm:text-lg text-surface/85 font-sans leading-relaxed text-balance">
            Three more portals, already built in.
          </p>
        </div>

        {/* =====================================================================
            ASYMMETRIC SHOWCASE: ZERO GENERIC CARDS
            Deck 1: Full-width CBT Exam Terminal Showcase
            Deck 2: Two Asymmetric Wings (Gate Pass Paper Slip vs. Classwork Docket)
           ===================================================================== */}
        <div className="flex flex-col gap-8 xl:gap-10 mb-16 xl:mb-20">

          {/* -------------------------------------------------------------------
              DECK 1: CBT EXAMS — ON-SCREEN TESTING TERMINAL
              - Wide-format workstation console with live exam timer & radio questions
              - Highlights Subject Teacher setup & Student examination experience
             ------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 xl:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Typographic Context & Operational Role (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <span className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-emerald-300 mb-2">
                  Subject Teacher + Student
                </span>

                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl xl:text-4xl leading-tight mb-3">
                  CBT exams
                </h3>

                <p className="text-base text-surface/85 font-sans leading-relaxed mb-6">
                  Teachers set the test. Students sit it on screen. Results are processed for you.
                </p>

                {/* Plain-English operational notes */}
                <div className="space-y-2.5 pt-4 border-t border-emerald-500/20 w-full text-xs sm:text-[13px] text-surface/80 font-sans">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-400 text-ink-900 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>Scores go straight to the result sheet</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-400 text-ink-900 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>The timer runs and the test submits itself</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Student CBT Screen Viewport (7 Cols) */}
              <div className="lg:col-span-7 w-full">
                <div className="w-full bg-[#0A2620] rounded-2xl border border-emerald-500/40 shadow-2xl overflow-hidden font-sans">
                  
                  {/* CBT Top Navigation Bar */}
                  <div className="bg-[#051C17] px-4 sm:px-6 py-3 border-b border-emerald-500/25 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm">
                        JSS 2 Mathematics · First Term CBT
                      </p>
                      <p className="text-[10px] text-emerald-300/80 font-mono">
                        Candidate: Adeyemi Femi (JSS 2 Gold)
                      </p>
                    </div>

                    {/* Live Countdown Clock Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>42m : 18s left</span>
                    </div>
                  </div>

                  {/* Question Area */}
                  <div className="p-5 sm:p-7 bg-[#07241C] space-y-5 text-left">
                    <div className="flex items-center justify-between text-[11px] text-surface/70 font-mono">
                      <span className="font-bold text-emerald-300">Question 14 of 30</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        28 Answered · 2 Remaining
                      </span>
                    </div>

                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                      Evaluate the value of <strong className="text-emerald-300 font-mono">x</strong> in the algebraic linear equation:{" "}
                      <span className="font-mono font-bold text-white bg-ink-900/60 px-2 py-0.5 rounded border border-emerald-500/20">
                        4x - 5 = 19
                      </span>
                    </p>

                    {/* Radio Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {[
                        { label: "A", text: "x = 4", selected: false },
                        { label: "B", text: "x = 6", selected: true },
                        { label: "C", text: "x = 8", selected: false },
                        { label: "D", text: "x = 12", selected: false },
                      ].map((opt) => (
                        <div
                          key={opt.label}
                          className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                            opt.selected
                              ? "bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_12px_rgba(61,220,151,0.25)]"
                              : "bg-[#092B22] border-emerald-500/20 text-surface/75"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                                opt.selected
                                  ? "bg-emerald-400 text-ink-900"
                                  : "bg-ink-900/60 text-surface/60 border border-emerald-500/30"
                              }`}
                            >
                              {opt.label}
                            </span>
                            <span className="font-mono text-xs sm:text-sm font-semibold">{opt.text}</span>
                          </div>
                          {opt.selected && <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CBT Bottom Status Strip */}
                  <div className="bg-[#051C17] px-4 sm:px-6 py-2.5 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-surface/70">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Screen locked during the test</span>
                    </span>
                    <span className="text-emerald-300 font-mono text-[10px]">Answers save as you go</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              DECK 2: TWO ASYMMETRIC WINGS
              - Left: Security Gate Pass Paper Slip (Physical Paper Texture & Stamp)
              - Right: Teacher's Classwork & Homework Docket (Academic Materials)
             ------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10">

            {/* WING A: GATE & VISITORS (7 Cols on large screens) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="text-left mb-6">
                <span className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-emerald-300 mb-2 block">
                  Security portal
                </span>
                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                  Gate & visitors
                </h3>
                <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                  Reception registers every visitor. Leadership can see the log.
                </p>
              </div>

              {/* The Authentic Stamped Visitor Pass Paper Slip Artifact */}
              <div className="w-full bg-[#FAF8F2] text-charcoal-900 rounded-2xl border border-[#D8CEBA] p-5 sm:p-6 shadow-xl relative overflow-hidden font-mono text-xs">
                {/* Perforated Left Stub Edge */}
                <div className="absolute top-0 bottom-0 left-0 w-[5px] flex flex-col justify-between py-2 -ml-[3px]">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="w-[5px] h-[5px] rounded-full bg-[#05261F] border border-[#D8CEBA]" />
                  ))}
                </div>

                <div className="pl-3">
                  {/* Pass Header with Official Red Serial Number */}
                  <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-3 mb-3">
                    <div>
                      <p className="font-display font-bold text-xs sm:text-sm text-ink-900 tracking-wide">
                        OAKLAND SCHOOL
                      </p>
                      <p className="text-[10px] text-charcoal-600 font-sans">
                        SECURITY POST · OFFICIAL VISITOR PASS
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                      NO. 0092
                    </span>
                  </div>

                  {/* Visitor Slip Data Grid */}
                  <div className="space-y-2 text-charcoal-800 font-sans text-xs mb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-charcoal-600 text-[11px]">Visitor Name:</span>
                      <span className="font-bold text-ink-900 font-mono">Alh. G. Mohammed</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-charcoal-600 text-[11px]">Purpose / Host:</span>
                      <span className="font-medium text-ink-900">Parent Enquiry · Rev. Dr. Okonjo</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-charcoal-600 text-[11px]">Time In / Gate:</span>
                      <span className="font-mono font-bold text-emerald-800">08:15 AM · Main Gate 1</span>
                    </div>
                  </div>

                  {/* Bottom Verification Stamp */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-[#EDE6D8]">
                    <div className="text-[10px] text-charcoal-600 font-mono">
                      <span>OFFICER: S. DANJUMA</span>
                    </div>

                    <div className="border border-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded rotate-[-2deg]">
                      <span className="font-display font-bold text-emerald-800 text-[10px] tracking-wider uppercase">
                        ENTRY PERMITTED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* WING B: CLASSWORK & MATERIALS (5 Cols on large screens) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 bg-[#05261F] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="text-left mb-6">
                <span className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-emerald-300 mb-2 block">
                  Subject Teacher + Student
                </span>
                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                  Classwork
                </h3>
                <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                  Teachers post assignments and notes. Students open them from their own portal.
                </p>
              </div>

              {/* Classroom Assignment Docket Artifact */}
              <div className="w-full bg-[#0A2620] rounded-2xl border border-emerald-500/30 p-5 text-left text-xs font-sans space-y-3.5">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
                  <div>
                    <p className="font-bold text-white text-xs">Mathematics · Homework #04</p>
                    <p className="text-[10px] text-emerald-300/80">Posted by Mr. T. Balogun</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-2 py-0.5 rounded">
                    Due Friday 4pm
                  </span>
                </div>

                {/* PDF Attachment Capsule */}
                <div className="bg-[#07241C] rounded-xl p-2.5 border border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[11px] text-white font-mono">Worksheet_Ch3_Algebra.pdf</p>
                      <p className="text-[9px] text-surface/60">240 KB · Lesson notes attached</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-300" />
                </div>

                {/* Student Submission Progress Tracker */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-surface/75">Class Submissions</span>
                    <span className="font-mono font-bold text-emerald-300">38 of 42 submitted</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-ink-900 overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>

        {/* =====================================================================
            CLOSING HORIZON ACTION BAR
            Clean, high-contrast invitation into the full 8 portals on /product
           ===================================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 text-center">
          <Link
            href="/product"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold bg-emerald-400 hover:bg-emerald-300 text-ink-900 font-sans shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>See all portals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
