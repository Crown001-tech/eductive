"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ShieldCheck,
} from "lucide-react";

interface Step {
  number: string;
  day: string;
  title: string;
  summary: string;
  actionTag: string;
  deliverables: string[];
  mockData: {
    badge: string;
    headline: string;
    subtext: string;
    status: string;
    details: { label: string; value: string }[];
  };
}

const STEPS: Step[] = [
  {
    number: "01",
    day: "Day 1",
    title: "Student Roster Migration & Arm Setup",
    summary:
      "Send us your existing student and staff lists in Excel, CSV, or photos of physical registers. Our Lagos data specialists clean duplicates, format names, configure class arms (Nursery to SSS3), and assign unique student registration IDs.",
    actionTag: "Data Ingestion & Verification",
    deliverables: [
      "Excel, CSV, or paper registers sanitized and imported in 24 hours",
      "Automatic class arm structuring (Gold, Silver, Diamond)",
      "Zero typing burden on teachers or administrative staff",
    ],
    mockData: {
      badge: "DAY 1 · DATA INGESTION",
      headline: "Student Roster Upload",
      subtext: "Oakland School · 840 Student Records",
      status: "COMPLETED · 100% CLEANED",
      details: [
        { label: "Total Students Mapped", value: "840 Records" },
        { label: "Class Arms Configured", value: "18 Classes (Nursery–SSS 3)" },
        { label: "Duplicate Records Cleaned", value: "14 Resolved" },
        { label: "Unique IDs Generated", value: "OAK/2024/001 to 840" },
      ],
    },
  },
  {
    number: "02",
    day: "Day 2",
    title: "Bank Account & Fee Schedule Integration",
    summary:
      "Connect your school's existing commercial bank accounts (GTBank, Zenith, First Bank). We configure your tuition schedules, PTA levies, and boarding fees per arm. Direct bank webhooks are verified so fees settle directly into your accounts.",
    actionTag: "Direct Bank Webhook Setup",
    deliverables: [
      "Direct settlement into your existing school bank accounts",
      "Flexible fee schedules by term, class arm, and boarding status",
      "Cryptographically signed e-receipts with school crest",
    ],
    mockData: {
      badge: "DAY 2 · BANK INTEGRATION",
      headline: "Direct Bank Transfer Webhook",
      subtext: "Zenith Bank (Acct: ***4019) & GTBank (Acct: ***8102)",
      status: "VERIFIED & CONNECTED",
      details: [
        { label: "Settlement Destination", value: "School Direct Accounts" },
        { label: "Supported Channels", value: "Bank Transfer, USSD, Cards" },
        { label: "Tuition Schedule", value: "₦185,000 / Term (JSS 2)" },
        { label: "Reconciliation Test", value: "Passed · Instant Settlement" },
      ],
    },
  },
  {
    number: "03",
    day: "Day 3",
    title: "30-Minute Practical Staff Training & Go-Live",
    summary:
      "An EDUCTIVE implementation officer conducts a focused, hands-on 30-minute training session for teachers and bursars (on-site in Lagos or live video). If a teacher can use WhatsApp, they can use EDUCTIVE in five minutes.",
    actionTag: "Hands-on Training & Go-Live",
    deliverables: [
      "WhatsApp-simple mobile training for all homeroom teachers",
      "Dedicated account manager on-site or on-call for your first week",
      "Parents notified with student ID login cards & welcome letters",
    ],
    mockData: {
      badge: "DAY 3 · GO-LIVE CEREMONY",
      headline: "Campus Deployment",
      subtext: "Monday Morning Assembly · 8:00 AM Go-Live",
      status: "OPERATIONAL & LIVE",
      details: [
        { label: "Teachers Trained", value: "48 / 48 Certified" },
        { label: "Gate Roll-Call Speed", value: "30 Seconds / Class" },
        { label: "Parent Welcome Notices", value: "840 Dispatched (WhatsApp)" },
        { label: "Dedicated Support Officer", value: "Assigned for Whole Term" },
      ],
    },
  },
];

