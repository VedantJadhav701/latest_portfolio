'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: 'AI Engineer Intern',
    company: 'Tech Mahindra',
    location: 'Pune, Maharashtra',
    period: 'Jun. 2026 – Present',
    highlights: [
      'Led the AI team as a Young AI Engineer on the development of Indus, contributing to model experimentation, evaluation, AI system design, and technical implementation.',
      'Worked on DSLMs, VLMs, and Generative AI systems, building pipelines spanning data prep, retrieval, inference, evaluation, and deployment; worked with NVIDIA Nemotron 3.5 for LLM experimentation under practical compute constraints.',
      'Designed and implemented RAG, semantic retrieval, and agentic AI workflows using Python, PyTorch, Hugging Face, LangGraph, FastAPI, and Ollama.',
    ],
    tech: ['Indus LLM', 'NVIDIA Nemotron 3.5', 'DSLMs', 'VLMs', 'LangGraph', 'PyTorch', 'FastAPI'],
    type: 'Industry Experience',
  },
  {
    role: 'AI Engineer Intern',
    company: 'DPulseAI Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    period: 'Oct. 2025 – Apr. 2026',
    highlights: [
      'Built production Generative AI and RAG systems, improving retrieval accuracy by 35% and reducing latency by 45% through hybrid chunking and reranking strategies.',
      'Architected Dockerized LLM inference pipelines with CI/CD and canary deployments, cutting deployment time to under 10 minutes using GitHub Actions and Docker Registry.',
      'Implemented KV-cache quantization and post-deployment drift monitoring, reducing inference memory requirements and improving LLM serving efficiency on consumer-grade hardware.',
    ],
    tech: ['RAG Systems', 'Hybrid Chunking', 'Docker', 'CI/CD Canary', 'KV-Cache Quantization', 'GitHub Actions'],
    type: 'Industry Experience',
  },
  {
    role: 'B.Tech. in AI & Machine Learning',
    company: 'Pimpri Chinchwad University',
    location: 'Pune, Maharashtra',
    period: '2023 – 2027',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning with a aggregate CGPA of 8.10 / 10.0.',
      'Active researcher in State Space Models (Mamba-2), Agentic AI, and Small Language Models (SLMs).',
    ],
    tech: ['8.10 CGPA', 'AI & ML Major', 'Published Researcher', 'Hackathon Champion'],
    type: 'Academic Education',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
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
              CAREER &amp; EDUCATION
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-normal text-[#f5f5f5] tracking-tight">
            Work <span className="font-display italic text-[#f5f5f5]">experience</span>
          </h2>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group rounded-3xl bg-[#141414] border border-[#1f1f1f] p-6 md:p-8 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono text-[#89AACC] uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#0a0a0a] border border-[#1f1f1f]">
                      {exp.type}
                    </span>
                    <span className="text-xs text-[#878787] font-mono">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-normal text-[#f5f5f5] flex items-center gap-2 flex-wrap">
                    <span>{exp.company}</span>
                    <span className="text-sm font-display italic text-[#878787]">&bull; {exp.role}</span>
                  </h3>
                </div>

                <div className="text-xs text-[#878787] font-mono flex items-center gap-1.5 self-start md:self-auto">
                  <span>📍</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#878787] leading-relaxed">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#89AACC] font-bold mt-1">&rarr;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies / Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1f1f1f]">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-[#878787] px-2.5 py-1 rounded-md bg-[#0a0a0a] border border-[#1f1f1f]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
