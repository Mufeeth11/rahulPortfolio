"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText, MousePointerClick } from "lucide-react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6"
    >
      {/* Visual background layers */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#22C55E]/10 blur-[80px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0EA5E9]/10 blur-[100px] -z-10 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 -z-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#22C55E]/20 text-xs font-semibold uppercase tracking-wider text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
            Open to Opportunities
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase font-sans">
              Welcome to the Portfolio of
            </h2>
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tight text-white leading-tight">
              RAHUL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#0EA5E9] glow-text-green">M K</span>
            </h1>
          </motion.div>

          {/* Subtitle / Role description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl font-sans font-medium text-[#22C55E] tracking-wide"
          >
            UI/UX Designer &amp; Front-End Developer
          </motion.p>

          {/* Pitch */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-slate-300 max-w-2xl font-sans leading-relaxed text-center"
          >
            B.Tech Information Technology graduate merging user-centric design with creative front-end logic. Crafting intuitive wireframes, responsive UI components, and immersive web experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="cursor-pointer group flex items-center gap-2 bg-[#22C55E] text-[#0F172A] px-8 py-3.5 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Explore Projects
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <a
              href="/Rahul_M%20K_%20UI_UX.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 glass border border-slate-700 hover:border-[#22C55E]/40 text-white px-8 py-3.5 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              <FileText size={16} className="text-[#22C55E]" />
              View Resume
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-[#22C55E] transition-colors duration-300 cursor-pointer"
            onClick={() => handleScrollTo("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll to Discover</span>
            <MousePointerClick size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
