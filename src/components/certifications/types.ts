export type CertificationVariant = 'blue' | 'purple' | 'green' | 'orange';

export interface Certification {
  nameKey: string;
  orgKey: string;
  date: string;
  verify: string;
  variant: CertificationVariant;
}