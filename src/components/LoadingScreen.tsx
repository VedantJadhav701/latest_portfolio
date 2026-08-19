'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['INNOVATE', 'ARCHITECT', 'DEPLOY', 'OPTIMIZE'];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2700; // 2.7s total duration

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 400);
        }, 300);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 800);

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-[#f5f5f5] flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
        >
          {/* Top-left Label */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full accent-gradient animate-pulse" />
            <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
              VEDANT JADHAV / PORTFOLIO &apos;26
            </span>
          </motion.div>

          {/* Center Rotating Words */}
          <div className="relative h-28 flex items-center justify-center my-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-[#f5f5f5]/80 text-center tracking-tight"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bottom Row: Counter & Progress Bar */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="text-xs text-[#878787] uppercase tracking-[0.2em] font-mono">
                INITIALIZING AI SYSTEMS...
              </span>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl sm:text-8xl md:text-9xl font-display text-[#f5f5f5] tabular-nums leading-none tracking-tighter"
              >
                {String(count).padStart(3, '0')}
              </motion.div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="h-[3px] bg-[#1f1f1f] w-full rounded-full overflow-hidden">
              <div
                className="h-full accent-gradient transition-all duration-75 ease-linear rounded-full"
                style={{
                  width: `${count}%`,
                  boxShadow: '0 0 12px rgba(137, 170, 204, 0.4)',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
