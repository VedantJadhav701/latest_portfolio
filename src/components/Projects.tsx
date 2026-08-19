'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  bullets: string[];
  tags: string[];
  link: string;
  linkText: string;
  colSpan: string; // e.g. "md:col-span-7"
  accentGradient: string;
}

const PROJECTS: Project[] = [
  {
    title: 'SparkAI-50M-A100',
    subtitle: 'Hybrid Mamba-Transformer LLM',
    category: 'LLM Architecture & Training',
    description:
      'Designed and trained a 50M-parameter LM from scratch using a hybrid Mamba-2 + GQA architecture on a single NVIDIA A100 80GB GPU, implementing tokenization, training, checkpointing, and evaluation.',
    bullets: [
      'Pretrained 50M-parameter language model from scratch',
      'Hybrid Mamba-2 state-space model + Grouped Query Attention (GQA)',
      'Single NVIDIA A100 80GB GPU execution',
    ],
    tags: ['Mamba-2', 'GQA', 'PyTorch', 'NVIDIA A100', 'Pretraining'],
    link: 'https://huggingface.co/vedantjadhav701/SparkAI-50M-Instruct',
    linkText: 'Hugging Face',
    colSpan: 'md:col-span-7',
    accentGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    title: 'Vidya Educational LLM',
    subtitle: 'Multilingual Educational AI',
    category: 'SLM Fine-Tuning & Evaluation',
    description:
      'Developed a 1.7B-parameter multilingual Educational LLM fine-tuned for NCERT Science and Mathematics across 11 Indian languages, achieving 93.3% aggregate accuracy on a custom 64-question, 8-script evaluation suite.',
    bullets: [
      '1.7B parameters fine-tuned for NCERT Science & Math',
      'Supports 11 Indian languages across 8 scripts',
      '93.3% aggregate accuracy on custom evaluation suite',
    ],
    tags: ['1.7B SLM', 'Multilingual', 'NCERT', 'Hugging Face Spaces'],
    link: 'https://vidya-edu.vercel.app/',
    linkText: 'Live Demo',
    colSpan: 'md:col-span-5',
    accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    title: 'WinFix OmniAgent',
    subtitle: 'Agentic Windows Diagnostics',
    category: 'Agentic AI & Diagnostics',
    description:
      'Built an evidence-driven agentic troubleshooting system with planner–specialist TaskGraph execution, domain-specific diagnostic agents, safety-gated tool execution, and a real-time Gradio control console.',
    bullets: [
      'Planner–Specialist TaskGraph multi-agent execution',
      'Safety-gated system tool execution',
      'Real-time Gradio diagnostic control console',
    ],
    tags: ['LangGraph', 'Agentic AI', 'TaskGraph', 'Gradio'],
    link: 'https://github.com/VedantJadhav701',
    linkText: 'GitHub Repo',
    colSpan: 'md:col-span-5',
    accentGradient: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
  },
  {
    title: 'AutoStack AI',
    subtitle: 'Autonomous ML Lifecycle Platform',
    category: 'AutoML & Model Serving',
    description:
      'Built a production-first AutoML platform that transforms raw CSV data into optimized models and low-latency REST APIs in under 60 seconds, automating profiling, feature engineering, tuning, and deployment.',
    bullets: [
      'Transforms raw CSV into REST APIs in under 60 seconds',
      'Parallel optimization over Gradient Boosted Trees & Stacking Regressors',
      'SHAP-based explainability, sub-10ms inference, drift monitoring',
    ],
    tags: ['AutoML', 'SHAP', 'Sub-10ms', 'FastAPI', 'Drift Monitoring'],
    link: 'https://autostack-ai.vercel.app/',
    linkText: 'Live Demo',
    colSpan: 'md:col-span-7',
    accentGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    title: 'TinyVLM',
    subtitle: 'Lightweight Vision Language Model',
    category: 'Multimodal AI',
    description:
      'Built a lightweight VLM integrating a vision encoder with a compact LM for image captioning and visual question answering, implementing feature projection, cross-modal alignment, and instruction-following generation.',
    bullets: [
      'Vision encoder integrated with compact LM',
      'Cross-modal alignment & feature projection',
      'Instruction-following image captioning & VQA',
    ],
    tags: ['VLM', 'PyTorch', 'Cross-Modal Alignment', 'Image Captioning'],
    link: 'https://github.com/VedantJadhav701/TinyVLM',
    linkText: 'GitHub Repo',
    colSpan: 'md:col-span-12',
    accentGradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1f1f1f]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-normal text-[#f5f5f5] tracking-tight">
              Featured <span className="font-display italic text-[#f5f5f5]">projects</span>
            </h2>
            <p className="text-sm md:text-base text-[#878787] mt-3 max-w-lg leading-relaxed">
              A selection of AI systems, language models, and autonomous frameworks built from concept to deployment.
            </p>
          </div>

          <a
            href="https://github.com/VedantJadhav701"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1f1f1f] bg-[#141414] text-xs font-medium text-[#f5f5f5] hover:scale-105 transition-transform group"
          >
            <span>View GitHub Repos</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`${project.colSpan} group relative rounded-3xl bg-[#141414] border border-[#1f1f1f] p-6 md:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Background Accent Gradient */}
              <div
                className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.accentGradient} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none -z-0`}
              />

              <div className="relative z-10">
                {/* Top Label & Category */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#878787] px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#1f1f1f]">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#878787] group-hover:text-[#f5f5f5] transition-colors"
                  >
                    <span>{project.linkText}</span>
                    <span className="text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </div>

                {/* Project Titles */}
                <h3 className="text-2xl sm:text-3xl font-normal text-[#f5f5f5] mb-1">
                  {project.title}
                </h3>
                <h4 className="text-sm font-display italic text-[#878787] mb-4">
                  {project.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#878787] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#878787]/90 font-mono">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#89AACC] font-bold">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action Footer */}
              <div className="relative z-10 pt-4 border-t border-[#1f1f1f] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#878787] px-2.5 py-1 rounded-md bg-[#0a0a0a]/60 border border-[#1f1f1f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-1.5 text-xs font-medium text-[#f5f5f5] px-4 py-1.5 rounded-full bg-[#0a0a0a] border border-[#1f1f1f] group-hover:border-white/30 transition-all"
                >
                  <span>View — <span className="font-display italic">{project.title}</span></span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
