import React from 'react';

const projects = [
  {
    id: 'jest',
    title: 'Jest — Jeu de Cartes',
    subtitle: 'Programmation Orientée Objet & GUI',
    description: 'Modélisation UML complète, développement du moteur logique du jeu et interface graphique interactive.',
    techs: ['Java', 'JavaFX / Swing', 'POO', 'UML', 'MVC'],
    tag: 'Projet Star',
    color: 'bg-soft-sage',
    github: 'https://github.com/ton-pseudo/jest-card-game',
    demo: '#', // Lien vers screenshot ou démo
  },
  {
    id: 'web-php',
    title: 'Plateforme Web PHP / MySQL',
    subtitle: 'Architecture MVC & Base de Données',
    description: 'Application web dynamique avec gestion d\'utilisateurs, base de données relationnelle et connexion sécurisée.',
    techs: ['PHP', 'MySQL', 'PDO', 'Tailwind CSS', 'Git'],
    tag: 'Web Dev',
    color: 'bg-soft-lavender',
    github: 'https://github.com/ton-pseudo/mon-projet-php',
    demo: '#',
  },
  {
    id: 'portfolio',
    title: 'Digital Wellness Portfolio',
    subtitle: 'Design System & Frontend React',
    description: 'Portfolio personnel responsive conçu selon les principes du Digital Minimalism, textures grain et animations fluides.',
    techs: ['React', 'Tailwind CSS', 'Vite', 'UX/UI'],
    tag: 'Design & Code',
    color: 'bg-soft-coral/20',
    github: 'https://github.com/ton-pseudo/my-portfolio',
    demo: '#',
  }
];

export default function Projects() {
  return (
    <section id="projets" className="py-20 relative">
      {/* Entête de Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-handwriting text-soft-coral text-4xl block -rotate-1">
            sélection de
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight text-soft-dark">
            Projets Réalisés
          </h2>
        </div>
        <p className="font-outfit text-soft-muted text-sm max-w-xs">
          Une vue d'ensemble sur mes travaux de conception logicielle et de développement web.
        </p>
      </div>

      {/* Cartes de Projets (Grille & Scroll fluide) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-3xl p-6 border border-stone-200/80 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Tag & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full text-soft-dark ${project.color}`}>
                  {project.tag}
                </span>
                <span className="text-xs text-soft-muted font-outfit">2026</span>
              </div>

              {/* Titre & Sous-titre */}
              <h3 className="font-outfit font-semibold text-xl text-soft-dark group-hover:text-soft-coral transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-stone-400 mt-0.5 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="font-outfit text-sm text-soft-muted line-clamp-3 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Badges Technos */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-outfit bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens de la Carte */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-dark hover:text-soft-coral transition-colors flex items-center gap-1 text-xs"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}