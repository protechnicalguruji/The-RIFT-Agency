export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  platforms: string[];
  roiEstimator: string;
  deliverables: string[];
}

export interface CampaignPreset {
  id: string;
  name: string;
  tagline: string;
  adCopy: string;
  ctaText: string;
  accentColor: string;
  metrics: {
    reach: string;
    ctr: string;
    leads: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  stats: {
    label: string;
    value: string;
  };
  beforeAfter: {
    before: number;
    after: number;
    metric: string;
  };
}
