import { motion } from 'framer-motion';
import { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with animated gradient */}
      <motion.div
        className="card-background"
        animate={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(253, 184, 19, 0.15) 0%, rgba(253, 184, 19, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Border */}
      <motion.div
        className="card-border"
        animate={{
          opacity: isHovered ? 1 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon */}
      <motion.div
        className="service-icon"
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? [0, -5, 5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="icon-wrapper">
          <span className="icon-emoji">{service.icon}</span>
          <motion.div
            className="icon-glow"
            animate={{
              opacity: isHovered ? 0.6 : 0,
              scale: isHovered ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="service-content">
        <motion.h3
          className="service-title"
          animate={{
            color: isHovered ? '#FDB813' : '#fff',
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        <p className="service-description">{service.description}</p>

        {/* Features List */}
        <ul className="service-features">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="feature-item"
            >
              <span className="feature-icon">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          className="service-cta"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Learn More</span>
          <motion.svg
            className="cta-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </motion.button>
      </div>

      {/* Hover Effect - Particles */}
      {isHovered && (
        <div className="card-particles">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="particle-dot"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </div>
      )}

      {/* Number Badge */}
      <div className="card-number">
        <motion.span
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          0{index + 1}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
