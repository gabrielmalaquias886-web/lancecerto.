import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/content';

export const InstagramSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black">
      <div className="max-w-4xl mx-auto text-center rounded-3xl bg-zinc-950 border border-white/10 p-8 sm:p-12 relative overflow-hidden">
        
        {/* Subtle Instagram pink/purple/yellow glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-rose-500/20">
            <Instagram className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
            ACOMPANHE A LANCE CERTO.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8">
            Veja nossos trabalhos, novidades e materiais esportivos.
          </p>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 hover:opacity-95 active:scale-98 transition-all shadow-lg shadow-purple-600/20"
          >
            <Instagram className="w-5 h-5" />
            <span>VER INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
