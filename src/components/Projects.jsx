import React from 'react';

export default function Projects({ t }) {
  const projectsList = [
    { 
      id: 'lo02',
      code: 'LO02', 
      details: t.projects.p1, 
      techs: ['Java', 'POO', 'UML'], 
      cardBg: 'bg-[#E8EFE8]/50 hover:bg-[#E8EFE8]/80', 
      tagBg: 'bg-[#FFB7B2]/60' 
    },
    { 
      id: 'eg23',
      code: 'EG23', 
      details: t.projects.p2, 
      techs: ['Figma', 'UX/UI'], 
      cardBg: 'bg-[#EFEDF4]/50 hover:bg-[#EFEDF4]/80', 
      tagBg: 'bg-white/80' 
    },
    { 
      id: 'if37',
      code: 'IF37', 
      details: t.projects.p3, 
      techs: ['IoT', 'Innovation Sociale'], 
      cardBg: 'bg-[#E8EFE8]/50 hover:bg-[#E8EFE8]/80', 
      tagBg: 'bg-[#FFB7B2]/60' 
    },
    { 
      id: 'hackathon',
      code: 'HACKATHON', 
      details: t.projects.p4, 
      techs: ['IA / LLM', 'Gemma'], 
      cardBg: 'bg-[#EFEDF4]/50 hover:bg-[#EFEDF4]/80', 
      tagBg: 'bg-white/80' 
    },
  ];

  const handleProjectClick = (projectId) => {
    // Plus tard : navigation vers la page /projet/:id ou ouverture d'une modale
    console.log(`Ouverture du projet : ${projectId}`);
  };

  return (
    <section id="projets" className="py-10 relative">
      <div className="mb-6">
        <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#292524]">
          {t.projects.title} {t.projects.titleHighlight}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsList.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            className={`${project.cardBg} rounded-3xl p-6 border border-stone-200/50 shadow-soft hover:shadow-soft-hover transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full text-[#292524] ${project.tagBg}`}>
                  {project.code}
                </span>
                <span className="text-xs text-[#78716C] group-hover:text-[#292524] transition-colors flex items-center gap-1 font-medium">
                  Voir le projet
                  <span className="group-hover:translate-x-1 transition-transform inline-block">➔</span>
                </span>
              </div>

              <h3 className="font-outfit font-bold text-lg text-[#292524] mb-1 group-hover:text-black transition-colors">
                {project.details.title}
              </h3>
              <p className="text-xs font-medium text-[#78716C] mb-4">
                {project.details.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-300/30">
              {project.techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-outfit bg-white/70 text-[#292524] px-2.5 py-0.5 rounded-md border border-stone-200/40"
                >
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