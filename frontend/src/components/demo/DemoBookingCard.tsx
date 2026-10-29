"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare } from "lucide-react";

export function DemoBookingCard() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    role: "Proprietor / Owner",
    phone: "",
    state: "Lagos State",
    studentCount: "200–500",
    demoType: "All eight portals",
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.phone || !formData.contactName) return;
    const digits = formData.phone.replace(/[\s-]/g, "");
    if (!/^(\+?234|0)[789][01]\d{8}$/.test(digits)) {
      setPhoneError("Enter a Nigerian number, like 0803 123 4567.");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {submitted ? (
        /* Confirmed Request Slip */
        <div className="bg-[#FFFDF8] rounded-3xl border border-[#D8CEBA] p-6 sm:p-9 shadow-[0_24px_60px_rgba(7,51,42,0.12)] font-mono text-xs relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Perforated top tear line */}
          <div className="absolute top-0 left-0 right-0 h-[4px] flex justify-between px-3 -mt-[2px]">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-[4px] h-[4px] rounded-full bg-white border border-[#D8CEBA]" />
            ))}
          </div>

          <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-4 mb-5 pt-1">
            <div>
              <p className="font-display font-bold text-ink-900 text-sm tracking-wide">
                REQUEST RECEIVED
              </p>
              <p className="text-[10px] text-charcoal-500 font-sans">
                Walkthrough with your school&apos;s classes
              </p>
            </div>
            <span className="text-[10px] bg-emerald-500/15 text-emerald-800 font-bold px-2.5 py-1 rounded">
              CONFIRMED
            </span>
          </div>

          <div className="space-y-2.5 font-sans text-xs text-charcoal-900 mb-6">
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">School</span>
              <span className="font-bold text-ink-900">{formData.schoolName}</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Contact</span>
              <span className="font-bold text-ink-900">{formData.contactName} ({formData.role})</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">WhatsApp / Phone</span>
              <span className="font-mono font-bold text-emerald-700">{formData.phone}</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Location</span>
              <span className="font-medium text-charcoal-800">{formData.state}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Focus</span>
              <span className="font-medium text-charcoal-800">{formData.demoType}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-sans mb-6 flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              We&apos;ll message you on WhatsApp to confirm a convenient time for your 15-minute walkthrough.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto flex-1 text-center py-3 px-6 rounded-full bg-ink-900 text-white font-sans font-semibold text-xs hover:bg-ink-800 transition-colors"
            >
              Return to home
            </Link>
            <Link
              href="/product"
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full border border-emerald-700 text-emerald-800 font-sans font-semibold text-xs hover:bg-emerald-50 transition-colors"
            >
              Explore all portals
            </Link>
          </div>
        </div>
      ) : (
        /* High-Converting Booking Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white text-charcoal-900 rounded-3xl border border-[#E5DEC9] p-6 sm:p-8 xl:p-9 shadow-[0_20px_50px_rgba(7,51,42,0.1)] flex flex-col gap-4 text-left"
        >
          <div>
            <h2 className="font-display font-bold text-ink-900 text-xl sm:text-2xl mb-1">
              Book a walkthrough
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Tell us a little about your school to see the portals in action.
            </p>
          </div>

          {/* Field 1: School Name (Required) */}
          <div>
            <label
              htmlFor="demo-school-name"
              className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1 font-sans"
            >
              School Name *
            </label>
            <input
              id="demo-school-name"
              type="text"
              required
              placeholder="e.g. Oakland School"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
            />
          </div>

          {/* Field 2 & 3: Contact Name & Role (Required) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="demo-contact-name"
                className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1 font-sans"
              >
                Your Full Name *
              </label>
              <input
                id="demo-contact-name"
                type="text"
                required
                placeholder="e.g. Rev. Dr. Okonjo"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="demo-role"
                className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1 font-sans"
              >
                Your Role *
              </label>
              <select
                id="demo-role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Proprietor / Owner">Proprietor / Owner</option>
                <option value="Principal / Head of School">Principal / Head of School</option>
                <option value="Vice Principal / Administrator">Vice Principal / Administrator</option>
                <option value="Bursar / Accountant">Bursar / Accountant</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Field 4: WhatsApp or Phone Number (Required) */}
          <div>
            <label
              htmlFor="demo-phone"
              className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1 font-sans"
            >
              WhatsApp or Phone Number *
            </label>
            <input
              id="demo-phone"
              type="tel"
              required
              placeholder="e.g. 0803 123 4567"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (phoneError) setPhoneError("");
              }}
              aria-invalid={phoneError ? true : undefined}
              aria-describedby={phoneError ? "demo-phone-error" : undefined}
              inputMode="tel"
              autoComplete="tel"
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-sm font-mono focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
            />
            {phoneError && (
              <p id="demo-phone-error" role="alert" className="mt-1 text-xs text-red-700 font-sans">
                {phoneError}
              </p>
            )}
          </div>

          {/* Group: Optional Context Fields */}
          <div className="pt-2 border-t border-[#EDE6D8] space-y-3">
            <span className="text-[11px] font-mono font-semibold text-charcoal-500 uppercase tracking-wider block">
              Optional School Details
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor="demo-state"
                  className="block text-[11px] text-charcoal-600 mb-1 font-sans"
                >
                  School Location (State)
                </label>
                <select
                  id="demo-state"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                >
                  <option value="Lagos State">Lagos State</option>
                  <option value="Abuja (FCT)">Abuja (FCT)</option>
                  <option value="Rivers State">Rivers State</option>
                  <option value="Oyo State">Oyo State</option>
                  <option value="Ogun State">Ogun State</option>
                  <option value="Edo State">Edo State</option>
                  <option value="Enugu State">Enugu State</option>
                  <option value="Kano State">Kano State</option>
                  <option value="Delta State">Delta State</option>
                  <option value="Other State">Other Nigerian State</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="demo-student-count"
                  className="block text-[11px] text-charcoal-600 mb-1 font-sans"
                >
                  Student Population
                </label>
                <select
                  id="demo-student-count"
                  value={formData.studentCount}
                  onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                >
                  <option value="Under 200">Under 200 students</option>
                  <option value="200–500">200–500 students</option>
                  <option value="501–1,000">501–1,000 students</option>
                  <option value="Over 1,000">Over 1,000 students</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="demo-walkthrough-mode"
                className="block text-[11px] text-charcoal-600 mb-1 font-sans"
              >
                What would you most like to see?
              </label>
              <select
                id="demo-walkthrough-mode"
                value={formData.demoType}
                onChange={(e) => setFormData({ ...formData, demoType: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#D8CEBA] bg-[#FAF9F5] text-ink-900 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="All eight portals">All eight portals</option>
                <option value="Tuition fees & receipts">Tuition fees &amp; receipts</option>
                <option value="Morning attendance registers">Morning attendance registers</option>
                <option value="Continuous assessment & broadsheets">Continuous assessment &amp; broadsheets</option>
                <option value="CBT exams & student portal">CBT exams &amp; student portal</option>
                <option value="Gate security & visitor logs">Gate security &amp; visitor logs</option>
              </select>
            </div>
          </div>

          {/* Submit Button (Sentence Case, Max 3 Words) */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-sans font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-charcoal-500 text-center font-sans">
            We&apos;ll message you on WhatsApp to confirm a convenient time.
          </p>
        </form>
      )}
    </div>
  );
}
