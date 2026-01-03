import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackLink = ({ to, children }) => (
    <Link to={to} className="back-link">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {children}
    </Link>
);

const NextLink = ({ to, children }) => (
    <Link to={to} className="back-link">
        {children}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Link>
);

const PageNavigation = ({
    backLink,
    backLabel = 'Back',
    nextLink,
    nextLabel = 'Next'
}) => {
    return (
        <section className="product-navigation">
            <div className="container">
                <motion.div
                    className="back-link-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {backLink && <BackLink to={backLink}>{backLabel}</BackLink>}
                    {nextLink && <NextLink to={nextLink}>{nextLabel}</NextLink>}
                </motion.div>
            </div>
        </section>
    );
};

export default PageNavigation;
