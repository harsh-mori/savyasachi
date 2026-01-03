import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '../../content/siteData';

const FacilitiesSection = () => {
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
            setActiveFacility(prev => prev < siteData.facilities.length - 1 ? prev + 1 : 0);
        }
        if (isRightSwipe) {
            setActiveFacility(prev => prev > 0 ? prev - 1 : siteData.facilities.length - 1);
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    const handleNext = () => {
        setActiveFacility(prev => prev < siteData.facilities.length - 1 ? prev + 1 : 0);
    };

    return (
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

                    <div
                        className="facility-content-area"
                        onTouchStart={isMobile ? handleTouchStart : undefined}
                        onTouchMove={isMobile ? handleTouchMove : undefined}
                        onTouchEnd={isMobile ? handleTouchEnd : undefined}
                    >
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
                                loading="lazy"
                            />
                        </div>

                        {isMobile && (
                            <div className="mobile-carousel-navigation">
                                <button
                                    className="carousel-nav-btn prev"
                                    onClick={() => setActiveFacility(prev => prev > 0 ? prev - 1 : siteData.facilities.length - 1)}
                                    aria-label="Previous facility"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M13 3l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    className="carousel-nav-btn next"
                                    onClick={handleNext}
                                    aria-label="Next facility"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FacilitiesSection;

