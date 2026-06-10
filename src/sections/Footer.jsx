import React, { useState } from 'react';
import { BRAND } from '../utils/constants';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#listings', label: 'Luxury Suites' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  const serviceLinks = [
    { href: '#services', label: 'Executive Shortlets' },
    { href: '#services', label: 'Corporate Lodging' },
    { href: '#services', label: '24/7 Power Supply' },
    { href: '#services', label: 'High-Speed Wi-Fi' },
    { href: '#services', label: 'Elite Security' },
  ];

  return (
    <footer className="py-16 px-6 border-t border-luxury-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center">
                <span className="font-playfair font-bold text-luxury-navy text-lg">LH</span>
              </div>
              <div>
                <div className="font-playfair text-lg font-semibold text-luxury-ivory">LuxeHaven</div>
                <div className="font-cormorant text-xs text-luxury-gold/60 tracking-widest">
                  SHORT LETS & APARTMENTS
                </div>
              </div>
            </div>
            <p className="font-inter text-sm text-luxury-ivory/60 leading-relaxed mb-6">
              Redefining premium corporate and leisure hospitality in Delta State through elite security, absolute privacy, and seamless comfort.
            </p>
            <div className="flex gap-3">
              <a href={BRAND.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href={BRAND.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-luxury-ivory mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link font-inter text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-luxury-ivory mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link font-inter text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-luxury-ivory mb-6">Newsletter</h4>
            <p className="font-inter text-sm text-luxury-ivory/60 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex" onSubmit={handleNewsletter}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                placeholder="Your email"
                required
              />
              <button type="submit" className="newsletter-btn">
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-luxury-ivory/40">
            2026 LuxeHaven Short Lets & Apartments. Created by <a href="https://larrywebsolutions.vercel.app" className='text-luxury-gold-light'>Larry Web Solutions</a>
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-sm text-luxury-ivory/40 hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-sm text-luxury-ivory/40 hover:text-luxury-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
