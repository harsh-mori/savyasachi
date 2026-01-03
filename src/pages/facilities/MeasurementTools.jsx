import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/common/SEO';
import { seoData, createBreadcrumbSchema } from '../../content/seoData';
import { Link } from 'react-router-dom';
import { siteData } from '../../content/siteData';
import '../SharedPage.css';
import './FacilitiesDetail.css';
import '../VerticalTabs.css';

const MeasurementTools = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
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

  const tools = siteData.measurementTools;
  const activeTool = tools[activeTab];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Facilities", path: "/facilities" },
    { name: "Measurement Tools", path: "/facilities/measurement-tools" }
  ]);

  return (
    <div className="facilities-detail-page">
      <SEO
        title={seoData.measurementTools.title}
        description={seoData.measurementTools.description}
        keywords={seoData.measurementTools.keywords}
        canonicalUrl={seoData.measurementTools.canonicalUrl}
        ogImage={seoData.measurementTools.ogImage}
        structuredData={[breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className={`breadcrumb ${showBreadcrumb ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}>
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/facilities">Facilities</Link>
          <span className="separator">/</span>
          <span className="current">Measurement Tools</span>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="detail-hero measurement-hero"
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
            <p className="measurement-hero-label">Our Facilities</p>
            <h1 className="detail-hero-title">
              <span className="highlight-text">Measurement Tools</span>
            </h1>
            <p className="detail-hero-subtitle">
              High-precision measurement equipment for quality assurance
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vertical Tabs Section */}
      <section className="vertical-tabs-section">
        <div className="container">
          <div className="vertical-tabs-container">
            {/* Vertical Tabs - Desktop */}
            {!isMobile && (
              <motion.div
                className="vertical-tabs-sidebar measurement-tools-sidebar"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="tabs-header">
                  <h3>Our Tools</h3>
                  <div className="tabs-count">{tools.length} Items</div>
                </div>
                <div className="tabs-list">
                  {tools.map((tool, index) => (
                    <button
                      key={tool.id}
                      className={`tab-button ${activeTab === index ? 'active' : ''}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
                      <div className="tab-content">
                        <span className="tab-title">{tool.name}</span>
                        <span className="tab-category">{tool.category}</span>
                      </div>
                      <svg className="tab-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Mobile Dropdown */}
            {isMobile && (
              <motion.div
                className="mobile-tabs-dropdown"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label>Select Tool:</label>
                <div className="professional-dropdown">
                  {/* Selected Value Display */}
                  <button
                    className="dropdown-trigger"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="trigger-content">
                      <span className="trigger-number">{String(activeTab + 1).padStart(2, '0')}</span>
                      <div className="trigger-text">
                        <span className="trigger-title">{tools[activeTab].name}</span>
                        <span className="trigger-category">{tools[activeTab].category}</span>
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
                        {tools.map((tool, index) => (
                          <button
                            key={tool.id}
                            className={`dropdown-option ${activeTab === index ? 'active' : ''}`}
                            onClick={() => {
                              setActiveTab(index);
                              setDropdownOpen(false);
                            }}
                          >
                            <span className="option-number">{String(index + 1).padStart(2, '0')}</span>
                            <div className="option-content">
                              <span className="option-title">{tool.name}</span>
                              <span className="option-category">{tool.category}</span>
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

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="tab-content-area"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Tool Header */}
                <div className="machine-header">
                  <div className="machine-badge">{activeTool.category}</div>
                  <h2 className="machine-title">{activeTool.title}</h2>
                  <div className="tool-range-accuracy">
                    <div className="range-badge">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 8h12M7 3l5 5-5 5" />
                      </svg>
                      Range: {activeTool.range}
                    </div>
                    <div className="accuracy-badge">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="8" cy="8" r="6" />
                        <circle cx="8" cy="8" r="2" />
                      </svg>
                      Accuracy: {activeTool.accuracy}
                    </div>
                  </div>
                  <p className="machine-description">{activeTool.description}</p>
                </div>

                {/* Tool Images */}
                <div className="machine-images">
                  <div className="main-image">
                    <img src={activeTool.image} alt={activeTool.name} />
                  </div>
                </div>

                {/* Specifications */}
                <div className="machine-details-grid">
                  <div className="details-card">
                    <h3 className="details-title">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                      </svg>
                      Technical Specifications
                    </h3>
                    <div className="specs-grid">
                      {activeTool.specifications.map((spec, index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-label">{spec.label}</span>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="details-card">
                    <h3 className="details-title">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Key Features
                    </h3>
                    <ul className="features-list">
                      {activeTool.features.map((feature, index) => (
                        <li key={index}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.2" />
                            <circle cx="8" cy="8" r="3" fill="currentColor" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-card">
                    <h3 className="details-title">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                      Applications
                    </h3>
                    <ul className="applications-list">
                      {activeTool.applications.map((application, index) => (
                        <li key={index}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="back-link-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/facilities/cnc-machines" className="back-link">
              View CNC Machines
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MeasurementTools;


