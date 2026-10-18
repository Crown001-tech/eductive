"use client";

import React from "react";
import { ShieldCheck, MessageSquare, CheckCircle2 } from "lucide-react";

export function WhatIsEductive() {
  return (
    <section className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-20 xl:py-28 border-t border-line/70 select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 xl:px-16">
        
        {/* Section Header (Heading <= 6 words, Intro <= 18 words) */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[44px] leading-tight tracking-tight mb-4 text-balance">
            What Eductive does for schools.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            One calm operating system replacing paper chaos across fees, attendance, results, and leadership.
          </p>
        </div>

        {/* 3 Core Pillar Cards (Max 3 to 4 items per row on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          
          {/* Card 1: Zero Paper Headaches */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-line/80 shadow-[0_8px_30px_rgba(7,51,42,0.05)] hover:shadow-[0_16px_40px_rgba(7,51,42,0.08)] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Zero loss
              </span>
              <h3 className="font-display font-bold text-ink-900 text-xl mt-3 mb-2">
                Registers never tear.
              </h3>
              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                Records stay safe from water leaks, lost sheets, and torn covers during rainy season.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 text-xs font-mono text-emerald-800 font-bold">
              SAFE ON CLOUD
            </div>
          </div>

          {/* Card 2: Parent WhatsApp Receipts */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-line/80 shadow-[0_8px_30px_rgba(7,51,42,0.05)] hover:shadow-[0_16px_40px_rgba(7,51,42,0.08)] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                <MessageSquare className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                WhatsApp first
              </span>
              <h3 className="font-display font-bold text-ink-900 text-xl mt-3 mb-2">
                Parents get WhatsApp receipts.
              </h3>
              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                Parents receive official stamped fee receipts and morning arrival alerts right on WhatsApp.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 text-xs font-mono text-emerald-800 font-bold">
              ZERO EXTRA APPS
            </div>
          </div>

          {/* Card 3: School Leadership Clarity */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-line/80 shadow-[0_8px_30px_rgba(7,51,42,0.05)] hover:shadow-[0_16px_40px_rgba(7,51,42,0.08)] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Owner clarity
              </span>
              <h3 className="font-display font-bold text-ink-900 text-xl mt-3 mb-2">
                One screen truth.
              </h3>
              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                Proprietors and principals check daily attendance and school fee balances in seconds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 text-xs font-mono text-emerald-800 font-bold">
              DAILY ROLLUP
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
