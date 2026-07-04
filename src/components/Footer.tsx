"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-slate-900 py-12 px-6 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-5 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Name and Quote */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#22C55E] to-[#0EA5E9] flex items-center justify-center font-display font-extrabold text-xs text-[#0F172A]">
              RM
            </div>
            <span className="font-display font-bold text-white tracking-wider">
              RAHUL M K
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm italic font-sans">
            "Design is not just what it looks like and feels like. Design is how it works." — Systems meets aesthetics.
          </p>
        </div>

        {/* Right Side: Navigation & Social Link */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/rahulmk07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-[#22C55E] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rahuloffi237@gmail.com"
              className="text-xs text-slate-400 hover:text-[#22C55E] transition-colors"
            >
              Email
            </a>
            <a
              href="/Rahul_M%20K_%20UI_UX.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-[#22C55E] transition-colors"
            >
              Resume
            </a>
          </div>

          <p className="text-[10px] font-mono text-slate-600">
            &copy; {currentYear} Rahul M K. All rights reserved. Crafted with Next.js, R3F &amp; GSAP.
          </p>
        </div>

        {/* Floating Scroll to Top button */}
        <button
          onClick={handleScrollToTop}
          className="cursor-pointer p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#22C55E] hover:border-[#22C55E]/30 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
