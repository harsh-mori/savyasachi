import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoData } from "../../content/seoData";

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

const RouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seoKey = routeToSeoKey[pathname];
    document.title = seoKey && seoData[seoKey]
      ? seoData[seoKey].title
      : 'Savyasachi Engineering';
  }, [pathname]);

  return null;
};

export default RouteTitle;
