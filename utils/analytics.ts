import metadataJson from '../metadata.json';
import type {
  AnalyticsConfig,
  SiteMetadata,
  UmamiAnalyticsConfig,
} from '../types';

const siteMetadata = metadataJson as SiteMetadata;

export const analyticsConfig = siteMetadata.analytics;

export const isUmamiConfig = (
  config: AnalyticsConfig | undefined | null,
): config is UmamiAnalyticsConfig =>
  !!config && config.provider === 'umami';

export const isAnalyticsEnabled = (): boolean => {
  if (!analyticsConfig) {
    return false;
  }

  if (import.meta.env.DEV && (analyticsConfig.disableInDev ?? true)) {
    return false;
  }

  if (isUmamiConfig(analyticsConfig)) {
    return Boolean(analyticsConfig.websiteId);
  }

  return false;
};
