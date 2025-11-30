import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import './ServicesTabs.css';

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const services = siteData.services;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="services-tabs-container">
      {/* Desktop Tabs Navigation */}
      {!isMobile && (
        <div className="tabs-navigation">
          {services.map((service, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
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
          <label>Select Service:</label>
          <div className="professional-dropdown">
            {/* Selected Value Display */}
            <button
              className="dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="trigger-content">
                <span className="trigger-number">{String(activeTab + 1).padStart(2, '0')}</span>
                <div className="trigger-text">
                  <span className="trigger-title">{services[activeTab].title}</span>
                </div>
              </div>
              <svg
                className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  {services.map((service, index) => (
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
                        <span className="option-title">{service.title}</span>
                      </div>
                      {activeTab === index && (
                        <svg className="check-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M15 4.5L6.75 12.75L3 9" stroke="#FDB813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      <div className="tabs-content">
        {/* Header with Service Number */}
        <div className="service-header">
          <div className="service-number">{String(activeTab + 1).padStart(2, '0')}</div>
          <h2 className="service-main-title">
            {services[activeTab].title}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="service-layout">
          {/* Left Side - Features List */}
          <div className="features-column">
            <p className="service-description">
              {services[activeTab].description}
            </p>

            <div className="features-grid">
              <h3 className="features-title">Key Features</h3>
              <div className="features-items">
                {services[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item"
                  >
                    <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#FDB813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="image-column">
            <div className="service-image-wrapper">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="service-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
