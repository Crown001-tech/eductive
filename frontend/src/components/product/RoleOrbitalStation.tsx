"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface RoleAccess {
  id: string;
  name: string;
  title: string;
  department: string;
  avatar: string;
  angleDeg: number; // Position on orbit (degrees)
  orbitRing: 1 | 2 | 3; // 1 = inner, 2 = middle, 3 = outer
  headline: string;
  summary: string;
  permissions: string[];
}

const ROLES: RoleAccess[] = [
  {
    id: "proprietor",
    name: "Dr. A. Adeleke",
    title: "Proprietor & Founder",
    department: "Executive Board",
    avatar: "/images/avatars/proprietor.jpg",
    angleDeg: -55,
    orbitRing: 3,
    headline: "Cashflow transparency across school accounts.",
    summary:
      "Inspect total term fees, monitor multi-bank balances, and track daily attendance across all classes in real time.",
    permissions: [
      "Live term fee collections and balance tracking",
      "Approve departmental expense vouchers with one click",
      "Zero cash discrepancies between school books and banks",
    ],
  },
  {
    id: "principal",
    name: "Rev. Dr. Okonjo",
    title: "Principal & Head of School",
    department: "Academic Leadership",
    avatar: "/images/principal-teacher-transparent.png",
    angleDeg: 30,
    orbitRing: 2,
    headline: "Approve broadsheets and oversee daily operations.",
    summary:
      "Sign off terminal report cards, vet weekly teacher lesson plans, and resolve student attendance queries from your phone.",
    permissions: [
      "One-click approval for end-of-term broadsheets",
      "Digital vetting for weekly subject lesson notes",
      "Instant query alerts for unexcused student absences",
    ],
  },
  {
    id: "bursar",
    name: "Mrs. F. Adebayo",
    title: "School Bursar & Accountant",
    department: "Bursary & Accounts",
    avatar: "/images/avatars/bursar.jpg",
    angleDeg: 140,
    orbitRing: 3,
    headline: "Record payments with zero fake teller disputes.",
    summary:
      "Match bank transfers in seconds, issue tamper-proof stamped receipts, and export clean defaulters lists with one click.",
    permissions: [
      "Automated ₦0.00 balance update upon payment",
      "Official stamped receipt sent straight to WhatsApp",
      "Instant defaulters and debtors list by class arm",
    ],
  },
  {
    id: "class-teacher",
    name: "Mrs. B. Okon",
    title: "Homeroom Class Teacher",
    department: "JSS 2 Gold",
    avatar: "/images/avatars/class-teacher.jpg",
    angleDeg: -145,
    orbitRing: 2,
    headline: "Take morning roll-call in thirty seconds.",
    summary:
      "Mark attendance on any mobile phone. The system notifies parents immediately and flags absent students by 8:15 AM.",
    permissions: [
      "Paperless register that never gets lost or torn",
      "Automatic arrival timestamps sent to parents",
      "Compute termly attendance percentages automatically",
    ],
  },
  {
    id: "subject-teacher",
    name: "Mr. T. Balogun",
    title: "Subject Teacher",
    department: "Mathematics & Science",
    avatar: "/images/avatars/subject-teacher.jpg",
    angleDeg: -10,
    orbitRing: 1,
    headline: "Enter test marks once. Broadsheets compute.",
    summary:
      "Enter continuous assessment test marks once. The system calculates class positions and WAEC A1 to F9 grades automatically.",
    permissions: [
      "WAEC and NECO standard grading scales built in",
      "Built-in score limits prevent accidental typing errors",
      "Class position and cumulative rank computed instantly",
    ],
  },
];

// Calculate responsive ring radius based on container size
const getOrbitRadius = (ring: 1 | 2 | 3, size: number) => {
  const half = size / 2;
  switch (ring) {
    case 1:
      return half * 0.40; // Inner ring
    case 2:
      return half * 0.62; // Middle ring
    case 3:
      return half * 0.82; // Outer ring
  }
};

