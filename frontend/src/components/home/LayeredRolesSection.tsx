"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck } from "lucide-react";

interface RoleData {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  summary: string;
  bullets: { tag: string; title: string; desc: string }[];
  quote: { text: string; author: string; role: string };
  preview: {
    title: string;
    badge: string;
    statNumber: string;
    statLabel: string;
    details: { label: string; value: string; highlight?: boolean }[];
    footerNote: string;
  };
}

const ROLES: RoleData[] = [
  {
    id: "proprietor",
    name: "Proprietor",
    tagline: "School Owner & Board",
    headline: "Know your school's exact financial health every morning.",
    summary:
      "Stop waiting for end-of-term meetings to find out who has paid. Monitor cash collections across every bank account in real time.",
    bullets: [
      {
        tag: "1. THE DAILY FRICTION",
        title: "Blind spots on daily tuition & bank statements",
        desc: "Waiting weeks for bursary summaries while forged bank tellers and uncollected fees slip through unnoticed.",
      },
      {
        tag: "2. WHAT YOU DO IN EDUCTIVE",
        title: "Live collection telemetry across all school accounts",
        desc: "Monitor reconciled deposits in GTBank, Zenith, and First Bank directly on your smartphone.",
      },
      {
        tag: "3. THE TANGIBLE OUTCOME",
        title: "100% direct bank custody with zero revenue leakage",
        desc: "Every kobo matches student records before receipts issue. Instant financial peace of mind without Friday meetings.",
      },
    ],
    quote: {
      text: "I used to wait weeks for bursary reports. Now I see every payment on my phone before 9:00 AM.",
      author: "Dr. (Mrs.) A. Okonjo",
      role: "Proprietor, Oakland School",
    },
    preview: {
      title: "Executive Financial Summary",
      badge: "Proprietor Cockpit",
      statNumber: "₦48,250,000",
      statLabel: "Term 2 Collections (92.8% of Target)",
      details: [
        { label: "GTBank Operating Acct", value: "₦28,450,000" },
        { label: "Zenith Revenue Acct", value: "₦19,800,000" },
        { label: "Pending Vouchers", value: "1 (₦650k Diesel)", highlight: true },
        { label: "Bank Reconciliation Variance", value: "₦0.00" },
      ],
      footerNote: "All 3 school bank accounts verified · Zero ledger discrepancy",
    },
  },
  {
    id: "principal",
    name: "Principal",
    tagline: "Head of School",
    headline: "Keep teachers prepared and classes running on time.",
    summary:
      "Review weekly lesson notes before Monday assembly, track morning punctuality, and approve broadsheets without paper marksheets.",
    bullets: [
      {
        tag: "1. THE DAILY FRICTION",
        title: "Absentee registers & frantic marksheet deadlines",
        desc: "Chasing missing physical attendance books and enduring a 3-week end-of-term broadsheet calculation logjam.",
      },
      {
        tag: "2. WHAT YOU DO IN EDUCTIVE",
        title: "Whole-school roll-call at 8:15 AM & automated grading",
        desc: "Verify student arrival counts before assembly and approve digitized WAEC broadsheets in one tap.",
      },
      {
        tag: "3. THE TANGIBLE OUTCOME",
        title: "Assembly on schedule; report cards ready same-day",
        desc: "Class rankings and subject distributions calculate instantly without a single manual calculator error.",
      },
    ],
    quote: {
      text: "End of term used to mean three weeks of marksheet stress. Now reports are ready the day exams finish.",
      author: "Mr. B. Adeleke",
      role: "Principal, Oakland School",
    },
    preview: {
      title: "Campus Academic & Gate Status",
      badge: "Principal Console",
      statNumber: "810 / 840",
      statLabel: "Students Present Today (96.4%)",
      details: [
        { label: "Staff on Campus", value: "48 / 48 (100%)" },
        { label: "Lesson Plans Approved", value: "Week 5 Vetted" },
        { label: "JSS 2 Gold Attendance", value: "41 / 42 Present", highlight: true },
        { label: "Absentee Alerts Dispatched", value: "30 Parents (SMS)" },
      ],
      footerNote: "Academic oversight running live · Assembly cleared at 8:10 AM",
    },
  },
  {
    id: "bursar",
    name: "Bursar",
    tagline: "Finance & Accounts",
    headline: "Zero fake bank tellers. Automatic stamped receipts.",
    summary:
      "Direct bank webhooks automatically match payments to student names, decrement outstanding balances, and print verifiable receipts.",
    bullets: [
      {
        tag: "1. THE DAILY FRICTION",
        title: "Crowded parent queues & manual statement matching",
        desc: "Spending 4 hours daily matching bank statements against torn or questionable paper bank teller slips.",
      },
      {
        tag: "2. WHAT YOU DO IN EDUCTIVE",
        title: "Instant bank auto-match & stamped e-receipt generation",
        desc: "Bank transfers clear automatically in seconds; cryptographically stamped receipts deliver to parents on WhatsApp.",
      },
      {
        tag: "3. THE TANGIBLE OUTCOME",
        title: "Zero fake tellers; balanced kobo-for-kobo books daily",
        desc: "Export class defaulter rosters in one click and close your accounts by 4:00 PM every single day.",
      },
    ],
    quote: {
      text: "Fake bank alerts and unverified teller slips are completely gone. The system reconciles every kobo.",
      author: "Alhaji M. Ibrahim",
      role: "Chief Bursar, Oakland School",
    },
    preview: {
      title: "Bursary Payment Stream",
      badge: "Bursar Terminal",
      statNumber: "₦185,000",
      statLabel: "Latest Settled Transfer · GTBank NIP",
      details: [
        { label: "Student", value: "Adeyemi Femi" },
        { label: "Class", value: "JSS 2 Gold" },
        { label: "Outstanding Balance", value: "₦0.00 (Cleared)", highlight: true },
        { label: "Receipt Serial", value: "OAK/REC/0417" },
      ],
      footerNote: "Automated payment receipt stamped & delivered to parent phone",
    },
  },
  {
    id: "teacher",
    name: "Teacher",
    tagline: "Classroom & Marks",
    headline: "Less time copying marks. More time actually teaching.",
    summary:
      "Take morning roll-call on your phone in 30 seconds and enter CA scores directly. The system calculates totals, grades, and positions for you.",
    bullets: [
      {
        tag: "1. THE DAILY FRICTION",
        title: "Weekend broadsheet copying & calculation burnout",
        desc: "Spending precious weekends manually transcribing marks into paper broadsheets with hand calculators.",
      },
      {
        tag: "2. WHAT YOU DO IN EDUCTIVE",
        title: "30-second mobile attendance & digital score entry",
        desc: "Mark homeroom attendance on your tablet (works offline) and submit test and exam scores directly.",
      },
      {
        tag: "3. THE TANGIBLE OUTCOME",
        title: "Dignity restored; zero weekend marksheet fatigue",
        desc: "Scores calculate against WAEC scales automatically. Submit term grades in 10 minutes instead of 3 weeks.",
      },
    ],
    quote: {
      text: "I used to spend my weekends copying marks into broadsheets. Now I submit everything from my phone in 10 minutes.",
      author: "Mrs. O. Balogun",
      role: "Mathematics Teacher, SS 2",
    },
    preview: {
      title: "Homeroom & Assessment Ledger",
      badge: "Teacher Portal",
      statNumber: "3rd / 42",
      statLabel: "Adeyemi Femi · Mathematics SS 2",
      details: [
        { label: "1st CA Score (20)", value: "18 / 20" },
        { label: "2nd CA Score (20)", value: "10 / 20" },
        { label: "Exam Score (60)", value: "52 / 60" },
        { label: "Term Total & Grade", value: "80% · A1 (Distinction)", highlight: true },
      ],
      footerNote: "Marks computed automatically · Report card remarks verified",
    },
  },
];

