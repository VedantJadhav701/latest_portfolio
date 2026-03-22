'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

const achievements = [
  { title: 'First Place', desc: 'Code4Society Hackathon (2026)' },
  { title: 'Best Research Paper Award', desc: 'International Conference on Convergence of Technologies for Viksit Bharat (ICCTVB-25), Sanjay Ghodawat University, Kolhapur (Scopus Indexed) 2025' },
  { title: 'Third Place', desc: 'National DevCraft Hackathon (Team Tech Titans), Fluxus 2025, IIT Indore 2025' },
  { title: 'Third Place', desc: 'National AI Hackathon, IIT Indore 2025' },
  { title: 'National Finalist', desc: 'Table Tennis Men’s Singles, Atharv Ranbhoomi 2024, IIM Indore 2024' },
  { title: 'Silver Medal', desc: 'Table Tennis Doubles Competition, IIT Indore 2024' },
  { title: 'National Finalist', desc: 'Table Tennis Men’s Singles, Pimpri Chinchwad University 2023' },
  { title: 'First Prize', desc: 'Table Tennis Tournament, Kridarambh 2K24, Pimpri Chinchwad University 2024' },
  { title: 'Winner', desc: '2 Inter-College Coding Competitions 2024' },
  { title: 'Speaker', desc: 'Delivered 3+ technical talks on AI deployment, ML ethics, and production ML systems' },
  { title: 'Certificate', desc: 'Deep Learning Specialization Certificate, Deep Learning.AI (Coursera) 2025' },
  { title: 'Certificate', desc: 'Supervised Machine Learning Certificate, Stanford University (Coursera) 2025' },
  { title: 'Certificate', desc: 'Mathematics for Machine Learning and Data Science Certificate, Deep Learning.AI (Coursera) 2025' }
];

const courses = [
  { topic: 'Deep Learning', desc: 'Deep Learning Specialization (DeepLearning.AI), TensorFlow for AI/ML (DeepLearning.AI)' },
  { topic: 'Machine Learning', desc: 'Supervised ML (Stanford University), ML with Python (IBM)' },
  { topic: 'Mathematics', desc: 'Mathematics for ML & Data Science - Linear Algebra, Calculus, Probability & Statistics (DeepLearning.AI)' }
];

const positions = [
  { title: 'Core Coordinator', desc: 'PCU Sports Club and Committee, Pimpri Chinchwad University, Pune 2023-27' },
  { title: 'Placement Coordinator', desc: 'Career Development Cell, Pimpri Chinchwad University, Pune 2024-27' },
  { title: 'Core Team Member', desc: 'Research & Development Club, Pimpri Chinchwad University, Pune 2023-27' },
  { title: 'Team Leader', desc: 'Team Arogya codes, Smart India Hackathon 2025 (Selected at PCU Internal Hackathon) 2025' },
  { title: 'Sports Coordinator', desc: 'Kridarambh 2K24, Pimpri Chinchwad University, Pune 2024' },
  { title: 'Coordinator', desc: 'Project Expo 2K24, Pimpri Chinchwad University, Pune 2024' }
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
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Achievements & Accolades</h3>
        </motion.div>

        {/* Awards Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Award className="w-8 h-8 text-[var(--neon-accent)]" />
            <h4 className="text-3xl font-bold">Achievements</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[var(--neon-accent)] bg-black/50 transition-all flex flex-col justify-start"
              >
                <span className="text-[var(--neon-accent)] font-bold text-lg mb-2">{item.title}</span>
                <p className="text-white font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <BookOpen className="w-8 h-8 text-[#ea4335]" />
            <h4 className="text-3xl font-bold">Key Courses Taken</h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#ea4335]/50 bg-black/50 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#ea4335]" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">{course.topic}</h5>
                <p className="text-gray-300 font-medium leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Users className="w-8 h-8 text-[var(--neon-accent-secondary)]" />
            <h4 className="text-3xl font-bold">Positions of Responsibility</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[var(--neon-accent-secondary)] bg-black/50 transition-all flex flex-col"
              >
                <h5 className="text-[var(--neon-accent-secondary)] font-bold text-lg mb-3">{item.title}</h5>
                <p className="text-white font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
