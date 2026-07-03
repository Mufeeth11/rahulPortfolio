"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["hero", "about", "projects", "skills", "timeline", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-black/70 backdrop-blur-md border-b border-[#22C55E]/10" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#22C55E] to-[#0EA5E9] flex items-center justify-center font-display font-extrabold text-sm text-[#0F172A] transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            RM
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-[#22C55E] transition-colors duration-300">
            RAHUL M K
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-sans text-sm font-medium tracking-wide uppercase cursor-pointer transition-colors duration-300 ${
                activeSection === item.id 
                  ? "text-[#22C55E] relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-[#22C55E] after:shadow-[0_0_8px_rgba(34,197,94,0.8)]" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Icons / CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/rahulmk07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-[#22C55E] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:rahuloffi237@gmail.com"
            className="p-2 text-slate-400 hover:text-[#22C55E] transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer glass px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider text-[#22C55E] hover:bg-[#22C55E] hover:text-[#0F172A] border border-[#22C55E]/30 transition-all duration-300 flex items-center gap-1 shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
          >
            Hire Me <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-[#22C55E] transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-black/95 backdrop-blur-xl border-t border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-sans text-xl font-bold uppercase tracking-wider cursor-pointer ${
                activeSection === item.id 
                  ? "text-[#22C55E] text-2xl" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/rahulmk07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-[#22C55E]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rahuloffi237@gmail.com"
              className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-[#22C55E]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
