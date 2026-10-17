"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const NAV_LINKS = [
  { label: "About", targetId: "about" },
  { label: "Product", targetId: "capabilities" },
  { label: "Roles", targetId: "roles" },
  { label: "Schools", targetId: "case-study" },
  { label: "FAQ", targetId: "faq" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll Spy to highlight active section in navbar
      const sections = ["about", "capabilities", "roles", "case-study", "faq", "demo-section"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-line/80 shadow-[0_4px_24px_rgba(7,51,42,0.06)] h-20"
            : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 sm:px-12 xl:px-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", " ");
            }}
            className={`flex items-center gap-2.5 text-2xl font-bold tracking-tight font-display transition-colors rounded-sm focus-ring-dark ${
              isScrolled ? "text-ink-900" : "text-white"
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#12A26B]" />
            <span className="tracking-wide">EDUCTIVE</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-7" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.targetId;
                return (
                  <a
                    key={link.targetId}
                    href={`#${link.targetId}`}
                    onClick={(e) => scrollToSection(e, link.targetId)}
                    className={`text-[13px] font-bold tracking-[1.2px] uppercase transition-all duration-200 py-1.5 px-1 relative ${
                      isScrolled
                        ? isActive
                          ? "text-emerald-700 font-extrabold"
                          : "text-charcoal-700 hover:text-emerald-700"
                        : isActive
                        ? "text-emerald-300 font-extrabold"
                        : "text-charcoal-900 hover:text-emerald-700"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-emerald-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <a
              href="#demo-section"
              onClick={(e) => scrollToSection(e, "demo-section")}
              className="inline-flex items-center justify-center font-sans font-semibold rounded-full pl-6 pr-2 py-2 text-[13px] bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 gap-2.5 shadow-md transition-all duration-200 group cursor-pointer"
            >
              <span>Book a demo</span>
              <span className="w-7 h-7 rounded-full bg-ink-900 text-tangerine-500 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile Actions: Demo CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#demo-section"
              onClick={(e) => scrollToSection(e, "demo-section")}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-tangerine-500 text-ink-900 shadow-sm"
            >
              Book a demo
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? "text-ink-900 hover:bg-surface"
                  : "text-white hover:bg-ink-800"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
        onSelectSection={scrollToSection}
      />
    </>
  );
}
