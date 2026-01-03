import { motion } from 'framer-motion';
import ImageGallery from '../common/ImageGallery';

const GallerySection = ({ title = 'Product Gallery', images }) => {
    if (!images || images.length === 0) return null;

    return (
        <section className="product-gallery-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>
                <ImageGallery images={images} />
            </div>
        </section>
    );
};

export default GallerySection;
