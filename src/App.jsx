import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState('FR');
  const t = translations[lang];

  // Force le retour en haut de page au rafraîchissement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#292524] relative selection:bg-[#FFB7B2]/20">
      <div className="grain-overlay" />
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <Hero t={t} />
        <Projects t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>

      <footer className="py-8 text-center text-xs text-[#78716C] border-t border-stone-200/50 mt-16 relative z-10">
        © 2026 Sixtine — Portfolio
      </footer>
    </div>
  );
}

export default App;