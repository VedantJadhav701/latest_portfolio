'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Tech Mahindra',
    location: 'Pune, Maharashtra',
    date: 'Jun. 2026 – Present',
    points: [
      'Contributing to research and development of Vision Language Models (VLMs), Domain-Specific Language Models (DSLMs), and Generative AI systems for enterprise applications.',
      'Developing AI pipelines involving Retrieval-Augmented Generation (RAG), semantic search, agentic AI workflows, and multimodal learning using modern open-source LLMs.',
      'Working with technologies including Python, PyTorch, FastAPI, LangGraph, Hugging Face, and Ollama to build scalable AI solutions and research prototypes.'
    ],
    color: '#4285F4' // Google Blue
  },
  {
    role: 'AI Engineer Intern',
    company: 'DPulseAI Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    date: 'Oct. 2025 – Apr. 2026',
    points: [
      'Built production Generative AI and RAG systems; achieved 35% retrieval accuracy improvement and 45% latency reduction through hybrid chunking and reranking strategies.',
      'Architected Dockerized LLM inference pipelines with CI/CD and canary deployments; reduced deployment time to under 10 minutes using GitHub Actions and Docker Registry.',
      'Implemented KV cache quantization-based cost optimization and post-deployment drift monitoring; cut inference memory usage significantly on consumer-grade hardware.'
    ],
    color: '#FBBC05' // Google Yellow
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative w-full z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-[#FBBC05] uppercase tracking-widest mb-4">Professional History</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Career Timeline</h3>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[2px] before:bg-white/10 before:-z-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col md:flex-row gap-8 relative items-stretch ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Central node on timeline */}
              <div 
                className="absolute left-4 md:left-1/2 -translate-x-[7px] w-[16px] h-[16px] rounded-full bg-[#050505] border-[3px] z-20 top-8 transition-transform group-hover:scale-125"
                style={{ borderColor: exp.color, boxShadow: `0 0 10px ${exp.color}` }}
              />

              {/* Spacing for layout */}
              <div className="hidden md:block w-1/2" />

              {/* Main Content Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="w-full md:w-1/2 glass-card p-8 rounded-2xl border border-white/10 hover:border-white/20 bg-[#050505]/40 backdrop-blur-xl transition-all relative overflow-hidden group pl-8 md:pl-8"
              >
                {/* Accent Side Ribbon */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[5px] opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: exp.color }}
                />

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                      style={{ backgroundColor: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                    >
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 font-mono text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="text-2xl font-extrabold text-white">{exp.company}</h4>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" 
                        style={{ backgroundColor: exp.color, boxShadow: `0 0 8px ${exp.color}` }}
                      />
                      <p className="text-gray-300 leading-relaxed font-medium text-sm">{point}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
