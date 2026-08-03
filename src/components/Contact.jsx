import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 relative">
      <div className="bg-[#EFEDF4]/80 p-8 sm:p-12 rounded-4xl border border-stone-200/60 shadow-soft text-center max-w-3xl mx-auto">
        
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight text-[#292524] mb-3">
          Me <span className="text-[#78716C]">Contacter</span>
        </h2>
        <p className="font-outfit text-sm text-[#78716C] mb-8 max-w-md mx-auto">
          N'hésitez pas à me contacter directement par mail ou sur mes réseaux professionnels.
        </p>

        {/* Liens en Gros */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base sm:text-lg font-outfit font-semibold">
          <a
            href="mailto:ton.email@exemple.com"
            className="w-full sm:w-auto bg-[#FDFCF8] border border-stone-200/80 px-6 py-4 rounded-2xl text-[#292524] hover:bg-[#FFB7B2]/40 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            ✉️ Email Direct
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#FDFCF8] border border-stone-200/80 px-6 py-4 rounded-2xl text-[#292524] hover:bg-[#E8EFE8]/80 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            🐙 GitHub ↗
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#FDFCF8] border border-stone-200/80 px-6 py-4 rounded-2xl text-[#292524] hover:bg-[#EFEDF4]/80 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            💼 LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  );
}