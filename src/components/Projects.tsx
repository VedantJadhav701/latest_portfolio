'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Database, Cpu, BrainCircuit, Activity, Network } from 'lucide-react';

const projects = [
  {
    title: 'EcoGuard — AI Carbon Intelligence',
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    problem: 'Need for precise multi-modal intelligent tracking for carbon usage linked dynamically with systems.',
    solution: 'Built a multimodal system integrating IoT, Computer Vision, and Ensemble ML providing carbon scores, breakdown, real-time tracking, and what-if simulations.',
    stack: ['React', 'FastAPI', 'Edge ML'],
    metrics: 'Winner Project (Code4Society Hackathon)'
  },
  {
    title: 'Vision System for Physical AI',
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    problem: 'Robotic cleaning systems require extremely robust multi-class debris detection capabilities at the edge.',
    solution: 'Engineered a YOLOv8 Nano-based perception system with a custom self-built dataset prioritizing edge-efficiency.',
    stack: ['YOLOv8 Nano', 'Edge GPU'],
    metrics: 'Precision: 0.782, mAP@50: 0.823, ~166 FPS (6ms latency)'
  },
  {
    title: 'Institutional Language Model',
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    problem: 'Healthcare domains require strictly factual language generation without external API telemetry.',
    solution: 'Developed an On-prem Healthcare SLM + RAG system incorporating a Vector DB alongside strict role-based access controls.',
    stack: ['SLM', 'Vector DB', 'RAG'],
    metrics: '+32% accuracy improvement'
  },
  {
    title: 'AUDITRON — AI Accounting Agent',
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    problem: 'Auditing mechanisms for invoices and ledgers were highly manual and prone to visual reasoning errors.',
    solution: 'Fine-tuned a Donut VLM to automate invoice and ledger validation within a secure inference pipeline.',
    stack: ['Donut VLM', 'PyTorch'],
    metrics: '94% accuracy'
  },
  {
    title: 'Multi-Agent RAG System',
    icon: <Network className="w-6 h-6 text-cyan-400" />,
    problem: 'Complex queries over massive document datasets returned severely degraded vector search results.',
    solution: 'Implemented a multi-agent orchestrated reasoning pipeline querying over 100k+ documents simultaneously.',
    stack: ['LangChain', 'LangGraph'],
    metrics: '+22% accuracy improvement'
  }
];

export default function Projects() {
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
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Engineering Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[var(--neon-accent)] bg-[#050505]/60 backdrop-blur-xl transition-all flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                    {project.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white leading-tight">{project.title}</h4>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[var(--neon-accent)] transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <h5 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Problem</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Solution</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[var(--neon-accent)]/10 text-[var(--neon-accent)] border border-[var(--neon-accent)]/20 rounded-lg text-xs font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-mono">Metrics:</span>
                  <span className="text-white font-semibold text-right">{project.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
