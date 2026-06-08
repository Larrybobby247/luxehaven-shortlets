import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, .tilt-card, .img-zoom');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    let animationId;
    const animateCursor = () => {
      currentX.current += (cursorX.current - currentX.current) * 0.1;
      currentY.current += (cursorY.current - currentY.current) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX.current - 10}px`;
        cursorRef.current.style.top = `${currentY.current - 10}px`;
      }
      animationId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 border-2 border-luxury-gold rounded-full pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference"
      style={{ opacity: 0 }}
    />
  );
};

export default CustomCursor;
