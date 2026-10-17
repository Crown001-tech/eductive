import React from "react";

export interface AnnotationProps {
  number: number | string;
  label: string;
  description?: string;
  accent?: "sun" | "tangerine" | "emerald";
  className?: string;
}

export function Annotation({
  number,
  label,
  description,
  accent = "sun",
  className = "",
}: AnnotationProps) {
  const badgeColors = {
    sun: "bg-sun-400 text-ink-900 font-bold",
    tangerine: "bg-tangerine-500 text-ink-900 font-bold",
    emerald: "bg-emerald-300 text-ink-900 font-bold",
  }[accent];

  return (
    <div
      className={`inline-flex items-start gap-2.5 p-2.5 rounded-[12px] bg-white/95 backdrop-blur-sm border border-line shadow-sm text-xs text-charcoal-900 max-w-[280px] pointer-events-auto ${className}`}
    >
      <span
        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${badgeColors}`}
      >
        {number}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-ink-900 leading-tight">{label}</span>
        {description && (
          <span className="text-charcoal-600 text-[11px] leading-snug">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
