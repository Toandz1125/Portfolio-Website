import React from 'react';
import AnimatedSection from './AnimatedSection';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-blue-200">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-16 relative inline-block group">
              {t('contact.title')}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <ContactInfo />
          </AnimatedSection>

          <AnimatedSection direction="right">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}