export type Language = 'en' | 'gr';

interface BaseAnalyticsConfig {
  disableInDev?: boolean;
}

export interface PlausibleAnalyticsConfig extends BaseAnalyticsConfig {
  provider: 'plausible';
  domain: string;
  scriptUrl?: string;
  spaMode?: 'auto' | 'hash' | 'history';
}

export interface UmamiAnalyticsConfig extends BaseAnalyticsConfig {
  provider: 'umami';
  websiteId: string;
  scriptUrl?: string;
  hostUrl?: string;
  autoTrack?: boolean;
  respectDoNotTrack?: boolean;
  dataDomains?: string;
}

export type AnalyticsConfig = PlausibleAnalyticsConfig | UmamiAnalyticsConfig;

export type AnalyticsEventPayload = Record<string, string | number | boolean | undefined>;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    blog: string;
    analytics: string;
  };
  home: {
    name: string;
    title: string;
    subtitle: string;
    specialties: string;
    cta: string;
    servicesTitle: string;
    services: Service[];
    credibility: string;
    podcastTitle: string;
    podcastDescription: string;
  };
  about: {
    title: string;
    greeting: string;
    intro: string;
    howIHelpTitle: string;
    howIHelpIntro: string;
    howIHelp: string[];
    experienceTitle: string;
    experience: string[];
    skillsTitle: string;
    skills: SkillCategory[];
    educationTitle: string;
    education: string[];
    languagesTitle: string;
    languages: string;
    resumeButton: string;
    resumeLabel: string;
    resumeNote: string;
    resumeOptions: ResumeOption[];
  };
  services: {
    title: string;
    intro: string;
    categories: ServiceCategory[];
    readCaseStudies: string;
    backToServices: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  portfolio: {
    title: string;
    intro: string;
    projects: PortfolioItem[];
    githubCta: string;
    readCaseStudy: string;
    backToPortfolio: string;
    technologiesUsed: string;
    liveDemo: string;
    viewOnGithub: string;
  };
  contact: {
    title:string;
    intro: string;
    detailsTitle: string;
    email: string;
    linkedin: string;
    github: string;
    formIntro: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    scheduleTitle: string;
    scheduleDescription: string;
    scheduleButton: string;
  };
  blog: {
    title: string;
    intro: string;
    readMore: string;
    backToBlog: string;
    postedOn: string;
    prevPage: string;
    nextPage: string;
    searchPlaceholder: string;
    noResults: string;
  };
  analytics: {
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    ctaNote: string;
    embedTitle: string;
    embedUnavailable: string;
    privacyNote: string;
  };
  footer: {
    copyright: string;
    availability: string;
  };
  announcements: {
    languageChanged: string;
  };
  ariaLabels: {
    mainNav: string;
    socialNav: string;
    switchToEnglish: string;
    switchToGreek: string;
  };
  actions: {
    scheduleLink: string;
    scheduleAriaLabel: string;
  };
}

export interface Service {
  title: string;
  description: string;
  slug: string;
}

export interface ServiceCaseStudy {
  company: string;
  challenge: string;
  solution: string[];
  technologies: string[];
}

export interface ServiceCategory {
  title: string;
  slug: string;
  intro: string;
  businessProse: string;
  items: string[];
  caseStudies: ServiceCaseStudy[];
  engagementTitle: string;
  engagementDescription: string;
  engagementChecklistTitle: string;
  engagementChecklist: string[];
  engagementCtaLabel: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  content: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface ResumeOption {
  value: string;
  label: string;
}

export interface SiteMetadata {
  name: string;
  description: string;
  requestFramePermissions: string[];
  analytics?: AnalyticsConfig;
  analyticsShareUrl?: string;
}
