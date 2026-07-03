"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Cpu, PenTool, LayoutGrid, Award, Terminal, Code2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
}

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "UI/UX Design",
      icon: <PenTool className="text-[#22C55E]" size={20} />,
      skills: ["Wireframing", "Prototyping", "User Interface Design", "Responsive Design", "Visual Design", "Design Systems"],
      gradient: "from-[#22C55E]/10 to-transparent",
    },
    {
      title: "UX Research & Thinking",
      icon: <Cpu className="text-[#0EA5E9]" size={20} />,
      skills: ["User Research", "User Flows", "Information Architecture", "Usability Testing", "Problem Solving", "Iterative Design"],
      gradient: "from-[#0EA5E9]/10 to-transparent",
    },
    {
      title: "Front-End Development",
      icon: <Code2 className="text-emerald-400" size={20} />,
      skills: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React / Next.js", "DOM Manipulation"],
      gradient: "from-emerald-400/10 to-transparent",
    },
    {
      title: "Tools & Software",
      icon: <LayoutGrid className="text-[#22C55E]" size={20} />,
      skills: ["Figma", "Adobe XD", "Canva", "InVision", "Sketch (Basic)", "VS Code"],
      gradient: "from-[#22C55E]/10 to-transparent",
    },
    {
      title: "Programming & Data",
      icon: <Terminal className="text-[#0EA5E9]" size={20} />,
      skills: ["Python", "SQL", "Database Schemas", "Git & GitHub", "API Integration"],
      gradient: "from-[#0EA5E9]/10 to-transparent",
    },
    {
      title: "Soft Skills & Methods",
      icon: <Award className="text-emerald-400" size={20} />,
      skills: ["Communication", "Team Collaboration", "Creativity & Aesthetics", "Attention to Detail", "Time Management"],
      gradient: "from-emerald-400/10 to-transparent",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section id="skills" className="py-24 relative px-6">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E] font-mono">
            <Code2 size={14} /> / Skills Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Design &amp; Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]">Capabilities</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-sans">
            A comprehensive overview of my capabilities mapping across user interface systems, research methods, and web engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-2xl glass-premium border border-slate-800/80 hover:border-[#22C55E]/20 transition-all duration-300 bg-gradient-to-br ${category.gradient} flex flex-col justify-between hover:shadow-[0_4px_30px_rgba(34,197,94,0.05)]`}
            >
              <div className="space-y-6">
                {/* Title & Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {category.title}
                  </h3>
                </div>

                {/* List of Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-sans text-slate-300 hover:text-[#22C55E] hover:border-[#22C55E]/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
