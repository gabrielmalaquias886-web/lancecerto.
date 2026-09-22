import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowUpRight } from 'lucide-react';
import { FLYERS, LINKS } from '../data/content';

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalFlyer, setActiveModalFlyer] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? FLYERS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === FLYERS.length - 1 ? 0 : prev + 1));
  };

  const currentFlyer = FLYERS[currentIndex];

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00ff87] block mb-2">
            Identidade Esportiva
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
            PORTFÓLIO
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            Identidade visual também faz parte do jogo.
          </p>
        </div>

        {/* Carousel Container (Dedicated internal carousel for Flyers) */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Display Card */}
          <div className="rounded-2xl bg-zinc-950 border border-white/10 p-4 sm:p-8 relative overflow-hidden shadow-2xl">
            
            {/* Top Carousel Bar: STRICT LABELS ONLY */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff87]" />
                <span className="text-base sm:text-lg font-bold tracking-wider text-white font-mono-numbers">
                  {currentFlyer.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalFlyer(currentFlyer.url)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:border-[#00ff87]/50 transition-colors"
                  aria-label={`Ampliar ${currentFlyer.label}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ampliar</span>
                </button>
                <span className="text-xs font-mono-numbers text-zinc-500 ml-2">
                  0{currentIndex + 1} / 0{FLYERS.length}
                </span>
              </div>
            </div>

            {/* Flyer Image Container (Aspect preserved, no deformation) */}
            <div className="relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/3] max-h-[560px] w-full flex items-center justify-center bg-black/60 rounded-xl overflow-hidden border border-white/5">
              <img
                src={currentFlyer.url}
                alt={currentFlyer.label}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={prevSlide}
                className="p-3 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-[#00ff87]/50 text-white hover:text-[#00ff87] active:scale-95 transition-all"
                aria-label="Flyer anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Flyer Selection Tabs/Dots */}
              <div className="flex items-center gap-2 sm:gap-3">
                {FLYERS.map((flyer, index) => (
                  <button
                    key={flyer.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-numbers font-bold transition-all ${
                      currentIndex === index
                        ? 'bg-[#00ff87] text-black shadow-md shadow-[#00ff87]/20 scale-105'
                        : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
                    }`}
                    aria-label={`Ir para ${flyer.label}`}
                    aria-current={currentIndex === index ? 'true' : undefined}
                  >
                    {flyer.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="p-3 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-[#00ff87]/50 text-white hover:text-[#00ff87] active:scale-95 transition-all"
                aria-label="Próximo flyer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>

          {/* Quick thumbnails row */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {FLYERS.map((flyer, index) => (
              <button
                key={flyer.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-black border transition-all ${
                  currentIndex === index
                    ? 'border-[#00ff87] ring-2 ring-[#00ff87]/30 scale-[1.02]'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
                aria-label={`Visualizar ${flyer.label}`}
              >
                <img
                  src={flyer.url}
                  alt={flyer.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono-numbers font-semibold text-white whitespace-nowrap">
                  {flyer.label}
                </span>
              </button>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="text-center mt-10">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 transition-all glow-green-sm"
            >
              <span>QUERO UM FLYER PERSONALIZADO</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalFlyer && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalFlyer(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveModalFlyer(null)}
              className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={activeModalFlyer}
              alt="Visualização do Flyer"
              className="max-h-[85vh] max-w-full rounded-xl object-contain border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
