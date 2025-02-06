import React from 'react';
import { Filter, Search } from 'lucide-react';
import { ProjectCategory } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectFiltersProps {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ProjectFilters({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm
}: ProjectFiltersProps) {
  const { t } = useLanguage();

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: t('projects.categories.all') },
    { value: 'web', label: t('projects.categories.web') },
    { value: 'mobile', label: t('projects.categories.mobile') },
    { value: 'ai', label: t('projects.categories.ai') },
    { value: 'cloud', label: t('projects.categories.cloud') },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-4 py-2 rounded-full transition-all duration-300 
              ${activeCategory === category.value
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-blue-50'
              }`}
          >
            <Filter className={`w-4 h-4 inline-block mr-2 ${
              activeCategory === category.value ? 'text-white' : 'text-blue-600'
            }`} />
            {category.label}
          </button>
        ))}
      </div>

      <div className="relative w-full md:w-64">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('projects.search')}
          className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}