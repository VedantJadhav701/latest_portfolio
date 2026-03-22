'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI Developer Intern',
    company: 'DPulseAI Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    date: 'Oct. 2025 - Apr. 2026',
    points: [
      'Engineered production LLM and RAG systems achieving 35% retrieval accuracy improvement and 45% latency reduction.',
      'Architected Dockerized inference pipelines with CI/CD and canary deployments, cutting deployment time to under 10 minutes.',
      'Designed scalable inference services with cost optimization through quantization and post-deployment monitoring.'
    ]
  },
  {
    role: 'AI & ML Intern',
    company: 'Tamizhan Skills',
    location: 'Pune, Maharashtra',
    date: 'Apr. 2025 - May 2025',
    points: [
      'Delivered 5+ NLP applications using AWS Lambda and Streamlit, reducing manual processing time by 30%.',
      'Automated text summarization and classification workflows, increasing operational throughput by 25%.'
    ]
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
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Career Timeline</h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className="glass-card p-10 rounded-2xl border border-white/10 hover:border-[#FBBC05]/50 bg-[#050505]/60 backdrop-blur-xl transition-all relative overflow-hidden group"
            >
              {/* Decorative accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FBBC05]/80 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-[#FBBC05] font-semibold text-lg">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                    <span className="text-gray-500 font-normal text-sm ml-2">| {exp.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-mono text-gray-300">{exp.date}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FBBC05] mt-2 shrink-0 shadow-[0_0_10px_rgba(251,188,5,0.8)]" />
                    <p className="text-gray-300 leading-relaxed font-medium text-[15px]">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
