import React from 'react';

export default function Contact({ t }) {
  return (
    <section id="contact" className="py-10 relative">
      <div className="bg-[#EFEDF4]/50 p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-soft text-center max-w-3xl mx-auto">
        
        {/* Titre centré */}
        <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#292524] mb-2">
          {t.contact.title} {t.contact.titleHighlight}
        </h2>

        {/* Texte centré */}
        <p className="font-outfit text-sm text-[#78716C] mb-6 max-w-md mx-auto">
          {t.contact.desc}
        </p>

        {/* Boutons centrés */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-outfit font-semibold">
          <a
            href="mailto:ton.email@exemple.com"
            className="bg-[#FDFCF8] border border-stone-200/80 px-5 py-2 rounded-full text-[#292524] hover:bg-[#FFB7B2]/30 transition-all shadow-sm"
          >
            Email
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#FDFCF8] border border-stone-200/80 px-5 py-2 rounded-full text-[#292524] hover:bg-[#E8EFE8]/60 transition-all shadow-sm"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#FDFCF8] border border-stone-200/80 px-5 py-2 rounded-full text-[#292524] hover:bg-[#EFEDF4]/60 transition-all shadow-sm"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  );
}