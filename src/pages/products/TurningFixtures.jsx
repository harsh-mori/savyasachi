import SEO from '../../components/common/SEO';
import ProtectionLayer from '../../components/common/ProtectionLayer';
import { Breadcrumb, PageHero, OverviewSection, GallerySection, PageNavigation } from '../../components/layout';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../../content/seoData';
import { siteData } from '../../content/siteData';
import '../facilities/FacilitiesDetail.css';

const GALLERY_IMAGES = [
  { src: '/assets/images/products/turning-fixtures/turning-fixtures-and-collet-chucks-1.png', alt: 'Precision turning fixture for CNC lathe', title: 'Turning Fixture 1' },
  { src: '/assets/images/products/turning-fixtures/turning-fixtures-and-collet-chucks-2.png', alt: 'Collet chuck for turning operations', title: 'Turning Fixture 2' },
  { src: '/assets/images/products/turning-fixtures/turning-fixtures-and-collet-chucks-3.png', alt: 'VTL fixture for vertical turning', title: 'Turning Fixture 3' }
];

const BREADCRUMB_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Turning Fixtures', current: true }
];

const TurningFixtures = () => {
  const product = siteData.productDetails.turning;
  const seo = seoData.turningFixtures;

  const productSchema = createProductSchema(
    "Turning Fixtures",
    seo.description,
    "/assets/images/products/turning-fixtures/turning-fixtures-and-collet-chucks-1.png"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Turning Fixtures", path: "/products/turning-fixtures" }
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
          nextLink="/products/zero-point-clamping"
          nextLabel="View Zero Point Clamping"
        />
      </div>
    </ProtectionLayer>
  );
};

export default TurningFixtures;


