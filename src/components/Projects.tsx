import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './projects/ProjectCard';
import ProjectsPanel from './projects/ProjectsPanel';
import { projects } from './projects/projectsData';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit = 6 }: ProjectsProps) {
  const { t } = useLanguage();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const displayedProjects = projects.slice(0, limit);

  return (
    <section id="projects" className="py-20 bg-blue-300">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16 relative inline-block group">
            {t('projects.title')}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <AnimatedSection
              key={index}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {projects.length > limit && (
          <div className="text-center mt-12">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full
                       hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('projects.viewAll')}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <ProjectsPanel 
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
        />
      </div>
    </section>
  );
}