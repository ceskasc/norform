import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import ProductModal from '../components/ProductModal';
import { mockProducts, mockCollections } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="w-full flex flex-col bg-brand-warmWhite">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Image - Slow scale effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-brand-stoneBlack/30 z-10 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2670&auto=format&fit=crop" 
            alt="NØR FORM Editorial" 
            className="w-full h-full object-cover object-[center_20%]"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="overflow-hidden"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-warmWhite tracking-normal leading-[1.1] mb-6 shadow-sm">
              Quiet Presence.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-brand-ivory text-sm md:text-base max-w-md font-light tracking-wide mb-10 text-balance"
          >
            Refined essentials for a slower rhythm. Clarity in silhouette. Depth in detail.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/collections">
              <Button variant="primary" className="bg-brand-warmWhite text-brand-stoneBlack hover:bg-brand-stone hover:text-brand-stoneBlack px-10 py-4 w-full">
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-brand-warmWhite text-brand-warmWhite hover:bg-brand-warmWhite hover:text-brand-stoneBlack px-10 py-4 w-full bg-brand-stoneBlack/10">
                Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MANIFESTO / ABOUT TEASER */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-brand-warmWhite flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
        <AnimatedSection className="w-full lg:w-1/2 flex flex-col items-start pr-0 md:pr-12">
          <span className="text-xs uppercase tracking-widest text-brand-mutedMocha mb-8">Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-brand-stoneBlack text-balance mb-12">
            Design that doesn't shout. Form, texture, and restraint woven into every fiber.
          </h2>
          <Link to="/about" className="group flex items-center gap-4 text-xs tracking-widest uppercase font-medium border-b border-brand-stoneBlack pb-1 hover:text-brand-softOlive hover:border-brand-softOlive transition-colors duration-500">
            Read the Manifesto
            <span className="transform group-hover:translate-x-2 transition-transform duration-500">→</span>
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1287&auto=format&fit=crop" 
            alt="Minimalist design" 
            className="w-full h-full object-cover"
          />
        </AnimatedSection>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-24 px-6 md:px-12 bg-brand-offWhite">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-stoneBlack">Recent Additions</h2>
              <p className="text-brand-mutedMocha mt-4 text-sm tracking-wide">The latest studies in form and material.</p>
            </div>
            <Link to="/collections" className="text-xs tracking-widest uppercase font-medium border-b border-brand-stoneBlack pb-1 hover:text-brand-softOlive transition-colors">
              View All Pieces
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {mockProducts.slice(0, 3).map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <div onClick={() => setSelectedProduct(product)} className="group block cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-brand-stone/30 mb-6">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-stoneBlack/0 group-hover:bg-brand-stoneBlack/5 transition-colors duration-700 ease-slow flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-brand-warmWhite tracking-widest text-[10px] uppercase font-medium bg-brand-stoneBlack/60 px-6 py-3 transition-opacity duration-500 ease-slow">
                        Quick View
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase text-brand-mutedMocha mb-2">{product.category}</span>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl text-brand-stoneBlack">{product.name}</h3>
                      <span className="text-sm font-light text-brand-stoneBlack">${product.price}</span>
                    </div>
                    <p className="text-sm text-brand-softOlive/80 font-light truncate">{product.material}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS - ASYMMETRIC GRID */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-stoneBlack mb-6">Curated Narratives</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Left large block */}
            <AnimatedSection className="md:col-span-7 aspect-[4/5] relative group overflow-hidden">
              <Link to="/collections">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={mockCollections[0].image}
                  className="w-full h-full object-cover"
                  alt={mockCollections[0].name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-stoneBlack/60 to-transparent flex flex-col justify-end p-10 md:p-16">
                  <span className="text-brand-warmWhite/70 text-xs tracking-widest uppercase mb-4">Collection 01</span>
                  <h3 className="text-4xl md:text-5xl font-serif text-brand-warmWhite mb-4">{mockCollections[0].name}</h3>
                  <p className="text-brand-warmWhite/80 max-w-sm mb-8 text-sm">{mockCollections[0].description}</p>
                  <Button variant="outline" className="self-start border-brand-warmWhite text-brand-warmWhite bg-transparent hover:bg-brand-warmWhite hover:text-brand-stoneBlack">
                    Discover
                  </Button>
                </div>
              </Link>
            </AnimatedSection>

            {/* Right stack blocks */}
            <div className="md:col-span-5 flex flex-col gap-8 md:gap-16">
              <AnimatedSection delay={0.2} className="aspect-square relative group overflow-hidden">
                <Link to="/collections">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={mockCollections[1].image}
                    className="w-full h-full object-cover"
                    alt={mockCollections[1].name}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end bg-gradient-to-t from-brand-stoneBlack/40 to-transparent">
                    <h3 className="text-2xl font-serif text-brand-warmWhite">{mockCollections[1].name}</h3>
                  </div>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="aspect-[4/3] relative group overflow-hidden">
                <Link to="/lookbook">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1287&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Lookbook"
                  />
                  <div className="absolute inset-0 bg-brand-stoneBlack/20 flex flex-col items-center justify-center">
                    <h3 className="text-3xl font-serif text-brand-warmWhite mb-4">Editorial View</h3>
                    <span className="text-xs uppercase tracking-widest text-brand-warmWhite border-b border-brand-warmWhite pb-1">View Lookbook</span>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL / MATERIAL CRAFT TEASER */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-stone/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <AnimatedSection className="w-full md:w-1/2 aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1287&auto=format&fit=crop" 
              alt="Material Detail"
              className="w-full h-full object-cover"
            />
          </AnimatedSection>
          
          <AnimatedSection className="w-full md:w-1/2 flex flex-col items-start" delay={0.2}>
            <span className="text-xs uppercase tracking-widest text-brand-mutedMocha mb-6">Material Honesty</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-stoneBlack mb-8 leading-tight text-balance">
              Quality without noise. Touch the unrefined truth of natural textiles.
            </h2>
            <p className="text-brand-stoneBlack/80 mb-12 max-w-lg leading-relaxed text-sm">
              We source unbleached, undyed fibers whenever possible. Our approach to garment construction requires fewer seams, allowing the fabric's intrinsic character to shape the silhouette.
            </p>
            <Link to="/materials">
              <Button variant="primary">Explore Craft</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
