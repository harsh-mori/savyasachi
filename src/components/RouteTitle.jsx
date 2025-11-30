import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoData } from '../data/seoData';

// Route to SEO data key mapping
const routeToSeoKey = {
  '/': 'home',
  '/about': 'about',
  '/about/leader': 'leader',
  '/about/clients': 'clients',
  '/facilities': 'facilities',
  '/facilities/cnc-machines': 'cncMachines',
  '/facilities/measurement-tools': 'measurementTools',
  '/products': 'products',
  '/products/mechanical-fixtures': 'mechanicalFixtures',
  '/products/hydraulic-fixtures': 'hydraulicFixtures',
  '/products/turning-fixtures': 'turningFixtures',
  '/products/zero-point-clamping': 'zeroPointClamping',
  '/products/standard-workholding': 'standardWorkholding',
  '/contact': 'contact'
};

/**
 * RouteTitle component - Updates document title INSTANTLY on route change
 * This runs BEFORE lazy-loaded page components render, eliminating title update delays
 *
 * Performance optimization:
 * - Synchronous title update in useEffect
 * - No dependencies on lazy-loaded components
 * - Updates immediately when route changes
 */
const RouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get SEO data key from current route
    const seoKey = routeToSeoKey[pathname];

    // Update title immediately - synchronously, no delays
    if (seoKey && seoData[seoKey]) {
      document.title = seoData[seoKey].title;
    } else {
      // Fallback for unknown routes
      document.title = 'Savyasachi Engineering';
    }
  }, [pathname]);

  return null;
};

export default RouteTitle;
