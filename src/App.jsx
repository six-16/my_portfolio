import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-soft-bg text-soft-dark relative selection:bg-soft-coral/30">
      {/* Texture de grain */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;