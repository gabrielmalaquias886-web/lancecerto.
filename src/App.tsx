/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TimelineBackground } from './components/TimelineBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Cases } from './components/Cases';
import { Experience } from './components/Experience';
import { WhyUs } from './components/WhyUs';
import { YouTubeSection } from './components/YouTubeSection';
import { ProcessSteps } from './components/ProcessSteps';
import { FAQ } from './components/FAQ';
import { PostFaqCTA } from './components/PostFaqCTA';
import { InstagramSection } from './components/InstagramSection';
import { FinalCTA } from './components/FinalCTA';
import { MessageCircle } from 'lucide-react';
import { LINKS } from './data/content';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#00ff87] selection:text-black relative overflow-x-hidden">
      {/* Background visual ambience */}
      <TimelineBackground />

      {/* Navigation Header */}
      <Header />

      {/* Vertical Page Flow */}
      <main className="flex-1 z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Cases />
        <Experience />
        <WhyUs />
        <YouTubeSection />
        <ProcessSteps />
        <FAQ />
        <PostFaqCTA />
        <InstagramSection />
        <FinalCTA />
      </main>

      {/* Floating WhatsApp Quick Action Button for Mobile & Desktop */}
      <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#00ff87] text-black font-bold text-xs sm:text-sm shadow-xl shadow-black/80 hover:bg-[#00ff87]/90 hover:scale-105 active:scale-95 transition-all glow-green"
          aria-label="Falar com a Lance Certo pelo WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
