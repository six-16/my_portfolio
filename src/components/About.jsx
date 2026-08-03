import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <div className="mb-8">
        <h2 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#292524]">
          À Propos & <span className="text-[#78716C]">Engagement</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Engagement Sportif & Leadership */}
        <div className="bg-[#E8EFE8]/80 p-8 rounded-3xl border border-stone-200/60 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">📣</span>
              <h3 className="font-outfit font-bold text-xl text-[#292524]">
                Sport & Leadership
              </h3>
            </div>
            
            <p className="font-outfit text-[#292524]/80 text-sm leading-relaxed mb-6">
              Passionnée de <strong className="text-[#292524]">Gymnastique</strong> et de <strong className="text-[#292524]">Cheerleading</strong>. En tant que <strong className="text-[#292524]">Capitaine de l'équipe de Cheerleading</strong>, j'apporte sur le terrain comme dans mes projets : rigueur, esprit d'équipe, communication et dépassement de soi.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-300/40">
            <span className="bg-white/80 text-[#292524] text-xs font-semibold px-3 py-1 rounded-full">Capitanat</span>
            <span className="bg-white/80 text-[#292524] text-xs font-semibold px-3 py-1 rounded-full">Cheerleading</span>
            <span className="bg-white/80 text-[#292524] text-xs font-semibold px-3 py-1 rounded-full">Gymnastique</span>
          </div>
        </div>

        {/* Compétences & Langues */}
        <div className="bg-[#EFEDF4]/80 p-8 rounded-3xl border border-stone-200/60 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">🌍</span>
              <h3 className="font-outfit font-bold text-xl text-[#292524]">
                Langues & Stack
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block mb-2">
                  Langues parlées
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">Français (Natif)</span>
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">Anglais</span>
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">Allemand</span>
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">Espagnol</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">Java / POO</span>
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">UML</span>
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">PHP / MySQL</span>
                  <span className="bg-white/80 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">React / Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}