'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PUBLICATIONS = [
  {
    title: 'Ensemble and Hybrid ML Approaches for Renewable Energy Forecasting',
    status: 'Published, IJEMS 2025',
    badge: 'Scopus Indexed • Best Paper Award',
    badgeStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    description:
      'Constructed an ensemble ML forecasting framework linking real-time model outputs with power grid stability. Reduced forecasting errors by ~30% in trials and received the Best Paper Award at ICCTVB-25.',
    doi: 'https://doi.org/10.5281/zenodo.20040403',
  },
  {
    title: 'PhysicalMamba: State Space Models for Physical Planning and Robotic Task Execution',
    status: 'Preprint (2026)',
    badge: 'SSM & Embodied AI',
    badgeStyle: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    description:
      'Applied state-space models (Mamba-2) to physical trajectory planning and action prediction under hardware compute constraints, establishing linear scaling over long-horizon trajectories.',
    doi: 'https://doi.org/10.5281/zenodo.20807261',
  },
  {
    title: 'RecursiveMAS: A Recursive Multi-Agent Latent Coordination Framework for Embodied Task Optimization',
    status: 'Preprint (2026)',
    badge: 'Multi-Agent Systems',
    badgeStyle: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    description:
      'Architected a Latent Coordination Framework using semantic recursion loops, enabling multi-agent synchronization and reducing communication bottlenecks across complex embodied agent tasks.',
    doi: 'https://doi.org/10.5281/zenodo.20097645',
  },
  {
    title: 'Small Language Models for Clinical Reasoning and Medical Decision Alignment',
    status: 'Under Review (2026)',
    badge: 'SLM Alignment & Safety',
    badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    description:
      'Evaluated clinical reasoning in Small Language Models (LLaMA, BioMistral, Med42v2, Qwen), defining the Semantic Drift Score (SDS) and Structural Alignment Index (SAI) to prevent clinical hallucinations.',
    doi: 'https://orcid.org/0009-0002-6784-9511',
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#1f1f1f]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
                PUBLICATIONS &amp; PREPRINTS
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-normal text-[#f5f5f5] tracking-tight">
              Academic <span className="font-display italic text-[#f5f5f5]">contributions</span>
            </h2>
          </div>

          <a
            href="https://orcid.org/0009-0002-6784-9511"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1f1f1f] bg-[#141414] text-xs font-medium text-[#f5f5f5] hover:scale-105 transition-transform group"
          >
            <span>ORCID Profile</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </motion.div>

        {/* Publication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group rounded-3xl bg-[#141414] border border-[#1f1f1f] p-6 md:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-[#878787] uppercase tracking-wider">
                    {pub.status}
                  </span>
                  <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${pub.badgeStyle}`}>
                    {pub.badge}
                  </span>
                </div>

                <h3 className="text-xl font-normal text-[#f5f5f5] group-hover:text-white transition-colors mb-3 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#878787] leading-relaxed mb-6">
                  {pub.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                <span className="text-xs text-[#878787] font-mono">DOI / Citation:</span>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#89AACC] hover:underline"
                >
                  <span>Link</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
