import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServicesTabs from '../../components/sections/ServicesTabs';

const ServicesSection = () => {
    return (
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
                        <span className="highlight-text">Precision Jigs & Fixtures</span>
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
                            <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;

