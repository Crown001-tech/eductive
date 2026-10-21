"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
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
    subtitle: "Homeroom",
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
  const activeStep = STEPS[activeStepIndex];

  // Scroll progression for edge educational elements expanding/contracting
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Dynamic transforms for educational motifs around edges
  const compassScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.8, 1.22, 0.85]);
  const compassRotate = useTransform(scrollYProgress, [0, 1], [-16, 26]);
  const rulerHeight = useTransform(scrollYProgress, [0, 0.5, 1], [150, 270, 160]);
  const abacusBead1 = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const abacusBead2 = useTransform(scrollYProgress, [0, 1], [18, -4]);
  const abacusBead3 = useTransform(scrollYProgress, [0, 1], [-6, 16]);
  const sealScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.2, 0.9]);
  const triangleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1.15, 0.88]);
  const triangleRotate = useTransform(scrollYProgress, [0, 1], [8, -18]);

  // Auto-advance loop every 7.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % STEPS.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full bg-[#FCFBF8] text-charcoal-900 py-24 xl:py-36 overflow-hidden rounded-t-[36px] sm:rounded-t-[56px] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(7,51,42,0.10)] select-none border-t border-line/60"
    >
      {/* =======================================================================
          MINI 3D & DRAFTING EDUCATIONAL ELEMENTS AROUND EDGES (Expand/Contract on Scroll)
          - Positioned strictly along peripheral gutters
          - Clear of all headlines, copy, and central interactive cards
         ======================================================================= */}
      {/* 1. Top-Right: Geometric Drafting Compass & Degree Arc */}
      <motion.div
        style={{ scale: compassScale, rotate: compassRotate }}
        className="pointer-events-none absolute top-12 right-6 lg:right-16 z-0 opacity-45 hidden md:block"
      >
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          {/* Protractor Arc */}
          <circle cx="75" cy="75" r="58" stroke="#12A26B" strokeWidth="1" strokeDasharray="3 3" opacity="0.65" />
          <circle cx="75" cy="75" r="48" stroke="#D9E0DD" strokeWidth="1.2" opacity="0.8" />
          {/* Angle degree marks */}
          {[0, 30, 45, 60, 90, 120, 135, 150, 180].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 75 + 44 * Math.cos(rad);
            const y1 = 75 - 44 * Math.sin(rad);
            const x2 = 75 + 48 * Math.cos(rad);
            const y2 = 75 - 48 * Math.sin(rad);
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#12A26B" strokeWidth="1" opacity="0.7" />;
          })}
          {/* Compass Needle */}
          <line x1="75" y1="18" x2="75" y2="132" stroke="#07332A" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="18" y1="75" x2="132" y2="75" stroke="#07332A" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="75" cy="75" r="4.5" fill="#3DDC97" stroke="#07332A" strokeWidth="1.5" />
          <text x="80" y="32" fill="#12A26B" fontSize="9" fontFamily="monospace" fontWeight="bold">90°</text>
          <text x="122" y="71" fill="#12A26B" fontSize="9" fontFamily="monospace">0°</text>
        </svg>
      </motion.div>

      {/* 2. Left Edge: Ruled Measurement Gauge & Sliding Abacus Counting Frame */}
      <motion.div
        className="pointer-events-none absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 z-0 opacity-40 hidden sm:block"
      >
        <div className="flex items-center gap-3">
          {/* Red Ledger Margin Line */}
          <div className="w-[1.5px] h-56 bg-red-400/60" />
          {/* Dynamic Expanding Ruler Lines */}
          <motion.div style={{ height: rulerHeight }} className="flex flex-col justify-between py-1">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className={`h-[1px] bg-charcoal-600 ${i % 2 === 0 ? "w-4" : "w-2.5"}`} />
                {i % 5 === 0 && (
                  <span className="text-[8px] font-mono text-charcoal-600 font-bold">
                    {i * 5}mm
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Mini Abacus Frame with sliding tactile beads */}
          <div className="w-8 h-40 border border-charcoal-400/40 rounded bg-white/40 p-1 flex flex-col justify-around shadow-sm">
            {/* Wire 1 */}
            <div className="relative w-full h-[1px] bg-charcoal-400/60 flex items-center">
              <motion.div
                style={{ x: abacusBead1 }}
                className="w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-sm border border-emerald-400"
              />
            </div>
            {/* Wire 2 */}
            <div className="relative w-full h-[1px] bg-charcoal-400/60 flex items-center">
              <motion.div
                style={{ x: abacusBead2 }}
                className="w-2.5 h-2.5 rounded-full bg-sun-400 shadow-sm border border-amber-300"
              />
            </div>
            {/* Wire 3 */}
            <div className="relative w-full h-[1px] bg-charcoal-400/60 flex items-center">
              <motion.div
                style={{ x: abacusBead3 }}
                className="w-2.5 h-2.5 rounded-full bg-tangerine-500 shadow-sm border border-orange-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Bottom-Right: 3D Official Academic Wax Crest Seal Motif */}
      <motion.div
        style={{ scale: sealScale }}
        className="pointer-events-none absolute bottom-8 right-6 lg:right-16 z-0 opacity-50 hidden lg:block"
      >
        <div className="w-28 h-28 rounded-full border-2 border-dashed border-emerald-600/40 p-2 flex items-center justify-center bg-white/70 shadow-[0_16px_32px_rgba(7,51,42,0.12)] [perspective:700px] [transform:rotateX(14deg)_rotateY(-12deg)]">
          <div className="w-full h-full rounded-full border border-emerald-600/30 flex flex-col items-center justify-center text-center p-1 bg-emerald-500/5">
            <span className="text-[8px] font-display font-bold text-ink-900 tracking-wider uppercase leading-none">
              OAKLAND
            </span>
            <span className="text-[6.5px] font-sans text-emerald-800 font-semibold tracking-tight mt-0.5">
              EST. NIGERIA
            </span>
            <div className="w-8 h-[1px] bg-emerald-500/50 my-1" />
            <span className="text-[6px] font-mono text-charcoal-600 tracking-wider">OFFICIAL SEAL</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom-Left: 3D Mathematical Set-Square / Drafting Triangle */}
      <motion.div
        style={{ scale: triangleScale, rotate: triangleRotate }}
        className="pointer-events-none absolute bottom-12 left-8 lg:left-20 z-0 opacity-35 hidden xl:block"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {/* Transparent Acrylic Triangle */}
          <polygon
            points="10,90 90,90 10,10"
            fill="rgba(18, 162, 107, 0.06)"
            stroke="#12A26B"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Inner Cutout */}
          <polygon
            points="24,78 72,78 24,30"
            fill="#FCFBF8"
            stroke="#D9E0DD"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Millimeter Ticks along base */}
          {[16, 26, 36, 46, 56, 66, 76, 84].map((x) => (
            <line key={x} x1={x} y1="88" x2={x} y2="92" stroke="#07332A" strokeWidth="1" />
          ))}
        </svg>
      </motion.div>

      {/* =======================================================================
          NON-LINEAR CONNECTING THREAD & CONTACT SYSTEM (Desktop lg:block only)
          - Enters at top center (720, 0) directly from Hero handoff
          - Continuous non-linear path with feeder branches to each card
          - Feature: ALWAYS-MOVING GLOWING BALL via native SVG animateMotion
          - Feature: Point showing contact at every card junction
         ======================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden lg:block"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3DDC97" />
            <stop offset="50%" stopColor="#12A26B" />
            <stop offset="100%" stopColor="#FF6A1A" />
          </linearGradient>
          <filter id="flowGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Master Non-Linear S-Thread Pathway */}
        <path
          d="M 720,0 C 720,80 540,140 420,200 C 260,280 210,420 320,540 C 440,670 760,600 920,680 C 1080,760 980,920 720,1000"
          stroke="url(#flowGrad)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeOpacity="0.45"
          filter="url(#flowGlow)"
        />

        {/* FEEDER BRANCH LINES CONNECTING MASTER THREAD TO CARDS */}
        {/* Branch 1 to Card 1 (Bursar) */}
        <path
          d="M 420,200 C 340,240 260,320 220,360"
          stroke="url(#flowGrad)"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          strokeOpacity={activeStepIndex === 0 ? "0.9" : "0.3"}
        />
        {/* Branch 2 to Card 2 (Attendance) */}
        <path
          d="M 260,380 C 220,420 200,450 220,480"
          stroke="url(#flowGrad)"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          strokeOpacity={activeStepIndex === 1 ? "0.9" : "0.3"}
        />
        {/* Branch 3 to Card 3 (Assessment) */}
        <path
          d="M 320,540 C 260,560 210,580 220,610"
          stroke="url(#flowGrad)"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          strokeOpacity={activeStepIndex === 2 ? "0.9" : "0.3"}
        />
        {/* Branch 4 to Card 4 (Leadership) */}
        <path
          d="M 440,670 C 340,680 260,700 220,730"
          stroke="url(#flowGrad)"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          strokeOpacity={activeStepIndex === 3 ? "0.9" : "0.3"}
        />
        {/* Branch across to 3D Stage on the right */}
        <path
          d="M 760,600 C 820,610 880,590 940,560"
          stroke="url(#flowGrad)"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          strokeOpacity="0.6"
        />

        {/* ALWAYS-MOVING GLOWING BALL: Continuously glides along the main thread without pause */}
        <g>
          {/* Main glowing pulse ball */}
          <circle r="5.5" fill="#3DDC97" filter="url(#flowGlow)">
            <animateMotion
              dur="8.2s"
              repeatCount="indefinite"
              path="M 720,0 C 720,80 540,140 420,200 C 260,280 210,420 320,540 C 440,670 760,600 920,680 C 1080,760 980,920 720,1000"
            />
          </circle>
          {/* Traveling aura beam */}
          <circle r="14" fill="#3DDC97" opacity="0.3" filter="url(#flowGlow)">
            <animateMotion
              dur="8.2s"
              repeatCount="indefinite"
              path="M 720,0 C 720,80 540,140 420,200 C 260,280 210,420 320,540 C 440,670 760,600 920,680 C 1080,760 980,920 720,1000"
            />
          </circle>
        </g>

        {/* =====================================================================
            CONTACT POINTS (Showing tactile contact at each card junction & stage)
           ===================================================================== */}
        {[
          { x: 220, y: 360, step: 0, label: "Bursar Contact" },
          { x: 220, y: 480, step: 1, label: "Attendance Contact" },
          { x: 220, y: 610, step: 2, label: "Assessment Contact" },
          { x: 220, y: 730, step: 3, label: "Leadership Contact" },
          { x: 940, y: 560, step: activeStepIndex, label: "Stage Sync Contact" },
        ].map((pt, i) => {
          const isContact = activeStepIndex === pt.step;
          return (
            <g key={i} className="transition-all duration-300">
              {/* Concentric contact ring */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isContact ? 15 : 9}
                fill="none"
                stroke={isContact ? "#12A26B" : "#D9E0DD"}
                strokeWidth={isContact ? "2" : "1"}
                strokeDasharray={isContact ? "3 3" : "none"}
                opacity={isContact ? 0.95 : 0.45}
              />
              {/* Illuminated contact halo when active */}
              {isContact && (
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="20"
                  fill="#3DDC97"
                  opacity="0.35"
                  filter="url(#flowGlow)"
                />
              )}
              {/* Solid Contact Anchor Core */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isContact ? 6.5 : 4}
                fill={isContact ? "#12A26B" : "#71807A"}
                filter={isContact ? "url(#flowGlow)" : undefined}
              />
              <circle cx={pt.x} cy={pt.y} r="2.5" fill="#FFFFFF" />
            </g>
          );
        })}
      </svg>

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
            Fees, registers, results and oversight, already connected. And that's before the part most schools don't expect.
          </p>
        </div>

        {/* =====================================================================
            INTERACTIVE SYNCHRONIZATION STAGE (Spatial 3D & Stepper Layout)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* ===================================================================
              LEFT COLUMN: STEP NAVIGATION WITH CONTACT NODES (5 Cols)
             =================================================================== */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 relative pl-6 sm:pl-8 lg:pl-0">
            {/* Dedicated Mobile Connecting Line & Continuously Moving Ball (lg:hidden) */}
            <div className="lg:hidden absolute left-2 sm:left-3 top-6 bottom-12 w-[2px] pointer-events-none z-0">
              {/* Vertical Gradient Rail */}
              <div className="w-full h-full bg-gradient-to-b from-[#3DDC97] via-[#12A26B] to-[#FF6A1A] opacity-40 rounded-full" />

              {/* Mobile Continuously Moving Ball: Glides down smoothly and continuously without pause */}
              <motion.div
                animate={{
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#3DDC97] shadow-[0_0_12px_#3DDC97]" />
                <div className="absolute inset-[-4px] rounded-full bg-[#3DDC97]/30 blur-xs" />
              </motion.div>
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
                      {isActive && (
                        <span className="absolute w-5 h-5 rounded-full bg-emerald-400/40 animate-ping" />
                      )}
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
                      {isActive && (
                        <span className="absolute w-6 h-6 rounded-full bg-emerald-400/40 animate-ping" />
                      )}
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

                  {/* Summary & Highlights - only expanded for active item */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pt-2"
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
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Direct Link to Product Page */}
            <div className="pt-4 pl-2">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group cursor-pointer"
              >
                <span>See everything it does</span>
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
                          OAKLAND COMPREHENSIVE HIGH SCHOOL
                        </p>
                        <p className="text-[11px] text-charcoal-600 font-sans">
                          BURSARY E-RECEIPT · FIRST TERM 2024/2025
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
                        <span className="text-charcoal-600 text-xs">Amount Paid (Bank Transfer):</span>
                        <span className="font-bold font-mono text-sm text-emerald-700">₦185,000.00</span>
                      </div>
                      <div className="flex justify-between items-baseline border-t border-dashed border-[#E5DEC9] pt-2">
                        <span className="text-charcoal-600 text-xs">Outstanding Balance:</span>
                        <span className="font-extrabold font-mono text-base text-emerald-700">₦0.00</span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-3 border-t border-[#EDE6D8]">
                      <div className="text-[10px] text-charcoal-600 font-mono">
                        <p>SETTLEMENT: ZENITH DIRECT CLEARING</p>
                        <p className="text-emerald-800 font-bold">STATUS: RECONCILED</p>
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
                        <p className="text-xs text-charcoal-600">Mathematics · Second Term</p>
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
                        <p className="text-xs text-emerald-300/80">Oakland Comprehensive High School</p>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded border border-emerald-400/30">
                        Term 2 Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-ink-800/80 p-3 rounded-lg border border-emerald-500/20">
                        <span className="text-surface/70 block text-[11px] mb-1">Fee Collection</span>
                        <span className="font-display font-bold text-lg text-white">₦42.85M</span>
                        <span className="text-[10px] text-emerald-300 block mt-0.5">92.8% reconciled</span>
                      </div>
                      <div className="bg-ink-800/80 p-3 rounded-lg border border-emerald-500/20">
                        <span className="text-surface/70 block text-[11px] mb-1">Daily Attendance</span>
                        <span className="font-display font-bold text-lg text-white">98.4%</span>
                        <span className="text-[10px] text-emerald-300 block mt-0.5">All 18 arms reported</span>
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
