import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#292524] relative selection:bg-[#FFB7B2]/30">
      <div className="grain-overlay" />
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="py-8 text-center text-xs text-[#78716C] border-t border-stone-200/60 mt-16 relative z-10">
        © 2026 Sixtine — Portfolio
      </footer>
    </div>
  );
}

export default App;