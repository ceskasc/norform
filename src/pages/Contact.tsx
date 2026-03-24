import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-brand-warmWhite pt-12 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 mt-12">
        
        {/* Showroom Details */}
        <AnimatedSection className="w-full md:w-1/3 flex flex-col gap-16">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-mutedMocha mb-4 block">Visit Us</span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-stoneBlack mb-8">Showroom</h1>
            <p className="text-sm text-brand-stoneBlack/80 font-light leading-relaxed tracking-wide mb-8 text-balance">
              Experience the collections in person. Visits are strictly by appointment to ensure a personalized, quiet experience.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-stoneBlack font-semibold mb-2">Location</h3>
              <p className="text-sm text-brand-stoneBlack/80 font-light tracking-wide">
                Nordic Art District<br/>74 Quiet Lane<br/>Copenhagen, DK
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-stoneBlack font-semibold mb-2">Contact</h3>
              <p className="text-sm text-brand-stoneBlack/80 font-light tracking-wide">
                studio@norform.com<br/>+45 12 34 56 78
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-stoneBlack font-semibold mb-2">Hours</h3>
              <p className="text-sm text-brand-stoneBlack/80 font-light tracking-wide">
                Tuesday – Saturday<br/>11:00 AM – 6:00 PM<br/>By Appointment Only
              </p>
            </div>
            
            <div className="mt-8 aspect-[4/3] overflow-hidden bg-brand-stone/30">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop" 
                alt="Showroom Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Form area */}
        <AnimatedSection delay={0.2} className="w-full md:w-2/3">
          <div className="bg-brand-ivory p-8 md:p-16 h-full flex flex-col justify-center border border-brand-stone/30">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <h2 className="text-3xl font-serif text-brand-stoneBlack mb-4">Received with thanks.</h2>
                <p className="text-sm text-brand-stoneBlack/80 font-light tracking-wide">We will reach out to confirm your appointment shortly.</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-brand-stoneBlack mb-8">Request an Appointment</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest text-brand-mutedMocha mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="bg-transparent border-b border-brand-stoneBlack/20 pb-2 focus:outline-none focus:border-brand-stoneBlack transition-colors text-sm font-light"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest text-brand-mutedMocha mb-2">Email</label>
                      <input 
                        required
                        type="email" 
                        className="bg-transparent border-b border-brand-stoneBlack/20 pb-2 focus:outline-none focus:border-brand-stoneBlack transition-colors text-sm font-light"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-brand-mutedMocha mb-2">Subject</label>
                    <select className="bg-transparent border-b border-brand-stoneBlack/20 pb-2 focus:outline-none focus:border-brand-stoneBlack transition-colors text-sm font-light appearance-none rounded-none cursor-pointer">
                      <option>Showroom Appointment</option>
                      <option>General Inquiry</option>
                      <option>Press & Media</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-brand-mutedMocha mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="bg-transparent border-b border-brand-stoneBlack/20 pb-2 focus:outline-none focus:border-brand-stoneBlack transition-colors text-sm font-light resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="self-start mt-4">
                    Send Inquiry
                  </Button>

                </form>
              </>
            )}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
