'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    category: 'LLM & Generative AI',
    skills: [
      'LLMs',
      'SLMs',
      'DSLMs',
      'VLMs',
      'Pretraining',
      'Fine-Tuning (LoRA/QLoRA)',
      'RAG',
      'Agentic AI',
      'Multilingual NLP',
      'Inference Optimization',
    ],
  },
  {
    category: 'Model Architectures',
    skills: [
      'Transformers',
      'Mamba/Mamba-2',
      'GQA',
      'CNNs',
      'RNNs',
      'LSTMs',
      'YOLOv8',
    ],
  },
  {
    category: 'AI Frameworks',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Hugging Face Transformers',
      'LangChain',
      'LangGraph',
      'Ollama',
      'CrewAI',
      'MCP',
      'Tool Calling',
    ],
  },
  {
    category: 'AI Systems & MLOps',
    skills: [
      'FastAPI',
      'Docker',
      'MLflow',
      'Git',
      'GitHub Actions / CI-CD',
      'Model Serving',
      'LLMOps',
      'Drift Monitoring',
      'Canary Deployment',
    ],
  },
  {
    category: 'Data & Retrieval',
    skills: [
      'Qdrant',
      'ChromaDB',
      'FAISS',
      'PostgreSQL',
      'MongoDB',
      'Pandas',
      'NumPy',
    ],
  },
  {
    category: 'Languages',
    skills: ['Python', 'C/C++'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
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
              TECHNICAL STACK
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-normal text-[#f5f5f5] tracking-tight">
            Skills &amp; <span className="font-display italic text-[#f5f5f5]">technologies</span>
          </h2>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-3xl bg-[#141414] border border-[#1f1f1f] p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-normal text-[#f5f5f5] mb-4 pb-3 border-b border-[#1f1f1f] flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-xs font-mono text-[#878787]">
                    0{index + 1}
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-[#f5f5f5]/80 px-3 py-1.5 rounded-full bg-[#0a0a0a] border border-[#1f1f1f] hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
