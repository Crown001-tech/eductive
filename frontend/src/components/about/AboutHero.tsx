"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative w-full bg-[#07332A] text-white pt-36 pb-24 xl:pt-44 xl:pb-32 overflow-hidden select-none">
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
        
        {/* Strict AGENTS.md: Hero headline max 8 words */}
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl xl:text-[56px] leading-[1.08] tracking-[-1.5px] mb-6 max-w-3xl text-balance">
          Built for Nigerian school reality.
        </h1>

        {/* Strict AGENTS.md: Hero subtext max 20 words */}
        <p className="text-base sm:text-lg xl:text-xl text-surface/80 font-sans leading-relaxed max-w-2xl mb-10 text-balance">
          Eductive replaces lost registers, fake tellers, and broadsheet math with one calm operating system.
        </p>

        {/* Primary CTA & Live Pilot Link */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center font-sans font-semibold rounded-full px-8 py-3.5 text-sm bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            Book a demo
          </Link>

          <a
            href="https://oakland-school.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-surface/80 hover:text-white px-4 py-3 transition-colors"
          >
            <span>See Oakland High pilot</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Subtle verification footnote */}
        <div className="mt-14 pt-8 border-t border-emerald-500/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-emerald-300/80">
          <span>Engineered in Nigeria</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
          <span>Parent WhatsApp Receipts</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
          <span>Zero Computer Lab Required</span>
        </div>

      </div>
    </section>
  );
}
