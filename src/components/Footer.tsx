import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-stoneBlack text-brand-warmWhite pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 border-b border-brand-softCharcoal pb-12 md:pb-16">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-4 md:mb-6 block whitespace-nowrap">
            NØR Form
          </Link>
          <p className="text-brand-greige text-sm max-w-sm tracking-wide leading-relaxed">
            Designed for quiet presence. Clarity in silhouette. Depth in detail.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6 text-brand-paleGrey">Explore</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link to="/collections" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Collections</Link></li>
            <li><Link to="/lookbook" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Lookbook</Link></li>
            <li><Link to="/about" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Story</Link></li>
            <li><Link to="/materials" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Materials</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6 text-brand-paleGrey">Connect</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><a href="#" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Instagram</a></li>
            <li><a href="#" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Pinterest</a></li>
            <li><Link to="/journal" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Journal</Link></li>
            <li><Link to="/contact" className="text-brand-greige hover:text-white transition-colors text-sm tracking-wide">Showroom</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-softCharcoal tracking-widest text-center md:text-left gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p>&copy; {new Date().getFullYear()} NØR FORM. ALL RIGHTS RESERVED.</p>
          <span className="hidden md:inline-block w-1 h-1 bg-brand-softCharcoal rounded-full"></span>
          <p className="text-brand-greige/80">DESIGNED & DEVELOPED BY CAN CESKA</p>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-brand-greige cursor-pointer transition-colors">PRIVACY</span>
          <span className="hover:text-brand-greige cursor-pointer transition-colors">TERMS</span>
        </div>
      </div>
    </footer>
  );
}
