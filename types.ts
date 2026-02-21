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

export interface TrustSignal {
  label: string;
  value: string;
}

export interface ExternalValidationLink {
  title: string;
  description: string;
  ctaLabel: string;
  url: string;
}

export interface VerifiedOutcomeSignal {
  metric: string;
  context?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  evidenceLabel: string;
  evidenceUrl: string;
}

export interface OutcomeCaseStudy {
  title: string;
  timeframe: string;
  before: string;
  after: string;
  scope: string;
  evidenceLabel: string;
  evidenceUrl: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    trust: string;
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
    trustStripTitle: string;
    trustSignals: TrustSignal[];
    externalValidationTitle: string;
    externalValidationIntro: string;
    externalValidationLinks: ExternalValidationLink[];
    verifiedOutcomesTitle: string;
    verifiedOutcomesIntro: string;
    verifiedOutcomes: VerifiedOutcomeSignal[];
    servicesTitle: string;
    services: Service[];
    credibility: string;
    outcomesTitle: string;
    outcomesIntro: string;
    outcomeCaseStudies: OutcomeCaseStudy[];
    secondaryCta: {
      title: string;
      description: string;
      buttonLabel: string;
      helper: string;
    };
    proofTitle: string;
    proofIntro: string;
    proofBlocks: ProofBlock[];
    featuredResearch: {
      title: string;
      essayTitle: string;
      essayDescription: string;
      readOnLabel: string;
      link: string;
    };
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
    philosophyTitle: string;
    philosophyText: string;
    researchFeedTitle: string;
    researchFeed: {
      title: string;
      description: string;
      url: string;
      date: string;
    }[];
    subscribeCta: string;
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
    forkTransparencyTitle: string;
    forkTransparencyIntro: string;
    forkHighlights: {
      repo: string;
      link: string;
      contribution: string;
    }[];
    githubCta: string;
    readCaseStudy: string;
    backToPortfolio: string;
    technologiesUsed: string;
    liveDemo: string;
    viewOnGithub: string;
  };
  contact: {
    title: string;
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
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    formFallbackSubject: string;
    formFallbackIntro: string;
    formFallbackEmailButton: string;
    formFallbackCopyButton: string;
    formFallbackCopySuccess: string;
    formFallbackCopyError: string;
    scheduleTitle: string;
    scheduleDescription: string;
    scheduleButton: string;
    scheduleFallback: string;
    priorityEmailLabel: string;
    priorityEmailSubject: string;
    teardownIntentSubject: string;
    teardownIntentHint: string;
    teardownIntentMessage: string;
  };
  blog: {
    title: string;
    intro: string;
    liveFeedBadge: string;
    liveFeedIntro: string;
    liveFeedLoading: string;
    liveFeedError: string;
    viewOnSubstack: string;
    archiveTitle: string;
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
    analyticsLinkLabel: string;
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

export interface ProofBlock {
  title: string;
  challenge: string;
  outcome: string;
  evidenceLabel: string;
  evidenceUrl: string;
  scopeNote?: string;
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
  siteUrl?: string;
  ogImage?: string;
  requestFramePermissions: string[];
  analytics?: AnalyticsConfig;
  analyticsShareUrl?: string;
}
