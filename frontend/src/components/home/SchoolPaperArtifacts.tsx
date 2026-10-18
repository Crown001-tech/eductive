"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, CheckCheck } from "lucide-react";

export interface SyncState {
  step: number; // 0: idle, 1: transfer slides in, 2: receipt stamped, 3: tablet pulses, 4: ring unspools, 5: synced
  paid: boolean;
  balance: number;
}

interface SchoolPaperArtifactsProps {
  sync?: SyncState;
  activeFeature?: string | null;
}

export function SchoolPaperArtifacts({
  sync = { step: 0, paid: false, balance: 185000 },
  activeFeature = null,
}: SchoolPaperArtifactsProps) {
  const isAssessmentActive = activeFeature === "assessment";
  const isBursarActive = activeFeature === "bursar";
  const isAttendanceActive = activeFeature === "attendance";

  return (
    <div className="absolute inset-0 pointer-events-none z-24 select-none">
      {/* =====================================================================
          ARTIFACT 1 (SUPPORTING - LEVEL 1 SHADOW): CONTINUOUS ASSESSMENT (CA) SLIP
          - Soft supporting detail, smaller width (230px), light elevation
          - Positioned at (450px, 35px), completely clear of the girl's raised arm/fist
          - Out-of-phase floating breathing motion: 6.4s, delay 1.6s
          - Interactive highlight when "Assessment" feature is clicked
         ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute"
        style={{
          left: "450px",
          top: "35px",
          width: "230px",
        }}
      >
        <motion.div
          animate={{
            y: [5, -5, 5],
            rotate: [-1.5, 1, -1.5],
            scale: isAssessmentActive ? 1.05 : 1,
          }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className={`relative bg-white/95 text-charcoal-800 rounded-[8px] border transition-all duration-300 p-2.5 font-sans text-[10.5px] ${
            isAssessmentActive
              ? "border-emerald-400 ring-2 ring-emerald-400/40 shadow-[0_12px_28px_rgba(18,162,107,0.25)]"
              : "border-line/70 shadow-[0_6px_16px_rgba(7,51,42,0.06)]"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line/70 pb-1 mb-1.5">
            <span className="text-[9.5px] font-bold text-ink-900 uppercase font-display tracking-wider">
              CONTINUOUS ASSESSMENT
            </span>
            <span className="text-[8.5px] bg-emerald-500/10 text-emerald-800 font-bold px-1.5 py-0.2 rounded font-sans">
              TERM 2
            </span>
          </div>
          <div className="flex items-center justify-between text-[9.5px] font-medium text-charcoal-600 mb-1">
            <span className="text-ink-900 font-bold">Mathematics (SS 2)</span>
            <span className="text-emerald-700 font-semibold">Pos: 3rd / 42</span>
          </div>
          <div className="grid grid-cols-4 gap-1 text-center font-mono text-[8.5px] pt-1 border-t border-line/50">
            <div className="bg-surface/70 p-1 rounded">
              <span className="text-charcoal-600 block text-[7.5px]">CA (40)</span>
              <span className="font-bold text-ink-900">28</span>
            </div>
            <div className="bg-surface/70 p-1 rounded">
              <span className="text-charcoal-600 block text-[7.5px]">EXAM (60)</span>
              <span className="font-bold text-ink-900">52</span>
            </div>
            <div className="bg-emerald-500/10 p-1 rounded border border-emerald-500/25">
              <span className="text-emerald-700 block text-[7.5px] font-bold">TOTAL</span>
              <span className="font-bold text-emerald-800">80</span>
            </div>
            <div className="bg-emerald-700 text-white p-1 rounded font-display font-bold text-[9.5px] flex items-center justify-center">
              A1
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================================
          ARTIFACT 2 (HERO ANCHOR - LEVEL 3 SHADOW): OAKLAND COMPREHENSIVE BURSARY FEE RECEIPT
          - Prominent hero artifact (350px wide), deep rich shadow, high contrast
          - Anchored at far right (right: 25px, top: 100px) — completely clear of the boy!
          - 100% matched financial data: Tuition ₦185,000 for Adeyemi Femi (JSS 2 Gold)
          - Dedicated stamp box on lower right: NEVER covers student name, tuition, or balance!
          - Out-of-phase floating breathing motion: 5.6s, delay 0s
          - Interactive highlight when "Bursar fees" feature is clicked
         ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute"
        style={{
          right: "20px",
          top: "95px",
          width: "335px",
        }}
      >
        <motion.div
          animate={{
            y: [-5, 5, -5],
            rotate: [-2.5, -0.5, -2.5],
            scale: isBursarActive ? 1.04 : 1,
          }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className={`relative bg-[#FFFDF8] text-charcoal-900 rounded-[8px] border transition-all duration-300 p-4.5 font-mono text-[11.5px] overflow-hidden ${
            isBursarActive
              ? "border-tangerine-400 ring-2 ring-tangerine-400/40 shadow-[0_28px_56px_rgba(255,106,26,0.22)]"
              : "border-[#D8CEBA] shadow-[0_24px_50px_rgba(7,51,42,0.20)]"
          }`}
        >
          {/* Perforated Top Edge Teeth */}
          <div className="absolute top-0 left-0 right-0 h-[6px] flex justify-between px-2 -mt-[3px]">
            {Array.from({ length: 26 }).map((_, i) => (
              <span key={i} className="w-[5px] h-[5px] rounded-full bg-white border border-[#D8CEBA]" />
            ))}
          </div>

          {/* Receipt Header */}
          <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-2.5 mb-2.5 pt-1">
            <div>
              <p className="font-bold text-ink-900 tracking-wider text-[11.5px] uppercase font-display">
                OAKLAND COMPREHENSIVE HIGH SCHOOL
              </p>
              <p className="text-[9.5px] text-charcoal-600 font-sans tracking-wide">
                BURSARY E-RECEIPT · FIRST TERM 2024/2025
              </p>
            </div>
            <span className="text-[9.5px] bg-emerald-500/15 text-emerald-800 font-bold px-2 py-0.5 rounded font-mono">
              OAK/REC/0417
            </span>
          </div>

          {/* Student & Financial Data Rows (Unobstructed, full width) */}
          <div className="space-y-1.5 text-[11.5px] text-charcoal-900 font-sans mb-2.5">
            <div className="flex justify-between items-baseline">
              <span className="text-charcoal-600 text-[10.5px]">Student Name:</span>
              <span className="font-bold text-ink-900 text-[12.5px]">Adeyemi Femi (JSS 2 Gold)</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-charcoal-600 text-[10.5px]">Term Tuition & Levies:</span>
              <span className="font-bold font-mono text-[12.5px]">₦185,000.00</span>
            </div>
            <div className="flex justify-between items-baseline text-emerald-800">
              <span className="text-charcoal-600 text-[10.5px]">Amount Credited (Bank Transfer):</span>
              <span className="font-bold font-mono text-[12.5px] text-emerald-700">₦185,000.00</span>
            </div>
            <div className="flex justify-between items-baseline border-t border-dashed border-[#E5DEC9] pt-1">
              <span className="text-charcoal-600 text-[10.5px]">Outstanding Balance Due:</span>
              <span className="font-extrabold font-mono text-[14px] text-emerald-700">
                ₦0.00
              </span>
            </div>
          </div>

          {/* Bottom metadata and dedicated stamp row - Perfectly decoupled */}
          <div className="flex items-end justify-between pt-2 border-t border-[#EDE6D8] mt-1">
            <div className="text-[9.5px] text-charcoal-600 font-mono space-y-0.5">
              <p>CHANNEL: DIRECT BANK TRANSFER</p>
              <p className="text-emerald-800 font-bold">STATUS: RECONCILED & CLEARED</p>
            </div>

            {/* Dedicated Tangerine PAID Stamp Space - Never covers any text */}
            <div className="relative w-28 h-7 flex items-center justify-end">
              <div className="border-[2px] border-tangerine-500 rounded px-2 py-0.5 bg-tangerine-500/15 backdrop-blur-[0.5px] shadow-sm pointer-events-none">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-tangerine-600 text-[13px] tracking-[1.5px] uppercase leading-none">
                    PAID
                  </span>
                  <span className="text-[8px] font-sans font-bold text-tangerine-600 uppercase border-l border-tangerine-500/50 pl-1.5">
                    12 OCT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================================
          ARTIFACT 3 (SUPPORTING - LEVEL 2 SHADOW): RULED ATTENDANCE REGISTER
          - Compact supporting detail (235px wide), medium elevation
          - Shifted to (640px, 625px), floating cleanly below the students' leap!
          - Out-of-phase floating breathing motion: 5.9s, delay 3.2s
          - Interactive highlight when "Attendance" feature is clicked
         ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute"
        style={{
          left: "640px",
          top: "625px",
          width: "235px",
        }}
      >
        <motion.div
          animate={{
            y: [-6, 4, -6],
            rotate: [1.5, 3.5, 1.5],
            scale: isAttendanceActive ? 1.05 : 1,
          }}
          transition={{ duration: 5.9, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
          className={`relative bg-[#FAF9F5]/95 text-charcoal-800 rounded-[6px] border transition-all duration-300 p-3 font-sans text-[10px] overflow-hidden ${
            isAttendanceActive
              ? "border-emerald-400 ring-2 ring-emerald-400/40 shadow-[0_14px_30px_rgba(18,162,107,0.25)]"
              : "border-[#E5DEC9]/80 shadow-[0_8px_20px_rgba(7,51,42,0.08)]"
          }`}
        >
          {/* Red Left Margin Line */}
          <div className="absolute top-0 bottom-0 left-[24px] w-[1px] bg-red-400/40" />

          {/* Register Header */}
          <div className="pl-3.5 pb-1 border-b border-[#E5DEC9] mb-1 flex items-center justify-between">
            <div>
              <p className="font-bold text-[9.5px] text-ink-900 uppercase tracking-wider font-display">
                CLASS REGISTER · JSS 2 GOLD
              </p>
              <p className="text-[8.5px] text-charcoal-600">Monday Roll Call · 8:02 AM</p>
            </div>
          </div>

          {/* Ruled Student Rows */}
          <div className="pl-3.5 space-y-1 text-[9.5px]">
            <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-0.5">
              <span className="text-charcoal-800 font-medium">1. Abubakar Ibrahim</span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5 text-[8.5px]">
                <Check className="w-2.5 h-2.5 stroke-[3]" /> 8:00am
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-0.5">
              <span className="text-charcoal-900 font-bold text-emerald-800">2. Adeyemi Femi</span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5 text-[8.5px]">
                <Check className="w-2.5 h-2.5 stroke-[3]" /> 7:58am
              </span>
            </div>
            <div className="flex items-center justify-between bg-tangerine-500/10 px-1 -mx-1 rounded py-0.5">
              <span className="text-tangerine-600 font-semibold">3. Chukwuma David</span>
              <span className="text-tangerine-500 font-black text-[8.5px] uppercase tracking-wide">
                ABSENT
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================================
          TRANSIENT SYNC NOTIFICATION: BANK TRANSFER
          - Anchored at far right (right: 25px, top: 345px), width 320px
          - Placed directly under Bursary Receipt, 100% clear of the boy!
          - Full text: "₦185,000 · Mrs Adeyemi (JSS 2 Gold)" without ellipsis
          - Slides in during sync loop (step 1 & 2), slides out smoothly at step 5
         ===================================================================== */}
      <AnimatePresence>
        {(sync.step === 1 || sync.step === 2 || sync.step === 3 || sync.step === 4) && (
          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 pointer-events-auto"
            style={{
              right: "20px",
              top: "340px",
              width: "310px",
            }}
          >
            <div className="bg-ink-900 text-white rounded-[12px] p-3 shadow-2xl border border-emerald-400/40 flex items-center gap-3 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 font-display font-bold text-xs">
                ₦
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-white leading-tight font-display">
                    Bank Transfer Confirmed
                  </p>
                </div>
                <p className="text-[10px] text-emerald-300 font-medium truncate font-sans">
                  ₦185,000 · Adeyemi Femi · Receipt #0417 Issued
                </p>
              </div>
              <CheckCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
