import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import CustomCursor from './components/CustomCursor';
import WhatsAppFloat from './components/WhatsAppFloat';
import Lightbox from './components/Lightbox';

import Hero from './sections/Hero';
import BookingWidget from './sections/BookingWidget';
import About from './sections/About';
import Services from './sections/Services';
import Listings from './sections/Listings';
import Amenities from './sections/Amenities';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Offers from './sections/Offers';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <MobileMenu />
      <main>
        <Hero />
        <BookingWidget />
        <About />
        <Services />
        <Listings />
        <Amenities />
        <Experience />
        <Testimonials />
        <Gallery />
        <Offers />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Lightbox />
    </div>
  );
}

export default App;
