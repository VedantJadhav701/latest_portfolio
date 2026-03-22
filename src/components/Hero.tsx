'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  
  // Animation variants for staggering children
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  const floating = {
    y: [-10, 10],
    transition: { y: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* Central Intense Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--neon-accent)]/10 blur-[120px] rounded-[100%] pointer-events-none z-0" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        
        {/* Floating Tags */}
        <motion.div variants={item} className="mb-10 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-mono font-bold text-gray-300">
          {['Machine Learning Engineer', 'AI Engineer', 'MLOps Engineer', 'LLM & RAG Developer', 'Data Scientist'].map((tag, i) => (
            <motion.span 
              key={tag}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              className="px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Main Headline */}
        <motion.div variants={item} className="mb-8 mt-6">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1.0] drop-shadow-2xl">
            Building AI Systems <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 inline-block">
              for Real-World Impact.
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div variants={item} className="mb-14">
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium mb-4">
            Designing, deploying, and scaling machine learning and AI systems across real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500 font-mono uppercase tracking-widest">
            <span>B.Tech. - Computer Science (AI & ML)</span>
            <span className="hidden sm:inline">•</span>
            <span>Pimpri Chinchwad University, Pune</span>
          </div>
        </motion.div>

        {/* Magnetic Interactive CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#projects">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {/* Sweep effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <Zap className="w-5 h-5 text-black" fill="currentColor" />
              <span className="text-lg">View Projects</span>
            </motion.div>
          </Link>
          
          <Link href="#research">
            <motion.div
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-white font-bold flex items-center justify-center gap-3 transition-colors"
            >
              <span className="text-lg">View Research</span>
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
