'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Network, Flame, Shield } from 'lucide-react';

const skillGroups = [
  {
    category: 'Generative & Foundation AI',
    icon: <Flame className="w-5 h-5 text-purple-400" />,
    color: 'border-purple-500/30 hover:border-purple-500/70 shadow-purple-500/5',
    bulletColor: 'bg-purple-400',
    skills: [
      'Large Language Models (LLaMA, Qwen, Mistral)',
      'Vision Language Models (VLMs)',
      'Domain-Specific Language Models (DSLMs)',
      'Small Language Models (SLMs)',
      'Fine-Tuning (LoRA / QLoRA)',
      'Retrieval-Augmented Generation (RAG)',
      'KV Cache Quantization',
      'Inference Optimization',
      'Hybrid Search'
    ]
  },
  {
    category: 'AI Orchestration & Agents',
    icon: <Network className="w-5 h-5 text-blue-400" />,
    color: 'border-blue-500/30 hover:border-blue-500/70 shadow-blue-500/5',
    bulletColor: 'bg-blue-400',
    skills: [
      'LangGraph',
      'LangChain',
      'CrewAI',
      'Model Context Protocol (MCP)',
      'Multi-Agent Architectures',
      'Autonomous Agents',
      'Hugging Face Transformers',
      'Ollama',
      'Tool Calling & Tool Use'
    ]
  },
  {
    category: 'Deep Learning & Core ML',
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/30 hover:border-emerald-500/70 shadow-emerald-500/5',
    bulletColor: 'bg-emerald-400',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Mamba State Space Models',
      'Computer Vision (YOLOv8)',
      'Natural Language Processing (NLP)',
      'CNNs, RNNs, LSTMs',
      'Scikit-learn',
      'Scientific Machine Learning (SciML)',
      'Physics-informed ML'
    ]
  },
  {
    category: 'Backend & MLOps',
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/30 hover:border-amber-500/70 shadow-amber-500/5',
    bulletColor: 'bg-amber-400',
    skills: [
      'FastAPI',
      'Streamlit',
      'Docker & Containerization',
      'GitHub Actions (CI/CD)',
      'LLMOps Pipelines',
      'Model Serving',
      'Post-Deployment Drift Monitoring',
      'Canary Deployments',
      'MLflow'
    ]
  },
  {
    category: 'Vector DBs & Data Stack',
    icon: <Database className="w-5 h-5 text-cyan-400" />,
    color: 'border-cyan-500/30 hover:border-cyan-500/70 shadow-cyan-500/5',
    bulletColor: 'bg-cyan-400',
    skills: [
      'Qdrant (Vector Database)',
      'ChromaDB',
      'FAISS',
      'PostgreSQL',
      'MongoDB',
      'Pandas',
      'NumPy'
    ]
  },
  {
    category: 'Languages & Core Focus',
    icon: <Shield className="w-5 h-5 text-rose-400" />,
    color: 'border-rose-500/30 hover:border-rose-500/70 shadow-rose-500/5',
    bulletColor: 'bg-rose-400',
    skills: [
      'Python',
      'C/C++',
      'Generative AI Systems',
      'Agentic AI Systems',
      'Healthcare AI',
      'Physical & Embodied AI',
      'Memory-Augmented AI'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative w-full z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-[#34A853] uppercase tracking-widest mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Technical Stack & Expertise</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIdx * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass-card p-8 rounded-3xl border ${group.color} transition-all flex flex-col h-full bg-[#050505]/45 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]`}
            >
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                  {group.icon}
                </div>
                <h4 className="text-xl font-extrabold text-white leading-tight">
                  {group.category}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto w-full">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 hover:border-white/15 rounded-xl hover:bg-white/10 transition-all text-xs font-semibold text-gray-300 cursor-default"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${group.bulletColor}`} />
                    <span>{skill}</span>
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
