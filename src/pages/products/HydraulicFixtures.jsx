import SEO from '../../components/common/SEO';
import ProtectionLayer from '../../components/common/ProtectionLayer';
import { Breadcrumb, PageHero, OverviewSection, GallerySection, PageNavigation } from '../../components/layout';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../../content/seoData';
import { siteData } from '../../content/siteData';
import '../facilities/FacilitiesDetail.css';

const GALLERY_IMAGES = [
  { src: '/assets/images/products/hydraulic-fixtures/hydraulic-pneumatic-fixtures-1.png', alt: 'Industrial hydraulic fixture for CNC machining', title: 'Hydraulic Fixture 1' },
  { src: '/assets/images/products/hydraulic-fixtures/hydraulic-pneumatic-fixtures-2.jpg', alt: 'Pneumatic clamping fixture system', title: 'Hydraulic Fixture 2' },
  { src: '/assets/images/products/hydraulic-fixtures/hydraulic-pneumatic-fixtures-3.png', alt: 'Automated hydraulic workholding solution', title: 'Hydraulic Fixture 3' }
];

const BREADCRUMB_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Hydraulic Fixtures', current: true }
];

const HydraulicFixtures = () => {
  const product = siteData.productDetails.hydraulic;
  const seo = seoData.hydraulicFixtures;

  const productSchema = createProductSchema(
    "Hydraulic Fixtures",
    seo.description,
    "/assets/images/products/hydraulic-fixtures/hydraulic-pneumatic-fixtures-1.png",
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Hydraulic Fixtures", path: "/products/hydraulic-fixtures" }
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
          nextLink="/products/turning-fixtures"
          nextLabel="View Turning Fixtures"
        />
      </div>
    </ProtectionLayer>
  );
};

export default HydraulicFixtures;


