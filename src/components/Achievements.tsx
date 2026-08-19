'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  {
    rank: '1st Place',
    title: 'Code4Society Hackathon 2026',
    detail: 'National Level Hackathon Winner',
    year: '2026',
  },
  {
    rank: '1st Place',
    title: 'CodeApex 24-hr Hackathon',
    detail: 'VIT Pune National Hackathon',
    year: '2025',
  },
  {
    rank: 'Best Paper Award',
    title: 'ICCTVB-25 Scopus Conference',
    detail: 'Sanjay Ghodawat University',
    year: '2025',
  },
  {
    rank: '3rd Place',
    title: 'National DevCraft Hackathon',
    detail: 'IIT Indore (Fluxus Fest)',
    year: '2025',
  },
  {
    rank: '3rd Place',
    title: 'National AI Hackathon',
    detail: 'IIT Indore AI Track',
    year: '2025',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1f1f1f]" />
            <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
              HONORS &amp; AWARDS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-normal text-[#f5f5f5] tracking-tight">
            Hackathons &amp; <span className="font-display italic text-[#f5f5f5]">achievements</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-3xl bg-[#141414] border border-[#1f1f1f] p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono accent-gradient-text font-bold">
                    {item.rank}
                  </span>
                  <span className="text-[10px] font-mono text-[#878787] px-2.5 py-0.5 rounded-full bg-[#0a0a0a] border border-[#1f1f1f]">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-normal text-[#f5f5f5] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#878787] font-mono">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
