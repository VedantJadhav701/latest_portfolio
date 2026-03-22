'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  '/images/WhatsApp Image 2026-03-09 at 6.17.44 PM.jpeg',
  '/images/WhatsApp Image 2026-03-09 at 6.17.46 PM.jpeg',
  '/images/WhatsApp Image 2026-03-19 at 12.34.08 AM (1).jpeg',
  '/images/WhatsApp Image 2026-03-19 at 12.34.08 AM (2).jpeg',
  '/images/WhatsApp Image 2026-03-19 at 12.34.08 AM.jpeg',
  '/images/WhatsApp Image 2026-03-22 at 1.31.39 PM.jpeg',
  '/images/WhatsApp Image 2026-03-22 at 1.31.41 PM (1).jpeg',
  '/images/WhatsApp Image 2026-03-22 at 1.31.41 PM (2).jpeg',
  '/images/WhatsApp Image 2026-03-22 at 1.31.41 PM.jpeg'
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight"
          >
            My <span className="text-[var(--neon-accent-secondary)]">Gallery</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--neon-accent-secondary)] to-transparent" />
          <p className="text-gray-400 mt-4 max-w-xl">A visual log of hackathons, lab physical experiments, and deployments.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10 group cursor-crosshair"
            >
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                fill
                className="object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
