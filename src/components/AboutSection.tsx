"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Cpu, Award, BookOpen, Compass } from "lucide-react";
import DesignWorkbench from "./DesignWorkbench";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E] font-mono">
                <Compass size={14} /> / About Me
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Where Structural Precision Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]">Digital Innovation</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-slate-300 font-sans leading-relaxed">
              <p>
                My journey is defined by a unique transition from physical engineering to digital design. Having completed a **Diploma in Mechanical Engineering**, I developed an innate understanding of assembly tolerances, architectural rhythms, and structural ergonomics.
              </p>
              <p>
                Driven by a passion for technology, I pursued a **B.Tech in Information Technology** (graduating with an **8.0 CGPA**). This academic blend allows me to approach software development and UI/UX design with a structured, systematic problem-solving approach. I don't just design interfaces; I design modular systems.
              </p>
              <p>
                I specialize in turning wireframes and research patterns into complete, responsive user flows. In my design process, I apply usability testing and data hierarchy to ensure every pixel serves a purpose, while keeping the underlying front-end code clean, semantic, and performant.
              </p>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl glass hover:scale-[1.02] border border-slate-900 hover:border-[#22C55E]/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] mb-4 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                  <BookOpen size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-sm">B.Tech Graduate</h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">Information Technology (8.0 CGPA)</p>
              </div>

              <div className="p-5 rounded-2xl glass hover:scale-[1.02] border border-slate-900 hover:border-[#0EA5E9]/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] mb-4 shadow-[0_0_10px_rgba(14,165,233,0.1)]">
                  <Cpu size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-sm">Mechanical Engineer</h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">Diploma (87% Academic Score)</p>
              </div>

              <div className="p-5 rounded-2xl glass hover:scale-[1.02] border border-slate-900 hover:border-emerald-400/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                  <Award size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-sm">UI/UX + Front-End</h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">Design Systems &amp; Clean Code</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Design Workbench */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <DesignWorkbench />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
