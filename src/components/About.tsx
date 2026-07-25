'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Layers, Sparkles } from 'lucide-react';

export default function About() {
  const coreFocus = [
    {
      icon: <Brain className="w-6 h-6 text-[var(--accent-blue)]" />,
      title: "Generative & Agentic AI",
      desc: "Architecting multi-agent workflows, autonomous agents, and hybrid RAG systems using LangGraph, FastAPI, and Qdrant."
    },
    {
      icon: <Layers className="w-6 h-6 text-[var(--accent-purple)]" />,
      title: "Foundation & Vision Models",
      desc: "Fine-tuning and deploying LLMs, VLMs (Vision Language Models), and DSLMs (Domain-Specific Language Models) for clinical and enterprise workloads."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[var(--accent-teal)]" />,
      title: "Physical AI & SciML",
      desc: "Pioneering the intersection of physics-informed machine learning, robotics task execution, state-space models (Mamba), and edge computer vision."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Headline & Summary */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-mono text-[var(--neon-accent)] uppercase tracking-widest mb-4">Engineering Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Where Research <br />
                Meets Production.
              </h3>
              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  I am an <strong className="text-white font-semibold">AI Engineer</strong> specializing in Generative AI, Large Language Models (LLMs), Vision Language Models (VLMs), Domain-Specific Language Models (DSLMs), Agentic AI, and Physical AI.
                </p>
                <p>
                  My experience spans building enterprise-grade systems including RAG pipelines, multi-agent architectures, and ultra-efficient inference using <span className="text-[var(--neon-accent)]">LangGraph, FastAPI, Qdrant, PyTorch, and Docker</span>.
                </p>
                <p>
                  As a published researcher, my work focuses on state-space models (SSMs), multi-agent systems, healthcare AI, and embodied intelligence, driving AI from theoretical models to production deployments.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Cards */}
          <div className="lg:col-span-7 space-y-6">
            {coreFocus.map((focus, idx) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 bg-[#050505]/40 backdrop-blur-xl flex gap-6 items-start hover:border-[var(--neon-accent)]/50 transition-all group"
              >
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
                  {focus.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-[var(--neon-accent)] transition-colors">
                    {focus.title}
                    <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
