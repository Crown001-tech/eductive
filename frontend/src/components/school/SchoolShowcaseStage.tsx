"use client";

import React, { useRef, useState, useEffect } from "react";
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

const OAKLAND_SLIDES = [
  {
    src: "/images/oakland-hero-1.png",
    alt: "Oakland School homepage — Where Purpose Becomes a Standard",
  },
  {
    src: "/images/oakland-hero-2.png",
    alt: "Oakland School science laboratory — Where Character Becomes a Standard",
  },
];

export function SchoolShowcaseStage() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % OAKLAND_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

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
    prefersReducedMotion ? [1, 1] : [0.96, 1]
  );

  const stageY = useTransform(
    scrollYProgress,
    [0, 0.7],
    prefersReducedMotion ? [0, 0] : [20, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#07332A] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 xl:pt-36 xl:pb-32 overflow-hidden select-none"
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
            PART 1: THE VISUAL JOURNEY BRIDGE (Product -> About -> School)
           ===================================================================== */}
        <div className="relative max-w-[880px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 relative z-10">
            {/* STEP 01: PRODUCT (Completed Node) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/product"
                className="group block p-4 sm:p-5 rounded-2xl bg-[#05261F]/90 hover:bg-[#05261F] border border-emerald-500/25 hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-400 text-[#07332A] flex items-center justify-center shadow-[0_0_12px_rgba(61,220,151,0.4)]">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-300">
                      01 · PRODUCT
                    </span>
                  </div>
                  <Layers className="w-4 h-4 text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                </div>

                <h2 className="font-display font-bold text-white text-base sm:text-lg leading-snug">
                  You&apos;ve seen our product
                </h2>
                <p className="text-xs text-white/75 font-sans mt-1 leading-relaxed">
                  Eight connected portals for fees, results and attendance.
                </p>
              </Link>
            </motion.div>

            {/* Mobile-only short vertical connector between Card 01 and Card 02 */}
            <div className="flex sm:hidden justify-center h-5 pointer-events-none" aria-hidden="true">
              <div className="w-[2px] h-full bg-emerald-400/60" />
            </div>

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
                className="group block p-4 sm:p-5 rounded-2xl bg-[#05261F]/90 hover:bg-[#05261F] border border-emerald-500/25 hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-400 text-[#07332A] flex items-center justify-center shadow-[0_0_12px_rgba(61,220,151,0.4)]">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-300">
                      02 · ABOUT US
                    </span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                </div>

                <h2 className="font-display font-bold text-white text-base sm:text-lg leading-snug">
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
               - Mobile: clean centered S-curve thread
               - Desktop/Tablet: two-branch converging thread
             =================================================================== */}
          {/* Mobile Connector */}
          <div className="flex sm:hidden items-center justify-center h-14 pointer-events-none">
            <svg
              className="w-24 h-full overflow-visible"
              viewBox="0 0 100 56"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 50,0 C 50,20 50,36 50,50"
                stroke="#3DDC97"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.path
                d="M 50,0 C 50,20 50,36 50,50"
                stroke="#3DDC97"
                strokeWidth="2.5"
                style={{ pathLength }}
              />
              <circle
                cx="50"
                cy="50"
                r="5"
                fill="#3DDC97"
                className="animate-ping"
                style={{ animationDuration: "2.4s" }}
              />
              <circle cx="50" cy="50" r="4" fill="#3DDC97" />
            </svg>
          </div>

          {/* Desktop/Tablet Two-Branch Connector */}
          <div className="hidden sm:flex relative h-24 items-center justify-center pointer-events-none">
            <svg
              className="w-full max-w-[560px] h-full overflow-visible"
              viewBox="0 0 560 110"
              fill="none"
              aria-hidden="true"
            >
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
            PART 2: STEP 03 — THE LIVE OAKLAND SCHOOL WEBSITE REVEAL
           ===================================================================== */}
        <motion.div
          style={{ scale: stageScale, y: stageY }}
          className="w-full flex flex-col items-center"
        >
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-emerald-300 block mb-1.5 sm:mb-2">
              03 · LIVE SCHOOL SHOWCASE
            </span>
            <h1 className="font-display font-bold text-white text-3xl sm:text-5xl xl:text-[52px] leading-[1.08] tracking-[-1.2px] mb-2.5 sm:mb-3 text-balance">
              Now see a school we built.
            </h1>
            <p className="text-sm sm:text-lg text-white/85 font-sans leading-relaxed text-balance">
              You have seen what we are about. Now explore Oakland School&apos;s live website.
            </p>
          </div>

          {/* =================================================================
              BROWSER FRAME SHOWING THE ACTUAL OAKLAND SCHOOLS WEBSITE
              - Zero obstructing pills over the screenshot
              - Clean footer bar below the viewport on mobile & desktop
             ================================================================= */}
          <a
            href={OAKLAND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full rounded-[20px] sm:rounded-[28px] bg-[#05261F] border-2 border-emerald-500/35 hover:border-emerald-400 shadow-[0_24px_70px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300"
          >
            {/* Browser Top Chrome */}
            <div className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 bg-[#041E18] border-b border-emerald-500/20 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E5534B]/80" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E5A84B]/80" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#57C059]/80" />
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#07332A] border border-emerald-500/30 text-[11px] sm:text-xs font-mono text-white/90 group-hover:border-emerald-400/60 transition-colors min-w-0">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">oakland-school.onrender.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-sans font-semibold text-emerald-300 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live school website</span>
              </div>
            </div>

            {/* Unobstructed Oakland Schools Website Viewport */}
            <div className="relative w-full aspect-[16/7.45] bg-[#0D1915] overflow-hidden">
              {OAKLAND_SLIDES.map((slide, idx) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1200px) 100vw, 1160px"
                  className={`object-cover object-top transition-all duration-700 group-hover:scale-[1.015] ${
                    idx === slideIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />
              ))}
            </div>

            {/* Clean Bottom Bar (Below the image so nothing covers the screenshot) */}
            <div className="px-4 sm:px-6 py-3 bg-[#041E18] border-t border-emerald-500/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-xs font-sans text-white/85 truncate">
                  Oakland School · Lagos
                </span>
              </div>

              <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-sans font-bold text-emerald-300 group-hover:text-white transition-colors">
                <span>Tap to preview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* =================================================================
              BOTTOM PRIMARY CTA & QUIET DEMO LINK
             ================================================================= */}
          <div className="mt-8 sm:mt-10 w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href={OAKLAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-bold rounded-full px-8 py-4 text-base bg-[#FF6A1A] hover:bg-[#ff7a33] text-[#1B1F1D] gap-2.5 shadow-lg transition-all duration-200 hover:scale-[1.02]"
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
