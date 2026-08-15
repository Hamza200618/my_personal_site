import { Helmet } from '@dr.pogodin/react-helmet';
import { SEO_DEFAULTS } from '@/constants';
import type { SeoProps } from '@/types';

/**
 * Seo — manages per-page metadata via React Helmet Async.
 * Uses site-wide defaults with per-page overrides.
 */
export function Seo({ title, description, path, type = 'website' }: SeoProps) {
  const fullTitle = title === SEO_DEFAULTS.title
    ? SEO_DEFAULTS.title
    : `${title} | ${SEO_DEFAULTS.title}`;

  const fullDescription = description ?? SEO_DEFAULTS.description;
  const url = path ? `${SEO_DEFAULTS.siteUrl}${path}` : SEO_DEFAULTS.siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="author" content={SEO_DEFAULTS.author} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SEO_DEFAULTS.title} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />
      <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${SEO_DEFAULTS.og.defaultImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_DEFAULTS.twitter.cardType} />
      <meta name="twitter:site" content={SEO_DEFAULTS.twitter.handle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${SEO_DEFAULTS.og.defaultImage}`} />
    </Helmet>
  );
}