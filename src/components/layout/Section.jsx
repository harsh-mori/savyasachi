import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const Section = ({
    title,
    children,
    className = '',
    animate = true
}) => {
    const Wrapper = animate ? motion.div : 'div';
    const wrapperProps = animate ? fadeInUp : {};

    return (
        <section className={`page-section ${className}`}>
            <div className="container">
                {title && (
                    <motion.h2
                        className="section-title"
                        {...fadeInUp}
                    >
                        {title}
                    </motion.h2>
                )}
                <Wrapper {...wrapperProps}>
                    {children}
                </Wrapper>
            </div>
        </section>
    );
};

export default Section;
