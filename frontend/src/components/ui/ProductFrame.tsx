import React from "react";

export interface ProductFrameProps {
  title?: string;
  badge?: string;
  isDarkTheme?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function ProductFrame({
  title = "EDUCTIVE Workspace",
  badge,
  isDarkTheme = false,
  children,
  className = "",
}: ProductFrameProps) {
  const containerTheme = isDarkTheme
    ? "bg-ink-900 border border-ink-800 text-white"
    : "bg-white border border-line text-charcoal-900";

  const chromeTheme = isDarkTheme
    ? "bg-[#05261F] border-b border-ink-800 text-emerald-300"
    : "bg-surface border-b border-line text-charcoal-600";

  const pillTheme = isDarkTheme
    ? "bg-ink-800 text-emerald-300 border border-ink-800"
    : "bg-white text-charcoal-600 border border-line";

  return (
    <div
      className={`rounded-[12px] overflow-hidden product-frame-shadow transition-all duration-300 ${containerTheme} ${className}`}
    >
      {/* Top Browser / App Chrome Bar */}
      <div className={`px-4 py-3 flex items-center justify-between gap-3 text-xs ${chromeTheme}`}>
        {/* Left: Window Controls */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5534B] opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A84B] opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#57C059] opacity-80" />
        </div>

        {/* Center: Window Title or URL Bar */}
        <div className={`flex items-center gap-2 px-3 py-1 rounded-[4px] text-[11px] font-mono tracking-tight max-w-[280px] truncate ${pillTheme}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="truncate">{title}</span>
        </div>

        {/* Right: Status or Role Badge */}
        <div className="flex items-center gap-2">
          {badge && (
            <span className="px-2 py-0.5 rounded-[4px] text-[10px] uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Frame Body / Viewport */}
      <div className="relative overflow-hidden">{children}</div>
    </div>
  );
}
