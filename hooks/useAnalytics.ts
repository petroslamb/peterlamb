import React from 'react';
import { analyticsConfig, isAnalyticsEnabled, isUmamiConfig } from '../utils/analytics';
import type { AnalyticsEventPayload } from '../types';

const EVENT_NAME_REGEX = /^[a-z0-9_.:-]+$/i;

const sanitizeEventName = (eventName: string): string => {
  if (EVENT_NAME_REGEX.test(eventName)) {
    return eventName;
  }

  return eventName.replace(/\s+/g, '_').toLowerCase();
};

export const useAnalytics = () => {
  const isEnabled = React.useMemo(() => isAnalyticsEnabled(), []);
  const [isReady, setIsReady] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.__umamiReady === true;
  });

  React.useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const handleReady = () => setIsReady(true);
    window.addEventListener('umami:ready', handleReady);

    return () => window.removeEventListener('umami:ready', handleReady);
  }, [isEnabled]);

  const trackEvent = React.useCallback(
    (eventName: string, payload?: AnalyticsEventPayload) => {
      if (!isEnabled) {
        return;
      }

      if (!isUmamiConfig(analyticsConfig)) {
        return;
      }

      if (typeof window === 'undefined') {
        return;
      }

      const normalizedEvent = sanitizeEventName(eventName);

      if (!isReady || typeof window.umami?.track !== 'function') {
        window.__umamiEventQueue = window.__umamiEventQueue ?? [];
        window.__umamiEventQueue.push(() => {
          window.umami?.track?.(normalizedEvent, payload);
        });
        return;
      }

      window.umami.track(normalizedEvent, payload);
    },
    [isEnabled, isReady],
  );

  return {
    isEnabled,
    isReady,
    trackEvent,
  };
};

export default useAnalytics;
