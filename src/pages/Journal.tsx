import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { mockJournalEntries } from '../data/mockData';

export default function Journal() {
  return (
    <div className="w-full bg-brand-warmWhite pt-12 pb-32 px-6 md:px-12">
      
      {/* Intro */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <AnimatedSection>
          <span className="text-[10px] tracking-[0.2em] uppercase text-brand-mutedMocha mb-8 block">The Diary</span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-stoneBlack leading-tight mb-8">
            Notes & Editorial
          </h1>
        </AnimatedSection>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          
          {mockJournalEntries.map((entry, index) => (
            <AnimatedSection key={entry.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-stone mb-6">
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={entry.image} 
                    alt={entry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-brand-mutedMocha mb-4">
                    <span>{entry.category}</span>
                    <span className="w-1 h-1 bg-brand-stone/80 rounded-full"></span>
                    <span>{entry.date}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-brand-stoneBlack mb-4 group-hover:text-brand-softOlive transition-colors">
                    {entry.title}
                  </h2>
                  <p className="text-sm font-light text-brand-stoneBlack/70 tracking-wide mb-6">
                    {entry.summary}
                  </p>
                  <span className="text-xs uppercase tracking-[0.2em] font-medium border-b border-brand-stoneBlack pb-1 group-hover:border-brand-softOlive group-hover:text-brand-softOlive transition-colors">
                    Read Story
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}

        </div>
      </section>

    </div>
  );
}
