import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createProductSchema, createBreadcrumbSchema } from '../data/seoData';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import ImageGallery from '../components/ImageGallery';
import './FacilitiesDetail.css';
import ProtectionLayer from '../components/ProtectionLayer';

const StandardWorkholding = () => {
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



  const product = siteData.productDetails.standard;

  const productSchema = createProductSchema(
    "Standard Workholding Components",
    seoData.standardWorkholding.description,
    "/images/products/standard-workholding-hero.jpg"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Standard Workholding", path: "/products/standard-workholding" }
  ]);

  // Gallery images for Standard Workholding
  const galleryImages = [
    {
      src: '/images/products/standard-workholding/Standard Workholding Products 1.png',
      alt: 'Standard workholding components for versatile machining',
      title: 'Standard Workholding Products 1'
    },
    {
      src: '/images/products/standard-workholding/Standard Workholding Products 2.jpg',
      alt: 'Standard clamps and workholding accessories',
      title: 'Standard Workholding Products 2'
    }
  ];

  return (
    <ProtectionLayer>
      <div className="facilities-detail-page">
        <SEO
          title={seoData.standardWorkholding.title}
          description={seoData.standardWorkholding.description}
          keywords={seoData.standardWorkholding.keywords}
          canonicalUrl={seoData.standardWorkholding.canonicalUrl}
          ogType={seoData.standardWorkholding.ogType}
          ogImage={seoData.standardWorkholding.ogImage}
          structuredData={[productSchema, breadcrumbSchema]}
        />

        {/* Breadcrumb */}
        <div className={`breadcrumb ${showBreadcrumb ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}>
          <div className="container">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/products">Products</Link>
            <span className="separator">/</span>
            <span className="current">Standard Workholding Products</span>
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
              <Link to="/products/mechanical-fixtures" className="back-link">
                View Mechanical Fixtures
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

export default StandardWorkholding;
