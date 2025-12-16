import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../data/seoData';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import ImageGallery from '../components/ImageGallery';
import './FacilitiesDetail.css';
import ProtectionLayer from '../components/ProtectionLayer';

const TurningFixtures = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBreadcrumb(true);
      } else {
        setShowBreadcrumb(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const product = siteData.productDetails.turning;

  const productSchema = createProductSchema(
    "Turning Fixtures & Collet Chucks",
    seoData.turningFixtures.description,
    "/images/products/turning-fixtures-hero.jpg"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Turning Fixtures", path: "/products/turning-fixtures" }
  ]);

  // Gallery images for Turning Fixtures
  const galleryImages = [
    {
      src: '/images/products/turning-fixtures/Turning Fixtures and Collet Chucks 1.png',
      alt: 'Turning fixture for precision lathe operations',
      title: 'Turning Fixtures and Collet Chucks 1'
    },
    {
      src: '/images/products/turning-fixtures/Turning Fixtures and Collet Chucks 2.png',
      alt: 'Advanced turning fixture for complex geometries',
      title: 'Turning Fixtures and Collet Chucks 2'
    },
    {
      src: '/images/products/turning-fixtures/Turning Fixtures and Collet Chucks 3.png',
      alt: 'High-precision collet chuck for secure workholding',
      title: 'Turning Fixtures and Collet Chucks 3'
    },
    {
      src: '/images/products/turning-fixtures/Turning Fixtures and Collet Chucks 4.png',
      alt: 'VTL fixture for vertical turning lathe operations',
      title: 'Turning Fixtures and Collet Chucks 4'
    }
  ];

  return (
    <ProtectionLayer>
      <div className="facilities-detail-page">
        <SEO
          title={seoData.turningFixtures.title}
          description={seoData.turningFixtures.description}
          keywords={seoData.turningFixtures.keywords}
          canonicalUrl={seoData.turningFixtures.canonicalUrl}
          ogType={seoData.turningFixtures.ogType}
          ogImage={seoData.turningFixtures.ogImage}
          structuredData={[productSchema, breadcrumbSchema]}
        />

        {/* Breadcrumb */}
        <div className={`breadcrumb ${showBreadcrumb ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}>
          <div className="container">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/products">Products</Link>
            <span className="separator">/</span>
            <span className="current">Turning Fixtures & Collet Chucks</span>
          </div>
        </div>

        {/* Hero Section */}
        <motion.section
          className="detail-hero cnc-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <motion.div
              className="detail-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="cnc-hero-label">Our Products</p>
              <h1 className="detail-hero-title">
                <span className="highlight-text">{product.hero.title}</span>
              </h1>
              <p className="detail-hero-subtitle">
                {product.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Overview Section */}
        <section className="product-overview-section">
          <div className="container">
            <motion.div
              className="overview-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Overview</h2>
              {product.overview.text.map((paragraph, index) => (
                <p key={index} className="overview-paragraph">{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section className="product-gallery-section">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Product Gallery
            </motion.h2>
            <ImageGallery images={galleryImages} />
          </div>
        </section>

        {/* Navigation Links */}
        <section className="product-navigation">
          <div className="container">
            <motion.div
              className="back-link-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/products" className="back-link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Products
              </Link>
              <Link to="/products/zero-point-clamping" className="back-link">
                View Zero Point Clamping
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </ProtectionLayer>
  );
};

export default TurningFixtures;
