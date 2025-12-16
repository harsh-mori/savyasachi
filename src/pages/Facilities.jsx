import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createBreadcrumbSchema } from '../data/seoData';
import { Link } from 'react-router-dom';
import './HomeNew.css';
import './Facilities.css';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tabs = [
    { id: 'cnc', label: 'CNC Machines' },
    { id: 'measurement', label: 'Measurement Tools' },
    { id: 'vendor', label: 'Vendor Network' }
  ];

  const tabContent = [
    {
      title: 'CNC Machining Centers',
      description: 'Advanced computer numerical control systems for high-precision machining needs.',
      featuresLabel: 'Our CNC Machines',
      features: [
        'Jyoti DX200 5A',
        'Jyoti VMC 1060',
        'Jyoti VMC 850 4th Axis',
        'Jyoti VMC 850 3rd Axis'
      ],
      image: '/machines/all-machines.png',
      hasExplore: true,
      explorePath: '/facilities/cnc-machines'
    },
    {
      title: 'Measurement Tools',
      description: 'High-precision measurement equipment for quality assurance.',
      featuresLabel: 'Our Measurement Tools',
      features: [
        'Digital Vernier Calliper 0-300mm',
        'Micrometer Set Mitutoyo 0-200mm',
        'Bore Gauge Set 18-150mm',
        'Round Dial Mitutoyo (0.01mm & 0.001mm)',
        'Zero Grade Granite Surface Plate 1000x1000mm',
        'Mitutoyo Pocket Dial & Universal Dial Stand',
        'Digital Height Gauge 600mm'
      ],
      image: '/images/measurement-tools/micrometer.png',
      hasExplore: false,
      explorePath: null
    },
    {
      title: 'Vendor Network',
      description: 'Strong network of vendors for Wire cut, Blackening, and specialized processes.',
      featuresLabel: 'Key Features',
      features: [
        'Wire Cut EDM Services',
        'Blackening & Heat Treatment',
        'Surface Finishing',
        'Specialized Manufacturing Processes'
      ],
      image: '/images/facilities/vendor-network.png',
      hasExplore: false,
      explorePath: null
    }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Facilities", path: "/facilities" }
  ]);

  return (
    <div className="facilities-page">
      <SEO
        title={seoData.facilities.title}
        description={seoData.facilities.description}
        keywords={seoData.facilities.keywords}
        canonicalUrl={seoData.facilities.canonicalUrl}
        ogImage={seoData.facilities.ogImage}
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="facilities-hero">
        <div className="container">
          <motion.div
            className="facilities-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="facilities-hero-label">Our Facilities</p>
            <h1 className="facilities-hero-title">
              State-of-the-Art <span className="highlight-text">Equipment</span>
            </h1>
            <p className="facilities-hero-subtitle">
              Ensuring precision and quality in every product we manufacture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="facilities-tabs-section">
        <div className="container">
          <div className="services-tabs-container">
            {/* Desktop Tabs Navigation */}
            {!isMobile && (
              <div className="tabs-navigation">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`tab-button ${index === activeTab ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile Dropdown Navigation */}
            {isMobile && (
              <motion.div
                className="mobile-dropdown-navigation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label>Select Facility:</label>
                <div className="professional-dropdown">
                  {/* Selected Value Display */}
                  <button
                    className="dropdown-trigger"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="trigger-content">
                      <span className="trigger-number">{String(activeTab + 1).padStart(2, '0')}</span>
                      <div className="trigger-text">
                        <span className="trigger-title">{tabs[activeTab].label}</span>
                      </div>
                    </div>
                    <svg
                      className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dropdown Options */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {tabs.map((tab, index) => (
                          <button
                            key={index}
                            className={`dropdown-option ${activeTab === index ? 'active' : ''}`}
                            onClick={() => {
                              setActiveTab(index);
                              setDropdownOpen(false);
                            }}
                          >
                            <span className="option-number">{String(index + 1).padStart(2, '0')}</span>
                            <div className="option-content">
                              <span className="option-title">{tab.label}</span>
                            </div>
                            {activeTab === index && (
                              <svg className="check-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M15 4.5L6.75 12.75L3 9" stroke="#FDB813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Content Area */}
            <motion.div
              key={activeTab}
              className="tabs-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header with Service Number */}
              <div className="service-header">
                <div className="service-number">{String(activeTab + 1).padStart(2, '0')}</div>
                <h2 className="service-main-title">
                  {tabContent[activeTab].title}
                </h2>
              </div>

              {/* Two Column Layout */}
              <div className="service-layout">
                {/* Left Side - Features List */}
                <div className="features-column">
                  <p className="service-description">
                    {tabContent[activeTab].description}
                  </p>

                  <div className="features-grid">
                    <h3 className="features-title">{tabContent[activeTab].featuresLabel}</h3>
                    <div className="features-items">
                      {tabContent[activeTab].features.map((feature, index) => (
                        <div
                          key={index}
                          className="feature-item"
                        >
                          <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#FDB813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {tabContent[activeTab].hasExplore && (
                    <Link to={tabContent[activeTab].explorePath} className="explore-more-btn">
                      Explore More
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}                </div>

                {/* Right Side - Image */}
                <div className="image-column">
                  <div className="service-image-wrapper">
                    <img
                      src={tabContent[activeTab].image}
                      alt={tabContent[activeTab].title}
                      className="service-image"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
