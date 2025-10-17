import React from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsConfig, isAnalyticsEnabled, isUmamiConfig } from '../utils/analytics';

declare global {
  interface Window {
    umami?: {
      track?: (
        eventOrPayload:
          | string
          | {
              url?: string;
              referrer?: string;
              title?: string;
              [key: string]: unknown;
            },
        payload?: Record<string, unknown>,
      ) => void;
    };
    __umamiReady?: boolean;
    __umamiEventQueue?: Array<() => void>;
  }
}

const DEFAULT_UMAMI_SCRIPT_URL = 'https://cloud.umami.is/script.js';

const Analytics: React.FC = () => {
  const location = useLocation();
  const [isReady, setIsReady] = React.useState(false);
  const lastTrackedPath = React.useRef<string | null>(null);

  const isEnabled = React.useMemo(() => isAnalyticsEnabled(), []);

  React.useEffect(() => {
    if (!isEnabled || !isUmamiConfig(analyticsConfig)) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-analytics="umami"]');

    const markReady = (script: HTMLScriptElement | null) => {
      script?.setAttribute('data-analytics-ready', 'true');
      window.__umamiReady = true;
      setIsReady(true);
      const queue = window.__umamiEventQueue;
      if (queue?.length) {
        if (typeof window.umami?.track === 'function') {
          queue.forEach((handler) => {
            try {
              handler();
            } catch {
              // Swallow individual queue failures to avoid breaking the flush loop
            }
          });
          window.__umamiEventQueue = [];
        }
      }
      window.dispatchEvent(new Event('umami:ready'));
    };

    if (existingScript) {
      if (existingScript.getAttribute('data-analytics-ready') === 'true') {
        setIsReady(true);
        return;
      }

      const onExistingLoad = () => markReady(existingScript);
      existingScript.addEventListener('load', onExistingLoad, { once: true });
      return () => {
        existingScript.removeEventListener('load', onExistingLoad);
      };
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = analyticsConfig.scriptUrl ?? DEFAULT_UMAMI_SCRIPT_URL;
    script.dataset.analytics = 'umami';
    script.setAttribute('data-website-id', analyticsConfig.websiteId);

    if (analyticsConfig.hostUrl) {
      script.setAttribute('data-host-url', analyticsConfig.hostUrl);
    }

    if (analyticsConfig.dataDomains) {
      script.setAttribute('data-domains', analyticsConfig.dataDomains);
    }

    if (analyticsConfig.autoTrack === false) {
      script.setAttribute('data-auto-track', 'false');
    }

    if (analyticsConfig.respectDoNotTrack) {
      script.setAttribute('data-do-not-track', 'true');
    }

    const onLoad = () => markReady(script);
    script.addEventListener('load', onLoad, { once: true });
    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
    };
  }, [isEnabled, analyticsConfig]);

  React.useEffect(() => {
    if (!isEnabled || !isUmamiConfig(analyticsConfig)) {
      return;
    }

    if (analyticsConfig.autoTrack !== false) {
      return;
    }

    if (!isReady) {
      return;
    }

    const hash = window.location.hash;
    const derivedPath = (() => {
      if (hash && hash.startsWith('#')) {
        const cleanedHash = hash.slice(1);
        if (!cleanedHash) {
          return '/';
        }
        return cleanedHash.startsWith('/') ? cleanedHash : `/${cleanedHash}`;
      }

      const path = `${location.pathname}${location.search}`;
      return path || '/';
    })();

    if (lastTrackedPath.current === derivedPath) {
      return;
    }

    const sendPageview = () => {
      window.umami?.track?.({
        url: derivedPath,
        referrer: document.referrer,
        title: document.title,
      });
    };

    if (typeof window.umami?.track === 'function') {
      sendPageview();
    } else {
      window.__umamiEventQueue = window.__umamiEventQueue ?? [];
      window.__umamiEventQueue.push(sendPageview);
    }

    lastTrackedPath.current = derivedPath;
  }, [isEnabled, isReady, location.pathname, location.search, location.hash, analyticsConfig]);

  return null;
};

export default Analytics;
