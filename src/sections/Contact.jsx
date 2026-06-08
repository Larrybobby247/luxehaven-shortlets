import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BRAND } from '../utils/constants';
import { sendContactFormToWhatsApp } from '../utils/whatsapp';
import { FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane, FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suiteType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send to WhatsApp
    sendContactFormToWhatsApp(formData);

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        suiteType: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: BRAND.phone,
      href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: FaSearchLocation,
      label: 'Address',
      value: BRAND.address,
      href: '#',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: `https://wa.me/${BRAND.whatsapp}`,
      isWhatsApp: true,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Get In Touch"
          title="Contact &"
          highlight="Location"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={leftRef}>
            {/* Contact Information */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-luxury-ivory mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.isWhatsApp ? '_blank' : undefined}
                    rel={item.isWhatsApp ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-luxury-gold/20 transition-colors">
                      <item.icon className="text-luxury-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-sm text-luxury-gold/60 mb-1">{item.label}</p>
                      <p className={`font-inter text-luxury-ivory ${item.isWhatsApp ? 'text-luxury-gold hover:text-luxury-gold-light transition-colors' : ''}`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Inquiry Form - Sends to WhatsApp */}
            <div className="glass-light rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-semibold text-luxury-ivory mb-2">
                Quick Inquiry
              </h3>
              <p className="font-inter text-sm text-luxury-gold/60 mb-6">
                Fill out the form below and we will respond via WhatsApp
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="luxury-input"
                    placeholder="Your Name *"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="luxury-input"
                    placeholder="Email Address *"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="luxury-input"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="suiteType"
                    value={formData.suiteType}
                    onChange={handleChange}
                    className="luxury-select"
                  >
                    <option value="">Select Suite Type (Optional)</option>
                    <option value="sapphire">Sapphire Executive</option>
                    <option value="emerald">Emerald Suite</option>
                    <option value="ruby">Ruby Studio</option>
                    <option value="platinum">Platinum Penthouse</option>
                  </select>
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="luxury-input h-32 resize-none"
                    placeholder="Your Message *"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending to WhatsApp...' : 'Send Inquiry via WhatsApp'}
                </button>
              </form>
            </div>
          </div>

          <div ref={rightRef}>
            <div className="map-container h-full min-h-[400px] rounded-2xl flex items-center justify-center relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.5!2d6.43!3d5.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnNDguMCJOIDbCsDI1JzQ4LjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LuxeHaven Location"
              />
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
                <p className="font-inter text-sm text-luxury-ivory">
                  <FaSearchLocation className="text-luxury-gold mr-2 inline" />
                  Kwale, Delta State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
