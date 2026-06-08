import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GALLERY } from '../utils/constants';

const Gallery = () => {
  const headerRef = useScrollReveal();

  const openLightbox = (src) => {
    if (window.openLightbox) {
      window.openLightbox(src);
    }
  };

  // Masonry grid sizing
  const gridSpans = [
    'row-span-2',
    'row-span-1',
    'row-span-2',
    'row-span-1',
    'row-span-2',
    'row-span-1',
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <SectionHeader
            subtitle="Visual Tour"
            title="A Visual Tour of"
            highlight="LuxeHaven"
            description="Take a virtual step into our pristine, well-curated interiors, architecture, and luxury installations."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {GALLERY.map((item, index) => {
            const ref = useScrollReveal();

            return (
              <div
                key={item.id}
                ref={ref}
                className={`img-zoom rounded-xl overflow-hidden cursor-pointer relative group ${gridSpans[index] || 'row-span-1'}`}
                onClick={() => openLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-inter text-sm text-white">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
