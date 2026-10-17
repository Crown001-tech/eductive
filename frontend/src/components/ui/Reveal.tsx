"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.6, // 600ms (within 500-700ms rule)
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger once at ~20% viewport intersection
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Defined cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
