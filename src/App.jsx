import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, memo } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import RouteTitle from './components/common/RouteTitle';
import './styles/base/app.css';

const Home = lazy(() => import('./pages/home/Home'));
const Contact = lazy(() => import('./pages/contact/Contact'));

const About = lazy(() => import('./pages/about/About'));
const MeetTheLeader = lazy(() => import('./pages/about/MeetTheLeader'));
const OurClients = lazy(() => import('./pages/about/OurClients'));

const Facilities = lazy(() => import('./pages/facilities/Facilities'));
const CNCMachines = lazy(() => import('./pages/facilities/CNCMachines'));
const MeasurementTools = lazy(() => import('./pages/facilities/MeasurementTools'));

const Products = lazy(() => import('./pages/products/Products'));
const MechanicalFixtures = lazy(() => import('./pages/products/MechanicalFixtures'));
const HydraulicFixtures = lazy(() => import('./pages/products/HydraulicFixtures'));
const TurningFixtures = lazy(() => import('./pages/products/TurningFixtures'));
const ZeroPointClamping = lazy(() => import('./pages/products/ZeroPointClamping'));
const StandardWorkholding = lazy(() => import('./pages/products/StandardWorkholding'));

const PageLoader = memo(() => (
  <div className="page-loader" aria-label="Loading page">
    <div className="loader-spinner" />
  </div>
));

PageLoader.displayName = 'PageLoader';

const AppContent = memo(() => (
  <div className="app">
    <Navbar />
    <main className="main-content">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/leader" element={<MeetTheLeader />} />
          <Route path="/about/clients" element={<OurClients />} />

          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/cnc-machines" element={<CNCMachines />} />
          <Route path="/facilities/measurement-tools" element={<MeasurementTools />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/mechanical-fixtures" element={<MechanicalFixtures />} />
          <Route path="/products/hydraulic-fixtures" element={<HydraulicFixtures />} />
          <Route path="/products/turning-fixtures" element={<TurningFixtures />} />
          <Route path="/products/zero-point-clamping" element={<ZeroPointClamping />} />
          <Route path="/products/standard-workholding" element={<StandardWorkholding />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
));

AppContent.displayName = 'AppContent';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RouteTitle />
        <AppContent />
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}

export default App;
