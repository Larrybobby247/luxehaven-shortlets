import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const {
    y = 60,
    opacity = 0,
    duration = 1,
    ease = 'power3.out',
    start = 'top 85%',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity, y });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === element) st.kill();
      });
    };
  }, [y, opacity, duration, ease, start]);

  return ref;
};

export const useCountUp = (target, options = {}) => {
  const ref = useRef(null);
  const { duration = 2, start = 'top 85%' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || !target) return;

    const obj = { value: 0 };
    const animation = gsap.to(obj, {
      value: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toLocaleString();
      },
    });

    return () => {
      animation.kill();
    };
  }, [target, duration, start]);

  return ref;
};

export const useParallax = (speed = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.to(element, {
      yPercent: -10 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed]);

  return ref;
};
