"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Lock,
  Layers,
  ShieldCheck,
} from "lucide-react";

const OAKLAND_URL = "https://oakland-school.onrender.com";

export function SchoolShowcaseStage() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center center"],
  });

  const pathLength = useTransform(
    scrollYProgress,
    [0, 0.65],
    prefersReducedMotion ? [1, 1] : [0.35, 1]
  );

  const stageScale = useTransform(
    scrollYProgress,
    [0, 0.7],
    prefersReducedMotion ? [1, 1] : [0.95, 1]
  );

  const stageY = useTransform(
    scrollYProgress,
    [0, 0.7],
    prefersReducedMotion ? [0, 0] : [24, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#07332A] text-white pt-28 pb-24 xl:pt-36 xl:pb-32 overflow-hidden select-none"
    >
      {/* Subtle Architectural Hairline Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="schoolJourneyGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#3DDC97"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#schoolJourneyGrid)" />
        </svg>
      </div>

      {/* Ambient Atmospheric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[780px] h-[480px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-8 xl:px-12 z-10">
        {/* =====================================================================
            PART 1: THE VISUAL JOURNEY BRIDGE (Mirrors Navbar: Product -> About -> School)
            Turns "You've seen our product and what we are about" into tactile UI nodes
           ===================================================================== */}
        <div className="relative max-w-[880px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            {/* STEP 01: PRODUCT (Completed Node) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/product"
                className="group block p-5 rounded-2xl bg-[#05261F]/90 hover:bg-[#05261F] border border-emerald-500/25 hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-400 text-[#07332A] flex items-center justify-center shadow-[0_0_12px_rgba(61,220,151,0.4)]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-300">
                      01 · PRODUCT
                    </span>
                  </div>
                  <Layers className="w-4 h-4 text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                </div>

                {/* Mini Visual Artifact inside Node 1 */}
                <div className="mb-3 p-2.5 rounded-xl bg-[#07332A] border border-emerald-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px]">
                      PAID
                    </span>
                    <span className="text-white/90 font-sans text-xs">
                      8 portals connected
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-300">
                    ₦185,000
                  </span>
                </div>

                <h2 className="font-display font-bold text-white text-lg leading-snug">
                  You&apos;ve seen our product
                </h2>
                <p className="text-xs text-white/75 font-sans mt-1 leading-relaxed">
                  Eight connected portals for fees, results and attendance.
                </p>
              </Link>
            </motion.div>

            {/* STEP 02: ABOUT (Completed Node) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/about"
                className="group block p-5 rounded-2xl bg-[#05261F]/90 hover:bg-[#05261F] border border-emerald-500/25 hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-400 text-[#07332A] flex items-center justify-center shadow-[0_0_12px_rgba(61,220,151,0.4)]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-300">
                      02 · ABOUT US
                    </span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                </div>

                {/* Mini Visual Artifact inside Node 2 */}
                <div className="mb-3 p-2.5 rounded-xl bg-[#07332A] border border-emerald-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white p-0.5 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/crown-tech-logo.png"
                        alt="Crown Tech"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white/90 font-sans text-xs">
                      Crown Tech · Nigeria
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-300">
                    Lagos &amp; Abuja
                  </span>
                </div>

                <h2 className="font-display font-bold text-white text-lg leading-snug">
                  You&apos;ve seen our story
                </h2>
                <p className="text-xs text-white/75 font-sans mt-1 leading-relaxed">
                  Built in Nigeria by Crown Tech for real school life.
                </p>
              </Link>
            </motion.div>
          </div>

          {/* ===================================================================
               ANIMATED CONNECTING THREAD CONVERGING INTO STEP 03
             =================================================================== */}
          <div className="relative h-20 sm:h-28 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full max-w-[560px] h-full overflow-visible"
              viewBox="0 0 560 110"
              fill="none"
              aria-hidden="true"
            >
              {/* Subtle dashed background guide */}
              <path
                d="M 140,0 C 140,55 280,45 280,105"
                stroke="#3DDC97"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              <path
                d="M 420,0 C 420,55 280,45 280,105"
                stroke="#3DDC97"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeDasharray="5 5"
              />

              {/* Scroll-drawn solid glowing threads */}
              <motion.path
                d="M 140,0 C 140,55 280,45 280,105"
                stroke="#3DDC97"
                strokeWidth="2.5"
                style={{ pathLength }}
              />
              <motion.path
                d="M 420,0 C 420,55 280,45 280,105"
                stroke="#3DDC97"
                strokeWidth="2.5"
                style={{ pathLength }}
              />

              {/* Pulsing Arrival Node at Step 03 */}
              <circle
                cx="280"
                cy="105"
                r="6"
                fill="#3DDC97"
                className="animate-ping"
                style={{ animationDuration: "2.4s" }}
              />
              <circle cx="280" cy="105" r="5" fill="#3DDC97" />
            </svg>
          </div>
        </div>

        {/* =====================================================================
            PART 2: STEP 03 — THE LIVE SCHOOL REVEAL (Already peeking above fold)
           ===================================================================== */}
        <motion.div
          style={{ scale: stageScale, y: stageY }}
          className="w-full flex flex-col items-center"
        >
          {/* Headline & Context right at the arrival node */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-300 block mb-2">
              03 · LIVE SCHOOL SHOWCASE
            </span>
            <h1 className="font-display font-bold text-white text-3xl sm:text-5xl xl:text-[52px] leading-[1.08] tracking-[-1.2px] mb-3 text-balance">
              Now see a school we built.
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-sans leading-relaxed text-balance">
              You have seen what we are about. Now explore Oakland School&apos;s live website.
            </p>
          </div>

          {/* =================================================================
              FULL-BLEED CLICKABLE BROWSER SHOWCASE OF OAKLAND SCHOOL
             ================================================================= */}
          <a
            href={OAKLAND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full rounded-[28px] bg-[#05261F] border-2 border-emerald-500/35 hover:border-emerald-400 shadow-[0_32px_90px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300"
          >
            {/* Browser Top Chrome */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#041E18] border-b border-emerald-500/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07332A] border border-emerald-500/30 text-xs font-mono text-white/90 group-hover:border-emerald-400/60 transition-colors">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>oakland-school.onrender.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-sans font-semibold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>We built this site</span>
              </div>
            </div>

            {/* Website Viewport Preview */}
            <div className="bg-white text-[#1B1F1D] relative overflow-hidden">
              {/* Simulated Oakland School Topbar */}
              <div className="px-6 sm:px-10 py-4 border-b border-[#D9E0DD] flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#07332A] text-emerald-300 font-display font-bold text-xs flex items-center justify-center">
                    OAK
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold text-sm sm:text-base text-[#07332A] leading-tight">
                      Oakland Comprehensive High School
                    </p>
                    <p className="text-xs text-[#4A524F] font-sans">
                      Victoria Island, Lagos · JSS 1 to SS 3
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-6 text-xs font-sans font-semibold text-[#4A524F]">
                  <span>About Oakland</span>
                  <span>Academics</span>
                  <span>Admissions</span>
                  <span className="px-4 py-2 rounded-full bg-[#07332A] text-white font-bold">
                    School Portal ↗
                  </span>
                </div>
              </div>

              {/* Main Visual Split inside Oakland's Website */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 xl:p-12 items-center bg-[#FAFBF9]">
                {/* Left Column: School Website Hero Copy & Live Proof */}
                <div className="lg:col-span-6 text-left space-y-5">
                  <span className="inline-block text-xs font-mono font-bold text-[#12A26B] uppercase tracking-wider">
                    2026 / 2027 ACADEMIC SESSION
                  </span>

                  <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#07332A] leading-[1.12] tracking-tight">
                    A complete school website, wired straight into EDUCTIVE.
                  </h3>

                  <p className="text-sm sm:text-base text-[#4A524F] font-sans leading-relaxed">
                    Parents check admissions, pay fees and open result slips from one school address.
                  </p>

                  {/* Interactive Hover Prompt Pill inside Canvas */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#07332A] group-hover:bg-[#0B4A3D] text-white text-xs sm:text-sm font-sans font-bold shadow-md transition-all group-hover:translate-x-1">
                      <span>Click to open Oakland School</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-300" />
                    </span>
                  </div>
                </div>

                {/* Right Column: Rich Campus Photo + Stamped Artifact Overlay */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-[#D9E0DD] bg-[#07332A] aspect-[16/10] shadow-lg">
                    <Image
                      src="/images/hero-students-teacher.jpg"
                      alt="Oakland Comprehensive High School teacher and students"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 540px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07332A]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="text-left">
                        <p className="font-display font-bold text-sm">
                          Oakland School Website
                        </p>
                        <p className="text-xs text-emerald-300 font-sans">
                          Designed &amp; hosted by EDUCTIVE
                        </p>
                      </div>
                      <span className="w-10 h-10 rounded-full bg-emerald-400 text-[#07332A] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* =================================================================
              BOTTOM PRIMARY CTA & QUIET DEMO LINK
             ================================================================= */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={OAKLAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans font-bold rounded-full px-8 py-4 text-base bg-[#FF6A1A] hover:bg-[#ff7a33] text-[#1B1F1D] gap-2.5 shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Visit Oakland School</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-emerald-300 hover:text-white px-3 py-2 transition-colors"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
