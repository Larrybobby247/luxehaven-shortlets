import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LISTINGS } from '../utils/constants';
import { bookSuite } from '../utils/whatsapp';

const Listings = () => {
  return (
    <section id="listings" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Our Collection"
          title="Luxury"
          highlight="Suites"
          description="Each suite is meticulously designed to offer the perfect blend of comfort, functionality, and elegance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {LISTINGS.map((listing) => {
            const cardRef = useScrollReveal();

            return (
              <div
                key={listing.id}
                ref={cardRef}
                className="tilt-card glass-light rounded-2xl overflow-hidden card-glow group"
              >
                <div className="img-zoom relative h-64">
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                    <span className="font-inter text-xs text-luxury-gold font-semibold">
                      {listing.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-luxury-ivory mb-1">
                    {listing.name}
                  </h3>
                  <p className="font-inter text-sm text-luxury-gold/60 mb-3">
                    {listing.type}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-luxury-gold/10 rounded text-xs text-luxury-gold/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-playfair text-2xl font-bold gold-gradient-text">
                        {listing.price}
                      </span>
                      <span className="font-inter text-xs text-luxury-ivory/50">
                        {listing.perNight}
                      </span>
                    </div>
                    <button
                      onClick={() => bookSuite(listing.name.toLowerCase().replace(/\s+/g, '').replace('the', ''))}
                      className="btn-primary text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Listings;
