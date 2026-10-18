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
  onSelectSection,
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
      className="fixed inset-0 z-50 flex flex-col bg-[#07332A] text-white animate-in fade-in duration-200"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-emerald-500/20">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", " ");
            onClose();
          }}
          className="flex items-center gap-2 text-xl font-bold tracking-tight font-display text-white"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#12A26B]" />
          <span>EDUCTIVE</span>
        </a>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-xl text-emerald-300 hover:text-white hover:bg-ink-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
        <ul className="flex flex-col gap-5">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="flex items-center justify-between py-2 text-2xl font-display font-bold text-white hover:text-emerald-300 transition-colors cursor-pointer border-b border-emerald-500/10 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                </a>
              ) : (
                <Link
                  href={link.href || "/"}
                  onClick={handleClick}
                  className="flex items-center justify-between py-2 text-2xl font-display font-bold text-white hover:text-emerald-300 transition-colors cursor-pointer border-b border-emerald-500/10 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA in mobile menu */}
        <div className="pt-8 border-t border-emerald-500/20 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-emerald-300 font-semibold font-mono">
            Ready to synchronize your school?
          </p>
          <Link
            href="#demo-section"
            onClick={handleClick}
            className="w-full py-3.5 px-6 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-surface/60 text-center font-sans">
            Live demonstration & pilot deployment at Oakland Comprehensive High School.
          </p>
        </div>
      </nav>
    </div>
  );
}
