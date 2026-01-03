import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import { seoData, personSchema, createBreadcrumbSchema } from '../../content/seoData';
import './Leader.css';

const MeetTheLeader = () => {
  const skills = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'CNC Programming' },
    { id: 3, name: 'Precision Machining' },
    { id: 4, name: 'Fixture Development' },
    { id: 5, name: 'Management' },
    { id: 6, name: 'Complex Projects' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Meet the Leader", path: "/about/leader" }
  ]);

  return (
    <div className="leader-page">
      <SEO
        title={seoData.leader.title}
        description={seoData.leader.description}
        keywords={seoData.leader.keywords}
        canonicalUrl={seoData.leader.canonicalUrl}
        ogType={seoData.leader.ogType}
        ogImage={seoData.leader.ogImage}
        structuredData={[personSchema, breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="leader-hero">
        <div className="container">
          <motion.div
            className="leader-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="leader-hero-label">Meet the Leader</p>
            <h1 className="leader-hero-title">
              <span className="highlight-text">Dharmesh Mori</span>
            </h1>
            <p className="leader-hero-subtitle">
              Managing Director • 20+ Years of Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="leader-profile-section">
        <div className="container">
          <div className="profile-grid">
            {/* Left - Image */}
            <motion.div
              className="profile-image-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/images/leader.png"
                alt="Mr. Dharmesh Mori"
                className="profile-image"
              />
              <div className="profile-badge">
                <span className="badge-year">2017</span>
                <span className="badge-text">Established</span>
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              className="profile-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="profile-name">Mr. Dharmesh Mori</h2>
              <p className="profile-position">Managing Director</p>

              <div className="profile-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <span className="detail-label">Experience</span>
                    <span className="detail-value">20+ years in precision engineering</span>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">Rajkot, Gujarat, India</span>
                  </div>
                </div>

              </div>

              <a
                href="https://www.linkedin.com/in/dharmesh-mori-a2b0931b3/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                View LinkedIn Profile
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About/Bio Section */}
      <section className="leader-bio-section">
        <div className="container">
          <motion.div
            className="bio-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About the Leader</p>
            <h2 className="section-title">Leadership Excellence</h2>

            <div className="bio-text">
              <p>
                The company is established in the year of 2017 at Rajkot under leadership of <strong>Mr. Dharmesh Mori</strong>.
                As a Leader he has <strong>20+ year core Experience</strong> of Develop components for Automotive, Aerospace,
                Railway, and defense and General Engineering sectors.
              </p>
              <p>
                We are involves in design and manufacturing work holding solutions for all types of component and machining
                methods, We manufacturing components from various sectors as per customer drawing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="leader-skills-section">
        <div className="container">
          <motion.div
            className="skills-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Core Expertise</p>
            <h2 className="section-title">Professional Skills</h2>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="skill-name">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision/Quote Section */}
      <section className="leader-vision-section">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vision-quote-card">
              <div className="quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              <blockquote className="vision-quote">
                Savyasachi Engineering strives to achieve enhanced customer satisfaction by delivering quality
                product through timely completion with safe working environment. We dedicate ourselves for
                continual improvement in all fields of our business.
              </blockquote>
              <p className="quote-author">Words from the CEO</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheLeader;


