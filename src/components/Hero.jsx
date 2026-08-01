import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 flex flex-col items-center text-center overflow-hidden">
      {/* Halos de couleurs pastels en arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex gap-8 pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-[#FFE4E1] opacity-60 blur-3xl animate-pulse" />
        <div className="w-72 h-72 rounded-full bg-[#E6E6FA] opacity-60 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Titre Principal avec mot manuscrit */}
      <h1 className="font-outfit text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-soft-dark max-w-3xl leading-[1.15]">
        Créatrice d'expériences web <br />
        <span className="font-handwriting text-soft-coral text-5xl sm:text-7xl md:text-8xl font-normal lowercase inline-block -rotate-2 my-1">
          intuitives
        </span>{' '}
        & performantes.
      </h1>

      {/* Sous-titre */}
      <p className="mt-6 font-outfit text-base sm:text-lg text-soft-muted max-w-xl leading-relaxed">
        Développeuse passionnée par la conception d'applications modernes, de l'architecture backend POO aux interfaces frontend élégantes.
      </p>

      {/* Boutons d'action */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projets"
          className="bg-soft-coral text-soft-dark font-medium px-6 py-3 rounded-full shadow-soft hover:shadow-soft-hover hover:-translate-y-0.5 transition-all text-sm sm:text-base"
        >
          Découvrir mes projets
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-soft-dark font-medium px-6 py-3 rounded-full border border-stone-200 hover:border-stone-400 transition-all text-sm sm:text-base"
        >
          Mon GitHub ↗
        </a>
      </div>
    </section>
  );
}