import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AboutDescription() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p className="text-gray-600 dark:text-dark-text text-lg leading-relaxed theme-transition">
        {t('about.description')}
      </p>
      <div>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          {t('about.contact')}
        </a>
      </div>
    </div>
  );
}