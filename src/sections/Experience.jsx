import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import { STATS } from '../utils/constants';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://kimi-web-img.moonshot.cn/img/render-vision.com/11a230450c88312ff6c6e08a7d1cdd062eb1e765.webp"
          alt="Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-navy/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="The Experience"
          title="Luxury Beyond"
          highlight="Expectations"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const ref = useScrollReveal();
            const countRef = useCountUp(typeof stat.value === 'number' ? stat.value : null);

            return (
              <div key={index} ref={ref} className="text-center">
                <div className="font-playfair text-5xl md:text-6xl font-bold gold-gradient-text mb-2">
                  {typeof stat.value === 'number' ? (
                    <span ref={countRef} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </div>
                <div className="font-inter text-sm text-luxury-ivory/60">{stat.label}</div>
                <div className="gold-line mx-auto mt-4" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
