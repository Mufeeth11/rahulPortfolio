"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Film, Watch, Mail, Layers } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  figmaUrl?: string;
  githubUrl?: string;
  icon: React.ReactNode;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Rolex Watch Ordering Platform",
      category: "Mobile Web / Luxury Design",
      description: "Designed responsive mobile interfaces and reusable UI components for a premium luxury watch ordering web app.",
      details: [
        "Crafted mobile-first layouts reflecting the prestige and aesthetics of the Rolex brand.",
        "Built responsive grid architectures and interactive watch-selector systems.",
        "Developed reusable modular front-end UI tokens for typography, shadows, and spacing.",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design", "Luxury UX"],
      figmaUrl: "https://www.figma.com/file/7UNnQqoZrjSTaDGvCBMunx",
      icon: <Watch className="text-[#22C55E]" size={24} />,
    },
    {
      title: "Movie Ticket Booking App",
      category: "UI/UX Design / Figma App Design",
      description: "Developed user flows, wireframes, and high-fidelity interactive prototypes for a seamless ticket booking journey.",
      details: [
        "Conducted user research to identify pain points in traditional theatre booking apps.",
        "Designed end-to-end user flows: cinema selection, seating plan picker, and checkout.",
        "Created micro-interactions and smooth transitions using Figma advanced prototyping.",
      ],
      tech: ["Figma", "Wireframing", "Prototyping", "User Research", "Usability Testing", "UX Flows"],
      figmaUrl: "https://www.figma.com/file/1CBwsly8MmFINJpD4u8RfP",
      icon: <Film className="text-[#22C55E]" size={24} />,
    },
    {
      title: "Email Marketing Engine & HTML Templates",
      category: "Email Marketing / Dotnix Technology",
      description: "Built responsive HTML email campaigns and configured deliverability pathways for enterprise product outreach.",
      details: [
        "Designed and coded tables-based responsive HTML/CSS email templates compatible with all major ISPs.",
        "Optimized email layout code to pass strict spam filters and ensure inbox deliverability.",
        "Analyzed campaign performance metrics (open rates, click-throughs) to refine design iterations.",
      ],
      tech: ["HTML Emails", "CSS Table Layouts", "ISP Deliverability", "Marketing Campaigns", "Dotnix Tech"],
      icon: <Mail className="text-[#22C55E]" size={24} />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <section id="projects" className="py-24 relative px-6">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#0EA5E9]/5 blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E] font-mono">
            <Layers size={14} /> / Projects &amp; Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Selected Works &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]">Case Studies</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-sans">
            A showcase of wireframes, prototypes, mobile web applications, and professional front-end experience.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col justify-between p-6 rounded-2xl glass-premium border border-slate-800/80 hover:border-[#22C55E]/30 transition-all duration-500 hover:-translate-y-2 glow-box-green relative overflow-hidden"
            >
              {/* Highlight background shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/0 via-transparent to-[#0EA5E9]/0 group-hover:from-[#22C55E]/5 group-hover:to-[#0EA5E9]/5 transition-all duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Header: Icon & Category */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#22C55E] uppercase bg-[#22C55E]/10 px-2.5 py-1 rounded-full self-start sm:self-center">
                    {project.category}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-extrabold text-white group-hover:text-[#22C55E] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Bullet Details */}
                <ul className="space-y-2 pt-2">
                  {project.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-400 font-sans flex items-start gap-2">
                      <span className="text-[#22C55E] mt-1 font-mono">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: Tags & CTAs */}
              <div className="space-y-6 pt-6 mt-6 border-t border-slate-800/80 relative z-10">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono bg-slate-950/80 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.figmaUrl && (
                  <div className="flex items-center gap-4">
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#22C55E] tracking-wider uppercase transition-colors duration-300"
                    >
                      Figma Design File <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
