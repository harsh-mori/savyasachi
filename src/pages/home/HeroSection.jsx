import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../SharedPage.css';

const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-video-container">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="/assets/media/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="title-primary">Precision</span> <span className="title-highlight">Workholding</span>
                        <br />
                        <span className="title-secondary">Solutions for Excellence</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Leading manufacturer of precision <strong>Jigs, Fixtures</strong>, and Workholding solutions for aerospace, defense and automotive industries.
                        Engineering excellence since 2017.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link to="/contact">
                            <button className="hero-btn primary">
                                <span>Get Started</span>
                                <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="hero-btn secondary">
                                <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <span>Scroll to explore</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;

