import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SERVICES } from '../utils/constants';
import { FaHouseUser, FaBriefcase, FaBolt, FaWifi, FaUserShield,  } from 'react-icons/fa';

const iconMap = {
  'house-user': FaHouseUser,
  'briefcase': FaBriefcase,
  'bolt': FaBolt,
  'wifi': FaWifi,
  'shield-halved': FaUserShield,
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy via-luxury-navy-light to-luxury-navy -z-10" />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="What We Offer"
          title="Premium"
          highlight="Services"
          description="Every detail is crafted to ensure your stay exceeds expectations. From power to connectivity, we have got you covered."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || FaHouseUser;
            const cardRef = useScrollReveal();

            return (
              <div
                key={service.id}
                ref={cardRef}
                className="tilt-card glass-light rounded-2xl overflow-hidden card-glow"
              >
                <div className="img-zoom h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-4">
                    <IconComponent className="text-luxury-gold text-xl" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-luxury-ivory mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-luxury-ivory/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