export function RoleOrbitalStation() {
  const [activeRoleId, setActiveRoleId] = useState<string>("proprietor");
  const activeRole = ROLES.find((r) => r.id === activeRoleId) || ROLES[0];

  const containerRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState<number>(340);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        if (w > 0) setStageSize(w);
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="roles-orbital"
      className="relative w-full bg-[#05261F] text-white py-16 sm:py-24 xl:py-32 overflow-hidden select-none border-t border-emerald-500/20"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tangerine-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-16 z-10">
        
        {/* =====================================================================
            SECTION HEADER
           ===================================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-16 xl:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 mb-2 sm:mb-3">
            ROLE-BASED GOVERNANCE
          </span>
          <h2 className="font-display font-bold text-white text-2xl sm:text-4xl xl:text-[44px] leading-[1.15] tracking-[-1.2px] mb-3 text-balance">
            Clear roles for every staff member.
          </h2>
          <p className="text-sm sm:text-base text-surface/80 font-sans leading-relaxed text-balance">
            Tap any profile on the orbit to inspect what they do.
          </p>
        </div>

        {/* =====================================================================
            DUAL-STAGE INTERACTIVE WORKSPACE
            Left: Concentric Orbital Ring System with Profile Nodes
            Right: Deep Role Workspace Inspection Card
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* ===================================================================
              LEFT: THE CONCENTRIC ORBITAL ROLE SYSTEM (6 Columns)
             =================================================================== */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* The Orbital Stage Container */}
            <div
              ref={containerRef}
              className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[440px] xl:max-w-[480px] aspect-square flex items-center justify-center mx-auto"
            >
              
              {/* SVG Concentric Orbit Rings & Telemetry Arcs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox={`-${stageSize / 2} -${stageSize / 2} ${stageSize} ${stageSize}`}
              >
                {/* Ring 1 (Inner) */}
                <circle
                  cx="0"
                  cy="0"
                  r={getOrbitRadius(1, stageSize)}
                  fill="none"
                  stroke="#12A26B"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  opacity="0.35"
                />

                {/* Ring 2 (Middle) */}
                <circle
                  cx="0"
                  cy="0"
                  r={getOrbitRadius(2, stageSize)}
                  fill="none"
                  stroke="#3DDC97"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  opacity="0.45"
                />

                {/* Ring 3 (Outer) */}
                <circle
                  cx="0"
                  cy="0"
                  r={getOrbitRadius(3, stageSize)}
                  fill="none"
                  stroke="#12A26B"
                  strokeWidth="1.2"
                  strokeDasharray="8 10"
                  opacity="0.3"
                />

                {/* Moving Telemetry Pulse on Middle Orbit */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="18s"
                    repeatCount="indefinite"
                  />
                  <circle
                    cx={getOrbitRadius(2, stageSize)}
                    cy="0"
                    r="3.5"
                    fill="#3DDC97"
                    filter="drop-shadow(0 0 6px #3DDC97)"
                  />
                </g>

                {/* Ray line to active node */}
                {(() => {
                  const rad = (activeRole.angleDeg * Math.PI) / 180;
                  const r = getOrbitRadius(activeRole.orbitRing, stageSize);
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <line
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke="#3DDC97"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.75"
                    />
                  );
                })()}
              </svg>

              {/* Central Core: The School Nervous System Hub */}
              <div className="relative z-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#07332A] border-2 border-emerald-400/40 p-1.5 sm:p-2 shadow-[0_0_24px_rgba(61,220,151,0.25)] flex flex-col items-center justify-center text-center">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#3DDC97] animate-pulse mb-0.5 sm:mb-1" />
                <span className="font-display font-bold text-[10px] sm:text-xs text-white leading-tight uppercase tracking-wider">
                  OAKLAND
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-emerald-300 font-semibold tracking-normal">
                  CORE HUB
                </span>
              </div>

              {/* 5 Orbiting Profile Nodes: Mathematically aligned on SVG circles */}
              {ROLES.map((role) => {
                const isActive = activeRoleId === role.id;
                const rad = (role.angleDeg * Math.PI) / 180;
                const r = getOrbitRadius(role.orbitRing, stageSize);
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;

                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRoleId(role.id)}
                    aria-label={`Select ${role.title}`}
                    className="absolute cursor-pointer transition-transform duration-300 group focus:outline-none z-20"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="relative flex flex-col items-center">
                      
                      {/* Active Beacon Ripple */}
                      {isActive && (
                        <span className="absolute -inset-1.5 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
                      )}

                      {/* Profile Avatar Badge */}
                      <div
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 relative shadow-xl ${
                          isActive
                            ? "border-emerald-400 ring-4 ring-emerald-400/30 shadow-[0_0_24px_#3DDC97] scale-110"
                            : "border-emerald-500/40 group-hover:border-emerald-400 group-hover:scale-105"
                        }`}
                      >
                        <Image
                          src={role.avatar}
                          alt={role.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Role Name Chip below Avatar */}
                      <span
                        className={`absolute top-full mt-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-sans font-bold whitespace-nowrap transition-all duration-300 pointer-events-none shadow-md ${
                          isActive
                            ? "bg-emerald-400 text-ink-900 shadow-md font-extrabold"
                            : "bg-[#041D17]/90 text-surface/80 border border-emerald-500/30 group-hover:text-white"
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
            <p className="mt-7 text-[11px] sm:text-xs font-mono text-emerald-300/70 flex items-center gap-1.5">
              <span className="text-emerald-400">●</span>
              <span>Tap any profile node to view workspace</span>
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
                className="w-full bg-[#07332A] border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-7 xl:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)] relative overflow-hidden"
              >
                {/* Header: Role identity without floating tag */}
                <div className="flex items-center gap-3 pb-3.5 mb-4 border-b border-emerald-500/20">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-emerald-400 relative shrink-0">
                    <Image
                      src={activeRole.avatar}
                      alt={activeRole.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white truncate">
                      {activeRole.name}
                    </h3>
                    <p className="text-xs text-emerald-300 font-sans truncate">
                      {activeRole.title} · {activeRole.department}
                    </p>
                  </div>
                </div>

                {/* Role Headline */}
                <h4 className="font-display font-bold text-lg sm:text-2xl text-white mb-2 leading-snug">
                  {activeRole.headline}
                </h4>

                {/* Role Summary */}
                <p className="text-xs sm:text-sm text-surface/85 font-sans leading-relaxed mb-5">
                  {activeRole.summary}
                </p>

                {/* 3 Explicit Permissions */}
                <div className="space-y-2 mb-5 pt-3 border-t border-emerald-500/15">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-emerald-300/80 block mb-1">
                    Everyday Capabilities:
                  </span>
                  {activeRole.permissions.map((perm, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-surface/90 font-sans leading-snug">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{perm}</span>
                    </div>
                  ))}
                </div>

                {/* Live Screen Preview Artifact per Role: Optimized for Mobile */}
                <div className="rounded-xl bg-[#031D17] border border-emerald-500/20 p-3 sm:p-4 font-mono text-xs">
                  {activeRole.id === "proprietor" && (
                    <div className="space-y-2.5 font-sans">
                      <div className="flex flex-col xs:flex-row xs:items-baseline xs:justify-between gap-1 border-b border-emerald-500/20 pb-2">
                        <span className="text-xs text-surface/75">First Term Collections</span>
                        <span className="font-mono font-bold text-emerald-300 text-sm sm:text-base tracking-tight">
                          ₦42,850,000.00
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-ink-900/60 border border-emerald-500/15">
                          <span className="text-[10px] text-surface/65 block mb-0.5">Reconciliation</span>
                          <span className="font-bold text-white text-xs sm:text-sm">92.8% Cleared</span>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-lg bg-ink-900/60 border border-emerald-500/15">
                          <span className="text-[10px] text-surface/65 block mb-0.5">Daily Attendance</span>
                          <span className="font-bold text-emerald-300 text-xs sm:text-sm">98.4% Present</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRole.id === "principal" && (
                    <div className="space-y-2.5 font-sans">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 border-b border-emerald-500/20 pb-2.5">
                        <div className="min-w-0">
                          <p className="font-bold text-white text-xs sm:text-sm">JSS 2 Gold Mathematics Broadsheet</p>
                          <p className="text-[11px] text-surface/70 mt-0.5">42 students · WAEC Scheme Computed</p>
                        </div>
                        <span className="self-start sm:self-auto px-3 py-1 bg-tangerine-500 text-ink-900 rounded-full font-bold text-[11px] shrink-0 text-center whitespace-nowrap shadow-sm">
                          Approve Broadsheet
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-300 leading-normal">
                        Zero marks altered without written principal passkey override.
                      </p>
                    </div>
                  )}

                  {activeRole.id === "bursar" && (
                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 border-b border-emerald-500/20 pb-2">
                        <span className="text-surface/75 text-xs">Adeyemi Femi (JSS 2 Gold):</span>
                        <span className="font-mono text-emerald-300 font-bold text-xs sm:text-sm">₦185,000 Paid</span>
                      </div>
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 text-[11px] font-mono">
                        <span className="text-surface/70">OUTSTANDING: <strong className="text-white">₦0.00</strong></span>
                        <span className="text-emerald-300">RECEIPT #0417 ISSUED</span>
                      </div>
                    </div>
                  )}

                  {activeRole.id === "class-teacher" && (
                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 border-b border-emerald-500/20 pb-2">
                        <span className="text-white font-bold text-xs">Monday Morning Roll-Call</span>
                        <span className="text-emerald-300 font-mono text-[11px]">8:04 AM Signed</span>
                      </div>
                      <p className="text-[11px] text-surface/80 leading-relaxed">
                        38 Present · 2 Absent. WhatsApp alerts dispatched to parent phones.
                      </p>
                    </div>
                  )}

                  {activeRole.id === "subject-teacher" && (
                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 border-b border-emerald-500/20 pb-2">
                        <span className="text-white font-bold text-xs">SS 2 Mathematics CA / Exam</span>
                        <span className="text-emerald-300 font-mono text-[11px]">Position 3rd of 42</span>
                      </div>
                      <p className="text-[11px] text-surface/80 leading-relaxed">
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
