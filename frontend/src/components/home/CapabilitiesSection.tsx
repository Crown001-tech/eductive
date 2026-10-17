"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Clock,
  Search,
  Download,
  Printer,
  Sparkles,
  Award,
} from "lucide-react";
import { ProductFrame } from "@/components/ui/ProductFrame";

interface Capability {
  id: string;
  cluster: "finance" | "academics" | "operations";
  clusterLabel: string;
  number: string;
  title: string;
  shortSummary: string;
  fullDescription: string;
  badge: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "bursary",
    cluster: "finance",
    clusterLabel: "Financial Command",
    number: "01",
    title: "Automated Bursary & Bank Clearance",
    shortSummary: "Direct bank webhook settlement with automated receipt stamping.",
    fullDescription:
      "Eliminate fake teller slips and manual bank reconciliation. When a parent pays via direct bank transfer, card, or school payment link, EDUCTIVE matches the transaction reference to the student ID, clears fees, and stamps a tamper-proof digital e-receipt.",
    badge: "Bursar & Accounts",
    metrics: [
      { label: "Reconciliation Latency", value: "0.0s" },
      { label: "Fake Slip Prevention", value: "100%" },
    ],
    accentColor: "#12A26B",
  },
  {
    id: "audit",
    cluster: "finance",
    clusterLabel: "Financial Command",
    number: "02",
    title: "Proprietor Cashflow & Multi-Account Audit",
    shortSummary: "Real-time bank balances, petty cash vouchers, and audit trail.",
    fullDescription:
      "School owners inspect exact cash inflows across Zenith, GTBank, and First Bank in real time. Track term collection pacing, approve departmental expense vouchers, and verify zero discrepancies between bank statements and school records.",
    badge: "Proprietor & Board",
    metrics: [
      { label: "Cashflow Variance", value: "₦0.00" },
      { label: "Expense Approval", value: "1-Click" },
    ],
    accentColor: "#FF6A1A",
  },
  {
    id: "assessment",
    cluster: "academics",
    clusterLabel: "Academic Command",
    number: "03",
    title: "Continuous Assessment (CA) & Broadsheets",
    shortSummary: "WAEC standard CA 40 / Exam 60 engine with instant rank calculation.",
    fullDescription:
      "Teachers input test and assignment marks once. EDUCTIVE computes class positions, cumulative grade point averages, and subject rankings automatically using WAEC / NECO / BECE standard grading scales without paper marksheets.",
    badge: "Teachers & Exams",
    metrics: [
      { label: "Marksheet Lag", value: "Zero" },
      { label: "Grading Scale", value: "WAEC A1-F9" },
    ],
    accentColor: "#12A26B",
  },
  {
    id: "cbt",
    cluster: "academics",
    clusterLabel: "Academic Command",
    number: "04",
    title: "Computer-Based Testing (CBT) Center",
    shortSummary: "Termly entrance and terminal CBT with zero paper leaks.",
    fullDescription:
      "Run mid-term tests and mock JAMB/WAEC examinations in your computer lab. Features randomized question banks, timed auto-submission, instant student scoring, and detailed subject area weakness diagnostics.",
    badge: "ICT & Examination",
    metrics: [
      { label: "Grading Speed", value: "Instantaneous" },
      { label: "Question Leakage", value: "0%" },
    ],
    accentColor: "#3DDC97",
  },
  {
    id: "report_card",
    cluster: "academics",
    clusterLabel: "Academic Command",
    number: "05",
    title: "Digital Terminal Report Cards & Dossier",
    shortSummary: "Tamper-proof terminal report cards with principal seal & QR code.",
    fullDescription:
      "Generate complete, beautiful laminated terminal reports complete with affective domain traits, teacher comments, principal digital signature, and secure QR verification. Parents access PDF reports instantly via SMS/portal.",
    badge: "Principal & Parents",
    metrics: [
      { label: "Production Time", value: "< 2 Mins" },
      { label: "Security Verification", value: "QR Digital Seal" },
    ],
    accentColor: "#FF6A1A",
  },
  {
    id: "attendance",
    cluster: "operations",
    clusterLabel: "Campus Governance",
    number: "06",
    title: "Smart Gate Attendance & Parent SMS Gateway",
    shortSummary: "Biometric roll-call with automated morning WhatsApp notifications.",
    fullDescription:
      "Students check in at the school gate via smart card or teacher roll call. Absentees are flagged instantly at 8:15 AM, dispatching verified WhatsApp/SMS notices to parents with arrival timestamps and bus routing updates.",
    badge: "Security & Homeroom",
    metrics: [
      { label: "Notification Window", value: "8:00–8:15 AM" },
      { label: "Parent Delivery Rate", value: "99.2%" },
    ],
    accentColor: "#12A26B",
  },
  {
    id: "payroll",
    cluster: "operations",
    clusterLabel: "Campus Governance",
    number: "07",
    title: "Staff Lesson Note Approval & Payroll",
    shortSummary: "Weekly curriculum vetting, staff attendance, and salary slips.",
    fullDescription:
      "Principals review and approve weekly lesson notes digitally before Monday assembly. Automated staff clock-in records feed directly into the bursary for monthly PAYE, pension schedules, and digital pay slip delivery.",
    badge: "HR & Administration",
    metrics: [
      { label: "Lesson Note Vetting", value: "100% Digital" },
      { label: "Pay Slip Distribution", value: "Automated" },
    ],
    accentColor: "#3DDC97",
  },
  {
    id: "admissions",
    cluster: "operations",
    clusterLabel: "Campus Governance",
    number: "08",
    title: "Admissions & Cumulative Student Ledger",
    shortSummary: "From JSS 1 entrance exams to SS 3 graduation transcript.",
    fullDescription:
      "Manage prospective candidate registration, entrance examination results, and guarantor verifications online. Once enrolled, the student's historical academic, medical, and behavioral record stays linked for all 6 years.",
    badge: "Admissions Office",
    metrics: [
      { label: "Dossier History", value: "6 Full Years" },
      { label: "Paper Storage Saved", value: "100%" },
    ],
    accentColor: "#FF6A1A",
  },
];

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<string>("bursary");
  const [selectedCluster, setSelectedCluster] = useState<string>("all");

  const activeCap = CAPABILITIES.find((c) => c.id === activeTab) || CAPABILITIES[0];

  const filteredCaps =
    selectedCluster === "all"
      ? CAPABILITIES
      : CAPABILITIES.filter((c) => c.cluster === selectedCluster);

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#07332A] text-white py-24 xl:py-36 overflow-hidden border-t border-emerald-500/20 select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="darkArchGrid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="#12A26B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#darkArchGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Lighting Orbs */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Master 1440px Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            SECTION HEADER
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 xl:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(18,162,107,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-tangerine-400" />
            <span>OPERATIONAL CAPABILITIES · THE 8 PILLARS</span>
          </div>

          <h2 className="font-display font-bold text-white text-[36px] sm:text-[46px] xl:text-[54px] leading-[1.08] tracking-[-1.2px] mb-5 text-balance">
            Engineered for Nigerian schools. <br />
            <span className="text-emerald-400">From morning roll-call</span> to WAEC broadsheets.
          </h2>

          <p className="text-[17px] xl:text-[19px] text-surface/80 font-sans leading-relaxed max-w-2xl text-balance mb-8">
            Every administrative department operates on purpose-built digital workflows
            tailored to the operational realities of Nigerian primary and secondary schools.
          </p>

          {/* Cluster Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-ink-800/80 backdrop-blur-md rounded-full border border-emerald-500/25 shadow-lg">
            {[
              { id: "all", label: "All 8 Pillars" },
              { id: "finance", label: "Financial Command" },
              { id: "academics", label: "Academic & Exams" },
              { id: "operations", label: "Campus Governance" },
            ].map((tab) => {
              const isActive = selectedCluster === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCluster(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-emerald-500 text-ink-900 font-bold shadow-md scale-[1.02]"
                      : "text-surface/70 hover:text-white hover:bg-ink-700/50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            TWO-COLUMN COORDINATED CONSOLE (Directory Rail Left + Interactive Mockup Right)
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* -------------------------------------------------------------------
              LEFT COLUMN: CAPABILITY DIRECTORY RAIL (5 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {filteredCaps.map((cap) => {
              const isSelected = activeTab === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-ink-800/90 border-emerald-400 shadow-[0_12px_32px_rgba(7,51,42,0.4)] ring-1 ring-emerald-400/30"
                      : "bg-ink-800/30 border-emerald-500/15 hover:bg-ink-800/60 hover:border-emerald-500/30"
                  }`}
                >
                  {/* Active highlight indicator edge */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-emerald-400 to-tangerine-500" />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-ink-700/60 text-surface/60"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-surface/60">
                        {cap.clusterLabel}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-tangerine-500/20 text-tangerine-400 border border-tangerine-500/30"
                          : "text-surface/50"
                      }`}
                    >
                      {cap.badge}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-bold text-base mb-1 transition-colors ${
                      isSelected ? "text-white" : "text-surface/90 group-hover:text-white"
                    }`}
                  >
                    {cap.title}
                  </h3>

                  <p className="text-xs text-surface/70 font-sans leading-relaxed line-clamp-2">
                    {cap.shortSummary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: LIVING NIGERIAN PRODUCT FRAME (7 Columns)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 sticky top-28">
            <ProductFrame
              title={`EDUCTIVE · ${activeCap.badge.toUpperCase()}`}
              badge="VERIFIED LIVE WORKSPACE"
              isDarkTheme={true}
              className="shadow-[0_24px_60px_rgba(7,51,42,0.45)] border-emerald-500/30"
            >
              <div className="p-6 sm:p-8 bg-[#05261F] text-white min-h-[580px] flex flex-col justify-between">
                
                {/* Frame Top Context */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-emerald-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <h4 className="font-display font-bold text-lg text-white">
                            {activeCap.title}
                          </h4>
                        </div>
                        <p className="text-xs text-emerald-300/80 font-sans mt-0.5">
                          Oakland Comprehensive High School · Academic Year 2024/2025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-ink-800 text-surface/80 hover:text-white border border-emerald-500/20 text-xs font-sans flex items-center gap-1.5 transition-colors">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print</span>
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-emerald-500 text-ink-900 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors">
                        <Download className="w-3.5 h-3.5" />
                        <span>Export</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Mockup Body per Capability */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCap.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* BURSARY MOCKUP */}
                      {activeCap.id === "bursary" && (
                        <div className="space-y-4 font-mono text-xs">
                          {/* Search & Status Bar */}
                          <div className="flex items-center justify-between bg-ink-800/80 p-3 rounded-xl border border-emerald-500/20">
                            <div className="flex items-center gap-2 text-surface/60 font-sans">
                              <Search className="w-4 h-4 text-emerald-400" />
                              <span>Filter: Adeyemi Femi (JSS 2 Gold)</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                              BANK GATEWAY: ACTIVE
                            </span>
                          </div>

                          {/* Bank Transaction Stream Row */}
                          <div className="bg-ink-800/60 p-4 rounded-xl border border-emerald-500/30 space-y-3">
                            <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
                              <div>
                                <p className="font-bold text-white text-sm">
                                  ₦185,000.00 · FULL TUITION CLEARED
                                </p>
                                <p className="text-[11px] text-emerald-300/80 font-sans">
                                  Payer: Mrs. Funke Adeyemi · Bank: GTBank · Bank Ref: #4092-8192
                                </p>
                              </div>
                              <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center gap-1">
                                <Check className="w-3.5 h-3.5 stroke-[3]" /> SETTLED
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-3 text-[11px] font-sans">
                              <div className="bg-ink-900/60 p-2.5 rounded-lg border border-emerald-500/15">
                                <span className="text-surface/60 block">Student</span>
                                <span className="font-bold text-white">Adeyemi Femi</span>
                              </div>
                              <div className="bg-ink-900/60 p-2.5 rounded-lg border border-emerald-500/15">
                                <span className="text-surface/60 block">Class</span>
                                <span className="font-bold text-emerald-300">JSS 2 Gold</span>
                              </div>
                              <div className="bg-ink-900/60 p-2.5 rounded-lg border border-emerald-500/15">
                                <span className="text-surface/60 block">Term Debt</span>
                                <span className="font-bold text-emerald-400 font-mono">₦0.00 (100% Cleared)</span>
                              </div>
                            </div>
                          </div>

                          {/* Stamped E-Receipt Preview */}
                          <div className="bg-[#FFFDF8] text-charcoal-900 p-4 rounded-xl border border-[#D8CEBA] flex items-center justify-between font-mono">
                            <div>
                              <p className="font-display font-bold text-xs uppercase tracking-wide text-ink-900">
                                OAKLAND HIGH · OFFICIAL BURSARY E-RECEIPT
                              </p>
                              <p className="text-[10px] text-charcoal-600 font-sans">
                                Receipt #OAK/REC/0417 · Term 2 2024/2025 · Verified
                              </p>
                            </div>
                            <div className="border border-tangerine-500 px-2 py-0.5 rounded bg-tangerine-500/10 text-tangerine-600 font-display font-black text-xs -rotate-6">
                              PAID · 12 OCT
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PROPRIETOR AUDIT MOCKUP */}
                      {activeCap.id === "audit" && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3 font-mono">
                            <div className="bg-ink-800/80 p-4 rounded-xl border border-emerald-500/20">
                              <span className="text-xs text-emerald-300 block font-sans">
                                TOTAL TERM COLLECTIONS
                              </span>
                              <p className="font-extrabold text-2xl text-white mt-1">
                                ₦48,250,000
                              </p>
                              <span className="text-[11px] text-emerald-400 font-sans">
                                92.8% of ₦52.0M Target
                              </span>
                            </div>
                            <div className="bg-ink-800/80 p-4 rounded-xl border border-emerald-500/20">
                              <span className="text-xs text-emerald-300 block font-sans">
                                BANK RECONCILIATION
                              </span>
                              <p className="font-extrabold text-2xl text-emerald-400 mt-1">
                                ₦0.00 Variance
                              </p>
                              <span className="text-[11px] text-surface/70 font-sans">
                                3 Accounts Verified (GTBank, Zenith, FirstBank)
                              </span>
                            </div>
                          </div>

                          <div className="bg-ink-800/60 p-4 rounded-xl border border-emerald-500/20 font-sans text-xs">
                            <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-2 font-mono">
                              PENDING EXPENSE VOUCHER APPROVALS
                            </p>
                            <div className="flex items-center justify-between p-2.5 bg-ink-900/60 rounded-lg border border-emerald-500/15">
                              <div>
                                <p className="font-semibold text-white">Diesel for Campus Generator (500L)</p>
                                <p className="text-[11px] text-surface/60 font-mono">Requested by Estate Mgr · ₦650,000</p>
                              </div>
                              <div className="flex gap-2">
                                <button className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px] hover:bg-emerald-500/30">
                                  Approve
                                </button>
                                <button className="px-2.5 py-1 rounded bg-tangerine-500/20 text-tangerine-400 font-bold text-[11px] hover:bg-tangerine-500/30">
                                  Hold
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ASSESSMENT & BROADSHEET MOCKUP */}
                      {activeCap.id === "assessment" && (
                        <div className="space-y-4 font-sans text-xs">
                          <div className="flex items-center justify-between bg-ink-800/80 p-3 rounded-xl border border-emerald-500/20">
                            <div>
                              <span className="font-bold text-white block">
                                JSS 2 Gold · Mathematics Terminal Broadsheet
                              </span>
                              <span className="text-[11px] text-emerald-300 font-mono">
                                42 Students · WAEC Grading Scheme
                              </span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                              COMPUTED: 100%
                            </span>
                          </div>

                          <div className="bg-ink-800/60 rounded-xl border border-emerald-500/20 overflow-hidden font-mono text-[11px]">
                            <div className="grid grid-cols-6 gap-2 p-2.5 bg-ink-900 text-emerald-300 font-bold border-b border-emerald-500/20 text-center font-sans text-xs">
                              <span className="text-left col-span-2">Student</span>
                              <span>CA (40)</span>
                              <span>Exam (60)</span>
                              <span>Total</span>
                              <span>Grade</span>
                            </div>
                            <div className="grid grid-cols-6 gap-2 p-2.5 border-b border-emerald-500/10 text-center items-center bg-emerald-500/10">
                              <span className="text-left col-span-2 font-bold text-white font-sans">
                                01. Adeyemi Femi
                              </span>
                              <span>28</span>
                              <span>52</span>
                              <span className="font-bold text-emerald-300">80</span>
                              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold">A1</span>
                            </div>
                            <div className="grid grid-cols-6 gap-2 p-2.5 border-b border-emerald-500/10 text-center items-center">
                              <span className="text-left col-span-2 text-surface/90 font-sans">
                                02. Abubakar Ibrahim
                              </span>
                              <span>24</span>
                              <span>48</span>
                              <span className="font-bold text-white">72</span>
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">B2</span>
                            </div>
                            <div className="grid grid-cols-6 gap-2 p-2.5 text-center items-center">
                              <span className="text-left col-span-2 text-surface/90 font-sans">
                                03. Chukwuma David
                              </span>
                              <span>20</span>
                              <span>45</span>
                              <span className="font-bold text-white">65</span>
                              <span className="px-2 py-0.5 rounded bg-surface/20 text-surface/90 font-bold">C4</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CBT CENTER MOCKUP */}
                      {activeCap.id === "cbt" && (
                        <div className="space-y-4 font-sans text-xs">
                          <div className="bg-ink-800/80 p-4 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-white text-sm">
                                Terminal CBT Examination: SS 2 Physics
                              </p>
                              <p className="text-[11px] text-surface/60 font-mono">
                                50 Questions · Time Remaining: 42m : 18s
                              </p>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" /> SECURE SESSION
                            </span>
                          </div>

                          <div className="bg-ink-800/60 p-4 rounded-xl border border-emerald-500/20">
                            <p className="text-surface/70 font-mono text-[11px] mb-1">
                              QUESTION 14 OF 50 · WEIGHT: 2 MARKS
                            </p>
                            <p className="text-sm font-semibold text-white leading-relaxed mb-4">
                              A body of mass 5kg moving with a velocity of 10m/s collides with a stationary body of mass 15kg. If they stick together, what is their common velocity?
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-400 text-white font-medium flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-500 text-ink-900 font-bold flex items-center justify-center text-[10px]">A</span>
                                <span>2.5 m/s (Selected)</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-ink-900/60 border border-emerald-500/15 text-surface/80 flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-ink-800 text-surface/60 font-bold flex items-center justify-center text-[10px]">B</span>
                                <span>5.0 m/s</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* REPORT CARD MOCKUP */}
                      {activeCap.id === "report_card" && (
                        <div className="bg-[#FFFDF8] text-charcoal-900 p-5 rounded-xl border border-[#D8CEBA] font-sans text-xs">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8CEBA]">
                            <div>
                              <p className="font-display font-bold text-ink-900 text-sm uppercase tracking-wide">
                                OAKLAND COMPREHENSIVE HIGH SCHOOL
                              </p>
                              <p className="text-[10px] text-charcoal-600 font-mono">
                                Official Terminal Report Card · Term 2 2024/2025
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="font-mono font-bold text-xs bg-emerald-500/15 text-emerald-800 px-2 py-0.5 rounded">
                                PASS WITH DISTINCTION
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-3 text-[11px] bg-[#FAF9F5] p-2.5 rounded border border-[#EDE6D8]">
                            <div><span className="text-charcoal-600 block">Student:</span><strong className="text-ink-900">Adeyemi Femi</strong></div>
                            <div><span className="text-charcoal-600 block">Class:</span><strong className="text-ink-900">JSS 2 Gold</strong></div>
                            <div><span className="text-charcoal-600 block">Position:</span><strong className="text-emerald-700">3rd of 42</strong></div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-[#D8CEBA] text-[11px]">
                            <span className="text-charcoal-600 italic">&ldquo;An exceptionally focused student with strong analytical skills.&rdquo;</span>
                            <div className="border border-emerald-700 text-emerald-800 font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold">
                              PRINCIPAL SEAL: VERIFIED
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ATTENDANCE MOCKUP */}
                      {activeCap.id === "attendance" && (
                        <div className="space-y-4 font-sans text-xs">
                          <div className="bg-ink-800/80 p-3.5 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-white">Main Campus Gate Terminal · Active Scanner</p>
                              <p className="text-[11px] text-emerald-300 font-mono">Morning Roll Call: 810 of 840 (96.4%)</p>
                            </div>
                            <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px]">
                              LIVE: 8:02 AM
                            </span>
                          </div>

                          <div className="p-3.5 bg-ink-800/60 rounded-xl border border-emerald-500/20 space-y-2">
                            <div className="flex items-center justify-between p-2 rounded bg-emerald-500/10 border border-emerald-500/25">
                              <span className="font-semibold text-white">Adeyemi Femi (JSS 2 Gold)</span>
                              <span className="text-emerald-300 font-mono font-bold">Arrived: 8:02 AM · WhatsApp Sent</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-ink-900/60 border border-emerald-500/15 text-surface/80">
                              <span>Abubakar Ibrahim (SS 2 Science)</span>
                              <span className="text-emerald-400 font-mono">Arrived: 8:00 AM · WhatsApp Sent</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-tangerine-500/10 border border-tangerine-500/25 text-tangerine-300">
                              <span>Chukwuma David (JSS 2 Gold)</span>
                              <span className="font-mono font-bold">Absent at 8:15 AM · SMS Alert Sent</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PAYROLL MOCKUP */}
                      {activeCap.id === "payroll" && (
                        <div className="space-y-4 font-sans text-xs">
                          <div className="bg-ink-800/80 p-3.5 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-white">Weekly Curriculum Vetting & Lesson Notes</p>
                              <p className="text-[11px] text-surface/60 font-mono">Week 5 Submissions: 48 of 48 Teachers</p>
                            </div>
                            <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px]">
                              100% VETTED
                            </span>
                          </div>

                          <div className="bg-ink-800/60 p-4 rounded-xl border border-emerald-500/20 space-y-2.5">
                            <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
                              <div>
                                <p className="font-bold text-white">Mrs. Balogun · Mathematics Department</p>
                                <p className="text-[11px] text-emerald-300/80">Lesson Plan: Simultaneous Quadratic Equations (SS 2)</p>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold font-mono">
                                APPROVED BY PRINCIPAL
                              </span>
                            </div>
                            <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-surface/70">
                              <span>Monthly Salary Schedule: Ready</span>
                              <span className="text-emerald-400">PAYE & Pension Computed</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ADMISSIONS MOCKUP */}
                      {activeCap.id === "admissions" && (
                        <div className="space-y-4 font-sans text-xs">
                          <div className="bg-ink-800/80 p-3.5 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                            <div>
                              <p className="font-bold text-white">Prospective Student Admissions Portal</p>
                              <p className="text-[11px] text-emerald-300 font-mono">JSS 1 Entrance Examination 2024/2025</p>
                            </div>
                            <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px]">
                              BATCH A RESULTS
                            </span>
                          </div>

                          <div className="bg-ink-800/60 p-4 rounded-xl border border-emerald-500/20 space-y-2">
                            <div className="flex items-center justify-between p-2.5 bg-ink-900/60 rounded-lg border border-emerald-500/15">
                              <div>
                                <p className="font-bold text-white">Candidate: Toluwalase Adeleke</p>
                                <p className="text-[11px] text-surface/60 font-mono">Exam Score: 86% · Medical Dossier: Uploaded</p>
                              </div>
                              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px]">
                                ADMISSION OFFERED
                              </span>
                            </div>
                            <div className="p-2.5 text-[11px] text-surface/70 font-sans border-t border-emerald-500/10">
                              Permanent 6-Year Cumulative Student Profile Initialized.
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Frame Bottom Description & Dynamic Metrics */}
                <div className="pt-6 border-t border-emerald-500/20">
                  <p className="text-sm text-surface/90 font-sans leading-relaxed mb-4">
                    {activeCap.fullDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {activeCap.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-ink-800/70 border border-emerald-500/20"
                      >
                        <span className="text-[11px] font-sans text-emerald-300/80 block uppercase">
                          {m.label}
                        </span>
                        <span className="font-mono font-bold text-lg text-white mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ProductFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
