import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../data/seoData';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import ImageGallery from '../components/ImageGallery';
import './FacilitiesDetail.css';

const HydraulicFixtures = () => {
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

  const product = siteData.productDetails.hydraulic;

  const productSchema = createProductSchema(
    "Hydraulic & Pneumatic Fixtures",
    seoData.hydraulicFixtures.description,
    "/images/products/hydraulic-fixtures-hero.jpg"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Hydraulic Fixtures", path: "/products/hydraulic-fixtures" }
  ]);

  // Gallery images for Hydraulic Fixtures
  const galleryImages = [
    {
      src: '/images/products/hydraulic-fixtures/Hydraulic Pneumatic Fixtures 1.png',
      alt: 'Hydraulic fixture with automated clamping system',
      title: 'Hydraulic Pneumatic Fixtures 1'
    },
    {
      src: '/images/products/hydraulic-fixtures/Hydraulic Pneumatic Fixtures 2.jpg',
      alt: 'Hydraulic workholding fixture for high-volume production',
      title: 'Hydraulic Pneumatic Fixtures 2'
    },
    {
      src: '/images/products/hydraulic-fixtures/Hydraulic Pneumatic Fixtures 3.png',
      alt: 'Pneumatic fixture with consistent clamping force',
      title: 'Hydraulic Pneumatic Fixtures 3'
    }
  ];

  return (
    <div className="facilities-detail-page">
      <SEO
        title={seoData.hydraulicFixtures.title}
        description={seoData.hydraulicFixtures.description}
        keywords={seoData.hydraulicFixtures.keywords}
        canonicalUrl={seoData.hydraulicFixtures.canonicalUrl}
        ogType={seoData.hydraulicFixtures.ogType}
        ogImage={seoData.hydraulicFixtures.ogImage}
        structuredData={[productSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className={`breadcrumb ${showBreadcrumb ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}>
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/products">Products</Link>
          <span className="separator">/</span>
          <span className="current">Hydraulic & Pneumatic Fixtures</span>
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
                <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Products
            </Link>
            <Link to="/products/turning-fixtures" className="back-link">
              View Turning Fixtures
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HydraulicFixtures;
