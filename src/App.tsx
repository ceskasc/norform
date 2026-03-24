import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Lookbook from './pages/Lookbook';
import About from './pages/About';
import Materials from './pages/Materials';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="lookbook" element={<Lookbook />} />
          <Route path="about" element={<About />} />
          <Route path="materials" element={<Materials />} />
          <Route path="journal" element={<Journal />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
      {/* Subtle film grain overlay */}
      <div className="grain-overlay mix-blend-overlay"></div>
    </Router>
  );
}

export default App;
