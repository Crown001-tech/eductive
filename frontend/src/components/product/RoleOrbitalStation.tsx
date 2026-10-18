"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  Sparkles,
  Users,
  Award,
} from "lucide-react";

interface RoleAccess {
  id: string;
  name: string;
  title: string;
  department: string;
  avatar: string;
  angleDeg: number; // Position on orbit (degrees)
  orbitRadius: number; // Distance from center
  orbitRing: 1 | 2 | 3; // Which concentric ring
  headline: string;
  summary: string;
  permissions: string[];
  screenBadge: string;
}

const ROLES: RoleAccess[] = [
  {
    id: "proprietor",
    name: "Dr. A. Adeleke",
    title: "Proprietor & Founder",
    department: "Executive Board",
    avatar: "/images/avatars/proprietor.jpg",
    angleDeg: -55,
    orbitRadius: 240,
    orbitRing: 3,
    headline: "Cashflow transparency across school accounts.",
    summary:
      "Inspect total term fees, monitor multi-bank balances, and track daily attendance across all classes in real time.",
    permissions: [
      "Live term fee collections and balance tracking",
      "Approve departmental expense vouchers with one click",
      "Zero cash discrepancies between school books and banks",
    ],
    screenBadge: "PROPRIETOR CONSOLE",
  },
  {
    id: "principal",
    name: "Rev. Dr. Okonjo",
    title: "Principal & Head of School",
    department: "Academic Leadership",
    avatar: "/images/principal-teacher-transparent.png",
    angleDeg: 25,
    orbitRadius: 180,
    orbitRing: 2,
    headline: "Approve broadsheets and oversee daily operations.",
    summary:
      "Sign off terminal report cards, vet weekly teacher lesson plans, and resolve student attendance queries from your phone.",
    permissions: [
      "One-click approval for end-of-term broadsheets",
      "Digital vetting for weekly subject lesson notes",
      "Instant query alerts for unexcused student absences",
    ],
    screenBadge: "PRINCIPAL CONSOLE",
  },
  {
    id: "bursar",
    name: "Mrs. F. Adebayo",
    title: "School Bursar & Accountant",
    department: "Bursary & Accounts",
    avatar: "/images/avatars/bursar.jpg",
    angleDeg: 125,
    orbitRadius: 240,
    orbitRing: 3,
    headline: "Record payments with zero fake teller disputes.",
    summary:
      "Match bank transfers in seconds, issue tamper-proof stamped receipts, and export clean defaulters lists with one click.",
    permissions: [
      "Automated ₦0.00 balance update upon payment",
      "Official stamped receipt sent straight to WhatsApp",
      "Instant defaulters and debtors list by class arm",
    ],
    screenBadge: "BURSARY STATION",
  },
  {
    id: "class-teacher",
    name: "Mrs. B. Okon",
    title: "Homeroom Class Teacher",
    department: "JSS 2 Gold",
    avatar: "/images/avatars/class-teacher.jpg",
    angleDeg: -140,
    orbitRadius: 180,
    orbitRing: 2,
    headline: "Take morning roll-call in thirty seconds.",
    summary:
      "Mark attendance on any mobile phone. The system notifies parents immediately and flags absent students by 8:15 AM.",
    permissions: [
      "Paperless register that never gets lost or torn",
      "Automatic arrival timestamps sent to parents",
      "Compute termly attendance percentages automatically",
    ],
    screenBadge: "CLASS REGISTER",
  },
  {
    id: "subject-teacher",
    name: "Mr. T. Balogun",
    title: "Subject Teacher",
    department: "Mathematics & Science",
    avatar: "/images/avatars/subject-teacher.jpg",
    angleDeg: -10,
    orbitRadius: 120,
    orbitRing: 1,
    headline: "Enter test marks once. Broadsheets compute.",
    summary:
      "Enter continuous assessment test marks once. The system calculates class positions and WAEC A1 to F9 grades automatically.",
    permissions: [
      "WAEC and NECO standard grading scales built in",
      "Built-in score limits prevent accidental typing errors",
      "Class position and cumulative rank computed instantly",
    ],
    screenBadge: "ASSESSMENT BROADSHEET",
  },
];

