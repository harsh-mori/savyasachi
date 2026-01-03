import { motion } from 'framer-motion';
import { siteData } from '../../content/siteData';

const ClientsSection = () => {
    return (
        <section className="clients-section">
            <div className="container">
                <motion.div
                    className="section-header-modern"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Our Clients</p>
                    <h2 className="section-title-modern">
                        Trusted by <span className="highlight-text">250+ companies</span>
                    </h2>
                    <p className="subtitle-text">across all engineering sectors</p>
                </motion.div>

                <div className="clients-grid-desktop">
                    {siteData.clients.logos.map((client, index) => (
                        <motion.div
                            key={client.id}
                            className="client-logo-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            <img src={client.image} alt={client.name} loading="lazy" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;

