import React from 'react';
import { Palette, Video, Megaphone, BarChart } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import ServiceCard from './ServiceCard';
import YouTubePlayer from './YouTubePlayer';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.graphicDesign'),
      description: t('services.description.graphicDesign'),
      Icon: Palette,
      variant: 'blue' as const,
    },
    {
      title: t('services.videoEditing'),
      description: t('services.description.videoEditing'),
      Icon: Video,
      variant: 'purple' as const,
    },
    {
      title: t('services.socialMedia'),
      description: t('services.description.socialMedia'),
      Icon: Megaphone,
      variant: 'green' as const,
    },
    {
      title: t('services.development'),
      description: t('services.description.development'),
      Icon: BarChart,
      variant: 'orange' as const,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-primary dark:bg-dark-bg theme-transition"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold relative inline-block group text-gray-900 dark:text-dark-heading theme-transition">
              {t('services.title')}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <p className="text-gray-600 dark:text-dark-text mt-4 max-w-2xl mx-auto theme-transition">
              {t('services.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--accent-blue)] dark:text-[var(--accent-blue)] theme-transition">
                  {t('services.overview')}
                </h3>
                <p className="text-gray-700 dark:text-dark-text leading-relaxed theme-transition">
                  {t('services.experience')}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg shadow-sm 
                                hover:shadow-md transition-all duration-300 theme-transition
                                bg-[var(--box-bg-${service.variant})]`}
                    >
                      <service.Icon
                        className={`w-5 h-5 text-[var(--accent-${service.variant})]`}
                      />
                      <span className="font-medium text-gray-800 dark:text-dark-heading theme-transition">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <YouTubePlayer
                videoId="jfKfPfyJRdk"
                title="Professional Design Services Overview"
              />
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                direction={index === 0 ? 'left' : index === 3 ? 'right' : 'up'}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  variant={service.variant}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
