import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../../constants';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image',
  author,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData
}) => {
  const ogImageUrl = ogImage?.startsWith('http') ? ogImage : `${SITE_URL}${ogImage || '/assets/images/og-default.jpg'}`;
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* hreflang for regional SEO */}
      <link rel="alternate" hreflang="en-IN" href={fullCanonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={fullCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Savyasachi Engineering" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
