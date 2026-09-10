export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  label: string;
  image: string;
  iconName: string;
  summary: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  featuredProject: {
    title: string;
    type: string;
    impact: string;
  };
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: 'ai' | 'web' | 'mobile' | 'enterprise' | 'growth';
  categoryLabel: string;
  subtitle: string;
  summary: string;
  metrics: {
    value: string;
    label: string;
  }[];
  deliverables: string[];
  technologies: string[];
  image: string;
  confidential?: boolean;
}

export interface ReviewItem {
  quote: string;
  authorRole: string;
  companyType: string;
  serviceId: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  track: string;
  image: string;
  bio: string;
  specialties: string[];
  featured?: boolean;
}

export interface PrincipleItem {
  index: string;
  tag: string;
  title: string;
  description: string;
}

export interface WorkingModel {
  index: string;
  tag: string;
  title: string;
  description: string;
  timeline: string;
  idealFor: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  version: string;
  releaseDate: string;
  category: string;
  productType: 'apk' | 'web' | 'both';
  externalUrl?: string;
  apkSize?: string;
  minAndroid?: string;
  targetAndroid?: string;
  packageName?: string;
  sha256?: string;
  downloadFilename?: string;
  highlights: string[];
  features: string[];
  permissions?: string[];
  changelog: string[];
  status: 'Latest Stable' | 'Live Platform' | 'Beta' | 'LTS';
}

export interface InstallStep {
  step: number;
  title: string;
  shortDesc: string;
  instruction: string;
  tip?: string;
  warning?: string;
  badge: string;
}
