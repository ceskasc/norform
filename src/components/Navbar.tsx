import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-luxury ${
          isScrolled ? 'bg-brand-warmWhite/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <nav className="hidden md:flex gap-8 items-center w-1/3">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide hover:text-brand-softOlive transition-colors duration-500 ease-slow"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex md:hidden items-center w-1/3">
            <button
              className="z-50 text-brand-stoneBlack relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>

          <div className="w-1/3 flex justify-center">
             <Link to="/" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest uppercase whitespace-nowrap">
              NØR FORM
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 items-center justify-end w-1/3">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide hover:text-brand-softOlive transition-colors duration-500 ease-slow"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="text-sm font-medium tracking-wide hover:text-brand-softOlive transition-colors duration-500 ease-slow ml-4">
              Visit
            </Link>
          </nav>
          
          <div className="md:hidden w-1/3"></div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-30 bg-brand-warmWhite flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-3xl font-serif tracking-widest uppercase hover:text-brand-softOlive transition-colors duration-500 ease-slow"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/materials"
                className="text-3xl font-serif tracking-widest uppercase hover:text-brand-softOlive transition-colors duration-500 ease-slow"
              >
                Materials
              </Link>
              <Link
                to="/contact"
                className="text-3xl font-serif tracking-widest uppercase hover:text-brand-softOlive transition-colors duration-500 ease-slow"
              >
                Contact
              </Link>
            </div>
            
            <div className="absolute bottom-12 text-sm text-brand-mutedMocha tracking-widest opacity-70">
              QUIET LUXURY. REFINED.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
