import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SectionHeader = ({ subtitle, title, highlight, description }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="gold-line mx-auto mb-6" />
      {subtitle && (
        <p className="font-cormorant text-lg text-luxury-gold/80 tracking-widest uppercase mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="section-title font-playfair font-bold text-luxury-ivory mb-6">
        {title}{' '}
        {highlight && <span className="gold-gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="font-inter text-luxury-ivory/60 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
