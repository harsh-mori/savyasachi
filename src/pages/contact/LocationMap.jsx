import { motion } from 'framer-motion';

const LocationMap = () => {
    return (
        <motion.div
            className="contact-map-container"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
        >
            <div className="map-header">
                <h2 className="map-title">Find Us Here</h2>
                <p className="map-subtitle">Visit our facility for a tour or consultation</p>
            </div>

            <div className="google-map-wrapper">
                <iframe
                    title="Savyasachi Engineering Location"
                    src="https://www.google.com/maps?q=Savyasachi+Engineering,+Street+2,+Near+Kishan+Petrol+Pump,+Rajkot+Gondal+Highway,+Rajkot,+Gujarat+360003,+India&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '16px', minHeight: '400px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </motion.div>
    );
};

export default LocationMap;
