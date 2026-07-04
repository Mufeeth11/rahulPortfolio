"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Sparkles, Globe } from "lucide-react";

export default function DesignWorkbench() {
  return (
    <div className="w-full rounded-2xl glass-premium border border-slate-800/80 hover:border-[#22C55E]/15 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] flex flex-col h-[480px] relative justify-between p-8 text-left">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-[#22C55E]/5 to-[#0EA5E9]/5 blur-[60px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Top Section: Header & Tag */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[9px] font-mono text-[#22C55E] font-bold uppercase tracking-widest">
          <Trophy size={10} className="text-[#22C55E]" /> Global Rank #1
        </div>
        
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          Portfolio Registry
        </span>
      </div>

      {/* Middle Section: Main Typographic Statement */}
      <div className="space-y-6 my-auto z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
            <Globe size={14} className="text-[#0EA5E9]" /> Verified World Standings
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            NO. 1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#0EA5E9] glow-text-green">UI/UX</span> DESIGNER
          </h1>
          
          <p className="text-sm font-sans font-medium text-slate-400 uppercase tracking-wider">
            In the World
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-slate-800/80 via-slate-700/50 to-transparent" />

        {/* Core Pillars */}
        <div className="space-y-3 font-sans">
          <div className="flex items-start gap-3">
            <span className="text-[#22C55E] mt-0.5">✦</span>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aesthetic Innovation</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Crafting industry-defining visual languages and glassmorphic user interfaces.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-[#0EA5E9] mt-0.5">✦</span>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Systems Thinking</h4>
              <p className="text-[11px] text-[#94A3B8] mt-0.5">Designing scalable token architectures and high-fidelity modular systems.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-emerald-400 mt-0.5">✦</span>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Friction UX</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Streamlining user journeys to ensure peak usability and conversion rates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Footer Accreditation */}
      <div className="flex items-center justify-between border-t border-slate-900 pt-6 text-[10px] text-slate-500 font-mono z-10">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-[#22C55E]" />
          <span>Accredited Designer</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Sparkles size={12} className="text-yellow-500" />
          <span>Elite Class</span>
        </div>
      </div>

    </div>
  );
}
