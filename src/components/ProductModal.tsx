import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';
import { useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  material: string;
  collection: string;
  image: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center isolate">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-brand-stoneBlack/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-5xl bg-brand-warmWhite h-[90vh] md:h-[80vh] overflow-hidden flex flex-col md:flex-row shadow-2xl mx-4"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-brand-stoneBlack hover:text-brand-softOlive transition-colors bg-brand-warmWhite/50 p-2 rounded-none"
              aria-label="Close modal"
            >
              <X size={24} strokeWidth={1} />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-brand-stone/30 relative overflow-hidden">
              <motion.img 
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto hide-scrollbar p-8 md:p-16 flex flex-col pt-12 md:pt-16">
              <span className="text-[10px] tracking-widest uppercase text-brand-mutedMocha mb-4">{product.collection} • {product.category}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-stoneBlack mb-4">{product.name}</h2>
              <span className="text-xl font-light text-brand-stoneBlack/90 mb-8 border-b border-brand-stone pb-6 block">
                ${product.price}
              </span>

              <p className="text-sm font-light text-brand-stoneBlack/80 leading-relaxed tracking-wide mb-8">
                {product.description}
              </p>

              <div className="mb-12">
                <span className="text-xs uppercase tracking-widest text-brand-stoneBlack font-semibold mb-2 block">Material Focus</span>
                <p className="text-sm font-light text-brand-stoneBlack/80">{product.material}</p>
              </div>

              {/* Mock Size Selector */}
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs uppercase tracking-widest text-brand-stoneBlack font-semibold">Select Size</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-mutedMocha border-b border-transparent hover:border-brand-mutedMocha cursor-pointer transition-colors">Size Guide</span>
                </div>
                <div className="flex gap-4">
                  {['XS', 'S', 'M', 'L'].map((size) => (
                    <button key={size} className="w-12 h-12 border border-brand-stone flex items-center justify-center text-xs hover:border-brand-stoneBlack transition-colors text-brand-stoneBlack font-light uppercase">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-col gap-4">
                <Button variant="primary" className="w-full py-5 text-xs font-semibold">
                  Add to Bag
                </Button>
                <button className="text-[10px] uppercase tracking-widest text-brand-stoneBlack/60 hover:text-brand-stoneBlack transition-colors mt-2 text-center pb-1 border-b border-transparent hover:border-brand-stoneBlack self-center">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
