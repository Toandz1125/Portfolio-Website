import React from 'react';
import { Briefcase, FolderCheck, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import StatCard from './StatCard';

export default function AboutStats() {
  const { t } = useLanguage();

  const stats = [
    {
      Icon: Briefcase,
      title: t('about.experience'),
      value: t('about.yearsOfWork')
    },
    {
      Icon: FolderCheck,
      title: t('about.completed'),
      value: t('about.projects')
    },
    {
      Icon: Users,
      title: t('about.support'),
      value: t('about.clients')
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-8 text-center">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}