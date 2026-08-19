import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import InteractiveBackground from '@/components/InteractiveBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Vedant Jadhav | AI Engineer (LLMs & Agentic AI)',
  description: 'Portfolio of Vedant Sanjay Jadhav — AI Engineer specializing in Mamba/Transformer LLMs, Agentic AI, Multimodal systems, and high-performance RAG.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} dark scroll-smooth`}>
      <body className="antialiased min-h-screen relative flex flex-col bg-[#0a0a0a] text-[#f5f5f5] selection:bg-white/20 selection:text-white font-body overflow-x-hidden">
        <InteractiveBackground />
        <Navigation />
        <div className="flex-grow relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

