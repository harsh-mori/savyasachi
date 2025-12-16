import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createBreadcrumbSchema } from '../data/seoData';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './HomeNew.css';
import './FacilitiesDetail.css';
import './VerticalTabs.css';

const CNCMachines = () => {
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

  const machines = siteData.cncMachines;
  const activeMachine = machines[activeTab];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Facilities", path: "/facilities" },
    { name: "CNC Machines", path: "/facilities/cnc-machines" }
  ]);

  return (
    <div className="facilities-detail-page">
      <SEO
        title={seoData.cncMachines.title}
        description={seoData.cncMachines.description}
        keywords={seoData.cncMachines.keywords}
        canonicalUrl={seoData.cncMachines.canonicalUrl}
        ogImage={seoData.cncMachines.ogImage}
        structuredData={[breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className={`breadcrumb ${showBreadcrumb ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}>
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/facilities">Facilities</Link>
          <span className="separator">/</span>
          <span className="current">CNC Machines</span>
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
            <p className="cnc-hero-label">Our Facilities</p>
            <h1 className="detail-hero-title">
              <span className="highlight-text">CNC Machines</span>
            </h1>
            <p className="detail-hero-subtitle">
              Advanced computer numerical control systems for high-precision machining needs
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
                className="vertical-tabs-sidebar cnc-machines-sidebar"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="tabs-header">
                  <h3>Our Machines</h3>
                </div>
                <div className="tabs-list">
                  {machines.map((machine, index) => (
                    <button
                      key={machine.id}
                      className={`tab-button ${activeTab === index ? 'active' : ''}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
                      <div className="tab-content">
                        <span className="tab-title">{machine.name}</span>
                        <span className="tab-category">{machine.category}</span>
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
                <label>Select Machine:</label>
                <div className="professional-dropdown">
                  {/* Selected Value Display */}
                  <button
                    className="dropdown-trigger"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="trigger-content">
                      <span className="trigger-number">{String(activeTab + 1).padStart(2, '0')}</span>
                      <div className="trigger-text">
                        <span className="trigger-title">{machines[activeTab].name}</span>
                        <span className="trigger-category">{machines[activeTab].category}</span>
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
                        {machines.map((machine, index) => (
                          <button
                            key={machine.id}
                            className={`dropdown-option ${activeTab === index ? 'active' : ''}`}
                            onClick={() => {
                              setActiveTab(index);
                              setDropdownOpen(false);
                            }}
                          >
                            <span className="option-number">{String(index + 1).padStart(2, '0')}</span>
                            <div className="option-content">
                              <span className="option-title">{machine.name}</span>
                              <span className="option-category">{machine.category}</span>
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
                {/* Machine Header */}
                <div className="machine-header">
                  <div className="machine-badge">{activeMachine.category}</div>
                  <h2 className="machine-title">{activeMachine.title}</h2>
                  <p className="machine-description">{activeMachine.description}</p>
                </div>

                {/* Machine Images */}
                <div className="machine-images">
                  <div className="main-image">
                    <img src={activeMachine.image} alt={activeMachine.name} />
                  </div>
                </div>

                {/* Key Features and Applications */}
                <div className="machine-details-grid">

                  <div className="details-card">
                    <h3 className="details-title">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Key Features
                    </h3>
                    <ul className="features-list">
                      {activeMachine.features.map((feature, index) => (
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
                      {activeMachine.applications.map((application, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default CNCMachines;
