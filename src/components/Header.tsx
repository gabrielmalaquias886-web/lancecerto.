import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LOGO_URL, LINKS } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Cases', href: '#cases' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          aria-label="Lance Certo — Início"
        >
          <img
            src={LOGO_URL}
            alt="Lance Certo — Edição Esportiva"
            className="h-10 sm:h-12 w-auto object-contain"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#00ff87] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#00ff87]/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 active:scale-95 transition-all glow-green-sm whitespace-nowrap"
          >
            <span>QUERO MEU MATERIAL</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 border border-white/10 transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#00ff87] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-sm font-bold text-black bg-[#00ff87] hover:bg-[#00ff87]/90 transition-all glow-green-sm"
            >
              <span>QUERO MEU MATERIAL</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
