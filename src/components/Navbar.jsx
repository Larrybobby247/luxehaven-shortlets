import React, { useState, useEffect } from 'react';
import { FaBars, FaMinus, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#listings', label: 'Suites' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="glass px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center">
              <span className="font-playfair font-bold text-luxury-navy text-lg">LH</span>
            </div>
            <div className="">
              <div className="font-playfair text-lg font-semibold text-luxury-ivory">LuxeHaven</div>
              <div className="font-cormorant text-xs text-luxury-gold/60 tracking-widest">
                SHORT LETS & APARTMENTS
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="animated-underline text-sm font-medium text-luxury-ivory/80 hover:text-luxury-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#booking" className="btn-primary text-sm hidden md:block">
              Book Now
            </a>
            <button
              className="md:hidden text-luxury-gold text-2xl"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-luxury-navy-dark z-50 shadow-2xl transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl mb-8 float-right"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col space-y-6 mt-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-lg font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-white text-lg font-medium hover:text-accent transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-accent text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
