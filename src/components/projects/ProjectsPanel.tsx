import React from 'react';
import { X, ArrowUp } from 'lucide-react';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';
import { ProjectCategory } from './types';
import { projects } from './projectsData';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsPanel({ isOpen, onClose }: ProjectsPanelProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const panelRef = React.useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      t(project.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const scrollToTop = () => {
    panelRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40
                   ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div 
        ref={panelRef}
        className={`fixed top-0 right-0 h-full w-full md:w-3/4 lg:w-2/3 
                   bg-white dark:bg-gray-900 
                   shadow-2xl overflow-y-auto z-50 transition-transform duration-300
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                   theme-transition`}
      >
        <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-4 border-b dark:border-gray-800 theme-transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">
              {t('projects.title')}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full transition-all duration-300
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         text-gray-600 dark:text-gray-400
                         hover:text-gray-900 dark:hover:text-gray-100
                         theme-transition"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full transition-all duration-300
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         text-gray-600 dark:text-gray-400
                         hover:text-gray-900 dark:hover:text-gray-100
                         theme-transition"
                aria-label="Close panel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <ProjectFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}