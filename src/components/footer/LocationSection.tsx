import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{t('footer.location')}</h3>
      <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1861.9805504094172!2d105.7661122!3d21.0342424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0bf0f1742f%3A0xe820ab53e8c05841!2zS8O9IFTDumMgWMOhIE3hu7kgxJDDrG5o!5e0!3m2!1svi!2s!4v1736163112466!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('footer.location')}
          className="filter contrast-[0.85]"
        />
      </div>
    </div>
  );
}
