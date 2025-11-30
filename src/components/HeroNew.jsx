import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './HeroNew.css';

const HeroNew = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    {
      title: "Precision Engineering",
      subtitle: "Redefining Manufacturing Excellence",
      image: "precision",
    },
    {
      title: "Advanced Workholding",
      subtitle: "Innovation Meets Precision",
      image: "workholding",
    },
    {
      title: "Industry 4.0 Ready",
      subtitle: "Future of Manufacturing",
      image: "industry4",
    },
  ];

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-new" ref={containerRef}>
      {/* 3D Background Layers */}
      <div className="hero-layers">
        {/* Layer 1 - Far background */}
        <motion.div
          className="hero-layer layer-1"
          style={{
            x: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]),
            y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
          }}
        >
          <div className="geometric-shapes">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="shape"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${(i % 5) * 25}%`,
                  top: `${Math.floor(i / 5) * 33}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Layer 2 - Mid ground with mesh grid */}
        <motion.div
          className="hero-layer layer-2"
          style={{
            x: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
            y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]),
          }}
        >
          <div className="mesh-grid">
            <svg viewBox="0 0 1200 800" className="grid-svg">
              <defs>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDB813" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FDB813" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[...Array(20)].map((_, i) => (
                <motion.line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 40}
                  x2="1200"
                  y2={i * 40}
                  stroke="url(#grid-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              ))}
              {[...Array(30)].map((_, i) => (
                <motion.line
                  key={`v-${i}`}
                  x1={i * 40}
                  y1="0"
                  x2={i * 40}
                  y2="800"
                  stroke="url(#grid-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Layer 3 - Foreground particles */}
        <motion.div
          className="hero-layer layer-3"
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        >
          <div className="particles-3d">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="particle-3d"
                animate={{
                  y: [0, -200, 0],
                  x: [0, Math.sin(i) * 100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="hero-content-new"
        style={{ y, opacity, scale }}
      >
        <div className="hero-container-new">
          {/* Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="slide-content"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -50, rotateX: 15 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              {/* Mega Title */}
              <motion.h1 className="hero-mega-title">
                {slides[currentSlide].title.split(' ').map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="title-word"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle with glitch effect */}
              <motion.div className="hero-subtitle-new">
                <span className="subtitle-text">{slides[currentSlide].subtitle}</span>
                <span className="subtitle-glitch" aria-hidden="true">
                  {slides[currentSlide].subtitle}
                </span>
                <span className="subtitle-glitch" aria-hidden="true">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Stats with 3D cards */}
              <div className="stats-3d">
                {siteData.hero.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card-3d"
                    initial={{ opacity: 0, z: -100, rotateY: -90 }}
                    animate={{ opacity: 1, z: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                    whileHover={{
                      rotateY: 10,
                      rotateX: 10,
                      z: 50,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="stat-face-front">
                      <motion.div
                        className="stat-number-3d"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.15, type: "spring" }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="stat-label-3d">{stat.label}</div>
                    </div>
                    <div className="stat-glow-3d" />
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons with magnetic effect */}
              <MagneticButton />
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="indicator-progress"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 5 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator with animation */}
      <motion.div
        className="scroll-indicator-new"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-mouse-new">
          <motion.div
            className="scroll-wheel-new"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span className="scroll-text-new">Discover More</span>
      </motion.div>
    </section>
  );
};

// Magnetic Button Component
const MagneticButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="cta-buttons-magnetic">
      <Link to="/contact">
        <motion.button
          ref={buttonRef}
          className="magnetic-btn primary"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-text">Get Started</span>
          <motion.div
            className="btn-glow"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <svg className="btn-arrow" viewBox="0 0 24 24">
            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </Link>

      <Link to="/products">
        <motion.button
          className="magnetic-btn secondary"
          whileHover={{ scale: 1.05, borderColor: "#FDB813" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-text">Explore Products</span>
        </motion.button>
      </Link>
    </div>
  );
};

export default HeroNew;
