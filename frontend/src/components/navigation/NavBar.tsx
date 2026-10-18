"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "School", href: "https://oakland-school.onrender.com", external: true },
  { label: "FAQ", href: "/#faq" },
];

export function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/" || pathname === "";
  const isDarkHeroPage = pathname === "/product" || pathname === "/about";

  const getLinkClasses = (isActive: boolean) => {
    if (isScrolled) {
      return isActive
        ? "text-emerald-700 font-extrabold"
        : "text-charcoal-800 hover:text-emerald-700";
    }
    if (isDarkHeroPage) {
      return isActive
        ? "text-emerald-300 font-extrabold"
        : "text-white/90 hover:text-white";
    }
    // Default light background / Home
    return isActive
      ? "text-emerald-700 font-extrabold"
      : "text-charcoal-900 hover:text-emerald-700";
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
          <Link
            href="/"
            className={`flex items-center gap-2.5 text-2xl font-bold tracking-tight font-display transition-colors rounded-sm focus-ring-dark ${
              isScrolled ? "text-ink-900" : "text-white"
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#12A26B]" />
            <span className="tracking-wide">EDUCTIVE</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-7" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === pathname;
                const linkClasses = `text-[13px] font-bold tracking-[1.2px] uppercase transition-all duration-200 py-1.5 px-1 relative ${getLinkClasses(
                  isActive
                )}`;

                return link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    <span>{link.label}</span>
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={linkClasses}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-emerald-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <Link
              href="/demo"
              className="inline-flex items-center justify-center font-sans font-semibold rounded-full pl-6 pr-2 py-2 text-[13px] bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 gap-2.5 shadow-md transition-all duration-200 group cursor-pointer"
            >
              <span>Book a demo</span>
              <span className="w-7 h-7 rounded-full bg-ink-900 text-tangerine-500 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Actions: Demo CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/demo"
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-tangerine-500 text-ink-900 shadow-sm"
            >
              Book a demo
            </Link>

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
      />
    </>
  );
}
