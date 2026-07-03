"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  GitMerge, 
  Layers, 
  MonitorSmartphone, 
  Check, 
  Copy, 
  Maximize2, 
  Sliders,
  Type
} from "lucide-react";

type Tab = "design-system" | "user-flow" | "prototype";

export default function DesignWorkbench() {
  const [activeTab, setActiveTab] = useState<Tab>("design-system");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [prototypeMode, setPrototypeMode] = useState<"desktop" | "mobile">("desktop");
  const [wireframeInteracted, setWireframeInteracted] = useState(false);

  const colors = [
    { name: "Accent Green", hex: "#22C55E", label: "hsl(142, 70%, 45%)", desc: "Primary Action" },
    { name: "Electric Blue", hex: "#0EA5E9", label: "hsl(199, 89%, 48%)", desc: "Tech Details" },
    { name: "Emerald Mint", hex: "#34D399", label: "hsl(150, 60%, 54%)", desc: "Status Glow" },
    { name: "Slate Charcoal", hex: "#0F172A", label: "hsl(222, 47%, 11%)", desc: "Background Base" },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="w-full rounded-2xl glass-premium border border-slate-800 hover:border-[#22C55E]/15 overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col h-[480px]">
      
      {/* Workbench Header Toolbar */}
      <div className="px-5 py-4 bg-slate-950/90 border-b border-slate-900 flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-2 border-l border-slate-800 pl-3">
            System Workbench
          </span>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex gap-1 bg-slate-900/60 p-1 rounded-lg border border-slate-800">
          {(["design-system", "user-flow", "prototype"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-3 py-1.5 rounded-md text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === tab
                  ? "bg-[#22C55E] text-[#0F172A] shadow-[0_2px_8px_rgba(34,197,94,0.3)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab === "design-system" && <Palette size={12} />}
              {tab === "user-flow" && <GitMerge size={12} />}
              {tab === "prototype" && <MonitorSmartphone size={12} />}
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Main Sandbox Canvas */}
      <div className="flex-1 p-6 relative bg-slate-950/30 overflow-hidden flex flex-col justify-between">
        
        {/* Decorative Grid Line Behind Content */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        <AnimatePresence mode="wait">
          
          {/* TAB 1: DESIGN SYSTEM */}
          {activeTab === "design-system" && (
            <motion.div
              key="design-system"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 flex-1 flex flex-col justify-between z-10"
            >
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-[#22C55E] uppercase tracking-wider flex items-center gap-1.5">
                  <Palette size={12} /> Design System Tokens
                </h4>
                <p className="text-[11px] text-slate-400 font-sans">
                  Interactive typography and HEX colors mapping that drives the design-to-code alignment.
                </p>
              </div>

              {/* Color Tokens Palette */}
              <div className="grid grid-cols-2 gap-3">
                {colors.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="group cursor-pointer p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg border border-slate-800 transition-transform duration-200 group-hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <p className="text-[11px] font-bold text-white font-sans">{color.name}</p>
                        <p className="text-[9px] font-mono text-slate-400">{color.hex}</p>
                      </div>
                    </div>
                    <div className="text-slate-500 group-hover:text-slate-300">
                      {copiedColor === color.hex ? (
                        <Check size={12} className="text-[#22C55E]" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Typography Specs */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-400">
                    <Type size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white font-sans">Typography Pairings</h5>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                      Archivo (Headings) / Space Grotesk (Body)
                    </p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[8px] font-mono text-slate-400 uppercase">
                    300-900
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#22C55E]/10 border border-[#22C55E]/20 text-[8px] font-mono text-[#22C55E] uppercase font-bold">
                    Systematic
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: USER FLOW */}
          {activeTab === "user-flow" && (
            <motion.div
              key="user-flow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 flex-1 flex flex-col justify-between z-10"
            >
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-[#22C55E] uppercase tracking-wider flex items-center gap-1.5">
                  <GitMerge size={12} /> UX Architecture Flow
                </h4>
                <p className="text-[11px] text-slate-400 font-sans">
                  The sequence of design thinking milestones from early problem analysis to validated usability releases.
                </p>
              </div>

              {/* Dynamic Flow Map */}
              <div className="relative py-4">
                
                {/* SVG Connecting Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "80px" }}>
                  <path
                    d="M 60,35 Q 165,35 165,35"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 60,35 Q 165,35 165,35"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="2"
                    strokeDasharray="6 24"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                  <path
                    d="M 235,35 Q 345,35 345,35"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 235,35 Q 345,35 345,35"
                    fill="none"
                    stroke="#0EA5E9"
                    strokeWidth="2"
                    strokeDasharray="6 24"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                </svg>

                <div className="grid grid-cols-3 gap-2 relative">
                  
                  {/* Step 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-[#22C55E]/30 relative z-10 flex flex-col justify-between h-20 hover:border-[#22C55E]/60 transition-colors">
                    <span className="text-[9px] font-mono text-[#22C55E] font-bold">01 • RESEARCH</span>
                    <h5 className="text-[11px] font-bold text-white font-sans mt-1 leading-snug">User Interviews</h5>
                    <p className="text-[8px] text-slate-500 font-mono mt-0.5">Define Painpoints</p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 relative z-10 flex flex-col justify-between h-20 hover:border-slate-700 transition-colors">
                    <span className="text-[9px] font-mono text-slate-400">02 • IDEATION</span>
                    <h5 className="text-[11px] font-bold text-white font-sans mt-1 leading-snug">Wireframing</h5>
                    <p className="text-[8px] text-slate-500 font-mono mt-0.5">Information Arch</p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-[#0EA5E9]/20 relative z-10 flex flex-col justify-between h-20 hover:border-[#0EA5E9]/50 transition-colors">
                    <span className="text-[9px] font-mono text-[#0EA5E9]">03 • DELIVERY</span>
                    <h5 className="text-[11px] font-bold text-white font-sans mt-1 leading-snug">Hi-Fi Mockups</h5>
                    <p className="text-[8px] text-slate-500 font-mono mt-0.5">Figma Prototypes</p>
                  </div>

                </div>
              </div>

              {/* UX Quality Indicator */}
              <div className="px-4 py-3 rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/15 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-slate-400">Aesthetic Alignment Met:</span>
                <span className="font-bold text-[#22C55E] flex items-center gap-1">
                  100% System Integrity <Check size={14} />
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PROTOTYPE */}
          {activeTab === "prototype" && (
            <motion.div
              key="prototype"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4 flex-1 flex flex-col justify-between z-10"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono text-[#22C55E] uppercase tracking-wider flex items-center gap-1.5">
                    <MonitorSmartphone size={12} /> Live Responsive Sandbox
                  </h4>
                  <div className="flex bg-slate-900 rounded-md p-0.5 border border-slate-800 text-[8px] font-mono font-bold">
                    <button
                      onClick={() => setPrototypeMode("desktop")}
                      className={`px-2 py-1 rounded transition-colors ${
                        prototypeMode === "desktop" ? "bg-[#0EA5E9] text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Desktop
                    </button>
                    <button
                      onClick={() => setPrototypeMode("mobile")}
                      className={`px-2 py-1 rounded transition-colors ${
                        prototypeMode === "mobile" ? "bg-[#0EA5E9] text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Mobile
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-sans">
                  Click components inside the sandbox to simulate interactions and state updates.
                </p>
              </div>

              {/* Interactive Mock Sandbox Device */}
              <div className="flex-1 bg-slate-950/80 rounded-xl border border-slate-900 flex items-center justify-center p-3 relative" style={{ minHeight: "170px" }}>
                
                <motion.div
                  animate={{ 
                    width: prototypeMode === "desktop" ? "100%" : "150px",
                    height: prototypeMode === "desktop" ? "130px" : "150px",
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  className="bg-slate-900 rounded-lg border border-slate-800 p-3 overflow-hidden flex flex-col justify-between relative shadow-lg"
                >
                  {/* Mock Wireframe UI Card */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-2 rounded bg-slate-800" />
                      <div className="w-3 h-3 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => {
                        setWireframeInteracted(true);
                        setTimeout(() => setWireframeInteracted(false), 2000);
                      }}
                      className="cursor-pointer p-2 rounded bg-slate-950 border border-slate-850 hover:border-[#22C55E]/30 transition-all duration-300 text-left relative overflow-hidden group"
                    >
                      <div className="w-full h-1 bg-[#22C55E]/20 rounded mb-1" />
                      <div className="w-2/3 h-1 bg-slate-800 rounded" />
                      <div className="absolute top-1 right-2 text-[8px] font-mono text-slate-500 group-hover:text-[#22C55E] transition-colors">
                        {wireframeInteracted ? "Active" : "Click Me"}
                      </div>
                      
                      {/* Interactive Ripple */}
                      <AnimatePresence>
                        {wireframeInteracted && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#22C55E]/10 rounded pointer-events-none"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Mock Bottom Actions */}
                  <div className="flex gap-1.5">
                    <div className="flex-1 h-3 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/10" />
                    <div className="w-6 h-3 rounded bg-slate-800" />
                  </div>

                </motion.div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Workbench Footer Stats */}
      <div className="px-5 py-3.5 bg-slate-950/90 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <Layers size={10} className="text-[#0EA5E9]" /> Layout System: v2.4
        </span>
        <span className="flex items-center gap-1.5">
          <Sliders size={10} className="text-[#22C55E]" /> Accessibility: WCAG AA
        </span>
      </div>

      {/* SVG Animation Keyframes */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -30;
          }
        }
      `}</style>
    </div>
  );
}
