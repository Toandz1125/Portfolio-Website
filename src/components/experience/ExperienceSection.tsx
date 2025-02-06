import React from 'react';
import AnimatedSection from '../AnimatedSection';
import SkillCategory from './SkillCategory';
import { useLanguage } from '../../contexts/LanguageContext';
import { getMediaSkills, getAdsSkills } from './skillsData';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-[#b9d9eb]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-gray-700 text-center mb-2">
              {t('experience.intro')}
            </p>
            <h2 className="text-3xl font-bold relative inline-block group text-gray-800">
              {t('experience.title')}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection direction="down">
            <SkillCategory
              title={t('experience.media.title')}
              skills={getMediaSkills(t)}
              className="bg-white/90"
            />
          </AnimatedSection>

          <AnimatedSection direction="up">
            <SkillCategory
              title={t('experience.ads.title')}
              skills={getAdsSkills(t)}
              className="bg-white/90"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}