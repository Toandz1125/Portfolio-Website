import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/animations/fadeIn.css';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="aspect- rounded-lg overflow-hidden border-4 border-white shadow-xl">
        <img
          src="https://res.cloudinary.com/dslsdpxaf/image/upload/v1736750127/vvbp2ojhynbvdsyqpyqk.png"
          alt={t('contact.profileImage')}
          className="w-full h-full object-cover animate-fade-in-image"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 className="font-semibold text-lg mb-4">{t('contact.info')}</h3>
        <p className="text-sm text-gray-500 mt-4">{t('contact.response')}</p>
      </div>
    </div>
  );
}
