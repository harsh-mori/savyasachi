import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '../../content/siteData';
import { LOGO, SOCIAL_LINKS } from '../../constants';
import Icon from '../ui/Icon';
import '../../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: SOCIAL_LINKS.linkedin,
      icon: 'linkedin',
      description: 'Connect with us',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={LOGO.dark} alt="Savyasachi Engineering" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">{siteData.company.tagline}</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                {siteData.footer.links.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-list">
                <li>
                  <a href={`tel:${siteData.contact.phone}`}>{siteData.contact.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Address</h4>
              <address className="footer-address">
                {siteData.contact.address.street}<br />
                {siteData.contact.address.landmark}<br />
                {siteData.contact.address.city}, {siteData.contact.address.state}<br />
                {siteData.contact.address.country}
              </address>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <motion.h3
            className="footer-social-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Follow Us
          </motion.h3>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-card ${social.name.toLowerCase()}`}
              >
                <div className="social-icon-wrapper">
                  <Icon name={social.icon} className="social-icon" />
                </div>
                <div className="social-content">
                  <span className="social-label">{social.name}</span>
                  <span className="social-desc">{social.description}</span>
                </div>
                <div className="social-arrow">→</div>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {siteData.company.name}. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="footer-glow" aria-hidden="true" />
    </footer>
  );
};

export default Footer;

