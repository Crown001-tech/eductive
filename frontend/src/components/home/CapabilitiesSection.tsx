"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Users,
  Receipt,
  LayoutDashboard,
  Check,
  CheckCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface WorkspaceDesk {
  id: string;
  tabLabel: string;
  role: string;
  title: string;
  description: string;
  actionText: string;
}

const DESKS: WorkspaceDesk[] = [
  {
    id: "parents",
    tabLabel: "Parents",
    role: "Parents on WhatsApp",
    title: "Parents on WhatsApp",
    description:
      "Instant fee receipts and terminal report cards delivered straight to parents' phones.",
    actionText: "See parent WhatsApp delivery",
  },
  {
    id: "teachers",
    tabLabel: "Teachers",
    role: "Teachers in the classroom",
    title: "Teachers in class",
    description:
      "Take morning roll-call and record continuous assessment marks in thirty seconds.",
    actionText: "See teacher mobile register",
  },
  {
    id: "bursar",
    tabLabel: "Bursary",
    role: "Bursar at accounts desk",
    title: "Bursar at desk",
    description:
      "Clear tuition payments and match bank transfers with zero fake teller disputes.",
    actionText: "See bursary payment matching",
  },
  {
    id: "principal",
    tabLabel: "Principal",
    role: "Principal on the move",
    title: "Principal on the go",
    description:
      "Inspect daily fee collections and sign off termly broadsheets from anywhere.",
    actionText: "See principal executive console",
  },
];

