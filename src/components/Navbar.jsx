import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './Navbar.css';

// Professional Icon Component
const Icon = ({ name }) => {
  const icons = {
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22V12h6v10M9 6h.01M9 10h.01M15 6h.01M15 10h.01" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    history: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    handshake: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5l-8 8 3 3 5-5 5 5 3-3-8-8z" />
        <path d="M8 12l-3 3m10-3l3 3" />
      </svg>
    ),
    wrench: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    ruler: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.42 8.58L12 18l-9.42-9.42L12 3l9.42 9.42zM12 18V6m-6 6l12-12" />
      </svg>
    ),
    box: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  };

  return <div className="dropdown-icon-svg">{icons[name] || icons.building}</div>;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  // Handle theme change in effect
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [location]);

  const toggleMobileDropdown = (itemId) => {
    setMobileOpenDropdown(mobileOpenDropdown === itemId ? null : itemId);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={theme === 'dark' ? "https://savya-sachi.com/wp-content/uploads/2024/12/logo2.svg" : "https://savya-sachi.com/wp-content/uploads/2024/12/logo.svg"} alt="Savyasachi Engineering" className="company-logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {siteData.navigation.map((item) => (
              <div
                key={item.id}
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.id)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="dropdown-icon" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.id && (
                  <div className="nav-dropdown-menu">
                    <div className="nav-dropdown-content">
                      {/* Main About Us Link */}
                      <Link
                        to={item.path}
                        className="nav-dropdown-item"
                      >
                        <Icon name="eye" />
                        <div className="nav-dropdown-text">
                          <div className="nav-dropdown-title">{item.name}</div>
                          <div className="nav-dropdown-desc">Overview of our company</div>
                        </div>
                      </Link>
                      {/* Dropdown Items */}
                      {item.dropdownItems?.map((dropItem, index) => (
                        <Link
                          key={index}
                          to={dropItem.path}
                          className="nav-dropdown-item"
                        >
                          <Icon name={dropItem.icon} />
                          <div className="nav-dropdown-text">
                            <div className="nav-dropdown-title">{dropItem.title}</div>
                            <div className="nav-dropdown-desc">{dropItem.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="navbar-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                // Moon icon for Light Mode (to switch to dark)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                // Sun icon for Dark Mode (to switch to light)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>

            <a href="/brochure.pdf" download>
              <button className="navbar-btn outline-btn">
                <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-nav-links">
            {siteData.navigation.map((item) => (
              <div key={item.id} className="mobile-nav-item">
                {item.hasDropdown ? (
                  <>
                    <div
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => toggleMobileDropdown(item.id)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`mobile-dropdown-arrow ${mobileOpenDropdown === item.id ? 'open' : ''}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={`mobile-dropdown ${mobileOpenDropdown === item.id ? 'open' : ''}`}>
                      <Link
                        to={item.path}
                        className="mobile-dropdown-item main-page-link"
                      >
                        <Icon name="eye" />
                        <div className="mobile-dropdown-text">
                          <div className="mobile-dropdown-title">{item.name}</div>
                        </div>
                      </Link>
                      {item.dropdownItems?.map((dropItem, index) => (
                        <Link
                          key={index}
                          to={dropItem.path}
                          className="mobile-dropdown-item"
                        >
                          <Icon name={dropItem.icon} />
                          <div className="mobile-dropdown-text">
                            <div className="mobile-dropdown-title">{dropItem.title}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a href="/brochure.pdf" download>
              <button className="navbar-btn outline-btn">
                <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
