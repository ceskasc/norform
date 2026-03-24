import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <div className="w-full bg-brand-warmWhite pt-12 pb-32">
      
      {/* Intro */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
        <AnimatedSection>
          <span className="text-[10px] tracking-[0.2em] uppercase text-brand-mutedMocha mb-8 block">Brand Story</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-stoneBlack leading-tight mb-8">
            Clarity in silhouette.<br/>Depth in detail.
          </h1>
        </AnimatedSection>
      </section>

      {/* Hero Image */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32">
        <AnimatedSection className="w-full aspect-[21/9] bg-brand-stone/30 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop" 
            alt="NØR FORM Studio Silhouette"
            className="w-full h-full object-cover grayscale-[10%]"
          />
        </AnimatedSection>
      </section>

      {/* Philosophy Details */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          <AnimatedSection className="flex flex-col">
            <div className="aspect-[4/5] bg-brand-stone/20 overflow-hidden mb-12">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1287&auto=format&fit=crop" 
                alt="Restrained Luxury"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-serif text-brand-stoneBlack mb-6">Restrained Luxury</h2>
            <p className="text-sm text-brand-stoneBlack/80 leading-relaxed tracking-wide font-light mb-6">
              NØR FORM is built upon the rejection of noise. We design for individuals who find comfort in stillness and power in understatement. Our garments are not seasonal statements, but lifelong companions.
            </p>
            <p className="text-sm text-brand-stoneBlack/80 leading-relaxed tracking-wide font-light">
              We employ architectural principles to pattern making—focusing on the integrity of the structure rather than superficial embellishment. It is a slow, considered process.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col md:mt-32">
            <div className="aspect-[4/5] bg-brand-stone/20 overflow-hidden mb-12">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?q=80&w=1287&auto=format&fit=crop" 
                alt="The Soft Power"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-serif text-brand-stoneBlack mb-6">The Soft Power</h2>
            <p className="text-sm text-brand-stoneBlack/80 leading-relaxed tracking-wide font-light mb-6">
              There is an undeniable strength in subtlety. Our color palette relies on the natural hues of the earth: stone, oat, soft charcoal. This intentional limitation forces a deeper exploration of texture and drape.
            </p>
            <p className="text-sm text-brand-stoneBlack/80 leading-relaxed tracking-wide font-light">
              By removing what is unnecessary, we expose the essence of the form. The result is a wardrobe that requires no introduction, yet refuses to be ignored.
            </p>
          </AnimatedSection>

        </div>
      </section>

      {/* Small Quote block */}
      <section className="py-32 px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-serif text-brand-mutedMocha leading-relaxed text-balance">
            "We believe that a garment truly lives only when the wearer breathes their own unforced confidence into it."
          </p>
        </AnimatedSection>
      </section>

    </div>
  );
}
