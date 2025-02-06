import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Youtube, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageModal from './ImageModal';
import DownloadButton from './DownloadButton';
import '../styles/animations/social-icons.css';

export default function Header() {
  const { t } = useLanguage();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dslsdpxaf/image/upload/v1735462463/adm1nfd7yjsdhzgvg9jm.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8">
          <button
            onClick={() => setIsImageModalOpen(true)}
            className="group relative inline-block transition-transform duration-300 hover:scale-105"
            aria-label="View profile image"
          >
            <img
              src="https://res.cloudinary.com/dslsdpxaf/image/upload/v1735461920/raa4dlda1budqfp3vhdm.jpg"
              alt={t('header.profileAlt')}
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm">Click to view</span>
            </div>
          </button>
        </div>

        <ImageModal
          src="https://res.cloudinary.com/dslsdpxaf/image/upload/v1734341806/yjvnitpc6pburdhhesj2.jpg"
          alt={t('header.profileAlt')}
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
        />

        <h1 className="text-5xl font-bold mb-4">{t('header.name')}</h1>
        <p className="text-xl mb-8">{t('header.role')}</p>

        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://github.com/Toandz1125"
            className="social-icon"
            aria-label={t('header.github')}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mai-to%C3%A0n/"
            className="social-icon linkedin"
            aria-label={t('header.linkedin')}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=naithetoan2005@gmail.com&su=Contact%20from%20Portfolio"
            className="social-icon mail"
            aria-label={t('header.email')}
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@maitoan1125"
            className="social-icon file"
            aria-label={t('header.resume')}
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <DownloadButton
            fileUrl="cv.jpg"
            fileName="cv.jpg"
            label={t('header.downloadCV')}
          />

          <a
            href="#about"
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 border border-white/30 w-[180px] justify-center font-medium"
          >
            <span>{t('header.aboutMe')}</span>
            <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
}
