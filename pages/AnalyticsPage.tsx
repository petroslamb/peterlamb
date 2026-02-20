import React from 'react';
import MetaTags from '../components/MetaTags';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import useAnalytics from '../hooks/useAnalytics';
import metadataJson from '../metadata.json';
import type { SiteMetadata } from '../types';

const siteMetadata = metadataJson as SiteMetadata;
const DEFAULT_SHARE_URL = 'https://cloud.umami.is/share/XlFjHh9T4RgIJTE1';
const analyticsShareUrl = siteMetadata.analyticsShareUrl ?? DEFAULT_SHARE_URL;

const AnalyticsPage: React.FC = () => {
  const { language, translations } = useLanguage();
  const { analytics } = translations;
  const { trackEvent } = useAnalytics();
  const [status, setStatus] = React.useState<'pending' | 'ready' | 'blocked'>('pending');

  React.useEffect(() => {
    if (status === 'ready') {
      return;
    }

    const timeout = window.setTimeout(() => {
      if (status !== 'ready') {
        setStatus('blocked');
      }
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [status]);

  const metaDescription =
    language === 'en'
      ? 'View live Umami analytics for the site without leaving the app or open the full dashboard in a new tab.'
      : 'Δες τα ζωντανά analytics του Umami χωρίς να φύγεις από την εφαρμογή ή άνοιξε τον πλήρη πίνακα σε νέα καρτέλα.';

  return (
    <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-lg shadow-md max-w-5xl mx-auto">
      <MetaTags title={`${analytics.title} | Petros Lambropoulos`} description={metaDescription} canonicalPath="/#/analytics" noIndex />
      <AnimatedSection as="section" className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white text-center">{analytics.title}</h1>
        <p className="text-lg text-text-secondary dark:text-slate-300 text-center">{analytics.subtitle}</p>
        <p className="text-base text-text-secondary dark:text-slate-300 text-center max-w-3xl mx-auto">{analytics.description}</p>
        <div className="max-w-3xl mx-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
          {analytics.privacyNote}
        </div>
        <div className="flex flex-col items-center gap-2 pt-4">
          <a
            href={analyticsShareUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary py-3 px-6 font-semibold text-white transition hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-cyan-500 dark:hover:bg-cyan-400"
            onClick={() => trackEvent('analytics_open_dashboard', { location: 'analytics_page' })}
          >
            {analytics.ctaLabel}
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">{analytics.ctaNote}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection as="section" className="mt-10" delay={150}>
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner min-h-[360px]">
          {status !== 'blocked' ? (
          <iframe
            title={analytics.embedTitle}
            src={analyticsShareUrl}
            className={`h-[70vh] w-full transition-opacity duration-300 ${status === 'ready' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            loading="lazy"
            onLoad={() => {
              setStatus('ready');
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
          ) : null}
          {status === 'pending' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/70 dark:bg-slate-900/70">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent dark:border-cyan-400" aria-hidden="true" />
              <p className="text-sm text-slate-500 dark:text-slate-400">{analytics.subtitle}</p>
            </div>
          ) : null}
          {status === 'blocked' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white dark:bg-slate-900 p-6 text-center">
              <p className="text-sm text-text-secondary dark:text-slate-300">{analytics.embedUnavailable}</p>
            </div>
          ) : null}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AnalyticsPage;
