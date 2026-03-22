'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Role & Positioning</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            <p>
              I am focused on the rare intersection of <strong className="text-white font-semibold">Scientific Machine Learning (SciML)</strong> and <strong className="text-white font-semibold">Production AI Systems</strong>.
            </p>
            <p>
              My expertise lies in <strong className="text-white font-semibold">Physics-informed ML</strong>, thermodynamic optimization, and uncertainty-aware modeling to map natural phenomena into actionable mathematical spaces.
            </p>
            <p>
              To execute these models at scale, I build robust systems: highly optimized <strong className="text-white font-semibold">LLM pipelines (RAG, SLMs, alignment)</strong>, ultra-low latency real-time computer vision networks, and scalable ML infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
