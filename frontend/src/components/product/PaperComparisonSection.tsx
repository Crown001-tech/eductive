"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface ComparisonRow {
  aspect: string;
  paperProblem: string;
  eductiveSolution: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    aspect: "Fee Receipts",
    paperProblem: "Torn carbon receipt booklets and disputes over paper bank teller slips.",
    eductiveSolution: "Official stamped digital receipt sent directly to parent WhatsApp in seconds.",
  },
  {
    aspect: "Class Registers",
    paperProblem: "Bulky paper registers that get soaked in the rain, damaged, or misplaced.",
    eductiveSolution: "Thirty-second roll-call on any phone with permanent attendance records.",
  },
  {
    aspect: "Exam Broadsheets",
    paperProblem: "Teachers staying awake late with calculators calculating class ranks.",
    eductiveSolution: "Automatic WAEC A1 to F9 grading and terminal positions with one click.",
  },
  {
    aspect: "School Oversight",
    paperProblem: "Proprietors waiting weeks for paper reports to know who owes school fees.",
    eductiveSolution: "Live collection totals across all school accounts visible from your pocket.",
  },
];

export function PaperComparisonSection() {
  return (
    <section className="relative w-full bg-white text-charcoal-900 py-24 xl:py-36 border-t border-line/70 select-none overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-700 mb-3">
            PAPERWORK VS ORDER
          </span>
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            Replace paper chaos with calm order.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Everything you used to write on paper, stored safely and delivered instantly.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {COMPARISONS.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 rounded-2xl border border-line overflow-hidden shadow-sm"
            >
              {/* Aspect Label */}
              <div className="md:col-span-3 bg-surface p-4 sm:p-5 border-b md:border-b-0 md:border-r border-line flex items-center">
                <span className="font-display font-bold text-ink-900 text-base">
                  {row.aspect}
                </span>
              </div>

              {/* Paper Problem */}
              <div className="md:col-span-4 bg-red-50/40 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-line flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 font-sans leading-relaxed">
                  {row.paperProblem}
                </p>
              </div>

              {/* Eductive Solution */}
              <div className="md:col-span-5 bg-emerald-50/40 p-4 sm:p-5 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-ink-900 font-sans font-medium leading-relaxed">
                  {row.eductiveSolution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
