"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative w-full bg-[#07332A] text-white pt-36 pb-20 xl:pt-44 xl:pb-28 overflow-hidden select-none">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutHeroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#12A26B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutHeroGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-12 xl:px-16 flex flex-col items-center text-center z-10">
        
        {/* Eyebrow */}
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 mb-3 block">
          ABOUT EDUCTIVE
        </span>

        {/* Headline (<= 8 words) */}
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl xl:text-[56px] leading-[1.08] tracking-[-1.5px] mb-5 max-w-3xl text-balance">
          Scattered registers to one connected platform.
        </h1>

        {/* Supporting Copy (<= 20 words) */}
        <p className="text-base sm:text-lg xl:text-xl text-surface/90 font-sans leading-relaxed max-w-2xl mb-8 text-balance">
          EDUCTIVE replaces scattered registers, receipt books and spreadsheets with one connected platform for the whole school.
        </p>

        {/* Primary CTA & Secondary Link */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            href="/demo"
            variant="primary"
            size="lg"
            className="px-8 py-4 rounded-full font-bold shadow-lg shadow-tangerine-500/20 hover:scale-[1.02]"
          >
            Book a demo
          </Button>

          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white px-4 py-3 transition-colors"
          >
            <span>See all eight portals</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>

        {/* Footnote Chips */}
        <div className="mt-12 pt-6 border-t border-emerald-500/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-emerald-300/80">
          <span>Engineered in Nigeria</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
          <span>Eight portals</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
          <span>Works on any phone</span>
        </div>

      </div>
    </section>
  );
}
