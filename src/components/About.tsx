'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FOCUS_AREAS = [
  {
    title: 'Generative & Agentic AI',
    desc: 'Architecting multi-agent TaskGraph workflows, autonomous agents, and hybrid RAG systems using PyTorch, LangGraph, FastAPI, and Qdrant.',
  },
  {
    title: 'Foundation & Vision Models',
    desc: 'Fine-tuning and deploying LLMs, VLMs (Vision Language Models), and DSLMs (Domain-Specific Language Models) for production workloads.',
  },
  {
    title: 'State Space Models & Physical AI',
    desc: 'Pioneering Mamba-2 SSM architectures, physical planning controllers, robotics action prediction, and ultra-efficient edge AI inference.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1f1f1f]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
                ENGINEERING PHILOSOPHY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-[#f5f5f5] tracking-tight mb-6 leading-tight">
              Where research <br />
              <span className="font-display italic text-[#f5f5f5]">meets production</span>
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#878787] leading-relaxed">
              <p>
                I am an <strong className="text-[#f5f5f5]">AI Engineer</strong> specializing in Generative AI, Large Language Models (LLMs), Vision Language Models (VLMs), Domain-Specific Language Models (DSLMs), Agentic AI, and Physical AI.
              </p>
              <p>
                My work spans building enterprise-grade RAG systems, multi-agent architectures, state-space models (Mamba-2), and high-performance inference pipelines with <span className="text-[#f5f5f5]">PyTorch, LangGraph, FastAPI, Qdrant, Docker, and NVIDIA GPUs</span>.
              </p>
              <p>
                As a published researcher, my contributions focus on state-space models, multi-agent systems, healthcare AI alignment, and embodied intelligence.
              </p>
            </div>
          </motion.div>

          {/* Right Column Cards */}
          <div className="lg:col-span-7 space-y-4">
            {FOCUS_AREAS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-3xl bg-[#141414] border border-[#1f1f1f] p-6 md:p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-normal text-[#f5f5f5]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-[#878787]">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#878787] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
