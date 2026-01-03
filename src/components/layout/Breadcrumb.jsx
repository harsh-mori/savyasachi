import { Link } from 'react-router-dom';
import { useScrollVisibility } from '../../hooks';
import './PageComponents.css';

const Breadcrumb = ({ items }) => {
    const isVisible = useScrollVisibility(100);

    return (
        <nav
            className={`breadcrumb ${isVisible ? 'breadcrumb-visible' : 'breadcrumb-hidden'}`}
            aria-label="Breadcrumb"
        >
            <div className="container">
                {items.map((item, idx) => (
                    <span key={item.path || idx}>
                        {idx > 0 && <span className="separator" aria-hidden="true">/</span>}
                        {item.current ? (
                            <span className="current" aria-current="page">{item.label}</span>
                        ) : (
                            <Link to={item.path}>{item.label}</Link>
                        )}
                    </span>
                ))}
            </div>
        </nav>
    );
};

export default Breadcrumb;
