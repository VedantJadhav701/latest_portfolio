'use client';

import { motion } from 'framer-motion';
import { BookMarked, FlaskConical, Network, Microchip, Leaf, Database } from 'lucide-react';

const research = [
  {
    title: 'Carnallite Electrolysis Optimization',
    category: 'Scientific ML & Alignment',
    status: 'Q1-Level SciML',
    icon: <FlaskConical className="w-5 h-5" />,
    problem: 'Industrial Mg electrolysis operates at 650–720°C, dictated by electrolyte liquidus. This requires intense thermal constraints.',
    method: 'Developed Physics-Informed Gaussian Process (PI-GP) model utilizing Differential Evolution with physical constraints. Built 134-point dual-source dataset (FactSage + NIST).',
    results: 'Derived Eutectic Lower Bound Theorem establishing 423°C absolute minimum. Identified optimal MgCl₂–NaCl eutectic pathway at 459±1°C. R² = 0.9996 / RMSE = 1.5°C within-source.'
  },
  {
    title: 'Magnesium Extraction Optimization',
    category: 'SciML + Thermo',
    status: 'Dolomite Process',
    icon: <Database className="w-5 h-5 hidden" />, // using Network instead
    problem: 'Extraction processes required highly inefficient extreme temperature operations.',
    method: 'Physics-informed ML + thermodynamic modeling combining CALPHAD and FactSage cross-validation.',
    results: 'Introduced Slag Basicity Extractability Theorem. Achieved 250°C reduction (1200°C → 800°C) with Gradient Boosting modeling (R² = 0.987).'
  },
  {
    title: 'Medical LLM Structural Alignment',
    category: 'LLM Systems',
    status: 'Alignment',
    icon: <BookMarked className="w-5 h-5" />,
    problem: 'Current health AI reasoning architectures misalign structure logic against pure factual queries. Accuracy ≠ deployment readiness.',
    method: 'Identified the Structural Alignment Gap mathematically and introduced the Semantic Drift Score (SDS) and Structural Alignment Index (SAI).',
    results: 'Categorized logic flows establishing concrete guardrails for clinical environments.'
  },
  {
    title: 'Levulinic Acid Yield Prediction',
    category: 'SciML',
    status: 'Optimization',
    icon: <Microchip className="w-5 h-5" />,
    problem: 'Predicting chemical yields across complex non-linear catalysts.',
    method: 'Benchmarked 10 distinct models across a highly engineered 200-point physical dataset. Identified GPR as optimal.',
    results: 'Achieved R² = 0.966, formally isolating the optimal process region for sustainable yields.'
  },
  {
    title: 'Recursive Language Models (RLM)',
    category: 'LLM Systems',
    status: 'Architecture',
    icon: <Network className="w-5 h-5" />,
    problem: 'Language models lack true environmental reasoning limits during long-context execution.',
    method: 'Architected long-context scaling via targeted semantic recursion loops based on environmental parameters.',
    results: 'Defined new efficiency bounds for inference-time reasoning architectures.'
  },
  {
    title: 'Renewable Energy Forecasting',
    category: 'SciML',
    status: 'Published',
    icon: <Leaf className="w-5 h-5" />,
    problem: 'Stochastic renewable energy outputs disrupted broader power grid intelligence.',
    method: 'Constructed an Ensemble ML framework benchmarking live output data to link ML performance to direct grid efficiency.',
    results: 'Forecast errors reduced by ~30% on synthetics and ~15% in complex real-world trials. Best Research Paper Award — ICCTVB-25.'
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
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Research & Papers</h3>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {research.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#ea4335]/50 bg-[#050505]/60 backdrop-blur-xl transition-all flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-mono mb-4 inline-block border border-white/10">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#ea4335] transition-colors">{item.title}</h4>
                </div>
                <div className="px-3 py-1 bg-[#ea4335]/20 text-[#ea4335] border border-[#ea4335]/30 rounded-full text-xs font-bold whitespace-nowrap ml-4">
                  {item.status}
                </div>
              </div>

              <div className="space-y-5 flex-grow">
                <div>
                  <h5 className="text-xs font-mono text-[#ea4335] uppercase tracking-wider mb-2">Problem</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">Method</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.method}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Key Results</h5>
                <p className="text-white font-medium text-sm leading-relaxed">{item.results}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
