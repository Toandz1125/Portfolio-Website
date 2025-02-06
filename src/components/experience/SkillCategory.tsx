import React from 'react';
import { CircleDot } from 'lucide-react';
import { Skill } from './types';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  className?: string;
}

export default function SkillCategory({ title, skills, className = '' }: SkillCategoryProps) {
  return (
    <div className={`rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-gray-800 ${className}`}>
      <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center relative group">
        <span className="relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-2 rounded-md transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:shadow-md hover:translate-y-[-2px] cursor-default"
          >
            <CircleDot className="w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 group-hover:rotate-180" />
            <div>
              <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
              <span className="ml-2 text-sm text-purple-600 dark:text-purple-400">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}