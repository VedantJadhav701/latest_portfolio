'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '/vedant_jadhav_resume_latest.pdf', isExternal: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sectionIds = ['home', 'work', 'experience', 'research', 'skills', 'contact'];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return; // Let default PDF link open
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 rounded-full backdrop-blur-md border border-white/10 bg-[#141414]/90 p-1.5 sm:p-2 transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-black/60 bg-[#141414]' : 'shadow-md shadow-black/20'
        }`}
      >
        {/* 1. Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group relative w-9 h-9 rounded-full p-[1.5px] accent-gradient transition-transform duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
          title="Vedant Jadhav"
        >
          <span className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center font-display italic font-semibold text-[13px] text-[#f5f5f5]">
            VJ
          </span>
        </a>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-[#1f1f1f] mx-1 hidden sm:block" />

        {/* 3. Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleNavClick(e, item.href, item.isExternal)}
                className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-4 py-1.5 transition-all duration-200 ${
                  isActive && !item.isExternal
                    ? 'text-[#f5f5f5] bg-[#1f1f1f]'
                    : 'text-[#878787] hover:text-[#f5f5f5] hover:bg-[#1f1f1f]/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-[#1f1f1f] mx-1 hidden sm:block" />

        {/* 5. Say hi button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="relative group rounded-full text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 text-[#f5f5f5] font-medium transition-transform duration-200 hover:scale-105"
        >
          {/* Animated gradient border on hover */}
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1px]" />
          <span className="absolute inset-[1px] rounded-full bg-[#141414] -z-10 group-hover:bg-[#0a0a0a] transition-colors" />
          <span className="flex items-center gap-1">
            Say hi <span className="text-[11px] opacity-70">↗</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
