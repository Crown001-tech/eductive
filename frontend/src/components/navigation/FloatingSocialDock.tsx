"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

// =============================================================================
// PUT YOUR SOCIAL LINKS HERE:
// =============================================================================
const WHATSAPP_MESSAGE = `Hello, I'm interested in learning more about EDUCTIVE for my school.

I'd like to understand how it works, the features available, and how it could help us manage our school's daily operations more effectively.

Could you please share more information and let me know how I can book a demo?`;

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/2349078270213",
  instagram: "https://www.instagram.com/crowntech0?cplk=ZTZ4NzkxcjQ2anU1",
  facebook: "https://www.facebook.com/profile.php?id=61584192238008",
};

function buildWhatsAppUrl(rawLink: string): string {
  const base = rawLink.startsWith("http")
    ? rawLink.split("?")[0]
    : `https://wa.me/${rawLink.replace(/\D/g, "")}`;
  return `${base}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export function FloatingSocialDock() {
  const prefersReducedMotion = useReducedMotion();
  const whatsappHref = buildWhatsAppUrl(SOCIAL_LINKS.whatsapp);

  const items = [
    {
      id: "whatsapp",
      label: "Chat on WhatsApp",
      href: whatsappHref,
      delay: 0,
      accentClass:
        "bg-[#12A26B] text-white border-emerald-300/40 hover:bg-[#3DDC97] hover:text-[#07332A]",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1Z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Follow on Instagram",
      href: SOCIAL_LINKS.instagram,
      delay: 0.25,
      accentClass:
        "bg-[#07332A]/95 text-white border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-300",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Follow on Facebook",
      href: SOCIAL_LINKS.facebook,
      delay: 0.5,
      accentClass:
        "bg-[#07332A]/95 text-white border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-300",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      aria-label="Social media and WhatsApp links"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 select-none"
    >
      {items.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, -5, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }
          }
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border backdrop-blur-md shadow-[0_10px_28px_rgba(7,51,42,0.32)] flex items-center justify-center transition-colors duration-200 ${item.accentClass}`}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
