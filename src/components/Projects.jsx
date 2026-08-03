import React from 'react';

export default function Projects({ t }) {
  const projectsList = [
    { code: 'LO02', details: t.projects.p1, techs: ['Java', 'POO', 'UML', 'MVC'], cardBg: 'bg-[#E8EFE8]/80', tagBg: 'bg-[#FFB7B2]/80' },
    { code: 'EG23', details: t.projects.p2, techs: ['Figma', 'UX/UI', 'Prototypage'], cardBg: 'bg-[#EFEDF4]/80', tagBg: 'bg-white/80' },
    { code: 'IF37', details: t.projects.p3, techs: ['Système Embarqué', 'Innovation Sociale', 'IoT'], cardBg: 'bg-[#E8EFE8]/80', tagBg: 'bg-[#FFB7B2]/80' },
    { code: 'HACKATHON', details: t.projects.p4, techs: ['IA / LLM', 'Gemma', 'Python / React'], cardBg: 'bg-[#EFEDF4]/80', tagBg: 'bg-white/80' },
  ];

  return (
    <section id="projets" className="py-12 relative">
      <div className="mb-8">
        <h2 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#292524]">
          {t.projects.title} <span className="text-[#78716C]">{t.projects.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map((project, i) => (
          <div key={i} className={`${project.cardBg} rounded-3xl p-6 border border-stone-200/60 shadow-soft flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full text-[#292524] ${project.tagBg}`}>
                  {project.code}
                </span>
              </div>
              <h3 className="font-outfit font-bold text-xl text-[#292524] mb-1">{project.details.title}</h3>
              <p className="text-xs font-medium text-[#78716C] mb-3">{project.details.subtitle}</p>
              <p className="font-outfit text-sm text-[#292524]/80 leading-relaxed mb-6">{project.details.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-300/40">
              {project.techs.map((tech, idx) => (
                <span key={idx} className="text-[11px] font-outfit bg-white/80 text-[#292524] px-2.5 py-0.5 rounded-md border border-stone-200/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}