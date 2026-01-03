import { motion } from 'framer-motion';

const OverviewSection = ({ paragraphs }) => {
    if (!paragraphs || paragraphs.length === 0) return null;

    return (
        <section className="product-overview-section">
            <div className="container">
                <motion.div
                    className="overview-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Overview</h2>
                    {paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="overview-paragraph">{paragraph}</p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OverviewSection;
