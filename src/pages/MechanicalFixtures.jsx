import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../data/seoData';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import ImageGallery from '../components/ImageGallery';
import './FacilitiesDetail.css';

const MechanicalFixtures = () => {
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

  const product = siteData.productDetails.mechanical;

  const productSchema = createProductSchema(
    "Mechanical Jigs & Fixtures",
    seoData.mechanicalFixtures.description,
    "/images/products/mechanical-fixtures-hero.jpg"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Mechanical Fixtures", path: "/products/mechanical-fixtures" }
  ]);

  // Gallery images for Mechanical Fixtures
  const galleryImages = [
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 1.png',
      alt: 'Precision mechanical jig and fixture design',
      title: 'Mechanical Jigs and Fixtures 1'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 2.png',
      alt: 'Custom mechanical fixture for complex workpiece',
      title: 'Mechanical Jigs and Fixtures 2'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 3.png',
      alt: 'Multi-station mechanical fixture system',
      title: 'Mechanical Jigs and Fixtures 3'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 4.png',
      alt: 'Heavy-duty mechanical workholding fixture',
      title: 'Mechanical Jigs and Fixtures 4'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 5.png',
      alt: 'Modular mechanical fixture with adjustable clamping',
      title: 'Mechanical Jigs and Fixtures 5'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 6.jpg',
      alt: 'Precision drilling jig for repetitive operations',
      title: 'Mechanical Jigs and Fixtures 6'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 7.jpg',
      alt: 'CNC machining fixture with quick-change capability',
      title: 'Mechanical Jigs and Fixtures 7'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 8.jpg',
      alt: 'Advanced mechanical clamping system',
      title: 'Mechanical Jigs and Fixtures 8'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 9.jpg',
      alt: 'Welding fixture with position control',
      title: 'Mechanical Jigs and Fixtures 9'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 10.jpg',
      alt: 'Production-grade mechanical fixture',
      title: 'Mechanical Jigs and Fixtures 10'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 11.jpg',
      alt: 'Custom milling fixture for automotive parts',
      title: 'Mechanical Jigs and Fixtures 11'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 12.jpg',
      alt: 'High-precision mechanical jig assembly',
      title: 'Mechanical Jigs and Fixtures 12'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 13.jpg',
      alt: 'Mechanical fixture design with precision clamping mechanism',
      title: 'Mechanical Jigs and Fixtures 13'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 14.jpg',
      alt: 'Multi-station mechanical fixture for batch production',
      title: 'Mechanical Jigs and Fixtures 14'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 15.jpg',
      alt: 'Custom mechanical workholding solution for complex parts',
      title: 'Mechanical Jigs and Fixtures 15'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 16.jpg',
      alt: 'Heavy-duty mechanical fixture for large components',
      title: 'Mechanical Jigs and Fixtures 16'
    },
    {
      src: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 17.png',
      alt: 'Modular mechanical fixture system with adjustable components',
      title: 'Mechanical Jigs and Fixtures 17'
    }
  ];

  return (
    <div className="facilities-detail-page">
      <SEO
        title={seoData.mechanicalFixtures.title}
        description={seoData.mechanicalFixtures.description}
        keywords={seoData.mechanicalFixtures.keywords}
        canonicalUrl={seoData.mechanicalFixtures.canonicalUrl}
        ogType={seoData.mechanicalFixtures.ogType}
        ogImage={seoData.mechanicalFixtures.ogImage}
        structuredData={[productSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className={`breadcrumb ${showBreadcrumb ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}>
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/products">Products</Link>
          <span className="separator">/</span>
          <span className="current">Mechanical Jigs & Fixtures</span>
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
            <Link to="/products/hydraulic-fixtures" className="back-link">
              View Hydraulic Fixtures
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

export default MechanicalFixtures;
