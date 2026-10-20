"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, MessageSquare, Calendar, PhoneCall, Building2 } from "lucide-react";

export function DemoBookingCard() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    role: "School Proprietor / Owner",
    phone: "",
    state: "Lagos State",
    studentCount: "200–500",
    demoType: "Student records and admissions",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.phone || !formData.contactName) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {submitted ? (
        /* Confirmed Request Slip */
        <div className="bg-[#FFFDF8] rounded-3xl border border-[#D8CEBA] p-7 sm:p-9 shadow-[0_24px_60px_rgba(7,51,42,0.12)] font-mono text-xs relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Perforated top tear line */}
          <div className="absolute top-0 left-0 right-0 h-[4px] flex justify-between px-3 -mt-[2px]">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-[4px] h-[4px] rounded-full bg-white border border-[#D8CEBA]" />
            ))}
          </div>

          <div className="flex items-center justify-between border-b border-dashed border-[#D2C7B2] pb-4 mb-5 pt-1">
            <div>
              <p className="font-display font-bold text-ink-900 text-sm">
                DEMO REQUEST RECEIVED
              </p>
              <p className="text-[10px] text-charcoal-500 font-sans">
                Thank you for your interest.
              </p>
            </div>
            <span className="text-[10px] bg-emerald-500/15 text-emerald-800 font-bold px-2.5 py-1 rounded">
              REQUEST #DEMO-2026
            </span>
          </div>

          <div className="space-y-3 font-sans text-xs text-charcoal-900 mb-6">
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">School</span>
              <span className="font-bold text-ink-900">{formData.schoolName}</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Contact</span>
              <span className="font-bold text-ink-900">{formData.contactName} ({formData.role})</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Location</span>
              <span className="font-medium text-charcoal-800">{formData.state}</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Phone / WhatsApp</span>
              <span className="font-mono font-bold text-emerald-700">{formData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Interest Focus</span>
              <span className="font-medium text-charcoal-800">{formData.demoType}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-sans mb-6 flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping flex-shrink-0 mt-1" />
            <p>
              Your request has been received. Our team will review your details and contact you using the information you provided to discuss a suitable time for your walkthrough.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto flex-1 text-center py-3 px-6 rounded-full bg-ink-900 text-white font-sans font-semibold text-xs hover:bg-ink-800 transition-colors"
            >
              Return to EDUCTIVE
            </Link>
            <Link
              href="/product"
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full border border-emerald-600 text-emerald-800 font-sans font-semibold text-xs hover:bg-emerald-50 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white text-charcoal-900 rounded-3xl border border-line/80 p-7 sm:p-9 shadow-[0_20px_50px_rgba(7,51,42,0.08)] flex flex-col gap-5 text-left"
        >
          <div>
            <h3 className="font-display font-bold text-ink-900 text-xl sm:text-2xl mb-1">
              Request your EDUCTIVE demo
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Share a few details so we can understand your school and arrange the next step.
            </p>
          </div>

          {/* School Name */}
          <div>
            <label htmlFor="demo-school-name" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
              School Name *
            </label>
            <input
              id="demo-school-name"
              type="text"
              required
              placeholder="e.g. Oakland Comprehensive High School"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
            />
          </div>

          {/* Contact Person Name & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="demo-contact-name" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
                Your Full Name *
              </label>
              <input
                id="demo-contact-name"
                type="text"
                required
                placeholder="e.g. Dr. A. Adeleke"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="demo-role" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
                Your Role *
              </label>
              <select
                id="demo-role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="School Proprietor / Owner">School Proprietor / Owner</option>
                <option value="Principal / Head of School">Principal / Head of School</option>
                <option value="Vice Principal / Administrator">Vice Principal / Administrator</option>
                <option value="Bursar / Accountant">Bursar / Accountant</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* WhatsApp Phone & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="demo-phone" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
                WhatsApp or Phone Number *
              </label>
              <input
                id="demo-phone"
                type="tel"
                required
                placeholder="e.g. 0803 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm font-mono focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="demo-state" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
                School Location *
              </label>
              <select
                id="demo-state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Lagos State">Lagos State</option>
                <option value="Abuja (FCT)">Abuja (FCT)</option>
                <option value="Rivers State (Port Harcourt)">Rivers State (Port Harcourt)</option>
                <option value="Oyo State (Ibadan)">Oyo State (Ibadan)</option>
                <option value="Ogun State">Ogun State</option>
                <option value="Edo State (Benin City)">Edo State (Benin City)</option>
                <option value="Enugu State">Enugu State</option>
                <option value="Kano State">Kano State</option>
                <option value="Delta State">Delta State</option>
                <option value="Other State">Other State in Nigeria</option>
              </select>
            </div>
          </div>

          {/* School Size & Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="demo-student-count" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
                Approximate Student Population
              </label>
              <select
                id="demo-student-count"
                value={formData.studentCount}
                onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Under 200">Under 200</option>
                <option value="200–500">200–500</option>
                <option value="501–1,000">501–1,000</option>
                <option value="Over 1,000">Over 1,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="demo-walkthrough-mode" className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5 font-sans">
                What would you most like to explore?
              </label>
              <select
                id="demo-walkthrough-mode"
                value={formData.demoType}
                onChange={(e) => setFormData({ ...formData, demoType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Student records and admissions">Student records and admissions</option>
                <option value="Attendance">Attendance</option>
                <option value="Academic management and results">Academic management and results</option>
                <option value="Fees and financial records">Fees and financial records</option>
                <option value="Security & Reception Portal">Security & Reception Portal</option>
                <option value="Staff and administration">Staff and administration</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-sans font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request My Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-charcoal-500 text-center font-sans">
            Submitting this form is a request, not a confirmed appointment. Our team will contact you to discuss the next step.
          </p>
        </form>
      )}
    </div>
  );
}
