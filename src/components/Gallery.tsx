'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GALLERY_IMAGES = [
  { src: '/images/WhatsApp Image 2026-03-09 at 6.17.44 PM.jpeg', label: 'Hackathon Demo' },
  { src: '/images/WhatsApp Image 2026-03-09 at 6.17.46 PM.jpeg', label: 'Research Presentation' },
  { src: '/images/WhatsApp Image 2026-03-19 at 12.34.08 AM (1).jpeg', label: 'Project Award' },
  { src: '/images/WhatsApp Image 2026-03-19 at 12.34.08 AM (2).jpeg', label: 'Model Deployment' },
  { src: '/images/WhatsApp Image 2026-03-19 at 12.34.08 AM.jpeg', label: 'Lab & System Test' },
  { src: '/images/WhatsApp Image 2026-03-22 at 1.31.39 PM.jpeg', label: 'Robotics Experiment' },
  { src: '/images/WhatsApp Image 2026-03-22 at 1.31.41 PM (1).jpeg', label: 'Team Collaboration' },
  { src: '/images/WhatsApp Image 2026-03-22 at 1.31.41 PM (2).jpeg', label: 'Award Ceremony' },
  { src: '/images/WhatsApp Image 2026-03-22 at 1.31.41 PM.jpeg', label: 'Tech Showcase' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-[#0a0a0a] py-16 md:py-24 relative z-10 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#1f1f1f]" />
            <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
              VISUAL LOG
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-normal text-[#f5f5f5] tracking-tight">
            Visual <span className="font-display italic text-[#f5f5f5]">playground</span>
          </h2>
          <p className="text-sm text-[#878787] mt-3">
            Moments from hackathons, research conferences, and engineering showcases.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImg(img.src)}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#141414] cursor-pointer hover:border-white/30 transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-mono text-[#f5f5f5] flex items-center justify-between w-full">
                  <span>{img.label}</span>
                  <span className="font-display italic">View ↗</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md p-6 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={selectedImg}
                alt="Selected Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
