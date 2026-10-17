"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  PhoneCall,
} from "lucide-react";

export function DemoCtaSection() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    role: "Proprietor",
    studentCount: "500 - 1,000 Students",
    phone: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section
      id="demo-section"
      className="relative w-full bg-[#07332A] text-white py-24 xl:py-36 border-t border-emerald-500/20 overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="ctaGrid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="#12A26B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      {/* Atmospheric Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tangerine-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* ===================================================================
              LEFT COLUMN: CONVERSION NARRATIVE & ASSURANCES (6 Columns)
             =================================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[11px] font-mono font-bold tracking-[2.5px] uppercase text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-4 shadow-[0_0_12px_rgba(18,162,107,0.2)]">
              LIVE PRODUCT WALKTHROUGH
            </span>

            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.1] mb-5 text-balance">
              See EDUCTIVE configured <br />
              for your school.
            </h2>

            <p className="text-base sm:text-lg text-surface/80 font-sans leading-relaxed mb-8 max-w-xl text-balance">
              No generic sales slides. Within 2 business hours, our Lagos implementation team prepares
              a 20-minute live demonstration customized to your school&apos;s exact class arms and fee schedules.
            </p>

            {/* 3 Step Walkthrough Process */}
            <div className="space-y-4 w-full mb-8 font-sans text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 border border-emerald-500/30">
                  1
                </div>
                <div>
                  <strong className="text-white block font-display">Submit School Structure (30 Seconds)</strong>
                  <span className="text-surface/75 text-xs">Share your school name, population, and WhatsApp number.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 border border-emerald-500/30">
                  2
                </div>
                <div>
                  <strong className="text-white block font-display">20-Minute Tailored Walkthrough</strong>
                  <span className="text-surface/75 text-xs">We demonstrate your exact fee structures and broadsheet calculations (Zoom or Lagos on-site).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 border border-emerald-500/30">
                  3
                </div>
                <div>
                  <strong className="text-white block font-display">14-Day Full-Access Pilot</strong>
                  <span className="text-surface/75 text-xs">Test directly with your principal and bursar before making any financial commitment.</span>
                </div>
              </div>
            </div>

            {/* Direct Telephone / WhatsApp Hotline */}
            <div className="pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-sans text-surface/80">
              <span>Need an immediate consultation?</span>
              <a
                href="https://wa.me/2348123456789?text=Hello%20EDUCTIVE,%20we%20would%20like%20to%20schedule%20a%20school%20walkthrough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 font-bold hover:text-white underline underline-offset-4 flex items-center gap-1.5 font-mono"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call or WhatsApp: +234 812 345 6789</span>
              </a>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: TAILORED DEMO REQUEST FORM (6 Columns)
             =================================================================== */}
          <div className="lg:col-span-6">
            <div className="bg-[#05261F] rounded-3xl border border-emerald-500/30 shadow-[0_24px_60px_rgba(7,51,42,0.45)] p-7 sm:p-9 relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-5 shadow-[0_0_24px_#12A26B]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">
                    Walkthrough Scheduled!
                  </h3>
                  <p className="text-sm text-surface/80 font-sans max-w-md leading-relaxed mb-6">
                    Thank you, {formData.contactName}. Our Lagos implementation lead will reach out via WhatsApp at{" "}
                    <strong className="text-emerald-300">{formData.phone}</strong> within 2 business hours to confirm your preferred session time for {formData.schoolName}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-400 hover:text-white underline font-mono cursor-pointer"
                  >
                    Submit another school inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-1">
                      Book a 20-Minute Walkthrough
                    </h3>
                    <p className="text-xs text-surface/70">
                      No generic slides. We demonstrate live with your school&apos;s class structure.
                    </p>
                  </div>

                  {/* School Name */}
                  <div>
                    <label className="block text-xs font-semibold text-surface/80 mb-1">
                      School Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oakland Comprehensive High School"
                      value={formData.schoolName}
                      onChange={(e) =>
                        setFormData({ ...formData, schoolName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-ink-900/90 border border-emerald-500/20 text-white placeholder:text-surface/40 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  {/* Contact Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-surface/80 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. A. Okonjo"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({ ...formData, contactName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-ink-900/90 border border-emerald-500/20 text-white placeholder:text-surface/40 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-surface/80 mb-1">
                        Your Role *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-ink-900/90 border border-emerald-500/20 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="Proprietor">Proprietor / Owner</option>
                        <option value="Principal">Principal / Head of School</option>
                        <option value="Bursar">Bursar / Accountant</option>
                        <option value="ICT Director">ICT Director / Admin</option>
                      </select>
                    </div>
                  </div>

                  {/* Student Count & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-surface/80 mb-1">
                        Student Population
                      </label>
                      <select
                        value={formData.studentCount}
                        onChange={(e) =>
                          setFormData({ ...formData, studentCount: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-ink-900/90 border border-emerald-500/20 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="Under 250">Under 250 Students</option>
                        <option value="250 - 500">250 - 500 Students</option>
                        <option value="500 - 1,000">500 - 1,000 Students</option>
                        <option value="1,000+">1,000+ Students</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-surface/80 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0803 123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-ink-900/90 border border-emerald-500/20 text-white placeholder:text-surface/40 text-sm focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-tangerine-500/25 transition-all cursor-pointer group"
                    >
                      <span>Book a 20-min walkthrough</span>
                      <span className="w-6 h-6 rounded-full bg-ink-900 text-tangerine-500 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>

                  <p className="text-[11px] text-surface/60 text-center font-sans">
                    Zero spam. We reach out exclusively to coordinate your live demonstration.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
