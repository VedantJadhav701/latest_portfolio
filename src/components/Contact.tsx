'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-white/10 mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's build something.</h2>
          <p className="text-gray-400">Reach out for collaborations, system design consulting, or AI engineering roles.</p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <a href="mailto:vedantjadhav1414@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-[var(--neon-accent)] text-gray-400 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://github.com/VedantJadhav701" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/vedantjadhav-ai" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-[#0a66c2] text-gray-400 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </motion.div>

        <div className="mt-12 space-y-2 text-sm text-gray-400 font-mono">
          <p>B.Tech. - Computer Science (AI & ML) | Pimpri Chinchwad University, Pune</p>
          <p>+91-7410036328</p>
        </div>

        <div className="mt-8 text-xs text-gray-600 font-mono">
          © {new Date().getFullYear()} Vedant Sanjay Jadhav. Engineered for scale.
        </div>
      </div>
    </section>
  );
}
