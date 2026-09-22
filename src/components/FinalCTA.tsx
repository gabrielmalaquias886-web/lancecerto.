import React from 'react';
import { ArrowUpRight, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { LINKS, LOGO_URL } from '../data/content';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#050505] overflow-hidden">
      
      {/* Luminous green glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#00ff87]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Subtle luminous spark badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 border border-[#00ff87]/30 text-[#00ff87] text-xs font-semibold mb-8 glow-green-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ALCANCE O PRÓXIMO NÍVEL</span>
        </div>

        {/* Título: SEU LANCE MERECE SER VISTO. */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
          SEU LANCE MERECE SER VISTO.
        </h2>

        {/* Subtítulo: Transforme seus melhores momentos em um material que representa o seu futebol. */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-light mb-12 leading-relaxed">
          Transforme seus melhores momentos em um material que representa o seu futebol.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 active:scale-98 transition-all glow-green whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>FALE COM A LANCE CERTO</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-white/20 active:scale-98 transition-all whitespace-nowrap"
          >
            <Instagram className="w-5 h-5 text-rose-400" />
            <span>VER INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Brand Logo in Footer section */}
        <div className="pt-12 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Lance Certo — Edição Esportiva"
              className="h-9 w-auto object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Exact required text: © Lance Certo — Edição Esportiva */}
          <p className="text-xs sm:text-sm text-zinc-500 font-medium">
            © Lance Certo — Edição Esportiva
          </p>
        </div>

      </div>
    </section>
  );
};
