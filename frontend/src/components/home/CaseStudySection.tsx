"use client";

import React from "react";
import {
  TrendingUp,
  Clock,
  CheckCheck,
  ShieldCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative w-full bg-white text-charcoal-900 py-24 xl:py-32 border-t border-line/60 overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="caseGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#07332A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#caseGrid)" />
        </svg>
      </div>

      <div id="schools" className="scroll-mt-28" />
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            HEADER
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-[11px] font-mono font-bold tracking-widest uppercase mb-3.5">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>REAL-WORLD SCHOOL CASE STUDY</span>
          </div>

          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.12] mb-4 text-balance">
            How Oakland High eliminated fee leaks <br className="hidden sm:inline" />
            and marksheet delays in one term.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            See how Oakland Comprehensive High School (840 students, JSS 1 to SSS 3, Lagos) uses EDUCTIVE to eliminate fee reconciliation delays, paper attendance confusion, and end-of-term broadsheet bottlenecks.
          </p>
        </div>

        {/* =======================================================================
            4 KEY TRANSFORMATION METRICS (Large, high-contrast editorial tiles)
           ======================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Metric 1: Fee Recovery */}
          <div className="p-6 rounded-2xl bg-[#FCFBF8] border border-line shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                FEE RECOVERY VELOCITY
              </span>
              <p className="font-mono font-extrabold text-4xl text-ink-900">
                94.2%
              </p>
              <p className="text-xs text-charcoal-600 font-sans mt-2 leading-relaxed">
                Fees cleared on time, up from <strong>61.5%</strong> under manual teller collection.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1.5 text-emerald-700 font-mono text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" /> +32.7% Revenue Improvement
            </div>
          </div>

          {/* Metric 2: Report Card Delivery */}
          <div className="p-6 rounded-2xl bg-[#FCFBF8] border border-line shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                MARKSHEET & REPORT LAG
              </span>
              <p className="font-mono font-extrabold text-4xl text-ink-900">
                0 Days
              </p>
              <p className="text-xs text-charcoal-600 font-sans mt-2 leading-relaxed">
                Broadsheets and parent report cards published the exact day examinations ended.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1.5 text-emerald-700 font-mono text-xs font-bold">
              <Clock className="w-3.5 h-3.5" /> Down from 3 Weeks
            </div>
          </div>

          {/* Metric 3: Attendance Verification */}
          <div className="p-6 rounded-2xl bg-[#FCFBF8] border border-line shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                CAMPUS ROLL-CALL
              </span>
              <p className="font-mono font-extrabold text-4xl text-ink-900">
                8:15 AM
              </p>
              <p className="text-xs text-charcoal-600 font-sans mt-2 leading-relaxed">
                Full 840-student attendance headcount verified before morning assembly dismisses.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1.5 text-emerald-700 font-mono text-xs font-bold">
              <CheckCheck className="w-3.5 h-3.5" /> 99.2% WhatsApp Delivery
            </div>
          </div>

          {/* Metric 4: Bank Statement Reconciliation */}
          <div className="p-6 rounded-2xl bg-[#FCFBF8] border border-line shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                LEDGER DISCREPANCY
              </span>
              <p className="font-mono font-extrabold text-4xl text-emerald-700">
                ₦0.00
              </p>
              <p className="text-xs text-charcoal-600 font-sans mt-2 leading-relaxed">
                Zero discrepancy across GTBank, Zenith, and petty cash ledgers at term audit.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1.5 text-emerald-700 font-mono text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Audit Verified
            </div>
          </div>
        </div>

        {/* =======================================================================
            BEFORE & AFTER COMPARISON + PROPRIETOR TESTIMONIAL
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F5] rounded-3xl border border-line p-8 xl:p-12">
          
          {/* Left Column: Side-by-side Contrast (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-bold text-ink-900 text-xl sm:text-2xl mb-4">
              What Changed Inside Oakland High
            </h3>

            {/* Comparison Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white border border-red-200/80">
                <span className="text-[10px] font-mono font-bold text-red-600 uppercase block mb-1">
                  BEFORE EDUCTIVE (PREVIOUS SESSIONS)
                </span>
                <p className="text-charcoal-800 leading-snug">
                  Parents queued at the bursar&apos;s office with paper bank tellers. Bursars spent 4 hours daily matching bank statements.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block mb-1">
                  WITH EDUCTIVE (TODAY)
                </span>
                <p className="text-charcoal-900 font-medium leading-snug">
                  Direct bank transfer webhooks auto-reconcile payments in 0.0 seconds. Official stamped receipts sent automatically to parent phones.
                </p>
              </div>
            </div>

            {/* Comparison Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white border border-red-200/80">
                <span className="text-[10px] font-mono font-bold text-red-600 uppercase block mb-1">
                  BEFORE EDUCTIVE
                </span>
                <p className="text-charcoal-800 leading-snug">
                  Teachers manually copied CA test marks and exam scores into paper broadsheets, resulting in math errors and 3-week delays.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block mb-1">
                  WITH EDUCTIVE
                </span>
                <p className="text-charcoal-900 font-medium leading-snug">
                  Teachers submit scores digitally in class. WAEC grades and class positions calculate automatically the same afternoon.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Leadership Endorsement (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-line shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-800 flex items-center justify-center font-display font-bold text-sm">
                OAK
              </div>
              <div>
                <p className="font-display font-bold text-ink-900 text-sm">
                  Oakland Comprehensive High School
                </p>
                <p className="text-xs text-charcoal-600 font-sans">
                  Private Day & Boarding Secondary School · Lagos
                </p>
                <a
                  href="https://oakland-school.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 mt-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-900 text-xs font-mono font-bold transition-all border border-emerald-500/30"
                >
                  <span>Explore Live School Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <p className="text-sm text-charcoal-800 italic font-sans leading-relaxed mb-6">
              &ldquo;We run 840 students across 18 class arms. EDUCTIVE gave us complete financial visibility
              and eliminated the frantic end-of-term marksheet rush. For the first time in 12 years,
              our audit balanced down to the exact kobo.&rdquo;
            </p>

            <div className="pt-4 border-t border-line/80 flex items-center justify-between text-xs font-sans">
              <div>
                <strong className="text-ink-900 block font-bold">Dr. (Mrs.) A. Okonjo</strong>
                <span className="text-charcoal-600">Proprietor & Chair of Board</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-800 font-mono font-bold text-[10px] tracking-wide border border-emerald-500/20">
                ACTIVE PILOT BENCHMARK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
