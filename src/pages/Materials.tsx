import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function Materials() {
  return (
    <div className="w-full bg-brand-ivory pt-12 pb-32">
      
      {/* Intro */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto text-center mb-24">
        <AnimatedSection>
          <span className="text-[10px] tracking-[0.2em] uppercase text-brand-softOlive mb-8 block">Craft & sourcing</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-stoneBlack leading-tight mb-8">
            Material Honesty.
          </h1>
          <p className="text-brand-stoneBlack/70 text-sm md:text-base max-w-xl mx-auto tracking-wide text-balance font-light">
            We believe the fabric dictates the form. A commitment to uncompromising quality without unnecessary processing.
          </p>
        </AnimatedSection>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Row 1 - Cashmere */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <AnimatedSection className="aspect-[4/3] bg-brand-stone/20 overflow-hidden order-2 md:order-1">
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1470&auto=format&fit=crop" 
              alt="Cashmere Texture"
              className="w-full h-full object-cover"
            />
          </AnimatedSection>
          
          <AnimatedSection className="order-1 md:order-2">
            <h2 className="text-3xl font-serif text-brand-stoneBlack mb-4">Undyed Cashmere</h2>
            <p className="text-sm text-brand-stoneBlack/80 font-light leading-relaxed mb-6 tracking-wide">
              Sourced from the high plateaus of Inner Mongolia. We utilize the fiber in its rawest state, abstaining from harsh bleaching and dyeing processes. The natural variations in tone are celebrated, not concealed.
            </p>
            <span className="text-xs uppercase tracking-widest text-brand-mutedMocha border-b border-brand-mutedMocha pb-1">Origin: Inner Mongolia</span>
          </AnimatedSection>
        </div>

        {/* Row 2 - Wool */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-brand-stoneBlack mb-4">Brushed Virgin Wool</h2>
            <p className="text-sm text-brand-stoneBlack/80 font-light leading-relaxed mb-6 tracking-wide">
              Selected for its structural integrity. The fibers are aligned to create a dense, protective shield against the elements while maintaining a soft, yielding touch. Milled historically in Biella, Italy.
            </p>
            <span className="text-xs uppercase tracking-widest text-brand-mutedMocha border-b border-brand-mutedMocha pb-1">Origin: Biella, Italy</span>
          </AnimatedSection>
          
          <AnimatedSection className="aspect-[4/3] bg-brand-stone/20 overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1287&auto=format&fit=crop" 
              alt="Wool Texture"
              className="w-full h-full object-cover"
            />
          </AnimatedSection>
        </div>

      </section>

    </div>
  );
}