export function ImplementationSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStep = STEPS[activeStep];

  return (
    <section
      id="onboarding"
      className="relative w-full bg-[#07332A] text-white py-24 xl:py-32 border-t border-emerald-500/20 overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="implGrid"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="#12A26B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#implGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            HEADER: SIMPLE, CONFIDENT, TIMELINE-FOCUSED
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-mono font-bold tracking-[2.5px] uppercase text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3.5 shadow-[0_0_12px_rgba(18,162,107,0.2)]">
            72-HOUR IMPLEMENTATION
          </span>

          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.12] mb-4 text-balance">
            How your school switches <br className="hidden sm:inline" />
            in three simple days.
          </h2>

          <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed text-balance">
            No technical headache or disruption to ongoing classes. Our Lagos technical team formats your records, links bank webhooks, and trains your staff.
          </p>

          {/* Stepper Tabs Bar */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 p-1.5 bg-ink-800/80 rounded-full border border-emerald-500/25 shadow-lg">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-emerald-500 text-ink-900 font-bold shadow-md scale-[1.02]"
                      : "text-surface/70 hover:text-white hover:bg-ink-700/60"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-80">
                    {step.day}:
                  </span>
                  <span>{step.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            STEP CONTENT: BALANCED 2-COLUMN PRESENTATION
            Left: Step narrative & deliverables | Right: High-contrast status terminal
           ======================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.number}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center"
          >
            {/* Left Column: Details & Deliverables (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                  STAGE {currentStep.number}
                </span>
                <span className="text-xs text-tangerine-400 font-mono font-bold uppercase tracking-wider">
                  {currentStep.day} · {currentStep.actionTag}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl xl:text-[34px] leading-tight mb-3">
                {currentStep.title}
              </h3>

              <p className="text-base text-surface/80 font-sans leading-relaxed mb-6 max-w-xl">
                {currentStep.summary}
              </p>

              {/* 3 Concrete Deliverables */}
              <div className="space-y-3 w-full mb-6">
                {currentStep.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 bg-ink-800/60 rounded-xl border border-emerald-500/20"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-surface font-sans leading-snug">
                      {del}
                    </span>
                  </div>
                ))}
              </div>

              {/* Support Guarantee Tag */}
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-sans font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Includes 14 days of on-site implementation support at your school</span>
              </div>
            </div>

            {/* Right Column: High-Contrast Terminal Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#05261F] rounded-2xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(7,51,42,0.4)] p-6 sm:p-7 relative overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/20">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 block tracking-wider">
                      {currentStep.mockData.badge}
                    </span>
                    <h4 className="font-display font-bold text-white text-sm mt-0.5">
                      {currentStep.mockData.headline}
                    </h4>
                    <p className="text-[11px] text-surface/60 font-sans mt-0.5">
                      {currentStep.mockData.subtext}
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold whitespace-nowrap">
                    {currentStep.mockData.status}
                  </span>
                </div>

                {/* Key Operational Data List */}
                <div className="space-y-2.5 mb-5 font-sans text-xs">
                  {currentStep.mockData.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-ink-900/70 border border-emerald-500/15"
                    >
                      <span className="text-surface/70 text-[11px]">
                        {item.label}
                      </span>
                      <strong className="text-white text-xs font-mono">
                        {item.value}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Milestone Progress Bar */}
                <div>
                  <div className="flex justify-between text-[11px] text-emerald-300/80 mb-1.5 font-sans">
                    <span>Onboarding Milestone</span>
                    <span className="font-mono font-bold text-white">
                      {activeStep === 0 ? "33% Complete" : activeStep === 1 ? "66% Complete" : "100% Ready to Launch"}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-ink-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-tangerine-500 rounded-full transition-all duration-500"
                      style={{
                        width: activeStep === 0 ? "33%" : activeStep === 1 ? "66%" : "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
