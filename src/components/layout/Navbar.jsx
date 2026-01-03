import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../../content/siteData';
import { useTheme } from '../../hooks';
import { LOGO, BROCHURE_URL } from '../../constants';
import Icon from '../ui/Icon';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [location]);

  const toggleMobileDropdown = (itemId) => {
    setMobileOpenDropdown(prev => prev === itemId ? null : itemId);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src={isDark ? LOGO.dark : LOGO.light}
              alt="Savyasachi Engineering"
              className="company-logo"
            />
          </Link>

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

                {item.hasDropdown && openDropdown === item.id && (
                  <div className="nav-dropdown-menu">
                    <div className="nav-dropdown-content">
                      <Link
                        to={item.path}
                        className={`nav-dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        <div className="dropdown-icon-svg"><Icon name="eye" /></div>
                        <div className="nav-dropdown-text">
                          <div className="nav-dropdown-title">{item.name}</div>
                          <div className="nav-dropdown-desc">Overview of our company</div>
                        </div>
                      </Link>
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          to={dropItem.path}
                          className={`nav-dropdown-item ${location.pathname === dropItem.path ? 'active' : ''}`}
                        >
                          <div className="dropdown-icon-svg"><Icon name={dropItem.icon} /></div>
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

          <div className="navbar-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <Icon name={isDark ? 'sun' : 'moon'} />
            </button>

            {/* <a href={BROCHURE_URL} download>
              <button className="navbar-btn outline-btn">
                <Icon name="download" />
                <span>Download Brochure</span>
              </button>
            </a> */}

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-nav-links">
            {siteData.navigation.map((item) => {
              const isParentActive = item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

              return (
                <div key={item.id} className="mobile-nav-item">
                  {item.hasDropdown ? (
                    <>
                      <div
                        className={`mobile-nav-link ${isParentActive ? 'active' : ''}`}
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
                          className={`mobile-dropdown-item main-page-link ${location.pathname === item.path ? 'active' : ''}`}
                          onClick={closeMobileMenu}
                        >
                          <div className="dropdown-icon-svg"><Icon name="eye" /></div>
                          <div className="mobile-dropdown-text">
                            <div className="mobile-dropdown-title">{item.name}</div>
                          </div>
                        </Link>
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            to={dropItem.path}
                            className={`mobile-dropdown-item ${location.pathname === dropItem.path ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                          >
                            <div className="dropdown-icon-svg"><Icon name={dropItem.icon} /></div>
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
                      className={`mobile-nav-link ${isParentActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mobile-menu-actions">
            {/* <a href={BROCHURE_URL} download>
              <button className="navbar-btn outline-btn">
                <Icon name="download" />
                <span>Download Brochure</span>
              </button>
            </a> */}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
