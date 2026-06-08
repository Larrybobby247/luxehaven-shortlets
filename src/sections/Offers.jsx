import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { OFFERS } from '../utils/constants';
import { bookOffer } from '../utils/whatsapp';
import { FaCalendarWeek, FaHeart, FaBriefcase, FaClock } from 'react-icons/fa';

const iconMap = {
  'calendar-week': FaCalendarWeek,
  'heart': FaHeart,
  'briefcase': FaBriefcase,
  'clock': FaClock,
};

const Offers = () => {
  return (
    <section id="offers" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy via-luxury-navy-light to-luxury-navy -z-10" />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Exclusive Deals"
          title="Special"
          highlight="Offers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS.map((offer) => {
            const IconComponent = iconMap[offer.icon] || FaCalendarWeek;
            const ref = useScrollReveal();

            return (
              <div
                key={offer.id}
                ref={ref}
                className="offer-card"
              >
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-4">
                  <IconComponent className="text-luxury-gold text-xl" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-luxury-ivory mb-2">
                  {offer.title}
                </h3>
                <p className="font-inter text-sm text-luxury-ivory/60 mb-4">
                  {offer.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-lg font-bold gold-gradient-text">
                    {offer.discount}
                  </span>
                  <button
                    onClick={() => bookOffer(offer.type)}
                    className="btn-secondary text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
