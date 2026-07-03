"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success banner after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative px-6">
      {/* Visual background glow */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#22C55E]/5 blur-[90px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E] font-mono">
                <MessageSquare size={14} /> / Contact
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]">Exceptional</span>
              </h2>
              <p className="text-slate-400 text-sm font-sans max-w-sm">
                Have a project idea, job opportunity, or design system query? Send a message and let's collaborate.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              {/* Email */}
              <a
                href="mailto:rahuloffi237@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-[#22C55E]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#0F172A] transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Me</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#22C55E] transition-colors">
                    rahuloffi237@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:9791511213"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-[#22C55E]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-[#0F172A] transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Call Me</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#0EA5E9] transition-colors">
                    +91 97915 11213
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-white">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/rahulmk07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-[#22C55E]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 group-hover:bg-[#22C55E] group-hover:text-[#0F172A] transition-all duration-300">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#22C55E] transition-colors">
                    linkedin.com/in/rahulmk07
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-premium border border-slate-800/80 glow-box-green space-y-6">
              <h3 className="font-display font-extrabold text-xl text-white">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#22C55E] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#22C55E] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opening"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#22C55E] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Rahul, I'd like to collaborate..."
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#22C55E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full bg-[#22C55E] text-[#0F172A] font-sans font-bold text-sm uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>

              {/* Success Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center gap-3 text-[#22C55E]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-[#0F172A]">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold">Thank you for your message!</p>
                      <p className="text-slate-400">I will get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
