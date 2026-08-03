import React from 'react';

const experiences = [
  {
    period: '2024 — PRÉSENT',
    title: 'Projets Académiques & Développement POO',
    role: 'Étudiante en Informatique',
    location: 'Université / École',
    description: 'Modélisation UML, conception de moteurs de jeux en Java (Projet Jest), implémentation de design patterns et développement de solutions web MVC.',
    skills: ['Java', 'Architecture POO', 'UML', 'Git', 'PHP / MySQL'],
    bg: 'bg-[#E8EFE8]',
  },
  {
    period: '2023 — 2024',
    title: 'Développement Web & BDD',
    role: 'Projets Web Avancés',
    location: 'Projets Personnels & Cours',
    description: 'Création d\'applications web dynamiques avec PHP natif et bases de données MySQL (PDO). Configuration d\'environnements locaux (Laragon, HeidiSQL).',
    skills: ['PHP', 'MySQL', 'Tailwind CSS', 'React'],
    bg: 'bg-[#EFEDF4]',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-16 relative">
      <div className="mb-10">
        <span className="font-handwriting text-[#292524] text-3xl block">
          mon parcours
        </span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight text-[#292524]">
          Expériences & Formation
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${exp.bg} p-8 rounded-4xl border border-stone-200/60 shadow-soft flex flex-col md:flex-row md:items-start justify-between gap-6`}
          >
            <div className="md:w-1/4">
              <span className="text-xs font-semibold tracking-wider text-[#78716C] bg-white/70 px-3 py-1 rounded-full border border-stone-200/50">
                {exp.period}
              </span>
            </div>

            <div className="md:w-3/4 space-y-3">
              <div>
                <h3 className="font-outfit font-bold text-xl text-[#292524]">
                  {exp.title}
                </h3>
                <p className="text-xs font-medium text-[#78716C]">
                  {exp.role} • {exp.location}
                </p>
              </div>

              <p className="font-outfit text-sm text-[#292524]/80 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium bg-white/80 text-[#292524] px-3 py-1 rounded-full border border-stone-200/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}