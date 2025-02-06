export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai' | 'cloud';

export interface Project {
  titleKey: string;
  descriptionKey: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
  category: ProjectCategory;
}