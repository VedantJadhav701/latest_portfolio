'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(`#${current}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Added useEffect for scroll detection

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-3xl border-b border-white/10 py-4 shadow-2xl' : 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-xl font-mono font-bold tracking-tighter hover:text-[var(--neon-accent)] transition-colors">
          Vedant Sanjay Jadhav
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`${activeSection === link.href ? 'text-[var(--neon-accent)]' : 'text-gray-300 hover:text-[var(--neon-accent)]'} transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="https://github.com/VedantJadhav701" target="_blank" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/vedantjadhav-ai" target="_blank" className="p-2 text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 rounded-full transition-all">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
