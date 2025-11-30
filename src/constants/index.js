/**
 * Global constants for the application
 * Single source of truth for commonly used values
 */

// Responsive breakpoints (in pixels)
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  largeDesktop: 1920
};

// Scroll thresholds (in pixels)
export const SCROLL_THRESHOLDS = {
  breadcrumb: 100,
  header: 50,
  backToTop: 300
};

// Animation durations (in seconds)
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  medium: 0.3,
  normal: 0.6,
  slow: 0.8
};

// Z-index layers
export const Z_INDEX = {
  base: 1,
  dropdown: 100,
  header: 1000,
  modal: 9999,
  lightbox: 9999,
  tooltip: 10000
};

// Theme colors
export const COLORS = {
  primary: '#FDB813',
  primaryDark: '#e5a50f',
  primaryLight: '#ffd700',
  dark: '#1a1a1a',
  white: '#ffffff',
  gray: '#6b7280',
  lightGray: '#e5e7eb',
  error: '#ef4444'
};

// Contact information
export const CONTACT = {
  phone: '+91 81558 82225',
  email: 'info@savya-sachi.com',
  address: 'Street 2, Global Industrial Park, Near Kishan Petrol pump, Rajkot - Gondal Highway, Gujarat 360004, India'
};

// Social media links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/savya-sachi-engineering'
};

// Company information
export const COMPANY = {
  name: 'Savyasachi Engineering',
  foundingYear: 2017,
  founder: 'Mr. Dharmesh Mori'
};

// Typography hierarchy - Section Label > Title > Subtitle
export const TYPOGRAPHY = {
  sectionLabel: {
    desktop: '2.75rem',    // 44px - Largest
    tablet: '2rem',        // 32px
    mobile: '1.75rem'      // 28px
  },
  title: {
    desktop: '2rem',       // 32px - Medium
    tablet: '1.75rem',     // 28px
    mobile: '1.5rem'       // 24px
  },
  subtitle: {
    desktop: '1.125rem',   // 18px - Smallest
    tablet: '1.0625rem',   // 17px
    mobile: '1rem'         // 16px
  },
  body: {
    desktop: '1rem',       // 16px - Regular text
    tablet: '1rem',
    mobile: '0.9375rem'    // 15px
  }
};
