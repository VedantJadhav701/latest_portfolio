'use client';

import { motion } from 'framer-motion';

const exactSkills = [
  {
    category: 'ML / AI',
    skills: ['GPR', 'Gradient Boosting', 'Ensemble Models', 'Deep Learning', 'NLP', 'Computer Vision', 'SciML', 'Physics-informed ML', 'Thermodynamic modeling', 'Optimization']
  },
  {
    category: 'LLM Systems',
    skills: ['RAG', 'SLMs (LLaMA, Qwen, Mistral)', 'LoRA / QLoRA']
  },
  {
    category: 'MLOps',
    skills: ['Docker', 'CI/CD', 'Monitoring', 'Drift detection']
  },
  {
    category: 'Tools',
    skills: ['PyTorch', 'TensorFlow', 'FastAPI', 'Streamlit', 'AWS', 'Redis', 'Kafka', 'FAISS', 'Pinecone']
  },
  {
    category: 'Core Expertise',
    skills: ['Scientific Machine Learning (SciML)', 'Physics-Informed AI', 'Chemical Process Optimization', 'Real-Time Computer Vision', 'LLM Systems Engineering', 'Production ML Systems']
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
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Stack</h3>
        </motion.div>

        {/* CSS Grid Auto-Rows ensuring all cards align perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
          {exactSkills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#34A853]/60 transition-all flex flex-col h-full bg-[#050505]/60 backdrop-blur-xl shadow-xl"
            >
              <h4 className="text-2xl font-black text-white mb-6 pb-4 border-b border-white/10 group-hover:border-[#34A853]/50 transition-colors">
                {group.category}
              </h4>
              
              <div className="flex flex-col gap-3 flex-grow">
                {group.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                    <span className="text-sm font-semibold text-gray-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
