"use client";

import React from "react";
import { Trophy } from "lucide-react";

export default function DesignWorkbench() {
  return (
    <div className="w-full rounded-2xl bg-slate-950/30 border border-slate-900 flex flex-col items-center justify-center p-12 text-center h-[350px] relative overflow-hidden shadow-[0_15px_40px_-20px_rgba(0,0,0,0.8)]">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#22C55E]/5 rounded-full blur-[80px] -z-10" />
      
      <Trophy size={48} className="text-[#22C55E] mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.35)]" />
      
      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-3">
        Verified Standing
      </span>
      
      <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white leading-tight uppercase">
        No. 1 UI/UX Designer
      </h2>
      
      <p className="text-xs font-sans font-bold text-[#22C55E] uppercase tracking-widest mt-2">
        In the World
      </p>
    </div>
  );
}
