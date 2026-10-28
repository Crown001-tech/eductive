"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DemoCtaSection() {
  const [schoolName, setSchoolName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolName || !phone) return;
    setSubmitted(true);
  };

  return (
    <section
      id="demo-section"
      className="relative w-full bg-[#07332A] text-white py-24 xl:py-36 border-t border-emerald-500/20 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-tangerine-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Architectural hairline grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="demoCtaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3DDC97" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demoCtaGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          
          {/* ===================================================================
              SECTION HEADLINE & INTRO LINE
             =================================================================== */}
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-[50px] leading-[1.08] tracking-[-1.2px] mb-4 text-balance">
            Ready to see all eight portals?
          </h2>

          <p className="text-base sm:text-lg text-surface/85 font-sans leading-relaxed mb-10 max-w-lg text-balance">
            Get a short walkthrough using your school's own classes.
          </p>

          {/* ===================================================================
              CALM INTERACTIVE DEMO CARD
             =================================================================== */}
          <div className="w-full max-w-lg rounded-3xl bg-[#05261F] border border-emerald-500/30 p-7 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            {submitted ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 shadow-[0_0_20px_#12A26B]">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  Thank you for your interest.
                </h3>
                <p className="text-sm text-surface/80 font-sans max-w-sm leading-relaxed mb-6">
                  Your request has been received. Our team will review your details and contact you at{" "}
                  <strong className="text-emerald-300 font-mono">{phone}</strong> to discuss a suitable time for your walkthrough.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSchoolName("");
                    setPhone("");
                  }}
                  className="text-xs text-emerald-400 hover:text-white underline font-sans cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left font-sans">
                {/* School Name */}
                <div>
                  <label htmlFor="cta-school-name" className="block text-xs font-semibold text-surface/80 mb-1.5">
                    School name
                  </label>
                  <input
                    id="cta-school-name"
                    type="text"
                    required
                    placeholder="e.g. Oakland Comprehensive High School"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink-900/90 border border-emerald-500/25 text-white placeholder:text-surface/40 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* WhatsApp Phone Number */}
                <div>
                  <label htmlFor="cta-phone" className="block text-xs font-semibold text-surface/80 mb-1.5">
                    WhatsApp or phone number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    required
                    placeholder="e.g. 0803 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl bg-ink-900/90 border border-emerald-500/25 text-white placeholder:text-surface/40 text-sm focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                  />
                </div>

                {/* Primary Button: Terracotta Orange Pill */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-tangerine-500/20 hover:shadow-tangerine-500/35 hover:scale-[1.01] transition-all cursor-pointer group"
                  >
                    <span>Book a demo</span>
                    <span className="w-6 h-6 rounded-full bg-ink-900 text-tangerine-400 flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ===================================================================
              QUIET SUPPORT LINK & PROOF LINE
             =================================================================== */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-sans text-surface/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Designed for Nigerian primary and secondary schools</span>
            </span>
            <span className="hidden sm:inline text-surface/40">·</span>
            <Link
              href="/product"
              className="text-emerald-300 hover:text-white underline underline-offset-4 font-semibold transition-colors flex items-center gap-1"
            >
              <span>Meet the eight portals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
