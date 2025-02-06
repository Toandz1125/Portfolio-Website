import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  variant?: 'blue' | 'purple' | 'green' | 'orange';
}

export default function ServiceCard({ 
  title, 
  description, 
  Icon,
  variant = 'blue' 
}: ServiceCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'purple':
        return 'bg-[var(--box-bg-purple)]';
      case 'green':
        return 'bg-[var(--box-bg-green)]';
      case 'orange':
        return 'bg-[var(--box-bg-orange)]';
      default:
        return 'bg-[var(--box-bg-blue)]';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'purple':
        return 'text-[var(--accent-purple)]';
      case 'green':
        return 'text-[var(--accent-green)]';
      case 'orange':
        return 'text-[var(--accent-orange)]';
      default:
        return 'text-[var(--accent-blue)]';
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1
                    dark:shadow-[var(--shadow-color)]
                    dark:hover:shadow-[var(--shadow-color-hover)]
                    group theme-transition ${getVariantClasses()}`}>
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon className={`w-8 h-8 ${getIconColor()}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-heading 
                     group-hover:text-[var(--accent-blue)] transition-colors duration-300 theme-transition">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-dark-text transition-colors duration-300 
                    group-hover:text-gray-800 dark:group-hover:text-gray-300 theme-transition">
        {description}
      </p>
    </div>
  );
}