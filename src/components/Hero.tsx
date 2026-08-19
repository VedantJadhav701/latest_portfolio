'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hls from 'hls.js';

const ROLES = ['AI Engineer', 'LLM Researcher', 'Agentic AI Developer', 'Multimodal Specialist'];
const HLS_URL = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Setup HLS Video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Cycling Roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 bg-[#0a0a0a]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-35"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-[#141414]/70 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full accent-gradient animate-ping" />
          <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
            COLLECTION &apos;26 &bull; PUNE, INDIA
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl font-display italic leading-[0.9] tracking-tight text-[#f5f5f5] mb-6 text-center select-none"
        >
          Vedant Sanjay Jadhav
        </motion.h1>

        {/* Role Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-[#878787] font-body mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span>An</span>
          <span className="relative inline-block overflow-hidden h-[1.3em] min-w-[190px] sm:min-w-[240px] text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-x-0 font-display italic text-[#f5f5f5] font-normal"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>based in Pune.</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base text-[#878787] max-w-lg mb-10 text-center leading-relaxed"
        >
          Specializing in Mamba-2 &amp; Transformer LLMs, Agentic AI workflows, Multimodal systems, and high-performance RAG &amp; MLOps.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* "See Works" - Solid Button */}
          <a
            href="#work"
            className="group relative rounded-full text-sm font-medium px-8 py-3.5 bg-[#f5f5f5] text-[#0a0a0a] hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>See Works</span>
            <span className="text-xs transition-transform group-hover:translate-y-0.5">↓</span>
          </a>

          {/* "Reach out..." - Outlined Button */}
          <a
            href="#contact"
            className="group relative rounded-full text-sm font-medium px-8 py-3.5 border border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-md text-[#f5f5f5] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto hover:border-transparent"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1px]" />
            <span className="absolute inset-[1px] rounded-full bg-[#0a0a0a] -z-10" />
            <span>Reach out...</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
          </a>

          {/* "Resume PDF" */}
          <a
            href="/vedant_jadhav_resume_latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-sm font-medium px-6 py-3.5 text-[#878787] hover:text-[#f5f5f5] transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Resume PDF</span>
            <span className="text-xs opacity-70">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-[#878787] uppercase tracking-[0.25em] font-mono">
          SCROLL
        </span>
        <div className="w-[1px] h-10 bg-[#1f1f1f] relative overflow-hidden">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
}
