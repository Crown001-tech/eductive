"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProductHero() {
  return (
    <section className="relative w-full bg-[#07332A] text-white pt-32 pb-20 xl:pt-40 xl:pb-28 overflow-hidden select-none">
      {/* Background Campus Environment Grounding (Vivid Architectural Presence) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/school-campus-hero-bg.jpg"
          alt="Nigerian secondary school campus quadrangle"
          fill
          priority
          className="object-cover object-center scale-105 opacity-60 sm:opacity-65"
        />
        {/* Cinematic forest green tone curve & vignette ensuring crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07332A]/80 via-[#07332A]/50 to-[#07332A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,51,42,0.45)_0%,rgba(7,51,42,0.85)_100%)]" />
      </div>

      {/* Ambient background light */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-tangerine-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Background architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="prodHeroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3DDC97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prodHeroGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-xs font-bold tracking-[2.5px] uppercase text-emerald-300 font-sans mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            THE FULL PRODUCT
          </p>

          {/* Headline */}
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl xl:text-[62px] leading-[1.05] tracking-[-1.5px] mb-5 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
            Eight portals. One connected school.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-surface/95 font-sans leading-relaxed mb-8 max-w-xl text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            Administration, teaching, exams, fees and security, with a workspace for every person. Built for Nigerian schools.
          </p>

          {/* CTA & Anchor Link */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              className="px-8 py-4 rounded-full font-bold shadow-lg shadow-tangerine-500/20 hover:scale-[1.02] flex items-center gap-2.5"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href="#roles-orbital"
              className="text-xs font-semibold text-emerald-300 hover:text-white transition-colors flex items-center gap-1.5 py-2 px-4"
            >
              <span>Meet the eight portals</span>
              <span>↓</span>
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 text-xs text-emerald-300/80 font-medium">
            <span>✓</span>
            <span>
              Built in Nigeria, for Nigerian schools ·{" "}
              <a
                href="https://oakland-school.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-white hover:text-emerald-200 font-bold"
              >
                Demonstration School: Oakland Comprehensive High School
              </a>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
