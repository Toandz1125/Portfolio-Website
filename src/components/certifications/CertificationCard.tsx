import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  org: string;
  date: string;
  verify: string;
  variant?: 'blue' | 'purple' | 'green' | 'orange';
}

export default function CertificationCard({
  name,
  org,
  date,
  verify,
  variant = 'blue'
}: CertificationCardProps) {
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

  const getAccentColor = () => {
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
      <div className="flex items-start gap-4">
        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <CheckCircle className={`w-6 h-6 ${getAccentColor()}`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-2 text-gray-900 dark:text-dark-heading 
                         group-hover:${getAccentColor()} transition-colors duration-300 theme-transition`}>
            {name}
          </h3>
          <p className="text-gray-600 dark:text-dark-text mb-2 transition-colors duration-300 theme-transition">
            {org}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 theme-transition">
              {date}
            </span>
            <a
              href={verify}
              className={`${getAccentColor()} hover:opacity-80 text-sm 
                         transition-all duration-300 hover:translate-x-1 
                         group-hover:font-medium theme-transition`}
            >
              Verify →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}