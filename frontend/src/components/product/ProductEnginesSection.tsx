"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Receipt,
  Users,
  GraduationCap,
  LayoutDashboard,
  Check,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

interface EngineData {
  id: string;
  tag: string;
  num: string;
  headline: string;
  summary: string;
  bullets: string[];
  proofLabel: string;
  proofValue: string;
}

const ENGINES: EngineData[] = [
  {
    id: "fees",
    tag: "BURSARY & DEBT CLEARANCE",
    num: "01",
    headline: "Turn fee collection into zero debt.",
    summary:
      "Record tuition payments in seconds. Student balance updates immediately to ₦0.00, and parents receive an official stamped digital receipt on WhatsApp.",
    bullets: [
      "Zero disputes over lost paper bank tellers",
      "Instant defaulters and debtors list by class arm",
      "Official stamped receipt sent straight to WhatsApp",
    ],
    proofLabel: "Reconciled Debt",
    proofValue: "₦0.00 Outstanding",
  },
  {
    id: "attendance",
    tag: "DAILY ATTENDANCE REGISTER",
    num: "02",
    headline: "Thirty-second morning roll-call.",
    summary:
      "Form teachers take roll-call on any smartphone. The register computes termly percentages on its own, and absentees are flagged by 8:15 AM.",
    bullets: [
      "Paperless registers that cannot tear or go missing",
      "Arrival timestamps sent directly to parent phones",
      "Term attendance percentages compute automatically",
    ],
    proofLabel: "Roll-Call Time",
    proofValue: "< 30 Seconds",
  },
  {
    id: "assessment",
    tag: "CA & TERMINAL BROADSHEETS",
    num: "03",
    headline: "Enter marks once. Broadsheets compute.",
    summary:
      "Input CA 40 and Exam 60 scores. The system ranks students, checks for input errors, and applies standard WAEC and NECO scales automatically.",
    bullets: [
      "Standard WAEC A1 to F9 grading scale built in",
      "Terminal report cards ready the day exams finish",
      "Built-in caps prevent typing 25 for a 20-mark test",
    ],
    proofLabel: "Report Generation",
    proofValue: "Instant Broadsheet",
  },
  {
    id: "leadership",
    tag: "PRINCIPAL & PROPRIETOR",
    num: "04",
    headline: "Your whole school on one screen.",
    summary:
      "Inspect live term collections across your school bank accounts, check daily attendance across all classes, and sign off broadsheets with one tap.",
    bullets: [
      "Live collection totals across all school accounts",
      "One-click approval for end-of-term results",
      "Audit trail exposes any altered marks instantly",
    ],
    proofLabel: "Campus Oversight",
    proofValue: "18 Arms Live",
  },
];

