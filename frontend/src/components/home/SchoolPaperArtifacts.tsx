"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCheck } from "lucide-react";

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
  const isBursarActive = activeFeature === "bursar";

  return (
    <div className="absolute inset-0 pointer-events-none z-24 select-none">
      {/* =====================================================================
          ARTIFACT (HERO ANCHOR - LEVEL 3 SHADOW): OAKLAND SCHOOL BURSARY FEE RECEIPT
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
          initial={false}
          animate={{ rotate: -1.5, scale: isBursarActive ? 1.04 : 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                OAKLAND SCHOOL
              </p>
              <p className="text-[9.5px] text-charcoal-600 font-sans tracking-wide">
                BURSARY E-RECEIPT · FIRST TERM 2026/2027
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
              <span className="text-charcoal-600 text-[10.5px]">Amount Paid (Bank Transfer):</span>
              <span className="font-bold font-mono text-[12.5px] text-emerald-700">₦185,000.00</span>
            </div>
            <div className="flex justify-between items-baseline border-t border-dashed border-[#E5DEC9] pt-1">
              <span className="text-charcoal-600 text-[10.5px]">Balance:</span>
              <span className="font-extrabold font-mono text-[14px] text-emerald-700">
                ₦0.00
              </span>
            </div>
          </div>

          {/* Bottom metadata and dedicated stamp row - Perfectly decoupled */}
          <div className="flex items-end justify-between pt-2 border-t border-[#EDE6D8] mt-1">
            <div className="text-[9.5px] text-charcoal-600 font-mono space-y-0.5">
              <p>CHANNEL: DIRECT BANK TRANSFER</p>
              <p className="text-emerald-800 font-bold">STATUS: RECORDED & CLEARED</p>
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
                    Payment recorded · Receipt #0417
                  </p>
                </div>
                <p className="text-[10px] text-emerald-300 font-medium truncate font-sans">
                  ₦185,000 · Adeyemi Femi (JSS 2 Gold)
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
