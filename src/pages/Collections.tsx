import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProductModal from '../components/ProductModal';
import { mockProducts, mockCollections } from '../data/mockData';

export default function Collections() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="w-full min-h-screen bg-brand-warmWhite pt-12 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <AnimatedSection className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-stoneBlack mb-6">Collections</h1>
          <p className="text-brand-mutedMocha text-sm md:text-base max-w-lg mx-auto tracking-wide text-balance">
            A continuous study of form, utility, and refined aesthetics. Designed to transcend seasonal shifts.
          </p>
        </AnimatedSection>

        {/* Categories / Filter placeholder */}
        <AnimatedSection className="flex flex-wrap justify-center gap-8 mb-24 cursor-default">
          <span className="text-xs uppercase tracking-widest text-brand-stoneBlack border-b border-brand-stoneBlack pb-1">All</span>
          <span className="text-xs uppercase tracking-widest text-brand-mutedMocha hover:text-brand-stoneBlack transition-colors">Outerwear</span>
          <span className="text-xs uppercase tracking-widest text-brand-mutedMocha hover:text-brand-stoneBlack transition-colors">Tailoring</span>
          <span className="text-xs uppercase tracking-widest text-brand-mutedMocha hover:text-brand-stoneBlack transition-colors">Knitwear</span>
        </AnimatedSection>

        {/* Full Collection Render */}
        {mockCollections.map((collection, cIndex) => (
          <div key={collection.id} className="mb-32">
            
            {/* Collection Title */}
            <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-stone pb-6">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-brand-mutedMocha mb-2 block">Series 0{cIndex + 1}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-stoneBlack">{collection.name}</h2>
              </div>
              <p className="text-sm font-light text-brand-stoneBlack/80 max-w-md md:text-right mt-4 md:mt-0 text-balance">
                {collection.description}
              </p>
            </AnimatedSection>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              {mockProducts.filter(p => p.collection === collection.name || cIndex === 0).map((product, pIndex) => (
                <AnimatedSection key={`${product.id}-${cIndex}`} delay={pIndex * 0.1}>
                  <div onClick={() => setSelectedProduct(product)} className="group block cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-offWhite mb-6">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                      <div className="absolute inset-0 bg-brand-stoneBlack/0 group-hover:bg-brand-stoneBlack/5 transition-colors duration-700 ease-slow flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-brand-warmWhite tracking-widest text-[10px] uppercase font-medium bg-brand-stoneBlack/60 px-6 py-3 transition-opacity duration-500 ease-slow">
                          Quick View
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl text-brand-stoneBlack">{product.name}</h3>
                        <span className="text-sm font-light text-brand-stoneBlack">${product.price}</span>
                      </div>
                      <p className="text-sm text-brand-mutedMocha font-light truncate">{product.material}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
          </div>
        ))}
      </div>
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
