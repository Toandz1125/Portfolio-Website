import React from 'react';
import { X, ArrowUp } from 'lucide-react';
import CertificationCard from './CertificationCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { certifications } from './certificationsData';

interface CertificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificationsPanel({ isOpen, onClose }: CertificationsPanelProps) {
  const { t } = useLanguage();
  const panelRef = React.useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    panelRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40
                   ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div 
        ref={panelRef}
        className={`fixed top-0 right-0 h-full w-full md:w-3/4 lg:w-2/3 
                   bg-white dark:bg-gray-900 
                   shadow-2xl overflow-y-auto z-50 transition-transform duration-300
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                   theme-transition`}
      >
        <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-4 border-b dark:border-gray-800 theme-transition">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">
              {t('certifications.title')}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full transition-all duration-300
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         text-gray-600 dark:text-gray-400
                         hover:text-gray-900 dark:hover:text-gray-100
                         theme-transition"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full transition-all duration-300
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         text-gray-600 dark:text-gray-400
                         hover:text-gray-900 dark:hover:text-gray-100
                         theme-transition"
                aria-label="Close panel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                name={t(cert.nameKey)}
                org={t(cert.orgKey)}
                date={cert.date}
                verify={cert.verify}
                variant={cert.variant}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}