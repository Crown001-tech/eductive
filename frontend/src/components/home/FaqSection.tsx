"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: "Reliability & Power",
    question: "What happens when our school internet or generator fails?",
    answer:
      "EDUCTIVE is built offline-first. Teachers can take morning roll-call and record continuous assessment scores on their tablets or mobile phones completely offline. The moment a cellular data or Wi-Fi connection returns, all recorded data automatically syncs to the central school ledger with zero conflict.",
  },
  {
    category: "Financial Custody",
    question: "Does EDUCTIVE touch or hold our school's tuition fees?",
    answer:
      "Never. EDUCTIVE is software, not a bank. All tuition fees and PTA levies flow directly from parents into your school's existing accounts (Zenith Bank, GTBank, First Bank, etc.) via secure, Central Bank-licensed payment channels. Your school maintains 100% direct custody of every single kobo.",
  },
  {
    category: "Staff Adoption",
    question: "How easy is this for older teachers who aren't tech-savvy?",
    answer:
      "If a teacher knows how to send a WhatsApp message, they can use EDUCTIVE in five minutes. Taking morning roll-call takes less than 30 seconds per class. Entering test marks is designed with built-in guardrails—for example, if a test is out of 20, the system prevents accidentally typing 25.",
  },
  {
    category: "Security & Tampering",
    question: "Can staff or students alter approved marks or fake receipts?",
    answer:
      "No. EDUCTIVE enforces strict role-based access and an immutable audit log. Once the principal digitally approves a terminal broadsheet, marks cannot be altered without written administrative override. Every payment receipt features a unique cryptographic serial number and QR verification seal that instantly exposes forged papers.",
  },
  {
    category: "Data Migration",
    question: "How long does it take to migrate from our current paper registers?",
    answer:
      "Our onboarding specialists complete full setup in 72 hours. You simply hand us your existing class registers or Excel sheets. We clean duplicate entries, format student names, structure class arms from JSS 1 to SS 3, and verify student IDs with zero downtime for your school.",
  },
  {
    category: "Parent Access",
    question: "How do parents receive termly report cards and fee notices?",
    answer:
      "Parents don't need to download bulky applications. They receive instant WhatsApp and SMS notifications with verified links to their child's official stamped e-receipts and end-of-term PDF report cards, complete with the school's crest, affective domain ratings, and principal signature.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FCFBF8] text-charcoal-900 py-24 xl:py-32 border-t border-line/60 overflow-hidden select-none"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            HEADER
           ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-mono font-bold tracking-[2.5px] uppercase text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full mb-3.5">
            FREQUENTLY ANSWERED QUESTIONS
          </span>

          <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.12] mb-4 text-balance">
            Clear answers to common questions.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed text-balance">
            Everything proprietors, principals, and bursars need to know before going live.
          </p>
        </div>

        {/* =======================================================================
            ACCORDION LIST (Clean, high-contrast, easy-to-read)
           ======================================================================= */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-emerald-500/40 shadow-sm ring-1 ring-emerald-500/15"
                    : "bg-white/80 border-line hover:border-emerald-500/30 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-display font-bold text-ink-900 text-base sm:text-lg leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                      isOpen
                        ? "bg-ink-900 text-white"
                        : "bg-surface text-charcoal-600 group-hover:bg-line"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed border-t border-line/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Support Sub-Box */}
        <div className="max-w-3xl mx-auto mt-10 p-4 sm:p-5 rounded-2xl bg-[#07332A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 font-bold">
              ?
            </div>
            <div>
              <p className="font-display font-bold text-sm">Have a unique school operational question?</p>
              <p className="text-xs text-surface/70 font-sans">
                Our Lagos school implementation team is available 8:00 AM – 6:00 PM.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2348000000000?text=Hello%20Eductive,%20I%20would%20like%20to%20ask%20a%20question%20about%20school%20implementation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-ink-900 font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5"
          >
            Chat with Implementation Desk
          </a>
        </div>
      </div>
    </section>
  );
}
