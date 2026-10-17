import React from "react";

export interface SectionLabelProps {
  children: React.ReactNode;
  dotColor?: "emerald" | "sun" | "tangerine";
  isDarkContext?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  dotColor = "emerald",
  isDarkContext = false,
  className = "",
}: SectionLabelProps) {
  const dotColorClass = {
    emerald: isDarkContext ? "bg-emerald-300" : "bg-emerald-500",
    sun: "bg-sun-400",
    tangerine: "bg-tangerine-500",
  }[dotColor];

  const textColorClass = isDarkContext
    ? "text-emerald-300"
    : "text-emerald-700";

  return (
    <div
      className={`inline-flex items-center gap-2 label-caps ${textColorClass} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColorClass} animate-pulse`} />
      <span>{children}</span>
    </div>
  );
}
