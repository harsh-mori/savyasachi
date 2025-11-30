import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RouteTitle from './components/RouteTitle';
import './App.css';

// Lazy load all page components for better performance
const HomeNew = lazy(() => import('./pages/HomeNew'));
const About = lazy(() => import('./pages/About'));
const MeetTheLeader = lazy(() => import('./pages/MeetTheLeader'));
const OurClients = lazy(() => import('./pages/OurClients'));
const Facilities = lazy(() => import('./pages/Facilities'));
const CNCMachines = lazy(() => import('./pages/CNCMachines'));
const MeasurementTools = lazy(() => import('./pages/MeasurementTools'));
const Products = lazy(() => import('./pages/Products'));
const MechanicalFixtures = lazy(() => import('./pages/MechanicalFixtures'));
const HydraulicFixtures = lazy(() => import('./pages/HydraulicFixtures'));
const TurningFixtures = lazy(() => import('./pages/TurningFixtures'));
const ZeroPointClamping = lazy(() => import('./pages/ZeroPointClamping'));
const StandardWorkholding = lazy(() => import('./pages/StandardWorkholding'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    color: '#FDB813',
    fontSize: '1.125rem',
    fontFamily: 'Zist, Inter, sans-serif'
  }}>
    Loading...
  </div>
);

function AppContent() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomeNew />} />
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
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RouteTitle />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
