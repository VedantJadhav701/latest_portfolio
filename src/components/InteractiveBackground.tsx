'use client';

import React, { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a] overflow-hidden pointer-events-none select-none">
      {/* Subtle Ambient Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-900/10 to-indigo-900/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-purple-900/10 to-sky-900/5 rounded-full blur-[140px]" />

      {/* Subtle Cursor Spotlight */}
      {isClient && (
        <div
          className="absolute w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(calc(${mousePos.x * 100}vw - 250px), calc(${mousePos.y * 100}vh - 250px))`,
          }}
        />
      )}
    </div>
  );
}
