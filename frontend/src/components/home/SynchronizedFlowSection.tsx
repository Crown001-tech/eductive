"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import {
  Receipt,
  Users,
  GraduationCap,
  LayoutDashboard,
  Check,
  ArrowRight,
} from "lucide-react";

interface StepData {
  id: string;
  stepNum: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
}

const STEPS: StepData[] = [
  {
    id: "bursar",
    stepNum: "01",
    title: "Tuition fees",
    subtitle: "Accounts Desk",
    summary: "Record a payment. The balance updates and the parent can see it in their portal.",
    highlights: [
      "Record payments in seconds",
      "Balances and receipts update live",
    ],
  },
  {
    id: "attendance",
    stepNum: "02",
    title: "Attendance",
    subtitle: "Form Class",
    summary: "Take roll-call from any phone in under a minute.",
    highlights: [
      "One-tap roll-call on any phone",
      "Absences visible to leadership immediately",
    ],
  },
  {
    id: "assessment",
    stepNum: "03",
    title: "Assessment",
    subtitle: "Staff Room",
    summary: "Enter scores once. Totals, grades and positions work themselves out.",
    highlights: [
      "Automatic totals, grades and positions",
      "Principal locks scores after approval",
    ],
  },
  {
    id: "leadership",
    stepNum: "04",
    title: "Leadership",
    subtitle: "Principal & Proprietor",
    summary: "Check fees, attendance and results from your phone, wherever you are.",
    highlights: [
      "Live fee totals and attendance rate",
      "Morning summary on your phone",
    ],
  },
];

