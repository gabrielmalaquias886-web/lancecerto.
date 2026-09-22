import React from 'react';
import { Youtube, ArrowUpRight, Play } from 'lucide-react';
import { LINKS } from '../data/content';

export const YouTubeSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-white/10 p-8 sm:p-12 shadow-2xl">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 text-red-500 flex items-center justify-center mb-6 shadow-md">
            <Youtube className="w-9 h-9" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
            VEJA NOSSOS TRABALHOS.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8">
            Confira outros materiais produzidos pela Lance Certo.
          </p>

          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-500 active:scale-98 transition-all shadow-lg shadow-red-600/20"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>VER TODOS OS DVDs</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
