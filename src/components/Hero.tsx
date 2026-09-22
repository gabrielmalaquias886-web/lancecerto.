import React from 'react';
import { ArrowUpRight, ChevronDown, Play, Sparkles } from 'lucide-react';
import { LINKS } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Editorial viewport framing */}
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Subtle timeline badge / safe-area indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-950/70 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
          <span className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
            Lances que Impactam.
          </span>
        </div>

        {/* Main Title: SEU LANCE. SUA HISTÓRIA. */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.05] text-balance mb-6">
          SEU LANCE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#00ff87]">
            SUA HISTÓRIA.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-2xl font-normal mb-4">
          Edição esportiva profissional para atletas de futebol.
        </p>

        {/* Complementary Phrase */}
        <p className="text-sm sm:text-base text-zinc-400 font-medium tracking-wide uppercase mb-10">
          Você merece ser visto.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 active:scale-98 transition-all glow-green whitespace-nowrap"
          >
            <span>QUERO MEU MATERIAL</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-white/20 transition-all whitespace-nowrap"
          >
            <span>VER PORTFÓLIO</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Social Proof Hero Box */}
        <div className="w-full max-w-md sm:max-w-xl mx-auto rounded-2xl bg-zinc-950/80 border border-white/10 p-6 backdrop-blur-md relative overflow-hidden">
          {/* Top subtle timeline bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff87]/50 to-transparent" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#00ff87]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono-numbers tracking-tight">
                  +1.000
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#00ff87]">
                  ATLETAS ATENDIDOS
                </div>
              </div>
            </div>

            <div className="h-px sm:h-10 w-full sm:w-px bg-white/10" />

            <div className="text-xs sm:text-sm text-zinc-400 font-medium">
              Em todo o Brasil e fora dele.
            </div>
          </div>
        </div>

      </div>

      {/* Subtle indicator scroll down */}
      <a
        href="#sobre"
        aria-label="Rolar para sobre"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-zinc-500 hover:text-[#00ff87] transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};
