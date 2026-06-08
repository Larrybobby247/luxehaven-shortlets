import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TESTIMONIALS } from '../utils/constants';
import StarRating from '../components/StarRating';
import { FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const headerRef = useScrollReveal();

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <SectionHeader
            subtitle="Guest Reviews"
            title="What Our"
            highlight="Guests Say"
          />
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex gap-6 animate-scroll-testimonials hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="glass-light rounded-2xl p-8 w-[350px] flex-shrink-0"
              >
                <StarRating rating={testimonial.rating} />
                <p className="font-inter text-luxury-ivory/70 leading-relaxed mb-6 mt-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <FaUser className="text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-playfair font-semibold text-luxury-ivory">
                      {testimonial.name}
                    </div>
                    <div className="font-inter text-xs text-luxury-gold/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
