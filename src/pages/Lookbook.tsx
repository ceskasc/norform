import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

// Extracted guaranteed 100% working Unsplash Fashion images
const lookbookData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop",
    title: "Volume & Void",
    desc: "A study in contrasting proportions. The intentional space between the body and the garment."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470&auto=format&fit=crop",
    title: "Structural Integrity",
    desc: "Sharp tailoring meets unlined construction. Formalwear that breathes with the wearer."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2670&auto=format&fit=crop",
    title: "The Light aesthetic",
    desc: "Monochromatic layering creating depth through varying textile weaves."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1470&auto=format&fit=crop",
    title: "Quiet Movement",
    desc: "Fluidity dictated by extreme fabric weight."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=1470&auto=format&fit=crop",
    title: "Essential Core",
    desc: "The foundational pieces of the season."
  }
];

export default function Lookbook() {
  return (
    <div className="w-full bg-brand-warmWhite pt-32 pb-40">
      
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 flex flex-col md:flex-row items-end justify-between">
        <AnimatedSection className="max-w-2xl">
          <span className="text-xs tracking-widest uppercase text-brand-stoneBlack mb-6 block font-medium">Series 01</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-stoneBlack leading-[1.1] mb-8">
            The Poetry of Restraint.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="max-w-sm mt-12 md:mt-0">
          <p className="text-sm font-light text-brand-stoneBlack/80 leading-relaxed tracking-wide">
            Our editorial view. A visual diary exploring the interaction between silhouette, light, and motion. It is not just about the garments, but the quiet attitude they project.
          </p>
        </AnimatedSection>
      </section>

      {/* Look 1: Full width immersive */}
      <section className="w-full px-6 mb-32">
        <AnimatedSection className="w-full max-w-7xl mx-auto aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-brand-stone/20">
          <motion.img 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src={lookbookData[0].url} 
            alt="Lookbook 1"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <h2 className="text-3xl font-serif text-brand-warmWhite mb-2 drop-shadow-md">{lookbookData[0].title}</h2>
            <p className="text-brand-warmWhite/90 text-sm max-w-md drop-shadow-sm">{lookbookData[0].desc}</p>
          </div>
        </AnimatedSection>
      </section>

      {/* Look 2 & 3: Asymmetrical Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          
          <AnimatedSection className="md:col-span-5 flex flex-col items-start order-2 md:order-1 mt-12 md:mt-0">
            <span className="text-[10px] tracking-widest uppercase text-brand-mutedMocha mb-4 block">Look 02</span>
            <h2 className="text-4xl font-serif text-brand-stoneBlack mb-6">{lookbookData[1].title}</h2>
            <p className="text-sm font-light text-brand-stoneBlack/80 leading-relaxed mb-8 max-w-sm">
              {lookbookData[1].desc}
            </p>
            <div className="w-full aspect-square overflow-hidden bg-brand-stone/20 relative mt-12">
              <motion.img 
                 whileHover={{ scale: 1.03 }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
                 src={lookbookData[2].url} 
                 className="w-full h-full object-cover"
                 alt="Look 3 detail"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-7 aspect-[3/4] overflow-hidden bg-brand-stone/20 order-1 md:order-2">
            <motion.img 
               initial={{ scale: 1.05 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               viewport={{ once: true }}
               src={lookbookData[1].url} 
               className="w-full h-full object-cover"
               alt="Look 2"
            />
          </AnimatedSection>
          
        </div>
      </section>

      {/* Look 4: Center focus */}
      <section className="max-w-4xl mx-auto px-6 mb-32 text-center flex flex-col items-center">
        <AnimatedSection className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-stone/20 mb-12">
            <motion.img 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               src={lookbookData[3].url} 
               className="w-full h-full object-cover"
               alt="Look 4"
            />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <span className="text-[10px] tracking-widest uppercase text-brand-mutedMocha mb-4 block">Look 04</span>
          <h2 className="text-3xl font-serif text-brand-stoneBlack mb-4">{lookbookData[3].title}</h2>
          <p className="text-sm font-light text-brand-stoneBlack/80 max-w-lg text-balance">
            {lookbookData[3].desc}
          </p>
        </AnimatedSection>
      </section>

      {/* Look 5: Cinematic Wide */}
      <section className="w-full">
        <AnimatedSection className="w-full h-[70vh] relative min-h-[500px] overflow-hidden bg-brand-stone/20">
          <motion.img 
             initial={{ scale: 1.02, y: 0 }}
             whileInView={{ scale: 1, y: -20 }}
             transition={{ duration: 2, ease: "easeOut" }}
             viewport={{ once: true }}
             src={lookbookData[4].url} 
             className="absolute inset-0 w-full h-[110%] object-cover object-center"
             alt="Look 5"
          />
          <div className="absolute inset-0 bg-brand-stoneBlack/20 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-warmWhite mb-6 drop-shadow-md">{lookbookData[4].title}</h2>
            <p className="text-brand-warmWhite/90 tracking-widest uppercase text-xs drop-shadow-sm font-medium border-b border-brand-warmWhite pb-1 hover:border-transparent transition-colors cursor-pointer">
              Explore The Collection
            </p>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