export function CapabilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activeDesk = DESKS[currentIndex];

  const goToSlide = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % DESKS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + DESKS.length) % DESKS.length);
  };

  // Auto-advance loop (7.5s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % DESKS.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Framer motion variants for tactile directional carousel slide
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#07332A] text-white py-24 xl:py-36 overflow-hidden select-none"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-tangerine-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="capArchGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3DDC97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capArchGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =====================================================================
            SECTION HEADER (Under hard word caps, zero banned buzzwords)
            Heading: <= 6 words ("Built for your school's people.")
            Intro Line: <= 18 words ("Each person gets a clear tool designed for their daily school work.")
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 xl:mb-16">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            Built for your school&apos;s people.
          </h2>

          <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed text-balance">
            Each person gets a clear tool designed for their daily school work.
          </p>
        </div>

        {/* =====================================================================
            TACTILE DESK SELECTOR TABS (Architectural Desk Dock)
           ===================================================================== */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-ink-900/80 border border-emerald-500/25 backdrop-blur-md shadow-xl gap-0.5 sm:gap-1">
            {DESKS.map((desk, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={desk.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative px-2.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-sans font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    isActive
                      ? "text-ink-900 font-bold"
                      : "text-surface/75 hover:text-white hover:bg-ink-800/50"
                  }`}
                >
                  {/* Sliding pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDeskPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-emerald-400 rounded-full shadow-[0_0_16px_rgba(61,220,151,0.4)]"
                    />
                  )}
                  <span className="relative z-10 font-mono text-[10px] sm:text-[11px] opacity-70 hidden sm:inline">
                    0{idx + 1}
                  </span>
                  <span className="relative z-10">{desk.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            THE WORKSPACE CAROUSEL STAGE
           ===================================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Slide Card Container */}
          <div className="relative min-h-[520px] sm:min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeDesk.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-[#05261F] border border-emerald-500/30 rounded-3xl p-4 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                  
                  {/* LEFT: Contextual Overview & Action Link (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col items-start text-left">
                    {/* Role Tag */}
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-300 mb-2">
                      {activeDesk.role}
                    </span>

                    {/* Card Title (<= 4 words) */}
                    <h3 className="font-display font-bold text-white text-2xl sm:text-3xl leading-snug mb-3 text-balance">
                      {activeDesk.title}
                    </h3>

                    {/* Card Description (<= 15 words) */}
                    <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed mb-6 text-balance">
                      {activeDesk.description}
                    </p>

                    {/* Direct Action Link */}
                    <Link
                      href="/product"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white transition-colors group cursor-pointer"
                    >
                      <span>Explore this workspace</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* RIGHT: Authentic Nigerian School Workspace Visual (7 Cols) */}
                  <div className="lg:col-span-7 flex justify-center items-center w-full">
                    
                    {/* =========================================================
                        SLIDE 1: PARENTS ON WHATSAPP
                        - Authentic mobile WhatsApp delivery interface
                        - Stamped Oakland e-receipt & terminal report PDF
                       ========================================================= */}
                    {activeDesk.id === "parents" && (
                      <div className="w-full max-w-[420px] bg-[#0C1514] rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden font-sans text-xs">
                        {/* WhatsApp Top App Bar */}
                        <div className="bg-[#07332A] px-4 py-3 border-b border-emerald-500/20 flex items-center justify-between text-white">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center font-display font-bold text-xs text-white">
                              O
                            </div>
                            <div>
                              <p className="font-bold text-xs flex items-center gap-1">
                                <span>Oakland Comprehensive High</span>
                                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-ink-900 inline-flex items-center justify-center text-[9px] font-black">
                                  ✓
                                </span>
                              </p>
                              <p className="text-[10px] text-emerald-300/80">Official School Account</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-surface/60">8:05 AM</span>
                        </div>

                        {/* WhatsApp Chat Thread Body */}
                        <div className="p-4 space-y-3 bg-[#0B1E19]">
                          {/* Message 1: Stamped Fee Receipt */}
                          <div className="bg-[#0E2E25] border border-emerald-500/25 rounded-xl p-3 text-white max-w-[92%] shadow-sm">
                            <p className="text-[11px] leading-relaxed mb-2 text-surface/90">
                              Good morning Mrs. Adeyemi. We have received your tuition transfer. Here is your official stamped receipt.
                            </p>

                            {/* PDF Attachment Card */}
                            <div className="bg-white rounded-lg p-2.5 text-charcoal-900 flex items-center justify-between border border-emerald-200/50">
                              <div className="flex items-center gap-2">
                                <FileText className="w-6 h-6 text-emerald-700 flex-shrink-0" />
                                <div className="text-left font-mono">
                                  <p className="font-bold text-[10px] leading-tight text-ink-900">
                                    Receipt_0417_Femi.pdf
                                  </p>
                                  <p className="text-[9px] text-charcoal-600 font-sans">
                                    ₦185,000.00 · PAID
                                  </p>
                                </div>
                              </div>
                              <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                                Stamped
                              </span>
                            </div>
                          </div>

                          {/* Message 2: Daily Attendance Alert */}
                          <div className="bg-[#0E2E25] border border-emerald-500/25 rounded-xl p-3 text-white max-w-[92%] shadow-sm">
                            <p className="text-[11px] leading-relaxed text-surface/90">
                              Adeyemi Femi arrived safely at school and checked in at 8:00 AM (JSS 2 Gold).
                            </p>
                            <span className="text-[9px] font-mono text-emerald-300/70 block text-right mt-1">
                              8:02 AM
                            </span>
                          </div>

                          {/* Outgoing Message Reply from Parent */}
                          <div className="ml-auto bg-[#124B3B] border border-emerald-400/30 rounded-xl p-2.5 text-white max-w-[80%] text-right shadow-sm">
                            <p className="text-[11px] text-surface/95">
                              Thank you Bursar, receipt well received.
                            </p>
                            <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-300 mt-0.5 font-mono">
                              <span>8:06 AM</span>
                              <CheckCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* =========================================================
                        SLIDE 2: TEACHERS IN CLASS
                        - Simple mobile register screen for class roll-call
                        - 30-second morning roll-call with zero paper
                       ========================================================= */}
                    {activeDesk.id === "teachers" && (
                      <div className="w-full max-w-[420px] bg-[#FAF9F5] text-charcoal-900 rounded-2xl border border-line shadow-2xl p-5 font-sans text-xs">
                        <div className="flex items-center justify-between border-b border-line pb-3 mb-3">
                          <div>
                            <p className="font-display font-bold text-sm text-ink-900">
                              CLASS REGISTER · JSS 2 GOLD
                            </p>
                            <p className="text-[11px] text-charcoal-600">
                              Morning Roll-call · Form Teacher: Mrs. B. Okon
                            </p>
                          </div>
                          <span className="text-[10px] font-bold font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            38 Present
                          </span>
                        </div>

                        {/* Student Roll-Call Rows */}
                        <div className="space-y-2 text-xs mb-4">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-line/60">
                            <span className="font-medium text-charcoal-800">1. Abubakar Ibrahim</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 stroke-[3]" /> Present
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                            <div>
                              <span className="font-bold text-ink-900 block">2. Adeyemi Femi</span>
                              <span className="text-[10px] text-emerald-700 font-medium">Checked in at 7:58 AM</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 stroke-[3]" /> Present
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-tangerine-500/10 border border-tangerine-500/25">
                            <span className="font-medium text-tangerine-900">3. Chukwuma David</span>
                            <span className="px-2 py-0.5 rounded bg-tangerine-500 text-white font-bold text-[10px] uppercase tracking-wider">
                              Absent · SMS Sent
                            </span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-line flex items-center justify-between text-[11px] text-charcoal-600">
                          <span>Paperless register</span>
                          <span className="font-bold text-emerald-700">Signed at 8:04 AM</span>
                        </div>
                      </div>
                    )}

                    {/* =========================================================
                        SLIDE 3: BURSAR AT DESK
                        - Direct bank transfer clearing
                        - Tamper-proof stamped e-receipt
                       ========================================================= */}
                    {activeDesk.id === "bursar" && (
                      <div className="w-full max-w-[440px] bg-[#FFFDF8] text-charcoal-900 rounded-2xl border border-[#D8CEBA] shadow-2xl p-5 sm:p-6 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-3 mb-4">
                          <div>
                            <p className="font-display font-bold text-sm text-ink-900">
                              OAKLAND COMPREHENSIVE HIGH SCHOOL
                            </p>
                            <p className="text-[10px] text-charcoal-600 font-sans">
                              BURSARY PAYMENT CLEARANCE · TERM 2
                            </p>
                          </div>
                          <span className="text-[10px] font-bold bg-emerald-500/15 text-emerald-800 px-2 py-0.5 rounded">
                            CLEARED
                          </span>
                        </div>

                        {/* Transaction Detail Table */}
                        <div className="space-y-2 text-charcoal-900 font-sans mb-4 text-xs">
                          <div className="flex justify-between items-baseline">
                            <span className="text-charcoal-600">Student:</span>
                            <span className="font-bold text-ink-900">Adeyemi Femi (JSS 2 Gold)</span>
                          </div>
                          <div className="flex justify-between items-baseline">
                            <span className="text-charcoal-600">Payment Channel:</span>
                            <span className="font-mono text-ink-900">Direct Bank Transfer</span>
                          </div>
                          <div className="flex justify-between items-baseline text-emerald-800">
                            <span className="text-charcoal-600">Amount Paid:</span>
                            <span className="font-bold font-mono text-sm text-emerald-700">₦185,000.00</span>
                          </div>
                          <div className="flex justify-between items-baseline border-t border-dashed border-[#E5DEC9] pt-2">
                            <span className="text-charcoal-600">Outstanding Balance:</span>
                            <span className="font-black font-mono text-sm text-emerald-700">₦0.00</span>
                          </div>
                        </div>

                        <div className="flex items-end justify-between pt-3 border-t border-[#EDE6D8]">
                          <div className="text-[10px] text-charcoal-600 font-mono">
                            <p>REF: #OAK-GTB-4092</p>
                            <p className="text-emerald-700 font-bold">ZERO TELLER DISPUTES</p>
                          </div>

                          <div className="border-2 border-tangerine-500 rounded px-2.5 py-0.5 bg-tangerine-500/10 -rotate-3">
                            <span className="font-display font-black text-tangerine-600 text-xs tracking-wider uppercase">
                              PAID
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* =========================================================
                        SLIDE 4: PRINCIPAL ON THE GO
                        - Executive overview & terminal broadsheet approvals
                        - 1-click terminal sign-off from phone or tablet
                       ========================================================= */}
                    {activeDesk.id === "principal" && (
                      <div className="w-full max-w-[440px] bg-ink-900 text-white rounded-2xl border border-emerald-500/30 shadow-2xl p-5 sm:p-6 font-sans text-xs">
                        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
                          <div>
                            <p className="font-display font-bold text-sm text-white">
                              EXECUTIVE LEADERSHIP CONSOLE
                            </p>
                            <p className="text-[10px] text-emerald-300/80">Oakland Comprehensive High</p>
                          </div>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-400/30">
                            Term 2 Live
                          </span>
                        </div>

                        {/* Top Numbers Grid */}
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4">
                          <div className="bg-ink-800/80 p-2.5 sm:p-3 rounded-xl border border-emerald-500/20 overflow-hidden">
                            <span className="text-[10px] text-surface/70 block uppercase truncate">
                              Fee Collections
                            </span>
                            <span className="font-display font-bold text-base sm:text-lg text-white mt-0.5 block whitespace-nowrap">
                              ₦42.85M
                            </span>
                            <span className="text-[10px] text-emerald-300 font-medium block truncate">92% of target</span>
                          </div>

                          <div className="bg-ink-800/80 p-2.5 sm:p-3 rounded-xl border border-emerald-500/20 overflow-hidden">
                            <span className="text-[10px] text-surface/70 block uppercase truncate">
                              Daily Attendance
                            </span>
                            <span className="font-display font-bold text-base sm:text-lg text-white mt-0.5 block whitespace-nowrap">
                              98.4%
                            </span>
                            <span className="text-[10px] text-emerald-300 font-medium block truncate">All 18 arms reported</span>
                          </div>
                        </div>

                        {/* Broadsheet Sign-off Action */}
                        <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/25 flex items-center justify-between">
                          <div>
                            <span className="text-white font-bold block text-xs">
                              JSS 2 Gold Mathematics Broadsheet
                            </span>
                            <span className="text-[10px] text-surface/70">42 students · Terminal rank ready</span>
                          </div>
                          <span className="px-3 py-1 bg-tangerine-500 text-ink-900 rounded-full font-bold text-xs shadow-md">
                            Approved
                          </span>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===================================================================
              CAROUSEL NAVIGATION CONTROLS & PAGINATION
             =================================================================== */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Step Counter */}
            <div className="flex items-center gap-2 text-xs font-mono text-surface/70">
              <span className="font-bold text-emerald-300">0{currentIndex + 1}</span>
              <span>/</span>
              <span>0{DESKS.length}</span>
              <span className="hidden sm:inline-block text-surface/50 ml-2">
                · {activeDesk.role}
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous desk"
                className="w-10 h-10 rounded-full bg-ink-900/80 border border-emerald-500/20 hover:border-emerald-400 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next desk"
                className="w-10 h-10 rounded-full bg-ink-900/80 border border-emerald-500/20 hover:border-emerald-400 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
