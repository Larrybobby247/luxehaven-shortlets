import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ABOUT } from '../utils/constants';
import { FaBed, FaBolt, FaUserSecret, FaUserShield } from 'react-icons/fa';

const iconMap = {
  shield: FaUserShield,
  bed: FaBed,
  bolt: FaBolt,
  'user-secret': FaUserSecret,
};

const About = () => {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef}>
            <div className="gold-line mb-6" />
            <p className="font-cormorant text-lg text-luxury-gold/80 tracking-widest uppercase mb-4">
              About LuxeHaven
            </p>
            <h2 className="section-title font-playfair font-bold text-luxury-ivory mb-6">
              Redefining Premium<br />
              <span className="gold-gradient-text">Hospitality</span>
            </h2>
            <p className="font-inter text-luxury-ivory/70 leading-relaxed mb-6">
              {ABOUT.shortDescription}
            </p>
            <p className="font-inter text-luxury-ivory/70 leading-relaxed mb-8">
              {ABOUT.whyUs}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {ABOUT.values.map((value, index) => {
                const IconComponent = iconMap[value.icon] || FaUserShield;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <IconComponent className="text-luxury-gold" />
                    </div>
                    <span className="font-inter text-sm text-luxury-ivory/80">{value.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="glass-light p-6 rounded-xl border-l-2 border-luxury-gold">
              <p className="font-cormorant text-lg italic text-luxury-ivory/80">
                "{ABOUT.mission}"
              </p>
              <p className="font-inter text-sm text-luxury-gold/60 mt-2">— Our Mission</p>
            </div>
          </div>

          <div ref={rightRef} className="relative">
            <div className="relative z-10 img-zoom rounded-2xl overflow-hidden">
              <img
                src="https://kimi-web-img.moonshot.cn/img/render-vision.com/11a230450c88312ff6c6e08a7d1cdd062eb1e765.webp"
                alt="LuxeHaven Exterior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-luxury-gold/10 rounded-2xl -z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-luxury-gold/20 rounded-2xl -z-0" />

            <div className="absolute -bottom-4 right-8 glass p-4 rounded-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                  <FaUserShield className="text-luxury-gold text-xl" />
                </div>
                <div>
                  <div className="font-playfair font-bold text-luxury-ivory">Premium</div>
                  <div className="font-inter text-xs text-luxury-gold/60">Rated Accommodation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
