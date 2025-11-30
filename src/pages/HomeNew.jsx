import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, organizationSchema, localBusinessSchema, websiteSchema } from '../data/seoData';
import { siteData } from '../data/siteData';
import './HomeNew.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import ServicesTabs from '../components/ServicesTabs';

const HomeNew = () => {
  const videoRef = useRef(null);
  const [activeFacility, setActiveFacility] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - go to next
      setActiveFacility(prev => prev < siteData.facilities.length - 1 ? prev + 1 : 0);
    }
    if (isRightSwipe) {
      // Swipe right - go to previous
      setActiveFacility(prev => prev > 0 ? prev - 1 : siteData.facilities.length - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleNext = () => {
    setActiveFacility(prev => prev < siteData.facilities.length - 1 ? prev + 1 : 0);
  };

  useEffect(() => {
    if (videoRef.current) {
      // Set video to 70% speed for better visibility
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="home-new">
      <SEO
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonicalUrl={seoData.home.canonicalUrl}
        ogImage={seoData.home.ogImage}
        structuredData={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        {/* Floating gradient shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="title-primary">Precision</span> <span className="title-highlight">Workholding</span>
              <br />
              <span className="title-secondary">Solutions for Excellence</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Leading provider of precision workholding solutions for aerospace, defense, and automotive industries.
              Engineering excellence since 2017.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link to="/contact">
                <button className="hero-btn primary">
                  <span>Get Started</span>
                  <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
              <Link to="/about">
                <button className="hero-btn secondary">
                  <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Learn More</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">About Us</p>
            <h2 className="section-title-modern">
              We have served <span className="highlight-text">250+ clients</span>
            </h2>
            <p className="subtitle-text">across various engineering sectors</p>
          </motion.div>

          <motion.div
            className="about-content-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* LEFT - Image */}
            <div className="about-image-column">
              <div className="about-image-container">
                <div className="image-wrapper">
                  <img
                    src="/images/about/workholding-fixture.jpg"
                    alt="Precision Workholding Fixture - Savyasachi Engineering"
                    className="about-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="image-badge">
                    <span className="badge-number">2017</span>
                    <span className="badge-label">Established</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Text and Chips */}
            <div className="about-text-column">
              <div className="about-intro">
                <h3 className="intro-title">Savyasachi Engineering</h3>
                <p className="intro-lead">A leading provider of precision workholding solutions</p>
              </div>

              <div className="about-description">
                <p>
                  Established in 2017 under the leadership of <Link to="/about/leader" className="founder-link"><strong>Mr. Dharmesh Mori</strong></Link>, who has over 20+ years of experience in manufacturing and developing precision components. During his tenure, he has developed components for diverse sectors like aerospace, defense, automotive, locomotive valves and fittings etc.
                </p>
                <p>
                  At Savyasachi, we offer all types of workholding solutions with a wide range of applications and machines.
                </p>
              </div>

              <div className="about-industries">
                <h4 className="industries-title">Industries We Serve</h4>
                <div className="industries-chips">
                  {siteData.about.industries.map((industry, index) => (
                    <div key={index} className="industry-chip">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-cta">
                <Link to="/about" className="about-link">
                  Learn More About Us
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Product & Services</p>
            <h2 className="section-title-modern">
              <span className="highlight-text">Comprehensive solutions</span>
            </h2>
            <p className="subtitle-text">At Savyasachi Engineering, we provide a comprehensive range of high-quality products and services tailored to meet the diverse needs of valued customers.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServicesTabs />
          </motion.div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/products" className="services-link">
              Explore More Products & Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Our Facilities</p>
            <h2 className="section-title-modern">
              <span className="highlight-text">State-of-the-art equipment</span>
            </h2>
            <p className="subtitle-text">At Savyasachi Engineering, we are equipped with state-of-the-art facilities to ensure precision and quality in our products</p>
          </motion.div>

          <motion.div
            className="facilities-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Vertical Tabs - Desktop Only */}
            {!isMobile && (
              <div className="facilities-tabs">
                {siteData.facilities.map((facility, index) => (
                  <button
                    key={index}
                    className={`facility-tab ${index === activeFacility ? 'active' : ''}`}
                    onClick={() => setActiveFacility(index)}
                  >
                    {facility.title}
                  </button>
                ))}
              </div>
            )}

            {/* Content Area */}
            <div
              className="facility-content-area"
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              {/* Mobile Carousel Navigation */}
              {isMobile && (
                <div className="mobile-carousel-dots">
                  {siteData.facilities.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === activeFacility ? 'active' : ''}`}
                      onClick={() => setActiveFacility(index)}
                      aria-label={`View facility ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              <div className="facility-text-content">
                <div className="facility-header">
                  <span className="facility-number">{String(activeFacility + 1).padStart(2, '0')}</span>
                  <h3 className="facility-title">{siteData.facilities[activeFacility].title}</h3>
                </div>
                <p className="facility-description">{siteData.facilities[activeFacility].description}</p>
              </div>

              <div className="facility-image-wrapper">
                <img
                  src={siteData.facilities[activeFacility].image}
                  alt={siteData.facilities[activeFacility].title}
                  className="facility-image"
                />
              </div>

              {/* Mobile Navigation Buttons */}
              {isMobile && (
                <div className="mobile-carousel-navigation">
                  <button
                    className="carousel-nav-btn prev"
                    onClick={() => setActiveFacility(prev => prev > 0 ? prev - 1 : siteData.facilities.length - 1)}
                    aria-label="Previous facility"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13 3l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    className="carousel-nav-btn next"
                    onClick={handleNext}
                    aria-label="Next facility"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="facilities-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/facilities" className="facilities-link">
              Explore More Facilities
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Our Clients</p>
            <h2 className="section-title-modern">
              Trusted by <span className="highlight-text">250+ companies</span>
            </h2>
            <p className="subtitle-text">across all engineering sectors</p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="clients-grid-desktop">
            {siteData.clients.logos.map((client, index) => (
              <motion.div
                key={client.id}
                className="client-logo-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <img src={client.image} alt={client.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeNew;