export function SynchronizedFlowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // The line draws down as the reader scrolls through the steps.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });
  const railDraw = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Steps change every 7.5s. Stops on hover and with reduced motion. A tap restarts the count.
  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = setTimeout(() => {
      setActiveStepIndex((prev) => (prev + 1) % STEPS.length);
    }, 7500);
    return () => clearTimeout(timer);
  }, [activeStepIndex, paused, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full bg-[#FCFBF8] text-charcoal-900 py-24 xl:py-36 overflow-hidden rounded-t-[36px] sm:rounded-t-[56px] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(7,51,42,0.10)] select-none border-t border-line/60"
    >


      {/* Ambient background light */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        {/* =====================================================================
            SECTION HEADER (Clean, no AI pill tags, strict copy limits)
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-20">
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            Start with the desks you know.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Fees, registers, results and oversight, already connected.
          </p>
        </div>

        {/* =====================================================================
            INTERACTIVE SYNCHRONIZATION STAGE (Spatial 3D & Stepper Layout)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* ===================================================================
              LEFT COLUMN: STEP NAVIGATION WITH CONTACT NODES (5 Cols)
             =================================================================== */}
          <div
            className="lg:col-span-5 flex flex-col gap-3.5 relative pl-6 sm:pl-8 lg:pl-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Connecting line: dashed track behind, solid line draws on scroll */}
            <div className="absolute left-2 lg:left-[2px] top-6 bottom-12 w-[2px] pointer-events-none z-0">
              <div className="absolute inset-0 border-l-2 border-dashed border-emerald-500/30" />
              <motion.div
                style={{ scaleY: reduceMotion ? 1 : railDraw, transformOrigin: "top" }}
                className="absolute inset-0 bg-gradient-to-b from-[#3DDC97] via-[#12A26B] to-[#FF6A1A] rounded-full"
              />
            </div>

            {STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer border text-left ${
                    isActive
                      ? "bg-white border-emerald-500/40 shadow-[0_12px_36px_rgba(7,51,42,0.08)] scale-[1.01]"
                      : "bg-white/40 hover:bg-white border-line/60 hover:border-line text-charcoal-600"
                  }`}
                >
                  {/* CONTACT CONNECTOR STEM & DOCKING POINT (Desktop: lg:flex) */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:flex items-center">
                    {/* Horizontal connector line reaching to card */}
                    <div
                      className={`h-[2px] w-5 transition-all duration-300 ${
                        isActive ? "bg-emerald-500 shadow-[0_0_8px_#3DDC97]" : "bg-line"
                      }`}
                    />
                    {/* Contact Point Node */}
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-emerald-500 shadow-[0_0_10px_#3DDC97] scale-110"
                            : "bg-line border border-white"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? "bg-white" : "bg-charcoal-600/30"
                          }`}
                        />
                      </span>
                    </div>
                  </div>

                  {/* MOBILE CONTACT DOCKING NODE (lg:hidden: sits right on the mobile rail) */}
                  <div className="absolute -left-6 sm:-left-8 top-6 -translate-y-1/2 flex lg:hidden items-center">
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-emerald-600 border-2 border-emerald-300 shadow-[0_0_10px_#3DDC97] scale-110"
                            : "bg-surface border border-line"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? "bg-white" : "bg-charcoal-400"
                          }`}
                        />
                      </span>
                    </div>
                    {/* Small horizontal bridge to card */}
                    <div
                      className={`h-[1.5px] w-2 transition-colors duration-300 ${
                        isActive ? "bg-emerald-500" : "bg-line"
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold transition-colors ${
                          isActive ? "text-emerald-700" : "text-charcoal-600"
                        }`}
                      >
                        {step.stepNum}
                      </span>
                      <h3
                        className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                          isActive ? "text-ink-900" : "text-charcoal-800"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-sans font-medium text-charcoal-600">
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Summary & Highlights - shown for the active step, fades in (no height animation) */}
                  {isActive && (
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="pt-2"
                    >
                      <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-3.5">
                        {step.summary}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-line/50">
                        {step.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-charcoal-800">
                            <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-[10px] flex-shrink-0 font-bold">
                              ✓
                            </span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Direct Link to Product Page */}
            <div className="pt-4 pl-2">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group cursor-pointer"
              >
                <span>See all features</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: 3D SPATIAL ARTIFACT STAGE (7 Cols)
              - Realistic Nigerian school paperwork with physical textures & tilt
              - Smooth, tactile transitions between the 4 operational states
             =================================================================== */}
          <div className="lg:col-span-7 flex justify-center items-center py-4">
            <div className="relative w-full max-w-[620px] min-h-[460px] flex items-center justify-center [perspective:1200px]">
              
              <AnimatePresence mode="wait">
                {/* -------------------------------------------------------------
                    STAGE 1: BURSAR FEES — OAKLAND PERFORATED RECEIPT
                   ------------------------------------------------------------- */}
                {activeStepIndex === 0 && (
                  <motion.div
                    key="stage-bursar"
                    initial={{ opacity: 0, rotateY: 10, rotateX: 6, scale: 0.94 }}
                    animate={{ opacity: 1, rotateY: -3, rotateX: 3, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -10, scale: 0.94 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#FFFDF8] rounded-xl border border-[#D8CEBA] shadow-[0_24px_50px_rgba(7,51,42,0.14)] p-6 sm:p-8 font-mono text-xs overflow-hidden relative"
                  >
                    {/* Perforated top edge */}
                    <div className="absolute top-0 left-0 right-0 h-[6px] flex justify-between px-3 -mt-[3px]">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <span key={i} className="w-[5px] h-[5px] rounded-full bg-[#FCFBF8] border border-[#D8CEBA]" />
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-3 mb-4 pt-1">
                      <div>
                        <p className="font-bold text-ink-900 tracking-wider text-sm font-display">
                          OAKLAND SCHOOL
                        </p>
                        <p className="text-[11px] text-charcoal-600 font-sans">
                          BURSARY E-RECEIPT · FIRST TERM 2026/2027
                        </p>
                      </div>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-800 font-bold px-2.5 py-1 rounded">
                        REC #0417
                      </span>
                    </div>

                    <div className="space-y-2 text-charcoal-900 font-sans mb-4">
                      <div className="flex justify-between items-baseline">
                        <span className="text-charcoal-600 text-xs">Student:</span>
                        <span className="font-bold text-ink-900 text-sm">Adeyemi Femi (JSS 2 Gold)</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-charcoal-600 text-xs">Tuition & Levies:</span>
                        <span className="font-bold font-mono text-sm">₦185,000.00</span>
                      </div>
                      <div className="flex justify-between items-baseline text-emerald-800">
                        <span className="text-charcoal-600 text-xs">Amount Paid:</span>
                        <span className="font-bold font-mono text-sm text-emerald-700">₦185,000.00</span>
                      </div>
                      <div className="flex justify-between items-baseline border-t border-dashed border-[#E5DEC9] pt-2">
                        <span className="text-charcoal-600 text-xs">Balance:</span>
                        <span className="font-extrabold font-mono text-base text-emerald-700">₦0.00</span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-3 border-t border-[#EDE6D8]">
                      <div className="text-[10px] text-charcoal-600 font-mono">
                        <p>PAID BY: BANK TRANSFER</p>
                        <p className="text-emerald-800 font-bold">STATUS: RECORDED</p>
                      </div>

                      {/* Stamped Paid Seal */}
                      <div className="border-2 border-tangerine-500 rounded px-3 py-1 bg-tangerine-500/10 rotate-[-4deg]">
                        <span className="font-display font-black text-tangerine-600 text-sm tracking-widest uppercase">
                          PAID
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* -------------------------------------------------------------
                    STAGE 2: ATTENDANCE — RULED MORNING REGISTER
                   ------------------------------------------------------------- */}
                {activeStepIndex === 1 && (
                  <motion.div
                    key="stage-attendance"
                    initial={{ opacity: 0, rotateY: 10, rotateX: 6, scale: 0.94 }}
                    animate={{ opacity: 1, rotateY: -3, rotateX: 3, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -10, scale: 0.94 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#FAF9F5] rounded-xl border border-[#E5DEC9] shadow-[0_24px_50px_rgba(7,51,42,0.14)] p-6 sm:p-8 font-sans text-xs overflow-hidden relative"
                  >
                    {/* Red register margin line */}
                    <div className="absolute top-0 bottom-0 left-[34px] w-[1px] bg-red-400/50" />

                    <div className="pl-6 pb-3 border-b border-[#E5DEC9] mb-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-ink-900 text-sm uppercase tracking-wide font-display">
                          CLASS REGISTER · JSS 2 GOLD
                        </p>
                        <p className="text-xs text-charcoal-600">Monday Roll-Call · 8:02 AM</p>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        41 Present / 1 Absent
                      </span>
                    </div>

                    <div className="pl-6 space-y-2.5 text-xs">
                      <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-1.5">
                        <span className="text-charcoal-800 font-medium">1. Abubakar Ibrahim</span>
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" /> 8:00am
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-1.5 bg-emerald-500/5 px-2 -mx-2 rounded">
                        <div>
                          <span className="text-ink-900 font-bold block">2. Adeyemi Femi</span>
                          <span className="text-[10px] text-emerald-700">Tuition cleared · Registered</span>
                        </div>
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" /> 7:58am
                        </span>
                      </div>

                      <div className="flex items-center justify-between bg-tangerine-500/10 px-2 -mx-2 rounded py-1">
                        <span className="text-tangerine-700 font-medium">3. Chukwuma David</span>
                        <span className="text-tangerine-600 font-bold text-[10px] uppercase tracking-wider">
                          ABSENT · NOTIFIED IN APP
                        </span>
                      </div>
                    </div>

                    <div className="pl-6 pt-4 border-t border-[#EDE6D8] mt-4 flex items-center justify-between text-charcoal-600 text-[11px]">
                      <span>Form Teacher: Mrs. B. Okon</span>
                      <span className="text-emerald-700 font-medium">Signed digitally at 8:05 AM</span>
                    </div>
                  </motion.div>
                )}

                {/* -------------------------------------------------------------
                    STAGE 3: ASSESSMENT — TERMINAL BROADSHEET & CA SLIP
                   ------------------------------------------------------------- */}
                {activeStepIndex === 2 && (
                  <motion.div
                    key="stage-assessment"
                    initial={{ opacity: 0, rotateY: 10, rotateX: 6, scale: 0.94 }}
                    animate={{ opacity: 1, rotateY: -3, rotateX: 3, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -10, scale: 0.94 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-white rounded-xl border border-line shadow-[0_24px_50px_rgba(7,51,42,0.14)] p-6 sm:p-8 font-sans text-xs overflow-hidden relative"
                  >
                    <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                      <div>
                        <p className="font-bold text-ink-900 text-sm uppercase tracking-wide font-display">
                          CONTINUOUS ASSESSMENT SLIP
                        </p>
                        <p className="text-xs text-charcoal-600">Mathematics · First Term</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        Class Position: 3rd / 42
                      </span>
                    </div>

                    {/* Breakdown table */}
                    <div className="grid grid-cols-4 gap-2 text-center font-mono text-xs mb-4">
                      <div className="bg-surface p-2.5 rounded-lg border border-line/60">
                        <span className="text-charcoal-600 block text-[10px]">1st CA (20)</span>
                        <span className="font-bold text-ink-900 text-sm">18</span>
                      </div>
                      <div className="bg-surface p-2.5 rounded-lg border border-line/60">
                        <span className="text-charcoal-600 block text-[10px]">2nd CA (20)</span>
                        <span className="font-bold text-ink-900 text-sm">17</span>
                      </div>
                      <div className="bg-surface p-2.5 rounded-lg border border-line/60">
                        <span className="text-charcoal-600 block text-[10px]">Exam (60)</span>
                        <span className="font-bold text-ink-900 text-sm">52</span>
                      </div>
                      <div className="bg-emerald-700 text-white p-2.5 rounded-lg flex flex-col justify-center items-center">
                        <span className="text-[10px] opacity-80">TOTAL (100)</span>
                        <span className="font-display font-bold text-base">87 · A1</span>
                      </div>
                    </div>

                    <div className="bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/20 text-charcoal-700 text-xs leading-relaxed">
                      <strong className="text-ink-900 block font-display mb-0.5">Teacher Remark:</strong>
                      Excellent numerical reasoning and steady homework diligence throughout the term.
                    </div>
                  </motion.div>
                )}

                {/* -------------------------------------------------------------
                    STAGE 4: LEADERSHIP — EXECUTIVE CONSOLE
                   ------------------------------------------------------------- */}
                {activeStepIndex === 3 && (
                  <motion.div
                    key="stage-leadership"
                    initial={{ opacity: 0, rotateY: 10, rotateX: 6, scale: 0.94 }}
                    animate={{ opacity: 1, rotateY: -3, rotateX: 3, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -10, scale: 0.94 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#07332A] text-white rounded-xl border border-emerald-500/30 shadow-[0_24px_50px_rgba(7,51,42,0.22)] p-6 sm:p-8 font-sans text-xs overflow-hidden relative"
                  >
                    <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
                      <div>
                        <p className="font-bold text-white text-sm uppercase tracking-wide font-display">
                          PRINCIPAL & PROPRIETOR CONSOLE
                        </p>
                        <p className="text-xs text-emerald-300/80">Oakland School</p>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded border border-emerald-400/30">
                        First Term
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-ink-800/80 p-3 rounded-lg border border-emerald-500/20">
                        <span className="text-surface/70 block text-[11px] mb-1">Fees paid</span>
                        <span className="font-display font-bold text-lg text-white">₦42,850,000</span>
                        <span className="text-[10px] text-emerald-300 block mt-0.5">412 of 460 students</span>
                      </div>
                      <div className="bg-ink-800/80 p-3 rounded-lg border border-emerald-500/20">
                        <span className="text-surface/70 block text-[11px] mb-1">Present today</span>
                        <span className="font-display font-bold text-lg text-white">41 of 42</span>
                        <span className="text-[10px] text-emerald-300 block mt-0.5">JSS 2 Gold</span>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/25 flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold block text-xs">JSS 2 Gold Broadsheet</span>
                        <span className="text-[11px] text-surface/75">Ready for terminal sign-off</span>
                      </div>
                      <span className="px-3 py-1 bg-tangerine-500 text-ink-900 rounded-full font-bold text-[11px] shadow-sm">
                        Approve
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
