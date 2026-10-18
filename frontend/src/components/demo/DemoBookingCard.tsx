"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, MessageSquare, Calendar, PhoneCall, Building2 } from "lucide-react";

export function DemoBookingCard() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    role: "Proprietor / School Owner",
    phone: "",
    state: "Lagos State",
    studentCount: "200 - 500 Students",
    demoType: "Online WhatsApp Walkthrough",
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
        /* Confirmed Walkthrough Slip */
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
                WALKTHROUGH SCHEDULED
              </p>
              <p className="text-[10px] text-charcoal-500 font-sans">
                Crown Tech Engineering Deployment
              </p>
            </div>
            <span className="text-[10px] bg-emerald-500/15 text-emerald-800 font-bold px-2.5 py-1 rounded">
              REF #DEMO-2026
            </span>
          </div>

          <div className="space-y-3 font-sans text-xs text-charcoal-900 mb-6">
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">School</span>
              <span className="font-bold text-ink-900">{formData.schoolName}</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Leader</span>
              <span className="font-bold text-ink-900">{formData.contactName} ({formData.role})</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Location</span>
              <span className="font-medium text-charcoal-800">{formData.state}</span>
            </div>
            <div className="flex justify-between border-b border-line/60 pb-2">
              <span className="text-charcoal-500">Contact</span>
              <span className="font-mono font-bold text-emerald-700">{formData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-500">Walkthrough Mode</span>
              <span className="font-medium text-charcoal-800">{formData.demoType}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-sans mb-6 flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping flex-shrink-0 mt-1" />
            <p>
              A Crown Tech school specialist will reach out to <span className="font-bold">{formData.phone}</span> on WhatsApp within 2 hours to confirm your time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto flex-1 text-center py-3 px-6 rounded-full bg-ink-900 text-white font-sans font-semibold text-xs hover:bg-ink-800 transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="https://oakland-school.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full border border-emerald-600 text-emerald-800 font-sans font-semibold text-xs hover:bg-emerald-50 transition-colors"
            >
              See Oakland High pilot
            </a>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-line/80 p-7 sm:p-9 shadow-[0_20px_50px_rgba(7,51,42,0.08)] flex flex-col gap-5 text-left"
        >
          <div>
            <h3 className="font-display font-bold text-ink-900 text-xl sm:text-2xl mb-1">
              Schedule your school walkthrough
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Takes 15 minutes. See your classes, fee receipts, and registers live.
            </p>
          </div>

          {/* School Name */}
          <div>
            <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
              School Name *
            </label>
            <input
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
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Chief Adeleke"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
                Your Role *
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Proprietor / School Owner">Proprietor / School Owner</option>
                <option value="Principal / Head of School">Principal / Head of School</option>
                <option value="School Bursar / Accountant">School Bursar / Accountant</option>
                <option value="Vice Principal / Admin">Vice Principal / Admin</option>
              </select>
            </div>
          </div>

          {/* WhatsApp Phone & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0803 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm font-mono focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
                State / Location *
              </label>
              <select
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

          {/* School Size & Preferred Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
                Approximate Students
              </label>
              <select
                value={formData.studentCount}
                onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Under 200 Students">Under 200 Students</option>
                <option value="200 - 500 Students">200 - 500 Students</option>
                <option value="500 - 1,000 Students">500 - 1,000 Students</option>
                <option value="1,000+ Students">1,000+ Students</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5 font-sans">
                Walkthrough Mode
              </label>
              <select
                value={formData.demoType}
                onChange={(e) => setFormData({ ...formData, demoType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink-900 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              >
                <option value="Online WhatsApp Walkthrough">Online WhatsApp Walkthrough</option>
                <option value="Google Meet Video Call">Google Meet Video Call</option>
                <option value="In-Person Campus Visit">In-Person Campus Visit</option>
              </select>
            </div>
          </div>

          {/* Submit Button (Sentence case, max 3 words) */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 font-sans font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-charcoal-500 text-center font-sans">
            Zero commitment. Crown Tech will configure a preview for your school before the call.
          </p>
        </form>
      )}
    </div>
  );
}