export function ProductEnginesSection() {
  const [activeEngineId, setActiveEngineId] = useState<string>("fees");
  const activeEngine = ENGINES.find((e) => e.id === activeEngineId) || ENGINES[0];

  return (
    <section
      id="operating-engines"
      className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-24 xl:py-36 border-t border-line/70 select-none overflow-hidden"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =====================================================================
            SECTION HEADER
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-700 mb-3">
            FOUR CORE ENGINES
          </span>
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            Clearer tools. Zero paper headaches.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Every administrative duty operates on simple digital workflows built for Nigerian schools.
          </p>
        </div>

        {/* =====================================================================
            BOLD ENGINE STAGE (Horizontal Selector Rail + Bolder Workspace Screen)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* LEFT: 4 Engine Switcher Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {ENGINES.map((engine) => {
              const isActive = activeEngineId === engine.id;
              return (
                <div
                  key={engine.id}
                  onClick={() => setActiveEngineId(engine.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                    isActive
                      ? "bg-white border-emerald-500/50 shadow-[0_16px_36px_rgba(7,51,42,0.08)] scale-[1.01]"
                      : "bg-white/50 hover:bg-white border-line/70 hover:border-line"
                  }`}
                >
                  {/* Left emerald accent bar */}
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-emerald-500" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? "text-emerald-700" : "text-charcoal-600"
                      }`}
                    >
                      {engine.num} · {engine.tag}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-emerald-50 text-emerald-800"
                          : "bg-surface text-charcoal-600"
                      }`}
                    >
                      {engine.proofValue}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-bold text-lg sm:text-xl transition-colors mb-2 ${
                      isActive ? "text-ink-900" : "text-charcoal-800"
                    }`}
                  >
                    {engine.headline}
                  </h3>

                  <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                    {engine.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Bolder Living Paperwork / Screen Stage (7 Columns) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="w-full bg-[#07332A] text-white rounded-3xl border border-emerald-500/30 p-6 sm:p-9 shadow-[0_24px_60px_rgba(7,51,42,0.22)] min-h-[500px] flex flex-col justify-between">
              
              {/* Stage Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#3DDC97]" />
                    <span className="font-display font-bold text-sm tracking-wider uppercase">
                      {activeEngine.tag}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300">
                    OAKLAND COMPREHENSIVE HIGH
                  </span>
                </div>

                {/* Animated Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEngine.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                  >
                    {/* BURSARY STAGE */}
                    {activeEngine.id === "fees" && (
                      <div className="bg-[#FFFDF8] text-charcoal-900 rounded-2xl p-5 border border-[#D8CEBA] font-mono text-xs shadow-lg space-y-3">
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#D2C7B2] pb-2">
                          <div>
                            <p className="font-bold text-ink-900 font-display text-sm">
                              BURSARY RECEIPT #0417
                            </p>
                            <p className="text-[10px] text-charcoal-600 font-sans">
                              Term 2 2024/2025 · Adeyemi Femi (JSS 2 Gold)
                            </p>
                          </div>
                          <span className="bg-tangerine-500 text-ink-900 font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                            PAID · ₦185,000
                          </span>
                        </div>

                        <div className="space-y-1.5 font-sans text-xs">
                          <div className="flex justify-between">
                            <span className="text-charcoal-600">Total Term Bill:</span>
                            <span className="font-bold text-ink-900 font-mono">₦185,000.00</span>
                          </div>
                          <div className="flex justify-between text-emerald-700 font-bold">
                            <span>Amount Settled:</span>
                            <span className="font-mono">₦185,000.00</span>
                          </div>
                          <div className="flex justify-between border-t border-[#E5DEC9] pt-1.5 font-extrabold text-sm text-emerald-800">
                            <span>Balance Remaining:</span>
                            <span className="font-mono">₦0.00</span>
                          </div>
                        </div>

                        <p className="text-[10px] text-charcoal-600 font-mono pt-1">
                          DELIVERY: STAMPED RECEIPT SENT TO PARENT WHATSAPP AT 8:05 AM
                        </p>
                      </div>
                    )}

                    {/* ATTENDANCE STAGE */}
                    {activeEngine.id === "attendance" && (
                      <div className="bg-[#FAF9F5] text-charcoal-900 rounded-2xl p-5 border border-line font-sans text-xs shadow-lg space-y-3">
                        <div className="flex justify-between items-center border-b border-line pb-2">
                          <span className="font-display font-bold text-sm text-ink-900">
                            MORNING REGISTER · JSS 2 GOLD
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                            38 Present / 2 Absent
                          </span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center p-2 rounded bg-white border border-line">
                            <span className="font-medium text-charcoal-800">Adeyemi Femi</span>
                            <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono">
                              <Check className="w-3.5 h-3.5 stroke-[3]" /> 7:58 AM
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-white border border-line">
                            <span className="font-medium text-charcoal-800">Abubakar Ibrahim</span>
                            <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono">
                              <Check className="w-3.5 h-3.5 stroke-[3]" /> 8:00 AM
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-tangerine-500/10 border border-tangerine-500/20 text-tangerine-800">
                            <span>Chukwuma David</span>
                            <span className="font-bold font-mono text-[10px]">ABSENT · SMS SENT</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ASSESSMENT STAGE */}
                    {activeEngine.id === "assessment" && (
                      <div className="bg-white text-charcoal-900 rounded-2xl p-5 border border-line font-sans text-xs shadow-lg space-y-3">
                        <div className="flex justify-between items-center border-b border-line pb-2">
                          <span className="font-display font-bold text-sm text-ink-900">
                            MATHEMATICS CA & EXAM BROADSHEET
                          </span>
                          <span className="font-bold text-emerald-700 font-mono text-xs">
                            SS 2 · WAEC SCALE
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-2 text-center font-mono">
                          <div className="p-2 rounded bg-surface border border-line">
                            <span className="text-[10px] text-charcoal-600 block">CA (40)</span>
                            <span className="font-bold text-sm text-ink-900">28</span>
                          </div>
                          <div className="p-2 rounded bg-surface border border-line">
                            <span className="text-[10px] text-charcoal-600 block">EXAM (60)</span>
                            <span className="font-bold text-sm text-ink-900">52</span>
                          </div>
                          <div className="p-2 rounded bg-emerald-50 border border-emerald-200">
                            <span className="text-[10px] text-emerald-800 block">TOTAL</span>
                            <span className="font-bold text-sm text-emerald-700">80</span>
                          </div>
                          <div className="p-2 rounded bg-emerald-700 text-white font-bold flex flex-col justify-center">
                            <span className="text-[10px] opacity-80">GRADE</span>
                            <span className="text-base font-display font-black">A1</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-charcoal-600 font-sans">
                          Position: 3rd of 42 students. Terminal report card generated automatically.
                        </p>
                      </div>
                    )}

                    {/* LEADERSHIP STAGE */}
                    {activeEngine.id === "leadership" && (
                      <div className="bg-[#031D17] text-white rounded-2xl p-5 border border-emerald-500/20 font-sans text-xs shadow-lg space-y-3">
                        <div className="flex justify-between items-center border-b border-emerald-500/20 pb-2">
                          <span className="font-display font-bold text-sm">
                            EXECUTIVE ROLLUP CONSOLE
                          </span>
                          <span className="text-[10px] font-mono text-emerald-300 font-bold px-2 py-0.5 rounded bg-emerald-500/20">
                            18 CLASSES LIVE
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-ink-800/80 border border-emerald-500/20">
                            <span className="text-[10px] text-surface/70 block uppercase">Collections</span>
                            <span className="font-display font-bold text-xl text-white">₦42.8M</span>
                            <span className="text-[10px] text-emerald-300 block mt-0.5">92% Reconciled</span>
                          </div>
                          <div className="p-3 rounded-xl bg-ink-800/80 border border-emerald-500/20">
                            <span className="text-[10px] text-surface/70 block uppercase">Attendance</span>
                            <span className="font-display font-bold text-xl text-white">98.4%</span>
                            <span className="text-[10px] text-emerald-300 block mt-0.5">All arms signed</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage Bottom Bullets */}
              <div className="pt-6 border-t border-emerald-500/20 space-y-2.5">
                {activeEngine.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-surface/90 font-sans">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
