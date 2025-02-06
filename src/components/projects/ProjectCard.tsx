import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:translate-y-[-2px] group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {t(project.titleKey)}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {t(project.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors duration-300 hover:bg-blue-100 hover:text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.demo}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
          >
            <ExternalLink className="w-4 h-4" /> {t('projects.demo')}
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:translate-x-1"
          >
            <Github className="w-4 h-4" /> {t('projects.code')}
          </a>
        </div>
      </div>
    </div>
  );
}