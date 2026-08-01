import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl">
      <nav className="bg-white/70 backdrop-blur-md border border-stone-200/60 rounded-full px-4 py-2.5 shadow-soft flex items-center justify-between">
        {/* Logo / Initiale */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-soft-coral flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-outfit font-medium text-sm text-soft-dark hidden sm:inline-block">
            Sixtine
          </span>
        </a>

        {/* Liens de Navigation */}
        <div className="flex items-center gap-6 font-outfit text-sm text-soft-muted font-medium">
          <a href="#projets" className="hover:text-soft-dark transition-colors">
            Projets
          </a>
          <a href="#about" className="hover:text-soft-dark transition-colors">
            À propos
          </a>
          <a href="#contact" className="hover:text-soft-dark transition-colors">
            Contact
          </a>
        </div>

        {/* Bouton CTA */}
        <a
          href="#contact"
          className="bg-soft-dark text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-stone-800 transition-all shadow-sm"
        >
          Me contacter
        </a>
      </nav>
    </header>
  );
}