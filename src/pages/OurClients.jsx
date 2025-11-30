import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createBreadcrumbSchema } from '../data/seoData';
import { siteData } from '../data/siteData';
import './PageStyles.css';
import './OurClients.css';

const OurClients = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Clients", path: "/about/clients" }
  ]);

  return (
    <div className="page clients-page">
      <SEO
        title={seoData.clients.title}
        description={seoData.clients.description}
        keywords={seoData.clients.keywords}
        canonicalUrl={seoData.clients.canonicalUrl}
        ogImage={seoData.clients.ogImage}
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <motion.section
        className="clients-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            className="clients-hero-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="clients-hero-label">Our Clients</p>
            <h1 className="clients-hero-title">
              Trusted by <span className="highlight-text">250+ companies</span>
            </h1>
            <p className="clients-hero-subtitle">
              across all engineering sectors
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="clients-content-section">
        <div className="container">
          {/* Introduction */}
          <motion.div
            className="clients-intro"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Trusted by Industry Leaders</h2>
            <p className="section-description">
              Since our inception in 2017, Savyasachi Engineering has had the privilege of serving over 250+ clients across diverse engineering sectors. Our commitment to quality, precision, and timely delivery has earned us the trust of leading companies in aerospace, defense, automotive, and manufacturing industries.
            </p>
          </motion.div>

          {/* Client Logos Grid with Names */}
          <motion.div
            className="clients-showcase"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="clients-grid">
              {siteData.clients.logos.map((client, index) => (
                <motion.div
                  key={client.id}
                  className="client-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  <div className="client-logo-wrapper">
                    <img src={client.image} alt={client.name} />
                  </div>
                  <div className="client-name">{client.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industry Sectors */}
          <motion.div
            className="industries-section"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Industry Sectors We Serve</h2>
            <div className="sectors-grid">
              <div className="sector-card">
                <div className="sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l8 4v7c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4z"/>
                  </svg>
                </div>
                <h3>Aerospace</h3>
                <p>High-precision workholding solutions for aerospace components</p>
              </div>

              <div className="sector-card">
                <div className="sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l8 4v7c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>Defense</h3>
                <p>Specialized fixtures with stringent quality standards</p>
              </div>

              <div className="sector-card">
                <div className="sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z"/>
                    <circle cx="9" cy="9" r="2"/>
                    <circle cx="15" cy="15" r="2"/>
                  </svg>
                </div>
                <h3>Automotive</h3>
                <p>Custom jigs and fixtures for automotive manufacturing</p>
              </div>

              <div className="sector-card">
                <div className="sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="8" width="18" height="12" rx="2"/>
                    <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                  </svg>
                </div>
                <h3>Manufacturing</h3>
                <p>Comprehensive workholding solutions for production</p>
              </div>

              <div className="sector-card">
                <div className="sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3>Precision Engineering</h3>
                <p>Advanced solutions for high-precision applications</p>
              </div>

              <div className="sector-card">
                <div className="sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 9h6v6H9z"/>
                  </svg>
                </div>
                <h3>Industrial Equipment</h3>
                <p>Robust workholding for heavy industrial equipment</p>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            className="why-choose-section"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Why Clients Choose Us</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-number">01</div>
                <div className="benefit-content">
                  <h3>Quality Assurance</h3>
                  <p>100% quality assurance with rigorous testing and inspection</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">02</div>
                <div className="benefit-content">
                  <h3>Timely Delivery</h3>
                  <p>Committed to meeting deadlines without compromising quality</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">03</div>
                <div className="benefit-content">
                  <h3>Custom Solutions</h3>
                  <p>Tailored workholding solutions for specific requirements</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">04</div>
                <div className="benefit-content">
                  <h3>Expert Team</h3>
                  <p>Experienced professionals with 20+ years of expertise</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">05</div>
                <div className="benefit-content">
                  <h3>Competitive Pricing</h3>
                  <p>Best value without compromising quality or performance</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">06</div>
                <div className="benefit-content">
                  <h3>After-Sales Support</h3>
                  <p>Comprehensive support and maintenance services</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="clients-cta-section"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-content">
              <h2 className="cta-heading">Become a Client</h2>
              <p className="cta-description">
                Join our growing list of satisfied clients and experience the difference that precision engineering can make to your manufacturing operations.
              </p>
              <a href="/contact" className="cta-button-primary">
                Get in Touch
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
