import React from "react";

export interface SectionLabelProps {
  children: React.ReactNode;
  dotColor?: "emerald" | "sun" | "tangerine";
  isDarkContext?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  isDarkContext = false,
  className = "",
}: SectionLabelProps) {
  const textColorClass = isDarkContext
    ? "text-emerald-300"
    : "text-emerald-700";

  return (
    <p
      className={`text-xs font-bold uppercase tracking-wider ${textColorClass} ${className}`}
    >
      {children}
    </p>
  );
}
