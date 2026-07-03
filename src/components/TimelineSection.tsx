"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  type: "education" | "experience";
  description: string;
  metric?: string;
}

interface Certification {
  title: string;
  provider: string;
  year: string;
  description: string;
}

export default function TimelineSection() {
  const timelineData: TimelineItem[] = [
    {
      year: "2025",
      title: "Email Marketing",
      subtitle: "Dotnix Technology",
      type: "experience",
      description: "Designed responsive HTML/CSS email marketing templates and optimized delivery settings for ISPs to ensure inbox rates.",
    },
    {
      year: "2022 - 2025",
      title: "Bachelor of Technology (IT)",
      subtitle: "Rathinam Technical Campus, Coimbatore",
      type: "education",
      description: "Specialized in software systems, database engineering, and human-computer interaction.",
      metric: "8.0 CGPA",
    },
    {
      year: "2018 - 2021",
      title: "Diploma in Mechanical Engineering",
      subtitle: "Latha Mathavan Polytechnic College, Madurai",
      type: "education",
      description: "Studied mechanical system structure, CAD drafting, machine mechanics, and material tolerances.",
      metric: "87% Score",
    },
    {
      year: "2018",
      title: "SSLC (10th Standard)",
      subtitle: "Indira Gandhi Memorial Matriculation Hr Secondary School, Madurai",
      type: "education",
      description: "Completed secondary education under the state board system.",
      metric: "84% Score",
    },
  ];

  const certifications: Certification[] = [
    {
      title: "UX/UI Design for Beginners",
      provider: "Great Learning Academy",
      year: "2024",
      description: "Fundamental course on design thinking, visual hierarchy, responsive layouts, and user research methodologies.",
    },
    {
      title: "Web Development Certification",
      provider: "Internz Learn",
      year: "2025",
      description: "Advanced training in HTML5 semantic structure, CSS layout styling (Flexbox/Grid), and JavaScript logic workflows.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="timeline" className="py-24 relative px-6">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education & Experience Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E] font-mono">
                <Calendar size={14} /> / Timeline
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Academic &amp; Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]">Journey</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative border-l-2 border-slate-800 ml-4 space-y-12"
            >
              {timelineData.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 group"
                >
                  {/* Circle Indicator on the line */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-slate-800 group-hover:border-[#22C55E] transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#22C55E] transition-colors duration-300" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 group-hover:border-[#22C55E]/20 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(34,197,94,0.03)] space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-0.5 rounded-full">
                        {item.year}
                      </span>
                      {item.metric && (
                        <span className="text-xs font-mono text-slate-400 font-semibold bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                          {item.metric}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-display font-extrabold text-white flex items-center gap-2">
                        {item.type === "education" ? <GraduationCap size={18} className="text-[#0EA5E9]" /> : <Briefcase size={18} className="text-[#22C55E]" />}
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0EA5E9] font-mono">
                <Award size={14} /> / Certifications
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#22C55E]">Credentials</span>
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-xl glass-premium border border-slate-800/80 hover:border-[#0EA5E9]/20 transition-all duration-300 flex items-start gap-4 hover:shadow-[0_4px_25px_rgba(14,165,233,0.03)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#0EA5E9] shrink-0">
                    <CheckCircle2 size={24} />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0EA5E9]">
                        {cert.provider} • {cert.year}
                      </span>
                      <h3 className="text-md font-display font-bold text-white leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
