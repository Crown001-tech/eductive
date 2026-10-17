"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  CreditCard,
  Users,
  GraduationCap,
  Check,
  Send,
  MessageSquare,
  Building2,
} from "lucide-react";

interface Station {
  id: string;
  number: string;
  title: string;
  time: string;
  role: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const STATIONS: Station[] = [
  {
    id: "bursary",
    number: "01",
    title: "Fee Settlement",
    time: "8:01 AM",
    role: "Bursar's Ledger",
    headline: "One Fee Payment. Updated Across the Entire School in Seconds.",
    description:
      "A parent transfers tuition via direct bank transfer. Within milliseconds, EDUCTIVE captures the bank settlement webhook, clears the student's balance to ₦0.00, and automatically delivers a cryptographically stamped e-receipt to the parent's phone.",
    metric: "0.0s",
    metricLabel: "Reconciliation Latency",
  },
  {
    id: "attendance",
    number: "02",
    title: "Gate & Homeroom Roll-Call",
    time: "8:02 AM",
    role: "Gate & Homeroom",
    headline: "Morning Attendance in 30 Seconds. Parents Notified Instantly.",
    description:
      "Teachers mark homeroom roll-call on mobile or tablet in under 30 seconds—even during network or NEPA power cuts. Once synchronized, automated WhatsApp/SMS alerts give parents complete assurance that their child is safely in class.",
    metric: "96.4%",
    metricLabel: "Daily Verified Attendance",
  },
  {
    id: "assessment",
    number: "03",
    title: "Continuous Assessment Engine",
    time: "11:30 AM",
    role: "Staff Room & Exam Office",
    headline: "Continuous Assessment Entered Once. Report Sheets Ready Same-Day.",
    description:
      "Teachers enter test and exam scores directly in class. Standardized WAEC and NECO grade distributions, subject averages, and term class positions calculate automatically—eliminating 3 weeks of manual calculator broadsheet math.",
    metric: "3rd / 42",
    metricLabel: "Real-time Class Rank",
  },
  {
    id: "cockpit",
    number: "04",
    title: "Proprietor Overview",
    time: "Real-time 24/7",
    role: "Proprietor & Principal",
    headline: "Proprietor Overview: Every Kobo and Classroom on One Screen.",
    description:
      "School owners and principals don't wait for end-of-month manual reports. Live fee collection totals, outstanding defaulter balances, and staff attendance are visible 24/7 on any smartphone or computer.",
    metric: "₦48.25M",
    metricLabel: "Term Inflow Collected (92.8%)",
  },
];

export function SynchronizedFlowSection() {
  const [activeStation, setActiveStation] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  // Auto cycle through stations every 6 seconds unless user manually interacts
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStation((prev) => (prev + 1) % STATIONS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleSelectStation = (index: number) => {
    setActiveStation(index);
    setAutoPlay(false);
  };

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#FCFBF8] text-charcoal-900 py-24 xl:py-36 overflow-hidden border-t border-line/60 select-none"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURAL GRID & LUXURY AMBIENCE
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="archGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#07332A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
        </svg>
      </div>

      {/* Ambient Atmospheric Emerald & Tangerine Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-tangerine-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
          1440PX MASTER CONTAINER
         ========================================================================= */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            SECTION HEADER & THE NON-LINEAR INCOMING ORIGIN
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 xl:mb-28">
          
          {/* Visible Incoming Line Entry Beacon - directly receives baton from Hero! */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-[2px] h-14 bg-gradient-to-b from-emerald-500 via-tangerine-500 to-emerald-600 rounded-full animate-pulse shadow-[0_0_12px_#12A26B]" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-[11px] font-mono font-bold tracking-wider uppercase mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#12A26B] animate-ping" />
              <span>SYNCHRONIZED OPERATIONS PIPELINE</span>
            </div>
          </div>

          <h2 className="font-display font-bold text-ink-900 text-[36px] sm:text-[46px] xl:text-[54px] leading-[1.08] tracking-[-1px] mb-6 text-balance">
            One pulse in the bursary. <br />
            <span className="text-emerald-700">Every desk updated</span> before assembly.
          </h2>

          <p className="text-[17px] xl:text-[19px] text-charcoal-600 font-sans leading-relaxed max-w-2xl text-balance">
            When Mrs. Adeyemi pays fees at 8:01 AM, four different departments stop
            relying on paper slips, phone calls, and manual registers. Follow the
            living thread across the school day.
          </p>

          {/* Interactive Station Scrubber / Timeline Bar */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-10 p-1.5 bg-white/80 backdrop-blur-md rounded-full border border-line shadow-sm">
            {STATIONS.map((st, i) => {
              const isCurrent = activeStation === i;
              return (
                <button
                  key={st.id}
                  onClick={() => handleSelectStation(i)}
                  className={`px-3.5 sm:px-5 py-2 rounded-full text-[12.5px] font-sans font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isCurrent
                      ? "bg-ink-900 text-white shadow-md scale-[1.03]"
                      : "text-charcoal-600 hover:text-ink-900 hover:bg-surface/80"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      isCurrent
                        ? "bg-emerald-400 shadow-[0_0_8px_#3DDC97]"
                        : "bg-line"
                    }`}
                  />
                  <span>
                    <span className="font-mono text-[11px] opacity-70 mr-1">
                      {st.number}.
                    </span>
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            THE LIVING NON-LINEAR SVG SYNC THREAD (DESKTOP >= 1200px)
            Visibly weaves across the canvas connecting Station 1 -> 2 -> 3 -> 4!
           ======================================================================= */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none z-0">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1440 1800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="flowRibbonGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#12A26B" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#FF6A1A" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#12A26B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#07332A" stopOpacity="1" />
              </linearGradient>

              <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Structural Guide Track */}
            <path
              d="M 720,200 
                 C 720,320 380,360 380,500 
                 C 380,660 1060,700 1060,860 
                 C 1060,1020 380,1060 380,1220 
                 C 380,1380 720,1420 720,1540"
              stroke="#D9E0DD"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              opacity="0.6"
            />

            {/* The Active Living Glowing Flow Ribbon */}
            <motion.path
              d="M 720,200 
                 C 720,320 380,360 380,500 
                 C 380,660 1060,700 1060,860 
                 C 1060,1020 380,1060 380,1220 
                 C 380,1380 720,1420 720,1540"
              stroke="url(#flowRibbonGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#flowGlow)"
              initial={{ pathLength: 0.2 }}
              animate={{
                pathLength: (activeStation + 1) / STATIONS.length,
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Station Connection Portals / Nodes */}
            {[
              { cx: 380, cy: 500, label: "01" },
              { cx: 1060, cy: 860, label: "02" },
              { cx: 380, cy: 1220, label: "03" },
              { cx: 720, cy: 1540, label: "04" },
            ].map((node, i) => {
              const isPassed = activeStation >= i;
              return (
                <g key={i} className="transition-all duration-500">
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={isPassed ? 16 : 12}
                    fill={isPassed ? "#07332A" : "#FFFFFF"}
                    stroke={isPassed ? "#3DDC97" : "#D9E0DD"}
                    strokeWidth="3"
                    filter={isPassed ? "url(#flowGlow)" : undefined}
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="5"
                    fill={isPassed ? "#FF6A1A" : "#12A26B"}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* =======================================================================
            THE 4 BESPOKE EDITORIAL STATIONS (Asymmetrical, Non-Generic Layout)
           ======================================================================= */}
        <div className="relative space-y-28 xl:space-y-36 z-10">
          
          {/* -------------------------------------------------------------------
              STATION 01: BURSARY SETTLEMENT (The Financial Trigger)
              Left-slanted asymmetrical layout: Narrative on left, live terminal right
             ------------------------------------------------------------------- */}
          <div
            id="station-bursary"
            onClick={() => handleSelectStation(0)}
            className={`transition-all duration-500 cursor-pointer ${
              activeStation === 0 ? "opacity-100 scale-[1.01]" : "opacity-75 hover:opacity-95"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
              {/* Text Narrative (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-tangerine-500/10 border border-tangerine-500/30 text-tangerine-600 text-xs font-mono font-bold uppercase mb-4">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>STATION 01 · 8:01 AM · BURSAR&apos;S TERMINAL</span>
                </div>

                <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-3xl xl:text-[34px] leading-tight mb-4">
                  One Fee Payment. Updated Across the Entire School in Seconds.
                </h3>

                <p className="text-charcoal-600 font-sans text-base leading-relaxed mb-6">
                  A parent transfers tuition via direct bank transfer. Within milliseconds, EDUCTIVE
                  intercepts the bank settlement webhook, matches the student record, decrements their
                  outstanding balance to ₦0.00, and releases an official stamped e-receipt to the parent.
                </p>

                <div className="flex items-center gap-6 pt-2 border-t border-line/60 w-full">
                  <div>
                    <span className="block font-mono font-bold text-2xl text-ink-900">
                      0.0s
                    </span>
                    <span className="text-xs text-charcoal-600 font-medium">
                      Reconciliation Latency
                    </span>
                  </div>
                  <div className="h-8 w-[1px] bg-line/60" />
                  <div>
                    <span className="block font-mono font-bold text-2xl text-emerald-700">
                      100%
                    </span>
                    <span className="text-xs text-charcoal-600 font-medium">
                      Ledger Accuracy
                    </span>
                  </div>
                </div>
              </div>

              {/* Bespoke Nigerian Financial Artifact Frame (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-[#FFFDF8] rounded-[16px] border border-[#D8CEBA] shadow-[0_20px_45px_rgba(7,51,42,0.12)] p-6 sm:p-8 font-mono relative overflow-hidden">
                  {/* Perforated edge detail */}
                  <div className="absolute top-0 left-0 right-0 h-1 flex justify-between px-3">
                    {Array.from({ length: 32 }).map((_, idx) => (
                      <span key={idx} className="w-1.5 h-1.5 rounded-full bg-[#FAF8F5] -mt-1 border border-[#D8CEBA]" />
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-dashed border-[#D2C7B2]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-500/15 text-emerald-800 flex items-center justify-center font-bold text-sm">
                        ₦
                      </div>
                      <div>
                        <p className="font-display font-bold text-ink-900 text-sm tracking-wide">
                          DIRECT BANK TRANSFER · INSTANT SETTLEMENT
                        </p>
                        <p className="text-[11px] text-charcoal-600 font-sans">
                          Ref: TXN-20241012-OAK-0417 · Bank: GTBank
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-800 text-[11px] font-bold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" /> SETTLED
                    </span>
                  </div>

                  {/* Transaction Anatomy Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#EDE6D8]">
                      <span className="text-[10px] text-charcoal-600 block uppercase font-sans">
                        Payer / Parent
                      </span>
                      <p className="font-bold text-ink-900 text-xs mt-0.5 font-sans">
                        Mrs. Funke Adeyemi
                      </p>
                      <span className="text-[10px] text-charcoal-600 font-mono">
                        ***4092
                      </span>
                    </div>

                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#EDE6D8]">
                      <span className="text-[10px] text-charcoal-600 block uppercase font-sans">
                        Student Account
                      </span>
                      <p className="font-bold text-ink-900 text-xs mt-0.5 font-sans">
                        Adeyemi Femi
                      </p>
                      <span className="text-[10px] text-emerald-700 font-mono font-bold">
                        JSS 2 Gold
                      </span>
                    </div>

                    <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
                      <span className="text-[10px] text-emerald-800 block uppercase font-sans font-bold">
                        Tuition Cleared
                      </span>
                      <p className="font-bold text-emerald-800 text-sm mt-0.5 font-mono">
                        ₦185,000.00
                      </p>
                      <span className="text-[10px] text-emerald-700 font-sans">
                        Balance: ₦0.00
                      </span>
                    </div>
                  </div>

                  {/* Live Sync Pulse Broadcast Bar */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-ink-900 text-white text-xs font-sans">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-emerald-300 font-mono text-[11px]">
                        SYNCHRONIZING:
                      </span>
                      <span className="text-surface font-medium truncate">
                        Gate Register & Principal Cockpit notified
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold ml-2 whitespace-nowrap">
                      +0.12s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              STATION 02: GATE & HOMEROOM ROLL-CALL (The Physical Arrival)
              Right-slanted asymmetrical layout: Register on left, narrative on right
             ------------------------------------------------------------------- */}
          <div
            id="station-attendance"
            onClick={() => handleSelectStation(1)}
            className={`transition-all duration-500 cursor-pointer ${
              activeStation === 1 ? "opacity-100 scale-[1.01]" : "opacity-75 hover:opacity-95"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
              
              {/* Bespoke Attendance & Parent WhatsApp Artifact (7 cols) - Left on desktop */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="bg-white rounded-[16px] border border-line shadow-[0_20px_45px_rgba(7,51,42,0.12)] p-6 sm:p-8 relative overflow-hidden">
                  
                  {/* Top Bar: Gate Roll Call */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-line">
                    <div>
                      <p className="font-display font-bold text-ink-900 text-sm uppercase tracking-wide">
                        CLASS REGISTER · JSS 2 GOLD · MORNING ROLL CALL
                      </p>
                      <p className="text-xs text-charcoal-600 font-sans">
                        Monday, 8:02 AM · Homeroom Teacher: Mr. Olatunji
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-bold font-mono">
                      41 / 42 PRESENT
                    </span>
                  </div>

                  {/* Student Roll Call Rows */}
                  <div className="space-y-2 mb-6 font-sans text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded bg-surface/70 border border-line/40">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 font-mono text-charcoal-600">01.</span>
                        <span className="font-semibold text-charcoal-900">Abubakar Ibrahim</span>
                        <span className="text-[10px] text-charcoal-600 font-mono">· JSS2G-014</span>
                      </div>
                      <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono text-[11px]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> 8:00 AM
                      </span>
                    </div>

                    {/* The Synced Boy: Adeyemi Femi */}
                    <div className="flex items-center justify-between p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 font-mono text-emerald-800 font-bold">02.</span>
                        <span className="font-bold text-ink-900">Adeyemi Femi</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-800 font-mono font-bold">
                          FEES CLEARED
                        </span>
                      </div>
                      <span className="text-emerald-800 font-bold flex items-center gap-1 font-mono text-[11px]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> 8:02 AM
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-tangerine-500/5 border border-tangerine-500/20">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 font-mono text-tangerine-600">03.</span>
                        <span className="font-medium text-charcoal-800">Chukwuma David</span>
                        <span className="text-[10px] text-tangerine-600 font-bold font-mono">
                          ABSENT
                        </span>
                      </div>
                      <span className="text-tangerine-600 font-sans text-[11px] font-medium flex items-center gap-1">
                        <Send className="w-3 h-3" /> SMS Dispatched
                      </span>
                    </div>
                  </div>

                  {/* Automated Parent WhatsApp Broadcast Mockup */}
                  <div className="p-3.5 rounded-xl bg-[#0B4034] text-white flex items-start gap-3 shadow-md">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-300">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-bold text-emerald-300 font-mono uppercase">
                          Parent Notification · WhatsApp Gateway
                        </p>
                        <span className="text-[10px] text-emerald-400 font-mono">8:02 AM</span>
                      </div>
                      <p className="text-xs text-white/90 leading-snug font-sans">
                        &ldquo;Good morning Mrs. Adeyemi. Femi has arrived at Oakland High at 8:02 AM.
                        Term 2 Bursary is fully settled. Have a wonderful day!&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Narrative (5 cols) - Right on desktop */}
              <div className="lg:col-span-5 flex flex-col items-start text-left order-1 lg:order-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
                  <Users className="w-3.5 h-3.5" />
                  <span>STATION 02 · 8:02 AM · GATE & HOMEROOM</span>
                </div>

                <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-3xl xl:text-[34px] leading-tight mb-4">
                  Morning Attendance in 30 Seconds. Parents Notified Instantly.
                </h3>

                <p className="text-charcoal-600 font-sans text-base leading-relaxed mb-6">
                  No paper register tucked away in a staff desk drawer. The second Femi&apos;s
                  name is marked present at 8:02 AM, the campus headcount updates, the
                  bursary clearance badge appears beside his name, and his mother receives
                  an instant WhatsApp notification confirming he is safely in class.
                </p>

                <div className="flex items-center gap-6 pt-2 border-t border-line/60 w-full">
                  <div>
                    <span className="block font-mono font-bold text-2xl text-ink-900">
                      8:02 AM
                    </span>
                    <span className="text-xs text-charcoal-600 font-medium">
                      Parent Timestamp
                    </span>
                  </div>
                  <div className="h-8 w-[1px] bg-line/60" />
                  <div>
                    <span className="block font-mono font-bold text-2xl text-emerald-700">
                      Zero
                    </span>
                    <span className="text-xs text-charcoal-600 font-medium">
                      Missing Day Logs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              STATION 03: CONTINUOUS ASSESSMENT & EXAM ENGINE (The Academic Engine)
              Left-slanted asymmetrical layout: Narrative on left, grade matrix on right
             ------------------------------------------------------------------- */}
          <div
            id="station-assessment"
            onClick={() => handleSelectStation(2)}
            className={`transition-all duration-500 cursor-pointer ${
              activeStation === 2 ? "opacity-100 scale-[1.01]" : "opacity-75 hover:opacity-95"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
              {/* Text Narrative (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>STATION 03 · 11:30 AM · STAFF ROOM</span>
                </div>

                <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-3xl xl:text-[34px] leading-tight mb-4">
                  Continuous Assessment Entered Once. Report Sheets Ready Same-Day.
                </h3>

                <p className="text-charcoal-600 font-sans text-base leading-relaxed mb-6">
                  Teachers enter marks once from class tablets or computers. Test 1, Test 2,
                  and Examination scores calculate automatically against WAEC / NECO grading
                  scales. Term positions, subject averages, and printable report sheets are ready
                  the same afternoon exams finish.
                </p>

                <div className="flex items-center gap-6 pt-2 border-t border-line/60 w-full">
                  <div>
                    <span className="block font-mono font-bold text-2xl text-ink-900">
                      3rd / 42
                    </span>
                    <span className="text-xs text-charcoal-600 font-medium">
                      Class Position
                    </span>
                  </div>
                  <div className="h-8 w-[1px] bg-line/60" />
                  <div>
                    <span className="block font-mono font-bold text-2xl text-emerald-700">
                      A1
                    </span>
                    <span className="text-xs text-charcoal-600 font-medium">
                      WAEC Standard Score (80%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Bespoke CA Result Slip / Matrix Frame (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[16px] border border-line shadow-[0_20px_45px_rgba(7,51,42,0.12)] p-6 sm:p-8 relative overflow-hidden font-sans">
                  
                  {/* Header info */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-line">
                    <div>
                      <p className="font-display font-bold text-ink-900 text-sm uppercase tracking-wide">
                        CONTINUOUS ASSESSMENT MATRIX · TERM 2 2024/2025
                      </p>
                      <p className="text-xs text-charcoal-600">
                        Subject: Mathematics (SS 2 Science) · Teacher: Mrs. Balogun
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-800 text-xs font-mono font-bold">
                      CLASS AVG: 68.4%
                    </span>
                  </div>

                  {/* Student Grade Spotlight Card */}
                  <div className="bg-surface/80 rounded-xl p-4 border border-line/70 mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-ink-900 font-sans">
                          Adeyemi Femi (JSS 2 Gold)
                        </span>
                        <span className="text-[11px] text-charcoal-600 block">
                          Term Position: 3rd of 42 · Grade: Distinction (A1)
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-emerald-700 text-white rounded font-display font-bold text-sm">
                        80% · A1
                      </div>
                    </div>

                    {/* Breakdown 4 columns */}
                    <div className="grid grid-cols-4 gap-2 text-center font-mono text-xs">
                      <div className="bg-white p-2 rounded border border-line/60">
                        <span className="text-[10px] text-charcoal-600 block font-sans">
                          1ST CA (20)
                        </span>
                        <span className="font-bold text-ink-900 text-sm">18</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-line/60">
                        <span className="text-[10px] text-charcoal-600 block font-sans">
                          2ND CA (20)
                        </span>
                        <span className="font-bold text-ink-900 text-sm">10</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-line/60">
                        <span className="text-[10px] text-charcoal-600 block font-sans">
                          EXAM (60)
                        </span>
                        <span className="font-bold text-ink-900 text-sm">52</span>
                      </div>
                      <div className="bg-emerald-500/10 p-2 rounded border border-emerald-500/30">
                        <span className="text-[10px] text-emerald-800 font-sans font-bold block">
                          TOTAL (100)
                        </span>
                        <span className="font-bold text-emerald-800 text-sm">80</span>
                      </div>
                    </div>
                  </div>

                  {/* Class Bell Curve Distribution Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-charcoal-600 mb-1.5 font-sans">
                      <span>Score Distribution Across JSS 2 (42 Students)</span>
                      <span className="font-mono font-bold text-emerald-700">Top 7%</span>
                    </div>
                    <div className="h-3 w-full bg-surface rounded-full overflow-hidden flex">
                      <div className="h-full bg-emerald-700" style={{ width: "12%" }} title="A1 (80-100)" />
                      <div className="h-full bg-emerald-500" style={{ width: "26%" }} title="B2-B3 (70-79)" />
                      <div className="h-full bg-emerald-400" style={{ width: "40%" }} title="C4-C6 (50-69)" />
                      <div className="h-full bg-tangerine-400" style={{ width: "16%" }} title="D7-E8 (40-49)" />
                      <div className="h-full bg-red-400" style={{ width: "6%" }} title="F9 (0-39)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              STATION 04: PROPRIETOR & PRINCIPAL EXECUTIVE COCKPIT (The Apex)
              Full-width elevated luxury command center
             ------------------------------------------------------------------- */}
          <div
            id="station-cockpit"
            onClick={() => handleSelectStation(3)}
            className={`transition-all duration-500 cursor-pointer ${
              activeStation === 3 ? "opacity-100 scale-[1.01]" : "opacity-75 hover:opacity-95"
            }`}
          >
            <div className="bg-ink-900 text-white rounded-[24px] border border-emerald-500/30 shadow-[0_30px_70px_rgba(7,51,42,0.35)] p-8 xl:p-12 relative overflow-hidden">
              
              {/* Cockpit Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#3DDC97] animate-pulse" />
                      <h4 className="font-display font-bold text-white text-lg tracking-wide">
                        PROPRIETOR OVERVIEW: EVERY KOBO & CLASSROOM ON ONE SCREEN
                      </h4>
                    </div>
                    <p className="text-xs text-emerald-300/80 font-sans mt-0.5">
                      Oakland Comprehensive High School · Real-time Operational Stream
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold">
                    ALL 4 HUBS SYNCHRONIZED
                  </span>
                </div>
              </div>

              {/* 3 Executive High-Contrast Telemetry Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                
                {/* Tile 1: Fee Collection Rate */}
                <div className="bg-ink-800/80 rounded-2xl p-6 border border-emerald-500/20">
                  <div className="flex items-center justify-between text-xs text-emerald-300 mb-2 font-mono">
                    <span>TERM 2 FEE INFLOW</span>
                    <span className="font-bold text-white">92.8%</span>
                  </div>
                  <p className="font-mono font-extrabold text-3xl xl:text-4xl text-white mb-2">
                    ₦48,250,000
                  </p>
                  <p className="text-xs text-surface/70 font-sans mb-3">
                    Target: ₦52.0M · ₦3,750,000 outstanding across 840 students
                  </p>
                  <div className="h-2 w-full bg-ink-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-tangerine-500 rounded-full" style={{ width: "92.8%" }} />
                  </div>
                </div>

                {/* Tile 2: Gate Headcount & Attendance */}
                <div className="bg-ink-800/80 rounded-2xl p-6 border border-emerald-500/20">
                  <div className="flex items-center justify-between text-xs text-emerald-300 mb-2 font-mono">
                    <span>CAMPUS HEADCOUNT</span>
                    <span className="font-bold text-white">96.4%</span>
                  </div>
                  <p className="font-mono font-extrabold text-3xl xl:text-4xl text-white mb-2">
                    810 <span className="text-xl text-emerald-400 font-sans font-normal">/ 840</span>
                  </p>
                  <p className="text-xs text-surface/70 font-sans mb-3">
                    JSS: 412/420 (98%) · SSS: 398/420 (95%) · 30 SMS Alerts Sent
                  </p>
                  <div className="h-2 w-full bg-ink-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: "96.4%" }} />
                  </div>
                </div>

                {/* Tile 3: School Academic Index */}
                <div className="bg-ink-800/80 rounded-2xl p-6 border border-emerald-500/20">
                  <div className="flex items-center justify-between text-xs text-emerald-300 mb-2 font-mono">
                    <span>ACADEMIC PERFORMANCE</span>
                    <span className="font-bold text-white">B2 AVG</span>
                  </div>
                  <p className="font-mono font-extrabold text-3xl xl:text-4xl text-white mb-2">
                    78.2%
                  </p>
                  <p className="text-xs text-surface/70 font-sans mb-3">
                    14 WAEC subjects evaluated · 94% CA entries submitted on time
                  </p>
                  <div className="h-2 w-full bg-ink-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-300 rounded-full" style={{ width: "78.2%" }} />
                  </div>
                </div>
              </div>

              {/* Live Synchronized Audit Stream */}
              <div className="bg-ink-900/90 rounded-xl p-4 border border-emerald-500/20 font-mono text-xs text-surface/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-300 font-bold">AUDIT TRAIL:</span>
                  <span className="text-surface font-sans">
                    ₦185,000 paid for Adeyemi Femi (JSS 2 Gold) → Roll-call synced → WhatsApp sent → Zero discrepancy.
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 whitespace-nowrap">
                  VERIFIED AUDIT LOG · 8:02 AM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