export function RoleOrbitalStation() {
  const [activeRoleId, setActiveRoleId] = useState<string>("proprietor");
  const activeRole = ROLES.find((r) => r.id === activeRoleId) || ROLES[0];

  return (
    <section
      id="roles-orbital"
      className="relative w-full bg-[#05261F] text-white py-24 xl:py-36 overflow-hidden select-none border-t border-emerald-500/20"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tangerine-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =====================================================================
            SECTION HEADER
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 xl:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 mb-3">
            ROLE-BASED GOVERNANCE
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
            Every staff member has a dedicated role.
          </h2>
          <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed text-balance">
            Click on any profile on the orbit to inspect what they access and achieve.
          </p>
        </div>

        {/* =====================================================================
            DUAL-STAGE INTERACTIVE WORKSPACE
            Left: Concentric Orbital Ring System with Profile Nodes
            Right: Deep Role Workspace Inspection Card
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* ===================================================================
              LEFT: THE CONCENTRIC ORBITAL ROLE SYSTEM (6 Columns)
             =================================================================== */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* The Orbital Stage Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              
              {/* SVG Concentric Orbit Rings & Telemetry Arcs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="-240 -240 480 480"
              >
                {/* Ring 1 (Inner: radius 120px) */}
                <circle
                  cx="0"
                  cy="0"
                  r="120"
                  fill="none"
                  stroke="#12A26B"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  opacity="0.35"
                />

                {/* Ring 2 (Middle: radius 180px) */}
                <circle
                  cx="0"
                  cy="0"
                  r="180"
                  fill="none"
                  stroke="#3DDC97"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  opacity="0.45"
                />

                {/* Ring 3 (Outer: radius 240px) */}
                <circle
                  cx="0"
                  cy="0"
                  r="240"
                  fill="none"
                  stroke="#12A26B"
                  strokeWidth="1.2"
                  strokeDasharray="8 10"
                  opacity="0.3"
                />

                {/* Moving Telemetry Pulse on Middle Orbit */}
                <circle r="4" fill="#3DDC97" filter="drop-shadow(0 0 6px #3DDC97)">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="18s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Ray line to active node */}
                {(() => {
                  const rad = (activeRole.angleDeg * Math.PI) / 180;
                  const x = activeRole.orbitRadius * Math.cos(rad);
                  const y = activeRole.orbitRadius * Math.sin(rad);
                  return (
                    <line
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke="#3DDC97"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      opacity="0.75"
                    />
                  );
                })()}
              </svg>

              {/* Central Core: The School Nervous System Hub */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#07332A] border-2 border-emerald-400/40 p-2 shadow-[0_0_40px_rgba(61,220,151,0.25)] flex flex-col items-center justify-center text-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#3DDC97] animate-pulse mb-1" />
                <span className="font-display font-bold text-xs text-white leading-tight uppercase tracking-wider">
                  OAKLAND
                </span>
                <span className="text-[9px] font-mono text-emerald-300 font-semibold tracking-normal">
                  CORE HUB
                </span>
              </div>

              {/* 5 Orbiting Profile Nodes */}
              {ROLES.map((role) => {
                const isActive = activeRoleId === role.id;
                const rad = (role.angleDeg * Math.PI) / 180;
                
                // Responsive orbit distance scaling: scale factor for mobile vs desktop
                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRoleId(role.id)}
                    aria-label={`Select ${role.title}`}
                    className="absolute cursor-pointer transition-transform duration-300 group focus:outline-none"
                    style={{
                      transform: `translate(${Math.cos(rad) * (role.orbitRadius * 0.9)}px, ${
                        Math.sin(rad) * (role.orbitRadius * 0.9)
                      }px)`,
                    }}
                  >
                    <div className="relative flex flex-col items-center">
                      
                      {/* Active Beacon Ripple */}
                      {isActive && (
                        <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
                      )}

                      {/* Profile Avatar Badge */}
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 relative shadow-xl ${
                          isActive
                            ? "border-emerald-400 ring-4 ring-emerald-400/30 shadow-[0_0_24px_#3DDC97] scale-110"
                            : "border-emerald-500/30 group-hover:border-emerald-400 group-hover:scale-105"
                        }`}
                      >
                        <Image
                          src={role.avatar}
                          alt={role.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Role Name Chip below Avatar */}
                      <span
                        className={`mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-bold whitespace-nowrap transition-all duration-300 ${
                          isActive
                            ? "bg-emerald-400 text-ink-900 shadow-md"
                            : "bg-ink-900/90 text-surface/80 border border-emerald-500/20 group-hover:text-white"
                        }`}
                      >
                        {role.title.split("&")[0].trim()}
                      </span>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Hint below the orbit */}
            <p className="mt-8 text-xs font-mono text-emerald-300/70 flex items-center gap-1.5">
              <span>●</span>
              <span>Click any profile node to switch workspace view</span>
            </p>
          </div>

          {/* ===================================================================
              RIGHT: DETAILED ROLE WORKSPACE INSPECTION CARD (6 Columns)
             =================================================================== */}
          <div className="lg:col-span-6 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-[#07332A] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)] relative overflow-hidden"
              >
                {/* Header: Role identity */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-emerald-400 relative">
                      <Image
                        src={activeRole.avatar}
                        alt={activeRole.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {activeRole.name}
                      </h3>
                      <p className="text-xs text-emerald-300 font-sans">
                        {activeRole.title} · {activeRole.department}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {activeRole.screenBadge}
                  </span>
                </div>

                {/* Role Headline */}
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                  {activeRole.headline}
                </h4>

                {/* Role Summary */}
                <p className="text-sm text-surface/85 font-sans leading-relaxed mb-6">
                  {activeRole.summary}
                </p>

                {/* 3 Explicit Permissions */}
                <div className="space-y-2.5 mb-6 pt-2 border-t border-emerald-500/15">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300/80 block mb-1">
                    Everyday Capabilities:
                  </span>
                  {activeRole.permissions.map((perm, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-surface/90 font-sans">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{perm}</span>
                    </div>
                  ))}
                </div>

                {/* Live Screen Preview Artifact per Role */}
                <div className="rounded-xl bg-[#031D17] border border-emerald-500/20 p-4 font-mono text-xs">
                  {activeRole.id === "proprietor" && (
                    <div className="space-y-3 font-sans">
                      <div className="flex justify-between items-baseline border-b border-emerald-500/20 pb-2">
                        <span className="text-xs text-surface/70">First Term Total Collections</span>
                        <span className="font-mono font-bold text-emerald-300 text-base">₦42,850,000.00</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-ink-900/60 border border-emerald-500/15">
                          <span className="text-surface/60 block">Target Reconciliation</span>
                          <span className="font-bold text-white">92.8% Cleared</span>
                        </div>
                        <div className="p-2 rounded bg-ink-900/60 border border-emerald-500/15">
                          <span className="text-surface/60 block">Daily Attendance</span>
                          <span className="font-bold text-emerald-300">98.4% Present</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRole.id === "principal" && (
                    <div className="space-y-3 font-sans">
                      <div className="flex justify-between items-center border-b border-emerald-500/20 pb-2">
                        <div>
                          <p className="font-bold text-white text-xs">JSS 2 Gold Mathematics Broadsheet</p>
                          <p className="text-[10px] text-surface/60">42 students · WAEC Scheme Computed</p>
                        </div>
                        <span className="px-2.5 py-1 bg-tangerine-500 text-ink-900 rounded-full font-bold text-[10px]">
                          Approve Broadsheet
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-300">
                        Zero marks altered without written principal passkey override.
                      </p>
                    </div>
                  )}

                  {activeRole.id === "bursar" && (
                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex justify-between border-b border-emerald-500/20 pb-1.5">
                        <span className="text-surface/70">Adeyemi Femi (JSS 2 Gold):</span>
                        <span className="font-mono text-white font-bold">₦185,000 Paid</span>
                      </div>
                      <div className="flex justify-between text-emerald-300 font-mono text-[11px]">
                        <span>OUTSTANDING DEBT: ₦0.00</span>
                        <span>RECEIPT #0417 GENERATED</span>
                      </div>
                    </div>
                  )}

                  {activeRole.id === "class-teacher" && (
                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex justify-between border-b border-emerald-500/20 pb-1.5">
                        <span className="text-white font-bold">Monday Morning Roll-Call</span>
                        <span className="text-emerald-300 font-mono">8:04 AM Signed</span>
                      </div>
                      <p className="text-[11px] text-surface/75">
                        38 Present · 2 Absent. WhatsApp alerts dispatched to parent phones.
                      </p>
                    </div>
                  )}

                  {activeRole.id === "subject-teacher" && (
                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex justify-between border-b border-emerald-500/20 pb-1.5">
                        <span className="text-white font-bold">SS 2 Mathematics CA 40 / Exam 60</span>
                        <span className="text-emerald-300 font-mono">Position 3rd of 42</span>
                      </div>
                      <p className="text-[11px] text-surface/75">
                        Adeyemi Femi: CA (28) + Exam (52) = 80% · WAEC Grade: A1.
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
