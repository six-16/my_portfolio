import React from 'react';

export default function Navbar() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl">
      <nav className="bg-[#FDFCF8]/90 backdrop-blur-md border border-stone-200/80 rounded-full px-6 py-3 shadow-soft flex items-center justify-between">
        {/* Logo / Initiale avec Scroll Smooth */}
        <a href="#" onClick={scrollToTop} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#FFB7B2]/80 flex items-center justify-center text-[#292524] font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-outfit font-semibold text-sm text-[#292524]">
            Sixtine
          </span>
        </a>

        {/* Liens de Navigation */}
        <div className="flex items-center gap-6 font-outfit text-sm text-[#78716C] font-medium">
          <a href="#projets"className="hover:text-[#292524] transition-colors">
            Projets
          </a>
          <a href="#about" className="hover:text-[#292524] transition-colors">
            À propos
          </a>
          <a href="#contact" className="hover:text-[#292524] transition-colors">
            Contact
          </a>
        </div>

        {/* Sélecteur de Langues */}
        <div className="flex items-center gap-1.5 text-xs font-outfit font-medium text-[#78716C] bg-stone-100/80 px-3 py-1.5 rounded-full border border-stone-200/60">
          <span className="text-[#292524] font-bold">FR</span>
          <span className="text-stone-300">•</span>
          <button className="hover:text-[#292524]">EN</button>
          <span className="text-stone-300">•</span>
          <button className="hover:text-[#292524]">DE</button>
          <span className="text-stone-300">•</span>
          <button className="hover:text-[#292524]">ES</button>
        </div>
      </nav>
    </header>
  );
}