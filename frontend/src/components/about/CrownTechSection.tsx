"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MapPin, Sparkles } from "lucide-react";

export function CrownTechSection() {
  return (
    <section className="relative w-full bg-[#07332A] text-white py-24 xl:py-32 border-t border-emerald-500/20 overflow-hidden select-none">
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

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[44px] leading-tight tracking-tight mb-4 text-balance">
            Engineered by Crown Tech.
          </h2>
          <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed text-balance">
            Built by Nigerian software engineers to solve administrative bottlenecks in primary and secondary schools.
          </p>
        </div>

        {/* Content Showcase: Logo & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Crown Tech Logo Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_24px_50px_rgba(0,0,0,0.3)] flex flex-col items-center text-center">
              {/* Logo Glow Ring */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white p-4 shadow-xl flex items-center justify-center mb-6 overflow-hidden">
                <Image
                  src="/images/crown-tech-logo.png"
                  alt="Crown Tech Official Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">
                Crown Tech
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300 font-mono font-medium mb-4">
                Software Engineering & Technology
              </p>

              <div className="flex items-center gap-2 text-xs text-surface/70 font-sans">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lagos & Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Crown Tech Story (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-6 sm:p-7">
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-2">
                01 · THE PROBLEM WE SAW
              </span>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Nigerian school owners were drowning in paper receipts and soaked register books. Teachers spent whole weekends calculating terminal broadsheets by hand.
              </p>
            </div>

            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-6 sm:p-7">
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-2">
                02 · HOW WE BUILT EDUCTIVE
              </span>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Crown Tech designed Eductive to work on basic smartphones without costly computer hardware. Payments, roll-call, and exam marks update in one place.
              </p>
            </div>

            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-6 sm:p-7">
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-2">
                03 · LOCAL SUPPORT NATIONWIDE
              </span>
              <p className="text-sm sm:text-base text-surface/85 font-sans leading-relaxed">
                Our engineering team sets up your school roster, trains your teachers, and provides direct support on phone and WhatsApp.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
