'use client';

import { useEffect, useState } from 'react';

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

  // Aurora tracks inverted to mouse for depth
  const auroraX = (mousePos.x - 0.5) * -60; 
  const auroraY = (mousePos.y - 0.5) * -60;

  // Dot grid tracks heavily with mouse (Gemini style)
  const gridX = (mousePos.x - 0.5) * 80;
  const gridY = (mousePos.y - 0.5) * 80;

  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
      
      {/* The vibrant horizontal aurora wave with parallax */}
      <div 
        className="aurora-mesh transition-transform duration-1000 ease-out"
        style={{ transform: isClient ? `translate(calc(-50% + ${auroraX}px), calc(-50% + ${auroraY}px))` : 'translate(-50%, -50%)' }}
      />

      {/* The interactive Gemini-style constellation particle grid */}
      <div 
        className="absolute inset-[-10%] bg-particle-grid opacity-80 z-10 transition-transform duration-300 ease-out" 
        style={{ transform: isClient ? `translate(${gridX}px, ${gridY}px)` : 'translate(0px, 0px)' }}
      />
      
      {/* Subtle ambient lighting on the edges */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen opacity-30 z-0 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen opacity-30 z-0 -translate-x-1/3 translate-y-1/3" />

      {/* Extreme Cursor Glow Tracking */}
      {isClient && (
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[140px] mix-blend-screen z-20 transition-transform duration-[50ms] ease-out"
          style={{ transform: `translate(calc(${mousePos.x * 100}vw - 400px), calc(${mousePos.y * 100}vh - 400px))` }}
        />
      )}
    </div>
  );
}
