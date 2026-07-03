"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Load 3D background canvas on client-side only to prevent SSR hydration errors
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black -z-10" />,
});

export default function Home() {
  return (
    <>
      {/* Client-side R3F Background */}
      <ThreeBackground />

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Header />

        {/* Content Sections */}
        <main className="flex-grow">
          {/* Hero Intro */}
          <HeroSection />

          {/* About Profile & 3D Mechanical engine */}
          <AboutSection />

          {/* Projects & Work History */}
          <ProjectsSection />

          {/* Core Skills Dashboard */}
          <SkillsSection />

          {/* Education Timeline & Certificates */}
          <TimelineSection />

          {/* Contact Inquiries */}
          <ContactSection />
        </main>

        {/* Footer info & scroll-up */}
        <Footer />
      </div>
    </>
  );
}
