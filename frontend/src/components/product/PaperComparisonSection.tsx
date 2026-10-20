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
    paperProblem: "Paper receipts and manual bank teller reconciliation can lead to conflicting records.",
    eductiveSolution: "Official digital receipt recorded immediately with automatic fee balance updates.",
  },
  {
    aspect: "Class Registers",
    paperProblem: "Physical registers take time to manage and make historical attendance harder to review.",
    eductiveSolution: "Direct digital roll-call with permanent attendance records and term summaries.",
  },
  {
    aspect: "Results & Broadsheets",
    paperProblem: "Compiling continuous assessment and terminal examinations manually increases review delays.",
    eductiveSolution: "Standardised score entry, automated grade computation and structured approval reviews.",
  },
  {
    aspect: "School Oversight",
    paperProblem: "School leaders often lack immediate visibility into fee collections, attendance and approvals.",
    eductiveSolution: "Clear, role-based operational visibility across departments from any supported device.",
  },
];

export function PaperComparisonSection() {
  return (
    <section className="relative w-full bg-white text-charcoal-900 py-24 xl:py-36 border-t border-line/70 select-none overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-700 mb-3">
            PRACTICAL WORKFLOWS
          </span>
          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            See the platform in action.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Explore how EDUCTIVE supports everyday school activities through its actual interface and workflows.
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
