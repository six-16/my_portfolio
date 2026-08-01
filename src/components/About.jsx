import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Entête */}
      <div className="text-center mb-12">
        <span className="font-handwriting text-soft-coral text-4xl block rotate-1">
          mon parcours
        </span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight text-soft-dark">
          À Propos & Compétences
        </h2>
      </div>

      {/* Cartes façon "Notes de Carnet" inclinées */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Carte 1 : Profil / Qui suis-je ? (Inclinée à -1deg) */}
        <div className="bg-white p-8 rounded-4xl border border-stone-200 shadow-soft -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-soft-coral" />
            <h3 className="font-outfit font-semibold text-xl text-soft-dark">
              Développeuse & Conceptrice
            </h3>
          </div>
          
          <p className="font-outfit text-soft-muted text-sm leading-relaxed mb-4">
            Étudiante en informatique passionnée par la structure logicielle et la création web. J'aime concevoir des architectures solides (POO, MVC) tout en accordant un soin particulier aux détails visuels et à l'expérience utilisateur.
          </p>

          <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-stone-300" />
            <span className="font-handwriting text-2xl text-stone-500">
              Sixtine — Cursus Informatique
            </span>
          </div>
        </div>

        {/* Carte 2 : Stack Technique (Inclinée à +1deg) */}
        <div className="bg-white p-8 rounded-4xl border border-stone-200 shadow-soft rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-soft-sage" />
            <h3 className="font-outfit font-semibold text-xl text-soft-dark">
              Stack & Outils
            </h3>
          </div>

          <div className="space-y-4">
            {/* Programmation Orientée Objet */}
            <div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Programmation & POO
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-soft-sage/60 text-soft-dark text-xs font-medium px-3 py-1.5 rounded-full">Java / JavaFX</span>
                <span className="bg-soft-sage/60 text-soft-dark text-xs font-medium px-3 py-1.5 rounded-full">Modélisation UML</span>
                <span className="bg-soft-sage/60 text-soft-dark text-xs font-medium px-3 py-1.5 rounded-full">Architecture MVC</span>
              </div>
            </div>

            {/* Développement Web */}
            <div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Développement Web & BDD
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-soft-lavender text-soft-dark text-xs font-medium px-3 py-1.5 rounded-full">PHP / MySQL</span>
                <span className="bg-soft-lavender text-soft-dark text-xs font-medium px-3 py-1.5 rounded-full">React</span>
                <span className="bg-soft-lavender text-soft-dark text-xs font-medium px-3 py-1.5 rounded-full">Tailwind CSS</span>
              </div>
            </div>

            {/* Outillage */}
            <div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Environnement
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-stone-100 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full">Git & GitHub</span>
                <span className="bg-stone-100 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full">VS Code</span>
                <span className="bg-stone-100 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full">Laragon / HeidiSQL</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}