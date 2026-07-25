'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Compass, CheckCircle } from 'lucide-react';

const achievements = [
  { title: '1st Place', desc: 'Code4Society Hackathon 2026 (EcoGuard AI Carbon Platform)', year: '2026' },
  { title: '1st Place', desc: 'CodeApex 24-hour Hackathon, VIT 2025', year: '2025' },
  { title: 'Best Research Paper Award', desc: 'ICCTVB-25, Sanjay Ghodawat University (Scopus Indexed)', year: '2025' },
  { title: '3rd Place', desc: 'National DevCraft Hackathon (Team Tech Titans), Fluxus 2025, IIT Indore', year: '2025' },
  { title: '3rd Place', desc: 'National AI Hackathon, IIT Indore', year: '2025' },
  { title: 'National Finalist', desc: 'Table Tennis, Atharv Ranbhoomi, IIM Indore', year: '2024' }
];

const certifications = [
  { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI (Coursera)', year: '2025' },
  { title: 'Supervised Machine Learning', issuer: 'Stanford University (Coursera)', year: '2025' },
  { title: 'Mathematics for ML & Data Science', issuer: 'DeepLearning.AI (Coursera)', year: '2025' }
];

const positions = [
  { title: 'Core Coordinator', desc: 'PCU Sports Club and Committee, Pimpri Chinchwad University, Pune (2023-27)' },
  { title: 'Placement Coordinator', desc: 'Career Development Cell, Pimpri Chinchwad University, Pune (2024-27)' },
  { title: 'Core Team Member', desc: 'Research & Development Club, Pimpri Chinchwad University, Pune (2023-27)' },
  { title: 'Team Leader', desc: 'Team Arogya codes, Smart India Hackathon (Selected at PCU Internal Hackathon) (2025)' },
  { title: 'Sports Coordinator', desc: 'Kridarambh 2K24, Pimpri Chinchwad University, Pune (2024)' },
  { title: 'Coordinator', desc: 'Project Expo 2K24, Pimpri Chinchwad University, Pune (2024)' }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-[var(--neon-accent-secondary)] uppercase tracking-widest mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">Achievements & Accolades</h3>
        </motion.div>

        {/* Achievements Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
            <Award className="w-8 h-8 text-[var(--neon-accent)] animate-pulse" />
            <h4 className="text-3xl font-extrabold text-white">Hackathons & Key Awards</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.025, y: -4 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[var(--neon-accent)] bg-black/40 backdrop-blur-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[var(--neon-accent)] font-mono font-black text-xs uppercase tracking-widest block mb-2">{item.title}</span>
                  <p className="text-white font-bold text-base leading-snug">{item.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-mono pt-4 border-t border-white/5">
                  <span>Year achieved:</span>
                  <span className="text-gray-300 font-semibold">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
            <BookOpen className="w-8 h-8 text-[#ea4335]" />
            <h4 className="text-3xl font-extrabold text-white">Professional Certifications</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.025 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#ea4335]/50 bg-black/40 backdrop-blur-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-[#ea4335]" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">{cert.title}</h5>
                  <p className="text-gray-400 text-sm font-semibold">{cert.issuer}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-gray-500 font-mono pt-4 border-t border-white/5">
                  <span>Issued:</span>
                  <span className="text-gray-300 font-semibold">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Grid */}
        <div>
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
            <Users className="w-8 h-8 text-[var(--neon-accent-secondary)]" />
            <h4 className="text-3xl font-extrabold text-white">Positions of Responsibility</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.025, y: -4 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[var(--neon-accent-secondary)] bg-black/40 backdrop-blur-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Compass className="w-5 h-5 text-[var(--neon-accent-secondary)]" />
                  </div>
                  <h5 className="text-white font-bold text-base leading-snug mb-3">{item.title}</h5>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
