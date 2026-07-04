"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MousePointer, 
  Layers, 
  Type, 
  Layout, 
  PenTool, 
  Grid, 
  Eye, 
  Lock, 
  Settings,
  Sparkles,
  Trophy
} from "lucide-react";

type FigmaLayer = "badge" | "name" | "vector";

export default function DesignWorkbench() {
  const [selectedLayer, setSelectedLayer] = useState<FigmaLayer>("badge");

  // Properties mapping for the inspector based on selected layer
  const layerProperties = {
    badge: {
      name: "Rank Badge",
      x: "120 px",
      y: "40 px",
      w: "180 px",
      h: "32 px",
      fill: "linear-gradient(90deg, #22C55E, #0EA5E9)",
      radius: "9999 px",
      opacity: "100%",
    },
    name: {
      name: "Designer Name",
      x: "48 px",
      y: "112 px",
      w: "324 px",
      h: "72 px",
      fill: "#FFFFFF (Solid)",
      radius: "—",
      opacity: "100%",
    },
    vector: {
      name: "Bezier Curve Path",
      x: "24 px",
      y: "210 px",
      w: "372 px",
      h: "110 px",
      fill: "stroke: #22C55E (2px)",
      radius: "—",
      opacity: "85%",
    }
  };

  return (
    <div className="w-full rounded-2xl glass-premium border border-slate-800/80 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] flex flex-col h-[480px] relative font-sans text-left text-xs text-slate-300">
      
      {/* 1. TOP WINDOW BAR */}
      <div className="h-10 bg-slate-950/90 border-b border-slate-900 flex items-center justify-between px-4 select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="text-[10px] font-mono text-slate-500 ml-3 tracking-wider uppercase border-l border-slate-800 pl-3">
            Figma_WIP: Best_Designer
          </span>
        </div>

        {/* Top Tools Bar (Figma Style) */}
        <div className="flex items-center bg-slate-900/60 border border-slate-800/80 rounded-lg p-0.5 gap-0.5">
          <button className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <MousePointer size={12} />
          </button>
          <button className="p-1 rounded bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 transition-colors cursor-pointer">
            <Layout size={12} />
          </button>
          <button className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <PenTool size={12} />
          </button>
          <button className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <Type size={12} />
          </button>
          <button className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <Grid size={12} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[9px] font-mono text-slate-400">Autosaved</span>
        </div>
      </div>

      {/* 2. THREE-PANEL Figma WORKSPACE */}
      <div className="flex-1 flex overflow-hidden min-h-0 bg-slate-950/20">
        
        {/* LEFT SIDEBAR: LAYERS TREE */}
        <div className="w-1/4 min-w-[110px] border-r border-slate-900 bg-slate-950/60 p-3 select-none flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-slate-500 font-mono text-[9px] uppercase tracking-wider">
              <span>Layers</span>
              <Layers size={10} />
            </div>

            <div className="space-y-1 text-[10px]">
              {/* Parent Artboard */}
              <div className="flex items-center gap-1.5 text-slate-400 font-medium py-1">
                <Layout size={10} className="text-purple-400" />
                <span className="truncate">Desktop - Best Designer</span>
              </div>

              {/* Layer 1 */}
              <div 
                onClick={() => setSelectedLayer("badge")}
                className={`flex items-center justify-between gap-1.5 px-2 py-1.5 rounded cursor-pointer transition-colors ${
                  selectedLayer === "badge" ? "bg-slate-800/80 text-[#22C55E] font-medium" : "hover:bg-slate-900/50 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Trophy size={10} className={selectedLayer === "badge" ? "text-[#22C55E]" : "text-slate-500"} />
                  <span className="truncate">Rank Badge</span>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 text-slate-600">
                  <Eye size={8} />
                </div>
              </div>

              {/* Layer 2 */}
              <div 
                onClick={() => setSelectedLayer("name")}
                className={`flex items-center justify-between gap-1.5 px-2 py-1.5 rounded cursor-pointer transition-colors ${
                  selectedLayer === "name" ? "bg-slate-800/80 text-[#22C55E] font-medium" : "hover:bg-slate-900/50 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Type size={10} className={selectedLayer === "name" ? "text-[#22C55E]" : "text-slate-500"} />
                  <span className="truncate">Designer Title</span>
                </div>
              </div>

              {/* Layer 3 */}
              <div 
                onClick={() => setSelectedLayer("vector")}
                className={`flex items-center justify-between gap-1.5 px-2 py-1.5 rounded cursor-pointer transition-colors ${
                  selectedLayer === "vector" ? "bg-slate-800/80 text-[#22C55E] font-medium" : "hover:bg-slate-900/50 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <PenTool size={10} className={selectedLayer === "vector" ? "text-[#22C55E]" : "text-slate-500"} />
                  <span className="truncate">Bezier Curve</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900/60 pt-2 flex items-center justify-between text-slate-600 text-[8px] font-mono">
            <span>Layers: 3</span>
            <span>Frames: 1</span>
          </div>
        </div>

        {/* CENTRAL CANVAS: FIGMA ARTBOARD DISPLAY */}
        <div className="flex-1 bg-slate-950/40 relative overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

          {/* Actual mockup Figma frame */}
          <div className="w-[95%] h-[90%] bg-slate-950 rounded-lg border border-slate-800 shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)] relative flex flex-col items-center justify-between p-6 overflow-hidden">
            
            {/* Corner Alignment Indicators */}
            <span className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-slate-800" />
            <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-slate-800" />
            <span className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-slate-800" />
            <span className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-slate-800" />

            {/* ARTBOARD CONTENT */}

            {/* 1. Target Item: Rank Badge */}
            <motion.div 
              onClick={() => setSelectedLayer("badge")}
              className={`relative z-10 cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#22C55E]/10 to-[#0EA5E9]/10 border transition-all duration-300 ${
                selectedLayer === "badge" ? "border-[#22C55E] scale-105 shadow-[0_0_10px_rgba(34,197,94,0.15)]" : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <Trophy size={11} className="text-[#22C55E]" />
              <span className="text-[9px] font-mono text-white font-bold uppercase tracking-widest">
                Best UI/UX Designer in the World
              </span>
              
              {/* Figma Selection Handles */}
              {selectedLayer === "badge" && (
                <>
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                  <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                  <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                </>
              )}
            </motion.div>

            {/* 2. Target Item: Designer Title */}
            <motion.div 
              onClick={() => setSelectedLayer("name")}
              className={`relative z-10 cursor-pointer text-center py-2 px-4 transition-all duration-300 ${
                selectedLayer === "name" ? "border border-[#22C55E] rounded scale-105" : "border border-transparent hover:border-slate-800"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-display font-black tracking-tight text-white leading-none">
                RAHUL M K
              </h2>
              <p className="text-[9px] font-mono text-[#22C55E] uppercase tracking-widest mt-1">
                Best UI/UX Designer • UI/UX Specialist
              </p>

              {/* Figma Selection Handles */}
              {selectedLayer === "name" && (
                <>
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                  <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                  <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-[#22C55E] rounded-sm" />
                </>
              )}
            </motion.div>

            {/* 3. Target Item: Bezier Curve Vector Path */}
            <motion.div 
              onClick={() => setSelectedLayer("vector")}
              className={`w-full relative h-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                selectedLayer === "vector" ? "border border-slate-800/80 bg-slate-950/50 rounded" : ""
              }`}
            >
              <svg className="w-[90%] h-full stroke-slate-800 stroke-[1.5] fill-none">
                <path 
                  d="M10,60 C80,10 180,75 250,20" 
                  className={`transition-all duration-300 ${
                    selectedLayer === "vector" ? "stroke-[#22C55E] stroke-2" : "group-hover:stroke-slate-700"
                  }`} 
                />
                
                {/* Control Handles if vector selected */}
                {selectedLayer === "vector" && (
                  <>
                    {/* Anchor Points */}
                    <circle cx="10" cy="60" r="3" className="fill-[#22C55E]" />
                    <circle cx="250" cy="20" r="3" className="fill-[#22C55E]" />

                    {/* Bezier Handles */}
                    <line x1="10" y1="60" x2="80" y2="10" className="stroke-[#0EA5E9] stroke-[0.8] stroke-dasharray-[2,2]" />
                    <line x1="250" y1="20" x2="180" y2="75" className="stroke-[#0EA5E9] stroke-[0.8] stroke-dasharray-[2,2]" />
                    <circle cx="80" cy="10" r="2.5" className="fill-white stroke-[#0EA5E9]" />
                    <circle cx="180" cy="75" r="2.5" className="fill-white stroke-[#0EA5E9]" />
                  </>
                )}
              </svg>

              {/* Cursor Overlay */}
              <motion.div 
                animate={{
                  x: selectedLayer === "vector" ? [20, 100, -20, 20] : [-50, 40, -10, -50],
                  y: selectedLayer === "vector" ? [10, -20, 5, 10] : [20, -10, 40, 20],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 z-20 pointer-events-none flex flex-col gap-0.5 items-start"
              >
                <MousePointer size={12} className="text-[#22C55E] fill-[#22C55E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
                <span className="bg-[#22C55E] text-[#0F172A] font-mono text-[8px] font-bold px-1 py-0.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.4)] whitespace-nowrap">
                  Rahul (Designer)
                </span>
              </motion.div>
            </motion.div>
            
            {/* Status Footer on Artboard */}
            <div className="w-full flex items-center justify-between text-[8px] font-mono text-slate-600 border-t border-slate-900 pt-2 shrink-0">
              <span className="flex items-center gap-1"><Sparkles size={8} className="text-yellow-500" /> Best UI/UX Architect</span>
              <span>100% Alignment</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR: DESIGN INSPECTOR */}
        <div className="w-1/4 min-w-[110px] border-l border-slate-900 bg-slate-950/60 p-3 select-none flex flex-col gap-4">
          <div className="flex items-center justify-between text-slate-500 font-mono text-[9px] uppercase tracking-wider">
            <span>Inspector</span>
            <Settings size={10} />
          </div>

          <div className="space-y-3 font-mono text-[9px] text-slate-400">
            {/* Layer Info */}
            <div className="space-y-1">
              <span className="text-slate-600 block">Active Layer</span>
              <span className="text-white font-bold block truncate">{layerProperties[selectedLayer].name}</span>
            </div>

            <div className="h-px bg-slate-900" />

            {/* Position Controls */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-0.5">
                <span className="text-slate-600">X</span>
                <span className="text-white block bg-slate-900 px-1 py-0.5 rounded">{layerProperties[selectedLayer].x}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-600">Y</span>
                <span className="text-white block bg-slate-900 px-1 py-0.5 rounded">{layerProperties[selectedLayer].y}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-600">W</span>
                <span className="text-white block bg-slate-900 px-1 py-0.5 rounded">{layerProperties[selectedLayer].w}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-600">H</span>
                <span className="text-white block bg-slate-900 px-1 py-0.5 rounded">{layerProperties[selectedLayer].h}</span>
              </div>
            </div>

            <div className="h-px bg-slate-900" />

            {/* Fill Controls */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Fill / Color</span>
                <span className="text-[8px] text-slate-500">{layerProperties[selectedLayer].opacity}</span>
              </div>
              <span className="text-[8px] text-white block bg-slate-900 px-1.5 py-1 rounded truncate leading-tight">
                {layerProperties[selectedLayer].fill}
              </span>
            </div>

            {/* Constraints */}
            <div className="space-y-1 pt-1">
              <span className="text-slate-600 block">Constraints</span>
              <span className="text-white block bg-slate-900 px-1 py-0.5 rounded text-[8px] text-center">Center / Center</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. WORKSPACE STATUS FOOTER */}
      <div className="h-8 bg-slate-950 border-t border-slate-900 px-4 flex items-center justify-between text-[9px] font-mono text-slate-500 shrink-0 select-none z-10">
        <div className="flex items-center gap-1">
          <span className="text-[#22C55E] font-bold">●</span>
          <span>Workspace: Figma / Framer Live</span>
        </div>
        <span>Figma Version: 116.4</span>
      </div>

    </div>
  );
}
