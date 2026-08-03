import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 flex flex-col items-center text-center overflow-hidden">
      {/* Halos pastels à 80% d'opacité */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex gap-12 pointer-events-none opacity-80">
        <div className="w-72 h-72 rounded-full bg-[#FFB7B2]/80 blur-3xl" />
        <div className="w-72 h-72 rounded-full bg-[#E8EFE8]/80 blur-3xl" />
      </div>

      {/* Badge statut */}
      <div className="inline-flex items-center gap-2 bg-[#E8EFE8]/80 border border-stone-200/60 px-4 py-1.5 rounded-full text-xs font-medium text-[#292524] mb-6">
        <span className="w-2 h-2 rounded-full bg-[#FFB7B2]" />
        Étudiante en Informatique & Génie Logiciel
      </div>

      {/* Titre avec mise en valeur en gris */}
      <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#292524] max-w-3xl leading-snug">
        Développement <span className="text-[#78716C]">Logiciel</span>, Modélisation <span className="text-[#78716C]">UML</span> & Projets <span className="text-[#78716C]">UX/UI</span>.
      </h1>

      {/* Description */}
      <p className="mt-6 font-outfit text-base sm:text-lg text-[#78716C] max-w-xl leading-relaxed">
        Conception d'applications structurées, de prototypes interactifs et d'outils innovants.
      </p>
    </section>
  );
}