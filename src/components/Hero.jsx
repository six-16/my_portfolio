import React from 'react';

export default function Hero({ t }) {
  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 flex flex-col items-center text-center overflow-hidden">
      {/* Halos pastels ultra-doux (opacité 40%) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex gap-12 pointer-events-none opacity-40">
        <div className="w-72 h-72 rounded-full bg-[#FFB7B2]/50 blur-3xl" />
        <div className="w-72 h-72 rounded-full bg-[#E8EFE8]/50 blur-3xl" />
      </div>

      {/* Badge statut */}
      <div className="inline-flex items-center gap-2 bg-[#E8EFE8]/60 border border-stone-200/50 px-4 py-1.5 rounded-full text-xs font-medium text-[#292524] mb-6">
        <span className="w-2 h-2 rounded-full bg-[#FFB7B2]" />
        {t.hero.badge}
      </div>

      {/* Titre unifié en couleur sombre solide */}
      <h1 className="font-outfit text-3xl sm:text-5xl font-bold tracking-tight text-[#292524] max-w-3xl leading-snug">
        {t.hero.titleStart} {t.hero.titleLogiciel}{t.hero.titleEnd} {t.hero.titleUml} & {t.hero.titleUxUi}.
      </h1>

      <p className="mt-5 font-outfit text-base text-[#78716C] max-w-xl leading-relaxed">
        {t.hero.desc}
      </p>
    </section>
  );
}