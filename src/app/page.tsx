'use client';

import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className="flex flex-col items-center justify-between w-full">
        <div className="w-full">
          <Hero />
          <About />
          <Projects />
          <Research />
          <Experience />
          <Skills />
          <Achievements />
          <Gallery />
          <Contact />
        </div>
      </main>
    </>
  );
}
