import React, { lazy, Suspense } from 'react';
import { Briefcase, FolderCheck, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import AboutStats from './about/AboutStats';
import AboutDescription from './about/AboutDescription';

// Lazy load the image component
const AboutImage = lazy(() => import('./about/AboutImage'));

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-primary dark:bg-dark-bg theme-transition">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h3 className="text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2 theme-transition">
              {t('about.intro')}
            </h3>
            <h2 className="text-3xl font-bold relative inline-block group text-gray-900 dark:text-dark-heading theme-transition">
              {t('about.title')}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection direction="left">
            <div className="space-y-12">
              <AboutStats />
              <AboutDescription />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Suspense fallback={<div className="aspect-video bg-gray-200 animate-pulse rounded-lg"></div>}>
              <AboutImage />
            </Suspense>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}