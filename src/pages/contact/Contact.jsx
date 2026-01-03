import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import { seoData, createBreadcrumbSchema } from '../../content/seoData';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';
import './Contact.css';
import '../PageStyles.css';

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
            <ContactForm />
            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


