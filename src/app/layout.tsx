import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import InteractiveBackground from '@/components/InteractiveBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Vedant Jadhav | AI Systems Engineer',
  description: 'Portfolio of an AI Engineer specializing in Machine Learning, MLOps, LLMs, and Data Science.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="antialiased min-h-screen relative flex flex-col bg-black text-[#ededed]">
        
        <InteractiveBackground />
        
        <Navigation />
        <div className="pt-20 flex-grow relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
