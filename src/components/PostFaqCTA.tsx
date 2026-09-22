import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/content';

export const PostFaqCTA: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-xl">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-[#00ff87] text-xs font-semibold mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>ATENDIMENTO DIRETO</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-3">
            AINDA TEM ALGUMA DÚVIDA?
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Fale com a Lance Certo e explique o que você precisa. Vamos entender seu material e orientar você sobre a melhor opção.
          </p>
        </div>

        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 active:scale-98 transition-all glow-green-sm shrink-0 whitespace-nowrap"
        >
          <span>FALAR COM A LANCE CERTO</span>
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </a>
      </div>
    </section>
  );
};
