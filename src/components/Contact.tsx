'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_TEXT = 'BUILDING THE FUTURE OF AI • AGENTIC SYSTEMS • MULTIMODAL LLMS • ';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden border-t border-[#1f1f1f]">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414]/50 to-[#0a0a0a] pointer-events-none" />

      {/* Animated Marquee Bar */}
      <div className="relative w-full overflow-hidden py-4 border-y border-[#1f1f1f] bg-[#0a0a0a]/60 backdrop-blur-md mb-16 select-none">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
            className="flex whitespace-nowrap text-xs md:text-sm font-mono tracking-[0.2em] text-[#878787] uppercase"
          >
            <span>{MARQUEE_TEXT.repeat(6)}</span>
            <span>{MARQUEE_TEXT.repeat(6)}</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono mb-4">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display italic text-[#f5f5f5] mb-6 leading-tight">
            Let&apos;s build something extraordinary.
          </h2>

          <p className="text-sm md:text-base text-[#878787] mb-8 leading-relaxed">
            Open for AI engineering roles, LLM research collaborations, agentic system design, and consultation.
          </p>

          {/* Email CTA Button */}
          <a
            href="mailto:vedantjadhav1414@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#f5f5f5] text-[#0a0a0a] font-medium text-base hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full accent-gradient animate-ping" />
            <span>vedantjadhav1414@gmail.com</span>
            <span className="text-sm transition-transform group-hover:translate-x-1">↗</span>
          </a>

          {/* Direct Phone & Location */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#878787] mt-6">
            <span>📞 +91-7410036328</span>
            <span>&bull;</span>
            <span>📍 Pune, Maharashtra, India</span>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#878787] font-mono">
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/VedantJadhav701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5f5f5] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vedantjadhav-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5f5f5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://orcid.org/0009-0002-6784-9511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5f5f5] transition-colors"
            >
              ORCID
            </a>
            <a
              href="https://huggingface.co/vedantjadhav701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5f5f5] transition-colors"
            >
              Hugging Face
            </a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#1f1f1f]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] text-[#f5f5f5]">
              Available for AI projects &amp; research
            </span>
          </div>

          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} Vedant Sanjay Jadhav.
          </div>
        </div>
      </div>
    </footer>
  );
}
