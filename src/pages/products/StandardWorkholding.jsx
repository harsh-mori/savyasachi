import SEO from '../../components/common/SEO';
import ProtectionLayer from '../../components/common/ProtectionLayer';
import { Breadcrumb, PageHero, OverviewSection, GallerySection, PageNavigation } from '../../components/layout';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../../content/seoData';
import { siteData } from '../../content/siteData';
import '../facilities/FacilitiesDetail.css';

const GALLERY_IMAGES = [
  { src: '/assets/images/products/standard-workholding/standard-workholding-products-1.png', alt: 'Standard workholding components', title: 'Standard Workholding 1' },
  { src: '/assets/images/products/standard-workholding/standard-workholding-products-2.jpg', alt: 'Industry-standard clamping solution', title: 'Standard Workholding 2' }
];

const BREADCRUMB_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Standard Workholding', current: true }
];

const StandardWorkholding = () => {
  const product = siteData.productDetails.standard;
  const seo = seoData.standardWorkholding;

  const productSchema = createProductSchema(
    "Standard Workholding",
    seo.description,
    "/assets/images/products/standard-workholding/standard-workholding-products-1.png",
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Standard Workholding", path: "/products/standard-workholding" }
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
          nextLink="/products/mechanical-fixtures"
          nextLabel="View Mechanical Fixtures"
        />
      </div>
    </ProtectionLayer>
  );
};

export default StandardWorkholding;


