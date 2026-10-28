"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export function CrownTechSection() {
  return (
    <section className="relative w-full bg-[#07332A] text-white py-20 xl:py-28 border-t border-emerald-500/20 overflow-hidden select-none">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crownGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#12A26B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crownGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8 xl:px-14 z-10">
        
        {/* Section Header (Heading <= 6 words, Intro <= 18 words) */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-white text-2xl sm:text-4xl xl:text-[44px] leading-tight tracking-tight mb-3 text-balance">
            Developed by Crown Tech.
          </h2>
          <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed text-balance">
            Building practical software for how Nigerian schools actually run.
          </p>
        </div>

        {/* Content Showcase: Logo & 3 Steps Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Crown Tech Brand Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_24px_50px_rgba(0,0,0,0.3)] flex flex-col items-center text-center">
              {/* Logo Container */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white p-3 shadow-xl flex items-center justify-center mb-5 overflow-hidden">
                <Image
                  src="/images/crown-tech-logo.png"
                  alt="Crown Tech Official Logo"
                  width={140}
                  height={140}
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">
                Crown Tech
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300 font-mono font-medium mb-3">
                Software &amp; Technology
              </p>

              <div className="flex items-center gap-1.5 text-xs text-surface/75 font-sans">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars Narrative (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            <div className="bg-white/[0.04] rounded-2xl border border-white/10 p-5 sm:p-6">
              <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-1.5">
                01 · THE PROBLEM
              </span>
              <p className="text-xs sm:text-sm text-surface/90 font-sans leading-relaxed">
                Paper receipts, soaked registers and spreadsheets. Teachers spent weekends on broadsheets.
              </p>
            </div>

            <div className="bg-white/[0.04] rounded-2xl border border-white/10 p-5 sm:p-6">
              <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-1.5">
                02 · THE SOLUTION
              </span>
              <p className="text-xs sm:text-sm text-surface/90 font-sans leading-relaxed">
                Works on ordinary phones. Fees, attendance, exams and the school gate in one place.
              </p>
            </div>

            <div className="bg-white/[0.04] rounded-2xl border border-white/10 p-5 sm:p-6">
              <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-1.5">
                03 · FULL SUPPORT
              </span>
              <p className="text-xs sm:text-sm text-surface/90 font-sans leading-relaxed">
                We set up your classes, train your teachers, and help by phone and WhatsApp.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
