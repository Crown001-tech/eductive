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
    aspect: "Fee receipts",
    paperProblem: "Lost receipts and manual bank teller confusion.",
    eductiveSolution: "Every payment recorded once, with a digital receipt the parent can open anytime.",
  },
  {
    aspect: "Class registers",
    paperProblem: "Registers that tear, get soaked or go missing.",
    eductiveSolution: "Roll-call on any phone, with permanent attendance records.",
  },
  {
    aspect: "Exam broadsheets",
    paperProblem: "Teachers spending weekends working out totals and positions by hand.",
    eductiveSolution: "Totals, grades and class positions worked out for you.",
  },
  {
    aspect: "School oversight",
    paperProblem: "Waiting until end of term to know what fees were paid.",
    eductiveSolution: "Live fee totals and attendance, visible from your phone.",
  },
  {
    aspect: "Visitors",
    paperProblem: "A gate book nobody checks.",
    eductiveSolution: "Every visitor and entry recorded, visible to leadership.",
  },
  {
    aspect: "Parents",
    paperProblem: "Parents chasing the school for results and balances.",
    eductiveSolution: "Results, attendance and fee records in the parent portal.",
  },
];

export function PaperComparisonSection() {
  return (
    <section className="relative w-full bg-white text-charcoal-900 py-16 sm:py-24 xl:py-32 border-t border-line/70 select-none overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-14 z-10">
        
        {/* =====================================================================
            SECTION HEADER (Strict AGENTS.md: Heading <= 6 words, Intro <= 18 words)
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16 xl:mb-20">
          <h2 className="font-display font-bold text-ink-900 text-2xl sm:text-4xl xl:text-[46px] leading-[1.15] tracking-[-1.2px] mb-3 text-balance">
            From paper chaos to one record.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed text-balance">
            Everything you used to write on paper, stored safely and always at hand.
          </p>
        </div>

        {/* =====================================================================
            COMPARISON MATRIX (6 Rows · Bespoke Tactile Styling)
           ===================================================================== */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {COMPARISONS.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 rounded-2xl border border-[#E5DEC9] overflow-hidden shadow-[0_4px_16px_rgba(7,51,42,0.03)] bg-white hover:border-emerald-300 transition-colors duration-200"
            >
              {/* Aspect Label (3 Columns) */}
              <div className="md:col-span-3 bg-[#FAF9F5] p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[#E5DEC9] flex items-center">
                <span className="font-display font-bold text-ink-900 text-sm sm:text-base">
                  {row.aspect}
                </span>
              </div>

              {/* Paper Problem (4 Columns) */}
              <div className="md:col-span-4 bg-red-50/30 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[#E5DEC9] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 font-sans leading-relaxed">
                  {row.paperProblem}
                </p>
              </div>

              {/* Eductive Solution (5 Columns) */}
              <div className="md:col-span-5 bg-emerald-50/30 p-4 sm:p-5 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
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
