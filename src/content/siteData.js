import { companyData, contactData } from './company';
import { navigationData, footerData } from './navigation';
import { aboutData } from './about';
import { servicesData } from './services';
import { facilitiesData, cncMachinesData, measurementToolsData } from './facilities';
import { productTabsData, productTabContentData, mechanicalFixturesData, hydraulicFixturesData, turningFixturesData, zeroPointClampingData, standardWorkholdingData } from './products';
import { clientsData } from './clients';

export const siteData = {
  company: companyData,
  contact: contactData,
  navigation: navigationData,
  about: aboutData,
  services: servicesData,
  facilities: facilitiesData,
  cncMachines: cncMachinesData,
  measurementTools: measurementToolsData,
  products: {
    tabs: productTabsData,
    tabContent: productTabContentData
  },
  productDetails: {
    mechanical: mechanicalFixturesData,
    hydraulic: hydraulicFixturesData,
    turning: turningFixturesData,
    zeropoint: zeroPointClampingData,
    standard: standardWorkholdingData
  },
  clients: clientsData,
  footer: footerData,
};

export { companyData, contactData } from './company';
export { navigationData, footerData } from './navigation';
export { aboutData } from './about';
export { servicesData } from './services';
export { facilitiesData, cncMachinesData, measurementToolsData } from './facilities';
export { productTabsData, productTabContentData, mechanicalFixturesData, hydraulicFixturesData, turningFixturesData, zeroPointClampingData, standardWorkholdingData } from './products';
export { clientsData } from './clients';
