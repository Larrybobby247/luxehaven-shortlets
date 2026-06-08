import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#listings', label: 'Suites' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeMenu = () => {
    document.getElementById('mobile-menu').classList.remove('active');
  };

  return (
    <div
      id="mobile-menu"
      className="mobile-menu fixed top-0 right-[-100%] w-full h-full bg-luxury-navy/98 backdrop-blur-xl z-[999] flex flex-col items-center justify-center gap-8 transition-all duration-500"
      style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <button
        className="absolute top-6 right-6 text-luxury-gold text-2xl"
        onClick={closeMenu}
      >
        <FaTimes />
      </button>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-playfair text-2xl text-luxury-ivory hover:text-luxury-gold transition-colors"
          onClick={closeMenu}
        >
          {link.label}
        </a>
      ))}
      <a href="#booking" className="btn-primary mt-4" onClick={closeMenu}>
        Book Your Stay
      </a>
    </div>
  );
};

export default MobileMenu;
