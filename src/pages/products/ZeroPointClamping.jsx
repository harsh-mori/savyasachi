import SEO from '../../components/common/SEO';
import ProtectionLayer from '../../components/common/ProtectionLayer';
import { Breadcrumb, PageHero, OverviewSection, GallerySection, PageNavigation } from '../../components/layout';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../../content/seoData';
import { siteData } from '../../content/siteData';
import '../facilities/FacilitiesDetail.css';

const GALLERY_IMAGES = [
  { src: '/assets/images/products/zero-point-clamping/zero-point-clamping-systems-1.png', alt: 'Zero point clamping system for quick changeover', title: 'Zero Point Clamping Systems 1' },
  { src: '/assets/images/products/zero-point-clamping/zero-point-clamping-systems-2.png', alt: 'Zero point fixture with precision positioning', title: 'Zero Point Clamping Systems 2' },
  { src: '/assets/images/products/zero-point-clamping/zero-point-modal.png', alt: 'Zero point clamp for maximum productivity', title: 'Zero Point Clamping Systems 3' }
];

const BREADCRUMB_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Zero Point Clamping Systems', current: true }
];

const ZeroPointClamping = () => {
  const product = siteData.productDetails.zeropoint;
  const seo = seoData.zeroPointClamping;

  const productSchema = createProductSchema(
    "Zero Point Clamping Systems",
    seo.description,
    "/assets/images/products/zero-point-clamping/zero-point-clamping-systems-1.png",
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Zero Point Clamping", path: "/products/zero-point-clamping" }
  ]);

  return (
    <ProtectionLayer>
      <div className="facilities-detail-page">
        <SEO
          title={seo.title}
          description={seo.description}
          keywords={seo.keywords}
          canonicalUrl={seo.canonicalUrl}
          ogType={seo.ogType}
          ogImage={seo.ogImage}
          structuredData={[productSchema, breadcrumbSchema]}
        />

        <Breadcrumb items={BREADCRUMB_ITEMS} />

        <PageHero
          label="Our Products"
          highlightedTitle={product.hero.title}
          subtitle={product.hero.subtitle}
          className="cnc-hero"
        />

        <OverviewSection paragraphs={product.overview.text} />

        <GallerySection images={GALLERY_IMAGES} />

        <PageNavigation
          backLink="/products"
          backLabel="Back"
          nextLink="/products/standard-workholding"
          nextLabel="View Standard Workholding"
        />
      </div>
    </ProtectionLayer>
  );
};

export default ZeroPointClamping;


