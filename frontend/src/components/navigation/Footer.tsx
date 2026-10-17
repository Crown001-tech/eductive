import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-ink-900 text-white border-t border-ink-800 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-ink-800">
          {/* Brand info (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight font-display text-white w-fit focus-ring-dark rounded-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>EDUCTIVE</span>
            </Link>
            <p className="text-sm text-surface/80 max-w-sm leading-relaxed">
              The unified operating system for Nigerian primary and secondary schools.
              Synchronizing school leadership, attendance registers, continuous assessment,
              and bursar fee reconciliations.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Live deployment in active term operations</span>
            </div>
          </div>

          {/* Col 1: Product */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-body">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-surface/75">
              <li>
                <Link href="#capabilities" className="hover:text-white transition-colors focus-ring-dark">
                  All 8 Capabilities
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors focus-ring-dark">
                  Real-time Sync Flow
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-white transition-colors focus-ring-dark">
                  Bursar Fee Ledger
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-white transition-colors focus-ring-dark">
                  Continuous Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Schools */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-body">
              Schools
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-surface/75">
              <li>
                <Link href="#case-study" className="hover:text-white transition-colors focus-ring-dark">
                  Oakland High Pilot Transformation
                </Link>
              </li>
              <li>
                <Link href="#roles" className="hover:text-white transition-colors focus-ring-dark">
                  For School Proprietors
                </Link>
              </li>
              <li>
                <Link href="#roles" className="hover:text-white transition-colors focus-ring-dark">
                  For School Principals
                </Link>
              </li>
              <li>
                <Link href="#roles" className="hover:text-white transition-colors focus-ring-dark">
                  For School Bursars
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Demo */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-body">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-surface/75">
              <li>
                <Link href="#about" className="hover:text-white transition-colors focus-ring-dark">
                  About EDUCTIVE
                </Link>
              </li>
              <li>
                <Link
                  href="#demo-section"
                  className="inline-flex items-center gap-1 text-tangerine-500 font-semibold hover:text-white transition-colors focus-ring-dark"
                >
                  <span>Book a Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@eductive.ng"
                  className="hover:text-white transition-colors focus-ring-dark"
                >
                  contact@eductive.ng
                </a>
              </li>
              <li>
                <span className="text-xs text-charcoal-600 block pt-1">
                  Lagos & Abuja, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface/60">
          <p>© 2026 EDUCTIVE Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Verified WCAG 2.1 AA Contrast</span>
            <span className="hidden sm:inline">•</span>
            <span>Live Pilot with Oakland Comprehensive High School</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