export function LayeredRolesSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);
  const currentRole = ROLES[activeRoleIndex];

  return (
    <section
      id="roles"
      className="relative w-full bg-[#FCFBF8] text-charcoal-900 py-24 xl:py-32 border-t border-line/60 overflow-hidden select-none"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="rolesGrid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#07332A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rolesGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            SECTION HEADER: CLEAR, PUNCHY, ZERO JARGON
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] font-mono font-bold tracking-[2.5px] uppercase text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3.5">
            ROLE-BASED WORKSPACES
          </span>

          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.12] mb-4 text-balance">
            Built for the four people <br className="hidden sm:inline" />
            who run the school.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Every team member sees exactly what they need—nothing more, nothing less.
          </p>

          {/* Role Switcher Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-white rounded-full border border-line shadow-sm">
            {ROLES.map((role, idx) => {
              const isActive = activeRoleIndex === idx;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-ink-900 text-white shadow-md scale-[1.02]"
                      : "text-charcoal-600 hover:text-ink-900 hover:bg-surface"
                  }`}
                >
                  <span>{role.name}</span>
                  <span className="hidden md:inline text-[11px] opacity-60 ml-1.5 font-normal">
                    · {role.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            ROLE SHOWCASE CONTAINER: BALANCED 2-COLUMN VIEW
            Left: Clear benefits & short quote | Right: Compact, focused preview card
           ======================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRole.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center"
          >
            {/* -----------------------------------------------------------------
                LEFT COLUMN: CLEAR, EASY-TO-READ BENEFITS (7 Columns)
               ----------------------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 text-xs font-mono font-bold">
                  {currentRole.name} View
                </span>
                <span className="text-xs text-charcoal-600 font-sans">
                  {currentRole.tagline}
                </span>
              </div>

              <h3 className="font-display font-bold text-ink-900 text-2xl sm:text-3xl xl:text-[34px] leading-tight mb-3">
                {currentRole.headline}
              </h3>

              <p className="text-base text-charcoal-600 font-sans leading-relaxed mb-6 max-w-xl">
                {currentRole.summary}
              </p>

              {/* 3 Clear, Plain-English Benefit Cards: The 3-Question Framework */}
              <div className="space-y-3 w-full mb-8">
                {currentRole.bullets.map((b, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-xl border border-line shadow-xs flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-3.5"
                  >
                    <div className="flex-shrink-0">
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded inline-block ${
                        i === 0
                          ? "bg-red-500/10 text-red-700 border border-red-500/20"
                          : i === 1
                          ? "bg-emerald-500/10 text-emerald-800 border border-emerald-500/20"
                          : "bg-tangerine-500/15 text-tangerine-600 border border-tangerine-500/25"
                      }`}>
                        {b.tag}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-ink-900 font-sans">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-600 font-sans mt-0.5 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authentic Nigerian School Operator Quote */}
              <div className="p-4 rounded-xl bg-surface/80 border border-line/80 w-full flex items-start gap-3">
                <div className="text-emerald-700 font-serif text-2xl leading-none">“</div>
                <div>
                  <p className="text-xs sm:text-sm text-charcoal-800 italic font-sans leading-relaxed">
                    {currentRole.quote.text}
                  </p>
                  <p className="text-xs text-ink-900 font-bold mt-1.5 font-sans">
                    {currentRole.quote.author} ·{" "}
                    <span className="text-charcoal-600 font-normal">
                      {currentRole.quote.role}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* -----------------------------------------------------------------
                RIGHT COLUMN: CLEAN, COMPACT PREVIEW FRAME (5 Columns)
                Balanced size so it never overshadows the section
               ----------------------------------------------------------------- */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-line shadow-[0_16px_36px_rgba(7,51,42,0.08)] p-6 sm:p-7 relative overflow-hidden">
                {/* Top Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-line">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block">
                      {currentRole.preview.badge}
                    </span>
                    <h4 className="font-display font-bold text-ink-900 text-sm mt-0.5">
                      {currentRole.preview.title}
                    </h4>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#12A26B]" />
                </div>

                {/* Primary Metric Tile */}
                <div className="bg-surface/90 rounded-xl p-4 border border-line/70 mb-4">
                  <span className="text-[11px] text-charcoal-600 font-sans block">
                    {currentRole.preview.statLabel}
                  </span>
                  <p className="font-mono font-extrabold text-2xl sm:text-3xl text-ink-900 mt-1">
                    {currentRole.preview.statNumber}
                  </p>
                </div>

                {/* Key Operational Data List */}
                <div className="space-y-2 mb-4 font-sans text-xs">
                  {currentRole.preview.details.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-lg border ${
                        item.highlight
                          ? "bg-emerald-500/10 border-emerald-500/25"
                          : "bg-white border-line/60"
                      }`}
                    >
                      <span className="text-charcoal-600 text-[11px]">
                        {item.label}
                      </span>
                      <strong
                        className={`text-xs ${
                          item.highlight ? "text-emerald-800" : "text-ink-900"
                        }`}
                      >
                        {item.value}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Footer Assurance Tag */}
                <div className="pt-3 border-t border-line/80 flex items-center gap-2 text-[11px] text-charcoal-600 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{currentRole.preview.footerNote}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
