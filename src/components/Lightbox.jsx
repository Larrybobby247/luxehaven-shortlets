import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Expose openLightbox function globally for gallery items
    window.openLightbox = (src) => {
      setImageSrc(src);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.closeLightbox = () => {
      setIsOpen(false);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => window.closeLightbox()}
    >
      <img
        src={imageSrc}
        alt="Gallery"
        className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={() => window.closeLightbox()}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Lightbox;
