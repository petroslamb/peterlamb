import React, { useEffect } from 'react';
import metadataJson from '../metadata.json';
import type { SiteMetadata } from '../types';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalPath?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const siteMetadata = metadataJson as SiteMetadata;

const ensureMetaTag = (attribute: 'name' | 'property', key: string): HTMLMetaElement => {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  return tag;
};

const resolveUrl = (baseUrl: string, value: string): string => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (value.startsWith('/')) {
    return `${baseUrl}${value}`;
  }

  return `${baseUrl}/${value}`;
};

const resolveBaseUrl = (): string => {
  const envSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
  if (envSiteUrl) {
    return envSiteUrl.replace(/\/$/, '');
  }

  const metadataSiteUrl = siteMetadata.siteUrl?.trim();
  if (metadataSiteUrl) {
    return metadataSiteUrl.replace(/\/$/, '');
  }

  // Fallback to the current origin + configured app base path.
  return new URL(import.meta.env.BASE_URL || '/', window.location.origin).toString().replace(/\/$/, '');
};

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  image,
  type = 'website',
  canonicalPath,
  noIndex = false,
  structuredData,
}) => {
  useEffect(() => {
    const baseUrl = resolveBaseUrl();
    const canonicalUrl = canonicalPath
      ? resolveUrl(baseUrl, canonicalPath)
      : window.location.href;
    const resolvedImage = resolveUrl(baseUrl, image ?? siteMetadata.ogImage ?? '/about-infographic.png');

    const schemaPayload = structuredData ?? [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Petros Lambropoulos',
        alternateName: 'Peter Lamb',
        url: baseUrl,
        email: 'mailto:petroslamb.dev@gmail.com',
        sameAs: [
          'https://github.com/petroslamb',
          'https://www.linkedin.com/in/petroslamb/',
          'https://lambpetros.substack.com/',
        ],
        jobTitle: 'Independent Systems Consultant',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Petros Lambropoulos Consulting',
        url: baseUrl,
        areaServed: 'Worldwide',
        serviceType: [
          'AI systems evaluation',
          'Production agent architecture',
          'Compliance-first infrastructure',
        ],
      },
    ];

    document.title = title;

    const metaDescription = ensureMetaTag('name', 'description');
    metaDescription.setAttribute('content', description);

    const robots = ensureMetaTag('name', 'robots');
    robots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    ensureMetaTag('property', 'og:title').setAttribute('content', title);
    ensureMetaTag('property', 'og:description').setAttribute('content', description);
    ensureMetaTag('property', 'og:type').setAttribute('content', type);
    ensureMetaTag('property', 'og:url').setAttribute('content', canonicalUrl);
    ensureMetaTag('property', 'og:image').setAttribute('content', resolvedImage);
    ensureMetaTag('property', 'og:site_name').setAttribute('content', siteMetadata.name);

    ensureMetaTag('name', 'twitter:card').setAttribute('content', 'summary_large_image');
    ensureMetaTag('name', 'twitter:title').setAttribute('content', title);
    ensureMetaTag('name', 'twitter:description').setAttribute('content', description);
    ensureMetaTag('name', 'twitter:image').setAttribute('content', resolvedImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let structuredDataScript = document.querySelector('script[data-meta-tags-schema="true"]') as HTMLScriptElement | null;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.setAttribute('data-meta-tags-schema', 'true');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.text = JSON.stringify(schemaPayload);
  }, [title, description, image, type, canonicalPath, noIndex, structuredData]);

  return null;
};

export default MetaTags;
