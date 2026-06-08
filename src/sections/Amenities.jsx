import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AMENITIES } from '../utils/constants';
import { FaWifi, FaWater, FaDumbbell, FaUtensils, FaUsers, FaHeadset, FaCar, FaTshirt } from 'react-icons/fa';

const iconMap = {
  wifi: FaWifi,
  water: FaWater,
  dumbbell: FaDumbbell,
  utensils: FaUtensils,
  users: FaUsers,
  headset: FaHeadset,
  shirt: FaTshirt,
  car: FaCar,
};

const floatAnimations = ['animate-float', 'animate-float-delay', 'animate-float-delay-2', 'animate-float'];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy via-luxury-navy-light to-luxury-navy -z-10" />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Facilities"
          title="World-Class"
          highlight="Amenities"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon] || FaWifi;
            const ref = useScrollReveal();

            return (
              <div
                key={index}
                ref={ref}
                className="glass-light rounded-xl p-6 text-center hover:border-luxury-gold/40 transition-all duration-300 border border-transparent"
              >
                <div className={`w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 ${floatAnimations[index % 4]}`}>
                  <IconComponent className="text-luxury-gold text-2xl" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-luxury-ivory mb-1">
                  {amenity.title}
                </h3>
                <p className="font-inter text-xs text-luxury-ivory/50">{amenity.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
