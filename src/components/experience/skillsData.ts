import { Skill } from './types';

export const getMediaSkills = (t: (key: string) => string): Skill[] => [
  {
    name: t('experience.media.photoshop'),
    level: t('experience.level.intermediate'),
  },
  { name: t('experience.media.canva'), level: t('experience.level.advanced') },
  { name: t('experience.media.xd'), level: t('experience.level.basic') },
  {
    name: t('experience.media.premiere'),
    level: t('experience.level.advanced'),
  },
  { name: t('experience.media.camtasia'), level: t('experience.level.basic') },
];

export const getAdsSkills = (t: (key: string) => string): Skill[] => [
  { name: t('experience.ads.google'), level: t('experience.level.basic') },
  { name: t('experience.ads.facebook'), level: t('experience.level.advanced') },
  { name: t('experience.ads.zalo'), level: t('experience.level.advanced') },
  {
    name: t('experience.ads.tiktok'),
    level: t('experience.level.intermediate'),
  },
];
