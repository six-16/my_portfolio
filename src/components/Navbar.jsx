import React from 'react';

export default function Navbar({ lang, setLang, t }) {
  const scrollTo = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const languages = ['FR', 'EN', 'DE', 'ES'];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl">
      <nav className="bg-[#FDFCF8]/90 backdrop-blur-md border border-stone-200/80 rounded-full px-6 py-3 shadow-soft flex items-center justify-between">
        {/* Logo avec scroll doux vers le haut */}
        <a href="#" onClick={(e) => scrollTo(e, 'top')} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#FFB7B2]/80 flex items-center justify-center text-[#292524] font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-outfit font-semibold text-sm text-[#292524]">
            Sixtine
          </span>
        </a>

        {/* Liens de Navigation avec Scroll Smooth */}
        <div className="flex items-center gap-6 font-outfit text-sm text-[#78716C] font-medium">
          <a href="#projets" onClick={(e) => scrollTo(e, 'projets')} className="hover:text-[#292524] transition-colors">
            {t?.nav?.projects || 'Projets'}
          </a>
          <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-[#292524] transition-colors">
            {t?.nav?.about || 'À propos'}
          </a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#292524] transition-colors">
            {t?.nav?.contact || 'Contact'}
          </a>
        </div>

        {/* Sélecteur de Langues dynamique sans React.Fragment */}
        <div className="flex items-center gap-1.5 text-xs font-outfit font-medium text-[#78716C] bg-stone-100/80 px-3 py-1.5 rounded-full border border-stone-200/60">
          {languages.map((l, index) => (
            <div key={l} className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setLang(l)}
                className={`transition-colors cursor-pointer ${
                  lang === l ? 'text-[#292524] font-bold' : 'hover:text-[#292524]'
                }`}
              >
                {l}
              </button>
              {index < languages.length - 1 && <span className="text-stone-300">•</span>}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}