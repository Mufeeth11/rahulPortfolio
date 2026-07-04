"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Target,
  RefreshCw,
  Award,
  Flame,
  CheckCircle2
} from "lucide-react";

type MetricTab = "rankings" | "accreditation" | "metrics";

export default function DesignWorkbench() {
  const [activeTab, setActiveTab] = useState<MetricTab>("rankings");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState("");
  const [scanComplete, setScanComplete] = useState(false);

  const startUXScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanComplete(false);
    
    const statuses = [
      "Initializing aesthetic radar...",
      "Analyzing layout grid alignment...",
      "Verifying Figma component modularity...",
      "Measuring usability friction (0.01% found)...",
      "Scanning design system code-readiness...",
      "AUTHENTICATED: WORLD'S PREMIER DESIGN AUTHORITY"
    ];

    statuses.forEach((status, index) => {
      setTimeout(() => {
        setScanStatus(status);
        if (index === statuses.length - 1) {
          setIsScanning(false);
          setScanComplete(true);
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <div className="w-full rounded-2xl glass-premium border border-slate-800 hover:border-[#22C55E]/15 overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col h-[480px] relative select-none">
      
      {/* Laser Scan Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent shadow-[0_0_15px_#22C55E] z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Header Toolbar */}
      <div className="px-5 py-4 bg-slate-950/90 border-b border-slate-900 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-2 border-l border-slate-800 pl-3">
            VERIFIED REGISTRY
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#22C55E]/10 border border-[#22C55E]/20 text-[9px] font-mono text-[#22C55E] font-bold uppercase tracking-wider">
          <Globe size={10} className="animate-spin-slow" /> Global Rank #1
        </div>
      </div>

      {/* Main Sandbox Canvas */}
      <div className="flex-1 p-5 relative bg-slate-950/30 overflow-hidden flex flex-col justify-between z-10">
        
        {/* Decorative Grid Line Behind Content */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        {/* Top Section: Title & Interactive Tab Buttons */}
        <div className="flex flex-col gap-4 z-10">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <h4 className="text-xs font-mono text-[#22C55E] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#22C55E]" /> Design Authority
              </h4>
              <p className="text-[10px] text-slate-400 font-sans">
                Global index evaluating aesthetics, usability, and design execution.
              </p>
            </div>
            
            {/* Quick stats tabs */}
            <div className="flex bg-slate-900/60 p-0.5 rounded-lg border border-slate-800 text-[8px] font-mono font-bold uppercase tracking-wider shrink-0">
              {(["rankings", "accreditation", "metrics"] as MetricTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-2 py-1.5 rounded transition-colors ${
                    activeTab === tab 
                      ? "bg-[#22C55E] text-[#0F172A]" 
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Central Interactive Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center min-h-[190px]">
            
            {/* Left: Giant Holographic #1 Emblem */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative w-36 h-36 flex items-center justify-center">
                
                {/* Rotating Dotted Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-[#22C55E]/40 rounded-full"
                />

                {/* Rotating Glowing Inner Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute inset-2 border border-slate-800 border-t-[#0EA5E9] border-b-[#22C55E] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                />

                {/* Pulsing Solid Ring */}
                <motion.div
                  animate={{ scale: [0.97, 1.03, 0.97] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute inset-4 rounded-full bg-slate-950/80 border border-slate-800 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]"
                />

                {/* Text and Icon Content */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <Trophy className="text-[#22C55E] drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] mb-0.5" size={24} />
                  <span className="text-4xl font-display font-black tracking-tighter text-white bg-clip-text leading-none mt-1">
                    NO. 1
                  </span>
                  <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">
                    WORLDWIDE
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Tab Details Panel */}
            <div className="md:col-span-7 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "rankings" && (
                  <motion.div
                    key="rankings"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-3 text-left"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#22C55E] font-bold uppercase tracking-wider">
                        GLOBAL DESIGN BOARD
                      </span>
                      <h5 className="text-sm font-bold text-white font-sans leading-snug">
                        #1 UI/UX Designer Worldwide
                      </h5>
                    </div>
                    <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                      Ranked as the premier UI/UX designer out of 4.2 million certified practitioners. Evaluated across product design architecture, visual layouts, and modular design system integration.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] font-mono text-slate-400 uppercase">
                        Percentile: 99.999%
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[8px] font-mono text-[#0EA5E9] uppercase font-bold">
                        Gold Tier Certified
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "accreditation" && (
                  <motion.div
                    key="accreditation"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-3 text-left"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#0EA5E9] font-bold uppercase tracking-wider">
                        DESIGN SYSTEM CREDENTIALS
                      </span>
                      <h5 className="text-sm font-bold text-white font-sans leading-snug">
                        Elite Modular Standards
                      </h5>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] text-slate-300">
                        <ShieldCheck size={12} className="text-[#22C55E]" />
                        <span>Figma Design Tokens Alignment (100% Match)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-300">
                        <ShieldCheck size={12} className="text-[#22C55E]" />
                        <span>W3C Accessibility Compliance (WCAG AAA)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-300">
                        <ShieldCheck size={12} className="text-[#22C55E]" />
                        <span>Design-to-Code Seamless Translation index</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "metrics" && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-3 text-left"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        ESTIMATED IMPACT METRICS
                      </span>
                      <h5 className="text-sm font-bold text-white font-sans leading-snug">
                        System Efficiency Parameters
                      </h5>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                        <div className="text-slate-500 font-mono text-[8px] uppercase">User Friction</div>
                        <div className="text-white font-bold mt-0.5">0.01% (Extremely Low)</div>
                      </div>
                      <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                        <div className="text-slate-500 font-mono text-[8px] uppercase">Aesthetic Rating</div>
                        <div className="text-[#22C55E] font-bold mt-0.5">99.8/100 (Optimal)</div>
                      </div>
                      <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                        <div className="text-slate-500 font-mono text-[8px] uppercase">Load Overhead</div>
                        <div className="text-white font-bold mt-0.5">0.4s (Ultra-fast)</div>
                      </div>
                      <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                        <div className="text-slate-500 font-mono text-[8px] uppercase">Conversion Rate</div>
                        <div className="text-[#0EA5E9] font-bold mt-0.5">+48% Projected</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Section: Interactive Scanning Console */}
        <div className="space-y-2.5 z-10">
          
          {/* Scan Status Display */}
          <div className="px-4 py-2.5 rounded-xl bg-[#0F172A]/70 border border-slate-850 flex items-center justify-between text-left h-10 overflow-hidden relative">
            <span className="font-mono text-[9px] text-slate-500 shrink-0">Status Console:</span>
            
            <div className="flex-1 text-right ml-4 font-mono text-[10px] text-slate-300 font-bold truncate">
              {isScanning ? (
                <span className="flex items-center justify-end gap-1.5">
                  <RefreshCw size={10} className="animate-spin text-[#22C55E]" />
                  {scanStatus}
                </span>
              ) : scanComplete ? (
                <span className="flex items-center justify-end gap-1.5 text-[#22C55E]">
                  <CheckCircle2 size={11} className="text-[#22C55E] shrink-0" />
                  CREDENTIALS VERIFIED &amp; SECURE
                </span>
              ) : (
                <span className="text-slate-500">System standby. Ready to audit.</span>
              )}
            </div>
          </div>

          {/* Trigger Scan Button */}
          <button
            onClick={startUXScan}
            disabled={isScanning}
            className={`cursor-pointer w-full group py-3 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 flex items-center justify-center gap-2 ${
              isScanning 
                ? "bg-slate-900/40 border-slate-850 text-slate-600" 
                : "bg-gradient-to-r from-slate-950 to-slate-900 border-slate-800 hover:border-[#22C55E]/40 text-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
            }`}
          >
            {isScanning ? (
              <>
                <RefreshCw size={12} className="animate-spin" /> Scanning Design System...
              </>
            ) : (
              <>
                <Zap size={12} className="text-[#22C55E] group-hover:scale-110 transition-transform" />
                Trigger Holographic UX Audit
              </>
            )}
          </button>
        </div>

      </div>

      {/* Workbench Footer Stats */}
      <div className="px-5 py-3.5 bg-slate-950/90 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono text-slate-400 z-10">
        <span className="flex items-center gap-1.5">
          <Award size={10} className="text-[#0EA5E9]" /> Authority Index: v5.2
        </span>
        <span className="flex items-center gap-1.5">
          <Flame size={10} className="text-[#22C55E] animate-pulse" /> Status: Global Leader
        </span>
      </div>

      {/* Spin Animation Speed Helper */}
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
