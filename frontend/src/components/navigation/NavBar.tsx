"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "School", href: "/school" },
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
  const isDemoPage = pathname === "/demo";
  const isDarkHeroPage =
    pathname === "/product" ||
    pathname === "/about" ||
    pathname === "/demo" ||
    pathname === "/school";

  const getLinkClasses = (isActive: boolean) => {
    if (isDemoPage) {
      return isActive
        ? "text-emerald-300 font-extrabold"
        : "text-white/85 hover:text-white";
    }
    if (isScrolled) {
      return isActive
        ? "text-emerald-700 font-extrabold"
        : "text-charcoal-900 hover:text-emerald-700";
    }
    if (isDarkHeroPage) {
      return isActive
        ? "text-emerald-300 font-extrabold"
        : "text-white/90 hover:text-white";
    }
    return isActive
      ? "text-emerald-700 font-extrabold"
      : "text-charcoal-900 hover:text-emerald-700";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDemoPage
            ? isScrolled
              ? "bg-[#07332A]/90 backdrop-blur-md border-b border-emerald-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.25)] h-20"
              : "bg-transparent h-24"
            : isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-line/80 shadow-[0_4px_24px_rgba(7,51,42,0.06)] h-20"
            : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 sm:px-12 xl:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 text-2xl font-bold tracking-tight font-display transition-colors rounded-sm focus-ring-dark ${
              isDemoPage ? "text-white" : isScrolled ? "text-ink-900" : "text-white"
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

                return (
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
              aria-current={isDemoPage ? "page" : undefined}
              className={`inline-flex items-center justify-center font-sans font-semibold rounded-full pl-6 pr-2 py-2 text-[13px] bg-tangerine-500 hover:bg-tangerine-400 text-ink-900 gap-2.5 shadow-md transition-all duration-200 group cursor-pointer ${
                isDemoPage ? "hidden" : ""
              }`}
            >
              <span>Book a demo</span>
              <span className="w-7 h-7 rounded-full bg-ink-900 text-tangerine-500 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Action: Custom Architectural Hamburger Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className={`group flex items-center gap-2 px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                isDemoPage
                  ? "bg-white/[0.08] hover:bg-white/[0.14] border-white/20 text-white backdrop-blur-md"
                  : isScrolled
                  ? "bg-ink-900/[0.04] hover:bg-ink-900/[0.08] border-line text-ink-900"
                  : isDarkHeroPage
                  ? "bg-white/[0.08] hover:bg-white/[0.14] border-white/20 text-white backdrop-blur-md"
                  : isHome
                  ? "bg-white/[0.08] hover:bg-white/[0.14] border-white/20 text-white backdrop-blur-md"
                  : "bg-ink-900/[0.05] hover:bg-ink-900/[0.1] border-ink-900/15 text-ink-900"
              }`}
            >
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                Menu
              </span>
              <div className="flex flex-col items-end gap-1 w-4">
                <span className="w-4 h-[2px] bg-current rounded-full transition-transform" />
                <span className="w-2.5 h-[2px] bg-current rounded-full transition-all group-hover:w-4" />
              </div>
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
