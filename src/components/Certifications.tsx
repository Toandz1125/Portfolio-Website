import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CertificationCard from './certifications/CertificationCard';
import CertificationsPanel from './certifications/CertificationsPanel';
import { certifications } from './certifications/certificationsData';
import { useLanguage } from '../contexts/LanguageContext';

export default function Certifications() {
  const { t } = useLanguage();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const displayedCertifications = certifications.slice(0, 4);

  return (
    <section id="certifications" className="py-20 bg-primary dark:bg-dark-bg theme-transition">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16 relative inline-block group text-gray-900 dark:text-dark-heading theme-transition">
            {t('certifications.title')}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {displayedCertifications.map((cert, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <CertificationCard
                name={t(cert.nameKey)}
                org={t(cert.orgKey)}
                date={cert.date}
                verify={cert.verify}
                variant={cert.variant}
              />
            </AnimatedSection>
          ))}
        </div>

        {certifications.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full
                       hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('certifications.viewAll')}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <CertificationsPanel 
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
        />
      </div>
    </section>
  );
}