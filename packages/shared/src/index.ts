export type EnquiryMode = 'service' | 'materials' | 'business';

export type LifecycleStage = {
  id: string;
  label: string;
  description: string;
  platform: string;
  services: string[];
};
