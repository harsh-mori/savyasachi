import SEO from '../../components/common/SEO';
import ProtectionLayer from '../../components/common/ProtectionLayer';
import { Breadcrumb, PageHero, OverviewSection, GallerySection, PageNavigation } from '../../components/layout';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../../content/seoData';
import { siteData } from '../../content/siteData';
import '../facilities/FacilitiesDetail.css';

const GALLERY_IMAGES = [
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-1.png', alt: 'Precision mechanical jig and fixture design', title: 'Mechanical Jigs and Fixtures 1' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-2.png', alt: 'Custom mechanical fixture for complex workpiece', title: 'Mechanical Jigs and Fixtures 2' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-3.png', alt: 'Multi-station mechanical fixture system', title: 'Mechanical Jigs and Fixtures 3' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-4.png', alt: 'Heavy-duty mechanical workholding fixture', title: 'Mechanical Jigs and Fixtures 4' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-5.png', alt: 'Modular mechanical fixture with adjustable clamping', title: 'Mechanical Jigs and Fixtures 5' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-6.jpg', alt: 'Precision drilling jig for repetitive operations', title: 'Mechanical Jigs and Fixtures 6' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-7.jpg', alt: 'CNC machining fixture with quick-change capability', title: 'Mechanical Jigs and Fixtures 7' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-8.jpg', alt: 'Advanced mechanical clamping system', title: 'Mechanical Jigs and Fixtures 8' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-9.jpg', alt: 'Welding fixture with position control', title: 'Mechanical Jigs and Fixtures 9' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-10.jpg', alt: 'Production-grade mechanical fixture', title: 'Mechanical Jigs and Fixtures 10' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-11.jpg', alt: 'Custom milling fixture for automotive parts', title: 'Mechanical Jigs and Fixtures 11' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-12.jpg', alt: 'High-precision mechanical jig assembly', title: 'Mechanical Jigs and Fixtures 12' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-13.jpg', alt: 'Mechanical fixture design with precision clamping mechanism', title: 'Mechanical Jigs and Fixtures 13' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-14.jpg', alt: 'Multi-station mechanical fixture for batch production', title: 'Mechanical Jigs and Fixtures 14' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-15.jpg', alt: 'Custom mechanical workholding solution for complex parts', title: 'Mechanical Jigs and Fixtures 15' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-16.jpg', alt: 'Heavy-duty mechanical fixture for large components', title: 'Mechanical Jigs and Fixtures 16' },
  { src: '/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-17.png', alt: 'Modular mechanical fixture system with adjustable components', title: 'Mechanical Jigs and Fixtures 17' }
];

const BREADCRUMB_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Mechanical Jigs & Fixtures', current: true }
];

const MechanicalFixtures = () => {
  const product = siteData.productDetails.mechanical;
  const seo = seoData.mechanicalFixtures;

  const productSchema = createProductSchema(
    "Mechanical Jigs & Fixtures",
    seo.description,
    "/assets/images/products/mechanical-fixtures/mechanical-jigs-and-fixtures-1.png",
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Mechanical Fixtures", path: "/products/mechanical-fixtures" }
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
          nextLink="/products/hydraulic-fixtures"
          nextLabel="View Hydraulic Fixtures"
        />
      </div>
    </ProtectionLayer>
  );
};

export default MechanicalFixtures;


