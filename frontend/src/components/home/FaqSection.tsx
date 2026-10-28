"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageSquare, ArrowUpRight } from "lucide-react";

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "need-app",
    num: "01",
    question: "Do parents and teachers need to install an app?",
    answer:
      "No. EDUCTIVE runs in any mobile browser. Parents and teachers can add it to their home screen like an app.",
  },
  {
    id: "slow-internet",
    num: "02",
    question: "What happens when the internet is slow?",
    answer:
      "EDUCTIVE is built to work on regular Nigerian mobile data. Pages are light and load quickly.",
  },
  {
    id: "older-teachers",
    num: "03",
    question: "Can our older teachers use this easily?",
    answer:
      "Yes. Each teacher sees only what their day requires: roll-call, classwork and marks. We train your staff directly.",
  },
  {
    id: "change-marks",
    num: "04",
    question: "Can a teacher change marks after submission?",
    answer:
      "No. Once the principal approves continuous assessment or exam scores, they are locked permanently.",
  },
  {
    id: "staff-privacy",
    num: "05",
    question: "Can staff see each other's records or salaries?",
    answer:
      "No. Every portal is strictly isolated. Teachers see only their classes, bursars see fees, and leaders see the whole school.",
  },
  {
    id: "setup-time",
    num: "06",
    question: "How long does setup take for our school?",
    answer:
      "We set up your school classes, subjects and staff rosters, usually within a few days.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("need-app");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FAF9F5] text-charcoal-900 py-24 xl:py-36 border-t border-line/70 select-none overflow-hidden"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-16 z-10">
        
        {/* =======================================================================
            TWO-COLUMN EDITORIAL ACCORDION LAYOUT
            - Left: Sticky Context, Clean Headline, WhatsApp Implementation Desk
            - Right: Tactile Numbered Accordions with Smooth Spring Easing
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
          
          {/* -------------------------------------------------------------------
              LEFT COLUMN: SECTION HEADER & DIRECT WHATSAPP DESK (5 Cols)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start">
            {/* Section Headline */}
            <h2 className="font-display font-bold text-ink-900 text-3xl sm:text-4xl xl:text-[46px] leading-[1.1] tracking-[-1.2px] mb-4 text-balance">
              Frequently asked questions
            </h2>

            {/* Intro Line */}
            <p className="text-base sm:text-lg text-charcoal-600 font-sans leading-relaxed mb-8 max-w-md text-balance">
              Straight answers on devices, internet, access and setup.
            </p>

            {/* Direct Lagos Implementation Desk Card */}
            <div className="w-full max-w-sm rounded-2xl bg-white border border-line p-5 shadow-[0_8px_24px_rgba(7,51,42,0.06)] flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-ink-900">
                    Have a school question?
                  </p>
                  <p className="text-xs text-charcoal-600 font-sans">
                    Lagos support available 8am – 6pm
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/2348000000000?text=Hello%20Eductive,%20I%20have%20a%20question%20about%20setting%20up%20my%20school."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: NUMBERED TACTILE ACCORDION ITEMS (7 Cols)
             ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-emerald-500/40 shadow-[0_12px_32px_rgba(7,51,42,0.06)]"
                      : "bg-white/60 hover:bg-white border-line/80 hover:border-line"
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      {/* Numbered Accent Indicator */}
                      <span
                        className={`font-mono text-xs font-bold pt-0.5 transition-colors ${
                          isOpen ? "text-emerald-700" : "text-charcoal-600"
                        }`}
                      >
                        {faq.num}
                      </span>

                      {/* Question Text */}
                      <h3
                        className={`font-display font-bold text-base sm:text-lg leading-snug transition-colors ${
                          isOpen ? "text-ink-900" : "text-charcoal-900 group-hover:text-emerald-800"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Tactile Toggle Icon */}
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-emerald-700 text-white rotate-180"
                          : "bg-surface text-charcoal-600 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Smooth Body Expand */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[15px] text-charcoal-700 font-sans leading-relaxed border-t border-line/40 pl-12 sm:pl-14">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
