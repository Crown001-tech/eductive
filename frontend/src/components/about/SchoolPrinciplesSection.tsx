"use client";

import React from "react";
import { Check } from "lucide-react";

export function SchoolPrinciplesSection() {
  const principles = [
    {
      num: "01",
      tag: "CURRENCY & CLASSES",
      title: "Naira and local terms",
      desc: "Tuition balances use Naira (₦), and classes follow real JSS and SS arms.",
    },
    {
      num: "02",
      tag: "ASSESSMENT FORMULA",
      title: "CA exam structure",
      desc: "The system follows the official 20/20/60 continuous assessment formula with zero math errors.",
    },
    {
      num: "03",
      tag: "DISPATCH CHANNEL",
      title: "Parent WhatsApp receipts",
      desc: "Official stamped receipts land on parent WhatsApp numbers seconds after bursar payment entry.",
    },
    {
      num: "04",
      tag: "INFRASTRUCTURE",
      title: "Intermittent power ready",
      desc: "Teachers record roll-call on mobile phones, with zero expensive computer servers needed.",
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-20 xl:py-28 border-t border-line/70 select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[44px] leading-tight tracking-tight mb-4 text-balance">
            Four standards we never break.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Every screen respects the daily rhythms, class structures, and payment terms of Nigerian schools.
          </p>
        </div>

        {/* 4 Principle Cards Grid (4 on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className="bg-white rounded-2xl p-6 border border-line/80 shadow-[0_4px_20px_rgba(7,51,42,0.04)] hover:shadow-[0_12px_30px_rgba(7,51,42,0.08)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-charcoal-500 font-semibold">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-ink-900 text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-line/50 flex items-center gap-1.5 text-xs text-emerald-700 font-medium font-sans">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Verified in school trials</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
