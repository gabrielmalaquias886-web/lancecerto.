import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { CASES } from '../data/content';

export const Cases: React.FC = () => {
  return (
    <section id="cases" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
            Cases em Destaque
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            ATLETAS EM CAMPO
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Confira produções de materiais para atletas em ação no cenário internacional.
          </p>
        </div>

        {/* 2 Featured Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((item) => (
            <article
              key={item.id}
              className="group relative rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#00ff87]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full bg-zinc-900 overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Club Logo Lockup */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md p-2 rounded-xl border border-white/10 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.club}
                    className="h-9 w-auto max-w-[80px] object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Video Play Badge */}
                <a
                  href={item.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group/btn"
                  aria-label={item.buttonText}
                >
                  <div className="w-14 h-14 rounded-full bg-black/60 border border-white/20 group-hover/btn:bg-[#00ff87] group-hover/btn:text-black group-hover/btn:scale-110 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-lg">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </a>
              </div>

              {/* Text Information Block */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={item.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl text-sm font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 active:scale-98 transition-all glow-green-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{item.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
