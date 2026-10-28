"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href?: string; targetId?: string; external?: boolean }>;
  onSelectSection?: (e: React.MouseEvent, targetId: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#07332A] text-white animate-in fade-in duration-200 select-none overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobileMenuGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#12A26B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobileMenuGrid)" />
        </svg>
      </div>

      {/* Atmospheric ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-tangerine-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-emerald-500/20">
        <Link
          href="/"
          onClick={handleClick}
          className="flex items-center gap-2 text-xl font-bold tracking-tight font-display text-white"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#12A26B]" />
          <span>EDUCTIVE</span>
        </Link>

        {/* Close Button Pill */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-surface transition-all cursor-pointer"
        >
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-300">
            Close
          </span>
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Navigation links & Content */}
      <nav className="relative z-10 flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-6">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-400/80 block">
            NAVIGATION
          </span>

          <ul className="flex flex-col">
            {links.map((link, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <li key={link.label} className="border-b border-white/[0.08]">
                  <Link
                    href={link.href || "/"}
                    onClick={handleClick}
                    className="group flex items-center justify-between py-4 text-2xl font-display font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono font-bold text-emerald-400/70">
                        {num}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom CTA & Attribution */}
        <div className="pt-6 border-t border-emerald-500/20 flex flex-col gap-3">
          <Link
            href="/demo"
            onClick={handleClick}
            className="w-full py-4 px-6 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-sans font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-tangerine-500/20 transition-all cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center justify-between pt-2 text-[11px] text-surface/60 font-mono">
            <span>Crown Tech Engineering</span>
            <span>Lagos & Abuja</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
