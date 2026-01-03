import { motion } from 'framer-motion';

const PageHero = ({
    label,
    title,
    highlightedTitle,
    subtitle,
    className = ''
}) => {
    return (
        <motion.section
            className={`detail-hero ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <motion.div
                    className="detail-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {label && <p className="cnc-hero-label">{label}</p>}
                    <h1 className="detail-hero-title">
                        {highlightedTitle ? (
                            <span className="highlight-text">{highlightedTitle}</span>
                        ) : (
                            title
                        )}
                    </h1>
                    {subtitle && <p className="detail-hero-subtitle">{subtitle}</p>}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default PageHero;
