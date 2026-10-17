"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchoolPaperArtifacts, SyncState } from "./SchoolPaperArtifacts";

export function HeroSection() {
  // Unified 8.2s synchronized payment & operation workflow loop:
  const [sync, setSync] = useState<SyncState>({
    step: 0,
    paid: true,
    balance: 0,
  });

  // Interactive station feature state: clicked module highlights corresponding card
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let t4: NodeJS.Timeout;
    let t5: NodeJS.Timeout;

    const runLoop = () => {
      // Step 1 (0.8s): Bank Transfer confirmation alert slides in
      t1 = setTimeout(() => {
        setSync({ step: 1, paid: true, balance: 0 });
      }, 800);

      // Step 2 (2.2s): Telemetry thread pulses from receipt
      t2 = setTimeout(() => {
        setSync({ step: 2, paid: true, balance: 0 });
      }, 2200);

      // Step 3 (3.6s): Telemetry pulse reaches principal tablet screen
      t3 = setTimeout(() => {
        setSync({ step: 3, paid: true, balance: 0 });
      }, 3600);

      // Step 4 (4.8s): Telemetry hands off to continuous line into Section 2
      t4 = setTimeout(() => {
        setSync({ step: 4, paid: true, balance: 0 });
      }, 4800);

      // Step 5 (6.2s): Reset for next cycle
      t5 = setTimeout(() => {
        setSync({ step: 5, paid: true, balance: 0 });
      }, 6200);
    };

    runLoop();
    const interval = setInterval(runLoop, 8200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white select-none">
      {/* =========================================================================
          DESKTOP HERO COMPOSITION (Screen width >= 1200px / xl)
          - Deep rich pure Ink-900 canvas sculpted with organic S-curve SVG divider
          - Crisp White canvas on the right with AAA contrast nav
          - Optical-center placement of dynamic celebrating students in mid-air
          - Grounded Nigerian principal reacting warmly to students with live tablet
          - 3 authentic Nigerian school artifacts (Hero Receipt, Register, CA Slip)
          - Synchronized workflow loop: Receipt -> Shoulder -> Tablet -> Ring -> Pill
         ========================================================================= */}
      <div className="relative w-full min-h-[860px] xl:h-[920px] hidden xl:block bg-white overflow-hidden">
        
        {/* 
          1. THE ORGANIC SCULPTED S-CURVE DIVIDER:
          Bespoke fluid S-curve SVG spanning from top to bottom.
          Zero straight lines! Pure solid colors.
        */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 920"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The primary deep solid Ink-900 sculpted canvas */}
            <path
              d="M 0,0 
                 L 810,0 
                 C 720,220 635,410 720,620 
                 C 770,740 815,830 750,920 
                 L 0,920 Z"
              fill="#07332A"
            />
            {/* Subtle architectural contour tone */}
            <path
              d="M 0,0 
                 L 790,0 
                 C 705,220 620,410 705,620 
                 C 755,740 800,830 735,920 
                 L 0,920 Z"
              fill="#0B4034"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* 1440px Centered Layout Wrapper */}
        <div className="relative h-full mx-auto z-10 max-w-[1440px]">
          
          {/* ===================================================================
              THE GEOMETRIC RING ("The Line Thing" - z-15)
              Clean, subtle architectural halo framing the student composition
             =================================================================== */}
          <div
            className="pointer-events-none absolute z-15"
            style={{
              left: "calc(50% - 150px)",
              top: "135px",
              width: "680px",
              height: "680px",
            }}
          >
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 680 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Primary Hairline Halo */}
              <circle
                cx="340"
                cy="340"
                r="330"
                stroke="#12A26B"
                strokeWidth="1.2"
                className="opacity-20"
              />
            </svg>
          </div>

          {/* ===================================================================
              SYNCHRONIZED THREAD SYSTEM (z-16: BEHIND PEOPLE)
              - Thread sweeps from receipt around outer shoulder cleanly onto tablet screen
              - Zero broken stubs, zero lines cutting through or emerging from cards
             =================================================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-16 overflow-visible"
            viewBox="0 0 1440 920"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Thread Gradient: Tangerine to Emerald */}
              <linearGradient id="threadGrad" x1="1" y1="0" x2="0" y2="1">
                <stop stopColor="#FF6A1A" />
                <stop offset="0.4" stopColor="#12A26B" />
                <stop offset="1" stopColor="#3DDC97" />
              </linearGradient>

              <filter id="threadGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. THREAD PATH: Receipt stamp (1350, 305) -> sweeps around outer shoulder -> lands on tablet (1161, 727) */}
            <AnimatePresence>
              {sync.step >= 2 && (
                <motion.path
                  d="M 1350,305 C 1430,380 1435,540 1385,640 C 1345,710 1240,735 1161,727"
                  stroke="url(#threadGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                  filter="url(#threadGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </AnimatePresence>

            {/* Glowing head dot travelling with the thread to the tablet */}
            <AnimatePresence>
              {sync.step === 2 && (
                <motion.circle
                  r="4"
                  fill="#3DDC97"
                  filter="url(#threadGlow)"
                  initial={{ cx: 1350, cy: 305, opacity: 1 }}
                  animate={{ cx: 1161, cy: 727, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </AnimatePresence>

            {/* 2. CONTINUOUS WORKFLOW THREAD: Tablet (1161, 727) -> Class Register -> Center Bottom (720, 920) into Section 2 */}
            <motion.path
              d="M 1161,727 C 1040,770 940,760 850,755 C 770,750 735,820 720,920"
              stroke="url(#threadGrad)"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              filter="url(#threadGlow)"
              initial={{ pathLength: 0.35, opacity: 0.35 }}
              animate={{
                pathLength: sync.step >= 3 ? 1 : 0.45,
                opacity: sync.step >= 3 ? 0.95 : 0.45,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          {/* ===================================================================
              DYNAMIC CELEBRATING STUDENTS (Suspended in Mid-Air at Optical Center - z-26)
              - Elevated to z-26 so students are strictly in front of all floating cards (z-24)
              - Boy & girl celebrating academic excellence in crisp uniforms
              - Positioned across the diagonal split with guaranteed air gap from cards
             =================================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute z-26 flex items-center justify-center"
            style={{
              left: "calc(50% - 235px)",
              top: "95px",
              width: "570px",
              height: "520px",
            }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src="/images/students-hero-transparent.png"
                alt="Two celebrating Nigerian secondary school students leaping in triumph with diplomas"
                width={710}
                height={650}
                priority
                className="w-auto h-full max-h-[540px] object-contain drop-shadow-[0_24px_48px_rgba(7,51,42,0.22)]"
              />
            </motion.div>
          </motion.div>

          {/* ===================================================================
              GROUNDED NIGERIAN PRINCIPAL / SCHOOL PROPRIETOR (z-20)
              - Reacting with pleased half-smile gazing toward celebrating students
              - Holding synchronized dashboard tablet casting emerald light
              - Scaled ~12% smaller so he sits slightly behind students
              - Grounded with soft contact shadow, zero foggy smoke band
              - Subtle emerald rim light on right side
              - Tablet Screen Pulse anchored right on his screen (z-22)
             =================================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-20 pointer-events-none"
            style={{
              right: "20px",
              bottom: "0px",
              width: "330px",
              height: "450px",
            }}
          >
            {/* Implied floor soft contact shadow */}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-48 h-4 bg-ink-900/12 blur-md rounded-full pointer-events-none"
            />

            {/* Principal cutout with tight bottom softening (just bottom 5%, no smoke cloud) */}
            <div
              className="relative w-full h-full flex items-end justify-center overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
              }}
            >
              <Image
                src="/images/principal-teacher-transparent.png"
                alt="Distinguished Nigerian school principal holding a synchronized management tablet"
                width={777}
                height={1117}
                priority
                className={`w-auto h-full max-h-[450px] object-contain transition-all duration-300 drop-shadow-[0_20px_40px_rgba(7,51,42,0.22)] ${
                  activeFeature === "leadership"
                    ? "drop-shadow-[6px_0_24px_rgba(61,220,151,0.4)]"
                    : "drop-shadow-[4px_0_16px_rgba(18,162,107,0.18)]"
                }`}
              />
            </div>

            {/* Tablet Screen Pulse - Anchored directly over tablet screen in his hands (z-22) */}
            <AnimatePresence>
              {(sync.step === 3 || activeFeature === "leadership") && (
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [0.5, 1.3, 1.8], opacity: [0.95, 0.6, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="absolute rounded-full pointer-events-none z-22"
                  style={{
                    left: "47px",
                    top: "233px",
                    width: "48px",
                    height: "48px",
                    background:
                      "radial-gradient(circle, rgba(61,220,151,0.95) 0%, rgba(18,162,107,0.5) 45%, transparent 75%)",
                    boxShadow: "0 0 28px #3DDC97",
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* ===================================================================
              AUTHENTIC NIGERIAN SCHOOL PAPER ARTIFACTS (z-25)
              - 1. Oakland School Perforated Bursary Fee Receipt (Hero Anchor, Level 3 shadow)
              - 2. Ruled Class Register (Supporting, Level 2 shadow, below students' leap)
              - 3. Continuous Assessment (CA) Slip (Supporting, Level 1 shadow, clear of fist)
              - 4. Transient Bank Transfer Alert (Under receipt, unoccluded text)
             =================================================================== */}
          <SchoolPaperArtifacts sync={sync} activeFeature={activeFeature} />

          {/* ===================================================================
              LEFT CONTENT COLUMN (Typography, Modules & Call to Action - z-30)
              Clean, massive editorial headline, outcome-first copy, module stations
              - Positioned at top: 135px with ample 350px breathing room below!
             =================================================================== */}
          <div
            className="absolute z-30 flex flex-col items-start"
            style={{
              left: "64px",
              top: "135px",
              width: "520px",
            }}
          >
            {/* Tagline / Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[12px] font-bold tracking-[2.5px] uppercase text-emerald-300 font-sans mb-3.5"
            >
              NIGERIAN SCHOOL OPERATING SYSTEM
            </motion.p>

            {/* Display XL Headline with Balanced Break & Animated Emerald Underline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-white text-[50px] xl:text-[58px] leading-[1.04] tracking-[-1.5px] mb-4 text-balance"
            >
              Discover order. <br />
              <span className="relative inline-block text-emerald-300">
                Synchronize
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 bottom-1 w-full h-[3px] bg-emerald-400 origin-left"
                />
              </span> <br />
              your school.
            </motion.h1>

            {/* Outcome-First Summary */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15.5px] xl:text-[16.5px] text-surface/90 leading-[1.55] font-sans max-w-[480px] mb-5"
            >
              Manage tuition payments, track daily attendance, and prepare term report cards without paperwork stress. Simple, reliable, and built specifically for Nigerian schools.
            </motion.p>

            {/* 4 Interactive Module Station Tags (Subtle tags at idle, interactive pulse on click) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              {[
                { name: "Leadership", id: "leadership" },
                { name: "Attendance", id: "attendance" },
                { name: "Assessment", id: "assessment" },
                { name: "Bursar fees", id: "bursar" },
              ].map((m) => {
                const isActive = activeFeature === m.id;
                return (
                  <button
                    key={m.id}
                    id={`hero-chip-${m.id}`}
                    onClick={() => setActiveFeature(isActive ? null : m.id)}
                    className={`px-3 py-1.5 rounded-full text-[12px] font-medium flex items-center gap-2 cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-500/25 border border-emerald-400 text-white shadow-[0_0_12px_rgba(61,220,151,0.3)] scale-[1.04]"
                        : "bg-ink-800/40 border border-emerald-400/20 text-surface/80 hover:bg-ink-800/70 hover:border-emerald-400/40 hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive
                          ? "bg-emerald-300 shadow-[0_0_6px_#3DDC97]"
                          : "bg-emerald-400/60"
                      }`}
                    />
                    <span>{m.name}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* High-Converting CTA & High-Contrast Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex items-center">
                <Button
                  href="#demo-section"
                  variant="primary"
                  size="lg"
                  className="group px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-tangerine-500/20 hover:shadow-tangerine-500/35 hover:scale-[1.02] transition-all flex items-center gap-3"
                >
                  <span>Book a Demo</span>
                  <span className="w-7 h-7 rounded-full bg-ink-900 text-tangerine-400 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>

              {/* Trust Signal: Oakland Comprehensive High School (Real Customer) */}
              <div className="flex items-center gap-2.5 text-[13px] text-emerald-300/90 font-medium tracking-normal pt-1 max-w-[420px]">
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-ink-900 flex items-center justify-center text-[10px] font-black flex-shrink-0">
                  ✓
                </span>
                <span>
                  In active use at{" "}
                  <a
                    href="https://oakland-school.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 text-white hover:text-emerald-200 font-bold transition-colors"
                  >
                    Oakland Comprehensive High School
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET HERO (Screen width < 1200px)
         ========================================================================= */}
      <div className="xl:hidden flex flex-col w-full bg-white">
        {/* Top Dark Header & Content Block */}
        <div className="bg-ink-900 text-white px-6 sm:px-10 pt-24 pb-16 flex flex-col">
          {/* Eyebrow */}
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-emerald-300 font-sans mb-3.5">
            NIGERIAN SCHOOL OPERATING SYSTEM
          </p>

          {/* Headline */}
          <h1 className="font-display font-bold text-white text-[38px] sm:text-[48px] leading-[1.05] tracking-tight mb-4">
            Discover order. <br />
            <span className="text-emerald-300">Synchronize</span> <br />
            your school.
          </h1>

          <p className="text-sm sm:text-base text-surface/90 leading-relaxed mb-6 max-w-lg">
            Manage tuition payments, track daily attendance, and prepare term report cards without paperwork stress. Simple, reliable, and built specifically for Nigerian schools.
          </p>

          {/* Mobile Module Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["Leadership", "Attendance", "Assessment", "Bursar fees"].map((name) => (
              <span
                key={name}
                className="px-3 py-1 rounded-full bg-ink-800 border border-emerald-500/20 text-surface/90 text-xs"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              href="#demo-section"
              variant="primary"
              size="lg"
              className="justify-center font-bold shadow-lg shadow-tangerine-500/20 flex items-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-300/90">
            <span>✓</span>
            <span>
              In active use at{" "}
              <a
                href="https://oakland-school.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white font-bold transition-colors"
              >
                Oakland Comprehensive High School
              </a>
            </span>
          </div>
        </div>

        {/* Celebrating Students & Principal Image on Light Surface */}
        <div className="relative bg-white pt-8 pb-14 px-6 flex flex-col items-center overflow-hidden">
          <div className="relative w-full max-w-[480px] flex flex-col items-center">
            <Image
              src="/images/students-hero-transparent.png"
              alt="Celebrating Nigerian secondary school students"
              width={710}
              height={650}
              priority
              className="w-full h-auto object-contain drop-shadow-xl mb-4"
            />
            <Image
              src="/images/principal-teacher-transparent.png"
              alt="Nigerian school principal with management tablet"
              width={777}
              height={1117}
              priority
              className="w-48 h-auto object-contain drop-shadow-md -mt-10"
            />
          </div>
        </div>

        {/* Mobile Section Transition Pill */}
        <div className="flex justify-center -mt-5 pb-8 pointer-events-auto">
          <Link
            href="#how-it-works"
            className="px-5 py-2.5 bg-white border border-line hover:border-emerald-500 rounded-full shadow-md text-xs font-bold text-charcoal-900 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>How Operations Synchronize ↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
