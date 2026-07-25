'use client';

import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Network, Leaf, Cpu, Globe } from 'lucide-react';

const publications = [
  {
    title: 'Ensemble and Hybrid ML Approaches for Renewable Energy Forecasting',
    category: 'Published | IJEMS 2025 (Scopus)',
    status: 'Best Paper Award',
    icon: <Leaf className="w-5 h-5 text-emerald-400" />,
    problem: 'Stochastic renewable energy outputs disrupt broader power grid intelligence, making integration highly unstable.',
    method: 'Constructed an Ensemble ML framework benchmarking live output data to link ML performance to direct grid efficiency.',
    results: 'Forecast errors reduced by ~30% on synthetics and ~15% in complex real-world trials. Received Best Research Paper Award at ICCTVB-25, Sanjay Ghodawat University.',
    doi: 'https://doi.org/'
  },
  {
    title: 'PhysicalMamba: State Space Models for Physical Planning and Robotic Task Execution',
    category: 'Preprint (2026)',
    status: 'SSM & Embodied AI',
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    problem: 'Standard Transformer-based robot controllers suffer from quadratic compute complexity over long trajectory sequences.',
    method: 'Introduced PhysicalMamba, applying state-space models (SSMs) to physical planning and action token prediction under strict resource constraints.',
    results: 'Demonstrated superior computational efficiency and linear complexity scaling over long-horizon trajectories compared to traditional attention-based baselines.',
    doi: 'https://doi.org/'
  },
  {
    title: 'RecursiveMAS: A Recursive Multi-Agent Latent Coordination Framework for Embodied Task Optimization',
    category: 'Preprint (2026)',
    status: 'Multi-Agent Systems',
    icon: <Network className="w-5 h-5 text-purple-400" />,
    problem: 'Multi-agent coordination in complex environments suffers from communication bottlenecks and failure to align individual agent trajectories.',
    method: 'Architected a Latent Coordination Framework using semantic recursion loops, allowing autonomous agents to synchronize state information dynamically.',
    results: 'Achieved significant improvement in task coordination rate with reduced communication overhead compared to baseline multi-agent systems.',
    doi: 'https://doi.org/'
  },
  {
    title: 'ML Models to Predict Levulinic Acid Production from Sugarcane Bagasse',
    category: 'Preprint (2026)',
    status: 'Chemical AI (SciML)',
    icon: <FlaskConical className="w-5 h-5 text-amber-400" />,
    problem: 'Predicting chemical yields across complex non-linear catalysts in biomass conversion is highly challenging and lacks robust models.',
    method: 'Benchmarked 10 distinct models across a highly engineered 200-point physical dataset. Identified Gaussian Process Regression (GPR) as optimal.',
    results: 'Achieved R² = 0.966, formally isolating the optimal process region for sustainable levulinic acid yields.',
    doi: 'https://doi.org/'
  },
  {
    title: 'Small Language Models for Clinical Reasoning and Medical Decision Alignment',
    category: 'Under Review (2026)',
    status: 'LLM Alignment',
    icon: <BookOpen className="w-5 h-5 text-rose-400" />,
    problem: 'Current health AI reasoning architectures misalign structure logic against pure factual queries, leading to safety and alignment gaps.',
    method: 'Evaluated clinical reasoning in Small Language Models (LLaMA, BioMistral, Med42v2, Qwen), establishing the Semantic Drift Score (SDS) and Structural Alignment Index (SAI).',
    results: 'Proved that structural alignment indices can serve as safety guardrails for clinical environments, reducing hallucinations.',
    doi: 'https://doi.org/'
  }
];

export default function Research() {
  return (
    <section id="research" className="py-24 relative w-full z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-[#ea4335] uppercase tracking-widest mb-4">Publications & Modeling</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">Research & Publications</h3>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {publications.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.015 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#ea4335]/40 bg-[#050505]/45 backdrop-blur-2xl transition-all flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-mono mb-4 inline-block border border-white/10">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#ea4335] transition-colors">{item.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-[#ea4335]/10 text-[#ea4335] border border-[#ea4335]/20 rounded-full text-xs font-bold whitespace-nowrap">
                    {item.status}
                  </div>
                  <a 
                    href="https://orcid.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-gray-500 group-hover:text-white transition-all cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="space-y-5 flex-grow">
                <div>
                  <h5 className="text-xs font-mono text-[#ea4335] uppercase tracking-wider mb-2">The Problem</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">The Methodology</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.method}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Key Outcomes</h5>
                <p className="text-white font-medium text-sm leading-relaxed">{item.results}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
