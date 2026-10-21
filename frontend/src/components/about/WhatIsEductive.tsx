"use client";

import React from "react";
import { ShieldCheck, Users, Eye } from "lucide-react";

export function WhatIsEductive() {
  return (
    <section className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-16 sm:py-24 xl:py-32 border-t border-line/70 select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 xl:px-14">
        
        {/* Section Header (Heading <= 6 words, Intro <= 18 words) */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-ink-900 text-2xl sm:text-4xl xl:text-[44px] leading-tight tracking-[-1.2px] mb-3 text-balance">
            Built for school operations.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed text-balance">
            One platform for admin, teaching, exams, fees, security and parents.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          
          {/* Card 1: Nothing gets lost */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-[0_8px_30px_rgba(7,51,42,0.05)] hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                SAFE CLOUD
              </span>
              <h3 className="font-display font-bold text-ink-900 text-xl mt-3 mb-2">
                Nothing gets lost
              </h3>
              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                Records live safely in the cloud, not in registers that tear, flood or go missing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 text-xs font-mono text-emerald-800 font-bold">
              PERMANENT RECORDS
            </div>
          </div>

          {/* Card 2: A portal for everyone */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-[0_8px_30px_rgba(7,51,42,0.05)] hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-200 shadow-sm">
                <Users className="w-5 h-5 text-emerald-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                EIGHT WORKSPACES
              </span>
              <h3 className="font-display font-bold text-ink-900 text-xl mt-3 mb-2">
                A portal for everyone
              </h3>
              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                Owners, principals, teachers, bursars, security, students and parents each get their own workspace.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 text-xs font-mono text-emerald-800 font-bold">
              ROLE ACCESS
            </div>
          </div>

          {/* Card 3: One screen truth */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-[0_8px_30px_rgba(7,51,42,0.05)] hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-200 shadow-sm">
                <Eye className="w-5 h-5 text-emerald-700" />
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                LIVE OVERSIGHT
              </span>
              <h3 className="font-display font-bold text-ink-900 text-xl mt-3 mb-2">
                One screen truth
              </h3>
              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                School leaders see fees, attendance and academic performance across the institution on one screen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 text-xs font-mono text-emerald-800 font-bold">
              LEADERSHIP ROLLUP
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
