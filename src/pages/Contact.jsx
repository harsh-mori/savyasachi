import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData, createBreadcrumbSchema } from '../data/seoData';
import { siteData } from '../data/siteData';
import './PageStyles.css';
import './Contact.css';

const Contact = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ]);

  return (
    <div className="page contact-page">
      <SEO
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
        canonicalUrl={seoData.contact.canonicalUrl}
        ogImage={seoData.contact.ogImage}
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="contact-hero-label">Get In Touch</p>
            <h1 className="contact-hero-title">
              Let's discuss your <span className="highlight-text">precision engineering</span> needs
            </h1>
            <p className="contact-hero-subtitle">
              reach out and we'll help your project succeed
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Form and Map Section */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-content-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us more about your requirements..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </motion.button>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="contact-map-container"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="map-header">
                <h2 className="map-title">Find Us Here</h2>
                <p className="map-subtitle">Visit our facility for a tour or consultation</p>
              </div>

              <div className="google-map-wrapper">
                <iframe
                  title="Savyasachi Engineering Location"
                  src="https://www.google.com/maps?q=Global+Industrial+Park,+Rajkot-Gondal+Highway,+Rajkot,+Gujarat,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="map-info-card">
                <div className="map-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="map-info-title">Business Hours</p>
                  <p className="map-info-text">Monday - Tuesday: Open 24 hours</p>
                  <p className="map-info-text">Wednesday: Closed</p>
                  <p className="map-info-text">Thursday - Sunday: Open 24 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
