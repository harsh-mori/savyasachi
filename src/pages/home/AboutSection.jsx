import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '../../content/siteData';

const AboutSection = () => {
    return (
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
                    <div className="about-image-column">
                        <div className="about-image-container">
                            <div className="image-wrapper">
                                <img
                                    src="/assets/images/products/zero-point-clamping/zero-point-clamping-systems-2.png"
                                    alt="Precision Workholding Fixture - Savyasachi Engineering"
                                    className="about-image"
                                    loading="lazy"
                                />
                                <div className="image-overlay"></div>
                                <div className="image-badge">
                                    <span className="badge-number">2017</span>
                                    <span className="badge-label">Established</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-text-column">
                        <div className="about-intro">
                            <h3 className="intro-title">Savyasachi Engineering</h3>
                            <p className="intro-lead">A leading manufacturer of high-quality Jigs, Fixtures & Workholding solutions</p>
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
                                    <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

