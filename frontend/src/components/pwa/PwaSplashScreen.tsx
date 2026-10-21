"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function PwaSplashScreen() {
  const [showSplash, setShowSplash] = useState(false);
  const [phase, setPhase] = useState<"enter" | "burst" | "done">("enter");

  useEffect(() => {
    // Respect user's motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Only play once per browser session so navigation doesn't replay it
    const hasSeenSplash = sessionStorage.getItem("eductive_splash_played");
    if (hasSeenSplash) {
      return;
    }

    sessionStorage.setItem("eductive_splash_played", "true");
    setShowSplash(true);

    // Timeline:
    // 0ms - 550ms: Logo springs in with bounce
    // 550ms - 750ms: Brief pause & slight dip
    // 750ms: "Pwah" outward explosive zoom & fade into the app
    // 1250ms: Complete and remove from DOM
    const burstTimer = setTimeout(() => {
      setPhase("burst");
    }, 700);

    const finishTimer = setTimeout(() => {
      setPhase("done");
      setShowSplash(false);
    }, 1250);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!showSplash || phase === "done") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="pwa-splash"
        initial={{ opacity: 1 }}
        animate={{
          opacity: phase === "burst" ? 0 : 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          delay: phase === "burst" ? 0.05 : 0,
        }}
        className="fixed inset-0 z-[999999] bg-[#07332A] flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Ambient radial glow that expands during the burst */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: phase === "burst" ? 3 : [0.6, 1.2, 1],
            opacity: phase === "burst" ? 0 : 0.4,
          }}
          transition={{
            duration: phase === "burst" ? 0.5 : 0.6,
            ease: "easeOut",
          }}
          className="absolute w-[360px] h-[360px] rounded-full bg-emerald-400/20 blur-[90px] pointer-events-none"
        />

        {/* Central Logo Container with Spring Bounce & Pwah Burst */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0, y: 15 }}
          animate={{
            scale:
              phase === "burst"
                ? 16 // The "pwah" zoom burst through the screen
                : [0.3, 1.18, 0.94, 1.02, 1], // The springy entrance bounce
            opacity: phase === "burst" ? 0 : 1,
            filter: phase === "burst" ? "blur(14px)" : "blur(0px)",
            y: phase === "burst" ? 0 : [15, -4, 2, 0],
          }}
          transition={{
            duration: phase === "burst" ? 0.48 : 0.65,
            ease:
              phase === "burst"
                ? [0.4, 0, 0.2, 1] // Fast explosive acceleration outward
                : [0.34, 1.56, 0.64, 1], // Playful elastic spring bounce
          }}
          className="relative flex flex-col items-center justify-center z-10"
        >
          {/* Logo Brand Tile */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#094337] border border-emerald-400/40 p-2.5 shadow-[0_0_40px_rgba(61,220,151,0.45)] flex items-center justify-center relative">
            <Image
              src="/favicon.svg"
              alt="EDUCTIVE"
              width={72}
              height={72}
              priority
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(61,220,151,0.6)]"
            />
          </div>

          {/* Brand Wordmark (fades cleanly during burst) */}
          <motion.div
            animate={{
              opacity: phase === "burst" ? 0 : 1,
              scale: phase === "burst" ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-center"
          >
            <span className="font-display font-extrabold text-white text-lg tracking-[2px] block">
              EDUCTIVE
            </span>
            <span className="text-[10px] font-mono text-emerald-300/80 tracking-widest uppercase">
              ONE CONNECTED SCHOOL
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
