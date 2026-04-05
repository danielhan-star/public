"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink } from "@/lib/types";

interface HeaderProps {
  siteName: string;
  navLinks: NavLink[];
  languageSwitch: string;
  languageHref: string;
  homeHref: string;
}

export default function Header({
  siteName,
  navLinks,
  languageSwitch,
  languageHref,
  homeHref,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href={homeHref} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">TP</span>
          </div>
          <span className="text-navy font-bold text-xl hidden sm:block">
            {siteName}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-navy font-medium transition-colors text-sm tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={languageHref}
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors border border-gold/30 rounded-full px-4 py-1.5"
          >
            {languageSwitch}
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-text-secondary hover:text-navy font-medium text-sm tracking-wide uppercase py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={languageHref}
              className="block text-gold font-medium text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {languageSwitch}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
