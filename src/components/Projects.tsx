'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BrainCircuit, Eye, Bot, Zap, Cpu, Gauge, Target } from 'lucide-react';

const projects = [
  {
    title: 'PharmaAssist DSLM',
    icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
    problem: 'Healthcare domains require strictly factual language generation without external API telemetry, combined with highly accurate citation-aware retrieval.',
    solution: 'Developed an enterprise-grade Healthcare Domain-Specific Language Model (DSLM) leveraging Retrieval-Augmented Generation (RAG), LangGraph, and Qdrant for citation-aware pharmaceutical knowledge retrieval. Designed a modular agentic AI architecture supporting semantic search, hybrid retrieval, medical document ingestion, and scalable healthcare AI workflows.',
    stack: ['LangGraph', 'Qdrant', 'RAG', 'DSLM', 'FastAPI'],
    metrics: 'Modular Agentic AI Architecture',
    color: 'emerald'
  },
  {
    title: 'TinyVLM – Lightweight VLM',
    icon: <Eye className="w-6 h-6 text-blue-400" />,
    problem: 'Standard Vision Language Models (VLMs) are too computationally expensive for real-time edge devices and lack lightweight pipeline solutions.',
    solution: 'Built a lightweight Vision Language Model (VLM) by integrating a vision encoder with a compact language model for multimodal understanding, image captioning, and visual question answering. Developed the complete multimodal inference pipeline including image preprocessing, feature projection, cross-modal alignment, and instruction-following generation.',
    stack: ['PyTorch', 'Hugging Face', 'VLM', 'Transformers', 'Python'],
    metrics: 'Complete Multimodal Inference Pipeline',
    color: 'blue'
  },
  {
    title: 'Research Jarvis – Agentic Research Assistant',
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    problem: 'Researchers need to monitor large volumes of new papers and perform multi-hop reasoning over technical document corpora without manual synthesis.',
    solution: 'Developed an autonomous research assistant integrating Hybrid RAG, LangGraph, real-time arXiv monitoring, semantic search, and multi-agent orchestration for technical literature exploration. Built an end-to-end research pipeline with local document ingestion, citation-aware retrieval, FastAPI backend, and ChromaDB vector storage.',
    stack: ['LangGraph', 'ChromaDB', 'FastAPI', 'Hybrid RAG', 'arXiv API'],
    metrics: 'Multi-Agent Orchestrated Exploration',
    color: 'purple'
  },
  {
    title: 'MAMA – Memory Augmented Mamba Agent',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    problem: 'Standard LLMs have high computational complexity for long-horizon context and lack structured, hierarchical memory systems.',
    solution: 'Designed a modular autonomous AI architecture combining Mamba-based reasoning, hierarchical memory, LangGraph orchestration, and Retrieval-Augmented Generation (RAG) for long-horizon reasoning tasks. Implemented memory management, tool calling, planning, and autonomous agent workflows supporting efficient local AI systems.',
    stack: ['Mamba SSM', 'LangGraph', 'RAG', 'Local LLMs', 'Memory Management'],
    metrics: 'Efficient Long-Horizon Inference',
    color: 'yellow'
  },
  {
    title: 'Physical AI Robot Brain – Action Prediction System',
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    problem: 'Autonomous robots require low-latency predictive perception loops that align sequential visual-tactile observations with motor commands.',
    solution: 'Developed a Physical AI pipeline using the NVIDIA Physical AI dataset to predict robot actions from sequential observations with a 3-layer LSTM implemented in PyTorch. Built an end-to-end robotics inference pipeline with FastAPI deployment, enabling autonomous action prediction for embodied AI.',
    stack: ['PyTorch', 'LSTM', 'FastAPI', 'NVIDIA Dataset', 'Embodied AI'],
    metrics: 'End-to-End Robotics Perception Loop',
    color: 'cyan'
  },
  {
    title: 'LLM KV Cache Optimizer',
    icon: <Gauge className="w-6 h-6 text-orange-400" />,
    problem: 'Deploying large language models on consumer-grade hardware is restricted by high memory footprint from KV Cache retention.',
    solution: 'Developed a modular KV Cache Quantization framework reducing LLM memory footprint by up to 23x on consumer hardware while enabling efficient inference for 7B+ parameter models. Implemented INT8/INT4 quantization with dynamic precision switching and benchmarked performance across LLaMA, Mistral, and Qwen model families.',
    stack: ['INT8/INT4 Quantization', 'LLaMA', 'Mistral', 'Qwen', 'Model Optimization'],
    metrics: 'Up to 23x Memory Footprint Reduction',
    color: 'orange'
  },
  {
    title: 'Vision System – Autonomous Cleaning Robot',
    icon: <Target className="w-6 h-6 text-rose-400" />,
    problem: 'Real-time edge robotics requires highly efficient computer vision pipelines capable of high-precision object and debris detection.',
    solution: 'Trained a custom YOLOv8 Nano model for real-world debris detection on GPU edge hardware. Built the complete computer vision pipeline from dataset collection and annotation to optimized deployment on an autonomous cleaning robot.',
    stack: ['YOLOv8 Nano', 'Edge GPU', 'Computer Vision', 'Dataset Annotation'],
    metrics: 'Precision: 0.782, Recall: 0.795, mAP@50: 0.823, ~166 FPS (6ms)',
    color: 'rose'
  }
];

export default function Projects() {
  const colorMap: Record<string, { border: string; bg: string; text: string }> = {
    emerald: { border: 'hover:border-emerald-500/40', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    blue: { border: 'hover:border-blue-500/40', bg: 'bg-blue-500/10', text: 'text-blue-400' },
    purple: { border: 'hover:border-purple-500/40', bg: 'bg-purple-500/10', text: 'text-purple-400' },
    yellow: { border: 'hover:border-yellow-500/40', bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
    cyan: { border: 'hover:border-cyan-500/40', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
    orange: { border: 'hover:border-orange-500/40', bg: 'bg-orange-500/10', text: 'text-orange-400' },
    rose: { border: 'hover:border-rose-500/40', bg: 'bg-rose-500/10', text: 'text-rose-400' },
  };

  return (
    <section id="projects" className="py-24 relative w-full z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-[var(--neon-accent)] uppercase tracking-widest mb-4">Systems Engineering</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">Engineering Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const colors = colorMap[project.color] || colorMap.blue;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.015, y: -4 }}
                className={`glass-card p-8 rounded-3xl border border-white/10 ${colors.border} bg-[#050505]/45 backdrop-blur-2xl transition-all flex flex-col h-full group`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border border-white/10 ${colors.bg} transition-colors`}>
                      {project.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white leading-tight">{project.title}</h4>
                  </div>
                  <a 
                    href="https://github.com/VedantJadhav701" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-gray-500 group-hover:text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <h5 className={`text-xs font-mono uppercase tracking-wider mb-2 ${colors.text}`}>The Challenge</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">The Solution</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <span key={tech} className={`px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-xs font-mono font-medium text-gray-300 hover:border-white/20 transition-all`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-mono">Metrics / Focus:</span>
                    <span className="text-white font-semibold text-right">{project.metrics}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
