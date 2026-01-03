import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import { seoData, createBreadcrumbSchema } from '../../content/seoData';
import { siteData } from '../../content/siteData';
import './About.css';

const About = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ]);

  return (
    <div className="about-page-new">
      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        canonicalUrl={seoData.about.canonicalUrl}
        ogImage={seoData.about.ogImage}
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-hero-label">About Us</p>
            <h1 className="about-hero-title">
              Your Partner in <span className="highlight-text">Precision Workholding</span>
            </h1>
            <p className="about-hero-description">
              delivering excellence in engineering since 2017
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
            {/* Left - Image */}
            <motion.div
              className="overview-image-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/images/products/zero-point-clamping/zero-point-clamping-systems-2.png"
                alt="Precision Workholding Fixture"
                className="overview-image"
              />
              <div className="overview-badge">
                <span className="badge-year">2017</span>
                <span className="badge-text">Established</span>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="overview-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="overview-title">Savyasachi Engineering</h2>
              <p className="overview-text">
                <strong>Savyasachi Engineering</strong> is a leading provider of precision workholding solutions. Established in <strong>2017</strong> under the leadership of <strong>Mr. Dharmesh Mori</strong>, who brings over <strong>20 years of experience</strong> in manufacturing and developing precision components.
              </p>
              <p className="overview-text">
                Throughout his career, he has successfully developed components for diverse sectors, including aerospace, defense, automotive, locomotive, valves, and fittings.
              </p>
              <p className="overview-text">
                At Savyasachi, we offer a comprehensive range of workholding solutions catering to various applications and machine types. Over the years, we have successfully served <strong>250+ customers</strong>, including leading industry players.
              </p>

              {/* Industries Text */}
              <div className="industries-section">
                <h3 className="industries-heading">Industries We Serve</h3>
                <p className="industries-text">
                  {siteData.about.industries.join(' • ')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Our Mission</p>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              To provide superior workholding solutions and precision machining services that help our clients achieve their operational goals and stay competitive.
            </p>

            <div className="mission-grid">
              <div className="mission-item">
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mission-text">
                  <h3>High-Quality Solutions</h3>
                  <p>Delivering workholding solutions that exceed industry standards and client expectations</p>
                </div>
              </div>

              <div className="mission-item">
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mission-text">
                  <h3>Advanced Technology</h3>
                  <p>Utilizing state-of-the-art machinery and cutting-edge manufacturing processes</p>
                </div>
              </div>

              <div className="mission-item">
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mission-text">
                  <h3>Expert Craftsmanship</h3>
                  <p>Skilled workforce with decades of combined experience in precision engineering</p>
                </div>
              </div>

              <div className="mission-item">
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mission-text">
                  <h3>Trusted Partnership</h3>
                  <p>Being a reliable partner in machining and manufacturing excellence</p>
                </div>
              </div>

              <div className="mission-item">
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mission-text">
                  <h3>Continuous Innovation</h3>
                  <p>Delivering reliability, efficiency, and innovation in every project</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Our Vision</p>
            <h2 className="section-title">Where We're Heading</h2>
            <p className="section-subtitle">
              To be the most trusted partner in the engineering sector for workholding solutions and precision machining services, known for our quality, innovation, and customer excellence.
            </p>

            <div className="vision-grid">
              <div className="vision-item">
                <div className="vision-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="vision-text">
                  <h3>Set New Benchmarks</h3>
                  <p>Establish industry-leading standards in precision engineering and workholding solutions</p>
                </div>
              </div>

              <div className="vision-item">
                <div className="vision-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="vision-text">
                  <h3>Global Expansion</h3>
                  <p>Expand our reach to international markets and serve clients worldwide</p>
                </div>
              </div>

              <div className="vision-item">
                <div className="vision-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="vision-text">
                  <h3>Lasting Partnerships</h3>
                  <p>Build long-term relationships based on trust, quality, and exceptional service</p>
                </div>
              </div>

              <div className="vision-item">
                <div className="vision-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="vision-text">
                  <h3>Quality Leadership</h3>
                  <p>Be recognized for our unwavering commitment to quality and innovation</p>
                </div>
              </div>

              <div className="vision-item">
                <div className="vision-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="vision-text">
                  <h3>Customer Excellence</h3>
                  <p>Strive for excellence in every customer interaction and project delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
