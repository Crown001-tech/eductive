import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#041D17] text-white border-t border-emerald-500/15 py-12 select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 xl:px-16">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-emerald-500/15">
          {/* Brand info */}
          <div className="flex flex-col gap-2 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight font-display text-white w-fit"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>EDUCTIVE</span>
            </Link>
            <p className="text-xs sm:text-sm text-surface/75 leading-relaxed font-sans">
              Eight portals. One connected school. Built for Nigerian schools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 sm:gap-12 text-xs sm:text-sm text-surface/80">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                Pages
              </span>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/product" className="hover:text-white transition-colors">
                Product
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                Showcase
              </span>
              <a
                href="https://oakland-school.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Oakland School</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </a>
              <Link
                href="/demo"
                className="text-tangerine-400 hover:text-tangerine-300 font-semibold transition-colors"
              >
                Request a demo
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                Contact
              </span>
              <a
                href="mailto:contact@eductive.ng"
                className="hover:text-white transition-colors"
              >
                contact@eductive.ng
              </a>
              <span className="text-surface/50 text-xs">Developed by Crown Tech</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-surface/50">
          <p>© 2026 EDUCTIVE. All rights reserved.</p>
          <p>Built for Nigerian schools</p>
        </div>
      </div>
    </footer>
  );
}
