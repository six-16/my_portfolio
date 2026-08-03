import React from 'react';

export default function About({ t }) {
  return (
    <section id="about" className="py-10 relative">
      <div className="mb-6">
        <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#292524]">
          {t.about.title} {t.about.titleHighlight}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        <div className="bg-[#E8EFE8]/50 p-6 rounded-3xl border border-stone-200/50 shadow-soft flex flex-col justify-between">
          <div>
            <h3 className="font-outfit font-bold text-lg text-[#292524] mb-3">{t.about.sportTitle}</h3>
            <p className="font-outfit text-[#292524]/80 text-sm leading-relaxed mb-6">{t.about.sportDesc}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-300/30">
            {t.about.caps.map((cap, idx) => (
              <span key={idx} className="bg-white/70 text-[#292524] text-xs font-semibold px-3 py-1 rounded-full">{cap}</span>
            ))}
          </div>
        </div>

        <div className="bg-[#EFEDF4]/50 p-6 rounded-3xl border border-stone-200/50 shadow-soft flex flex-col justify-between">
          <div>
            <h3 className="font-outfit font-bold text-lg text-[#292524] mb-4">{t.about.langTitle}</h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block mb-2">{t.about.langSubtitle}</span>
                <div className="flex flex-wrap gap-2">
                  {t.about.langs.map((l, idx) => (
                    <span key={idx} className="bg-white/70 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">{l}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider block mb-2">{t.about.techSubtitle}</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/70 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">Java / POO</span>
                  <span className="bg-white/70 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">UML</span>
                  <span className="bg-white/70 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">PHP / MySQL</span>
                  <span className="bg-white/70 text-[#292524] text-xs font-medium px-3 py-1 rounded-full">React / Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}