import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HERO, STATS } from '../utils/constants';
import { sendBookingInquiry, bookSuite } from '../utils/whatsapp';
import { FaCalendarCheck, FaBed } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const titleRef = useScrollReveal();
  const descRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const statsRef = useScrollReveal();

  // useEffect(() => {
  //   // Three.js Hero Background
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const scene = new window.THREE.Scene();
  //   const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   const renderer = new window.THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  //   // Particles
  //   const particlesGeometry = new window.THREE.BufferGeometry();
  //   const particlesCount = 200;
  //   const posArray = new Float32Array(particlesCount * 3);

  //   for (let i = 0; i < particlesCount * 3; i++) {
  //     posArray[i] = (Math.random() - 0.5) * 10;
  //   }

  //   particlesGeometry.setAttribute('position', new window.THREE.BufferAttribute(posArray, 3));

  //   const particlesMaterial = new window.THREE.PointsMaterial({
  //     size: 0.02,
  //     color: 0xD4AF37,
  //     transparent: true,
  //     opacity: 0.6,
  //   });

  //   const particlesMesh = new window.THREE.Points(particlesGeometry, particlesMaterial);
  //   scene.add(particlesMesh);

  //   // Geometric shapes
  //   const geometry1 = new window.THREE.IcosahedronGeometry(0.5, 0);
  //   const material1 = new window.THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true, transparent: true, opacity: 0.3 });
  //   const shape1 = new window.THREE.Mesh(geometry1, material1);
  //   shape1.position.set(2, 1, -2);
  //   scene.add(shape1);

  //   const geometry2 = new window.THREE.OctahedronGeometry(0.3, 0);
  //   const material2 = new window.THREE.MeshBasicMaterial({ color: 0xE8C84A, wireframe: true, transparent: true, opacity: 0.2 });
  //   const shape2 = new window.THREE.Mesh(geometry2, material2);
  //   shape2.position.set(-2, -1, -3);
  //   scene.add(shape2);

  //   camera.position.z = 3;

  //   let mouseX = 0, mouseY = 0;
  //   const handleMouseMove = (event) => {
  //     mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  //     mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  //   };
  //   document.addEventListener('mousemove', handleMouseMove);

  //   let animationId;
  //   const animate = () => {
  //     animationId = requestAnimationFrame(animate);
  //     particlesMesh.rotation.x += 0.0005;
  //     particlesMesh.rotation.y += 0.0005;
  //     shape1.rotation.x += 0.005;
  //     shape1.rotation.y += 0.005;
  //     shape2.rotation.x -= 0.003;
  //     shape2.rotation.y -= 0.003;
  //     particlesMesh.rotation.x += mouseY * 0.0005;
  //     particlesMesh.rotation.y += mouseX * 0.0005;
  //     renderer.render(scene, camera);
  //   };
  //   animate();

  //   const handleResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };
  //   window.addEventListener('resize', handleResize);

  //   // Particle Canvas Overlay
  //   const pCanvas = particleCanvasRef.current;
  //   if (pCanvas) {
  //     const pCtx = pCanvas.getContext('2d');
  //     pCanvas.width = window.innerWidth;
  //     pCanvas.height = window.innerHeight;

  //     const particleArray = [];
  //     const particleCount = 50;

  //     class Particle {
  //       constructor() {
  //         this.x = Math.random() * pCanvas.width;
  //         this.y = Math.random() * pCanvas.height;
  //         this.size = Math.random() * 2 + 0.5;
  //         this.speedX = Math.random() * 0.5 - 0.25;
  //         this.speedY = Math.random() * 0.5 - 0.25;
  //         this.opacity = Math.random() * 0.5 + 0.1;
  //       }
  //       update() {
  //         this.x += this.speedX;
  //         this.y += this.speedY;
  //         if (this.x > pCanvas.width) this.x = 0;
  //         if (this.x < 0) this.x = pCanvas.width;
  //         if (this.y > pCanvas.height) this.y = 0;
  //         if (this.y < 0) this.y = pCanvas.height;
  //       }
  //       draw() {
  //         pCtx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
  //         pCtx.beginPath();
  //         pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  //         pCtx.fill();
  //       }
  //     }

  //     for (let i = 0; i < particleCount; i++) {
  //       particleArray.push(new Particle());
  //     }

  //     let pAnimationId;
  //     const animateParticles = () => {
  //       pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  //       for (let i = 0; i < particleArray.length; i++) {
  //         particleArray[i].update();
  //         particleArray[i].draw();
  //       }
  //       pAnimationId = requestAnimationFrame(animateParticles);
  //     };
  //     animateParticles();

  //     return () => {
  //       cancelAnimationFrame(animationId);
  //       cancelAnimationFrame(pAnimationId);
  //       document.removeEventListener('mousemove', handleMouseMove);
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }

  //   return () => {
  //     cancelAnimationFrame(animationId);
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <canvas ref={particleCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(11,25,44,0.3) 0%, rgba(11,25,44,0.5) 50%, rgba(11,25,44,0.95) 100%)'
      }} />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div ref={titleRef} className="mb-6">
          <div className="gold-line mx-auto mb-6" />
          <p className="font-cormorant text-lg md:text-xl text-luxury-gold/80 tracking-[0.3em] uppercase">
            Premium Executive Accommodation
          </p>
        </div>

        <h1 ref={descRef} className="hero-title font-playfair font-bold text-luxury-ivory mb-6 text-shadow">
          Your Premium Executive<br />
          <span className="gold-gradient-text">Sanctuary in Kwale</span>
        </h1>

        <p ref={ctaRef} className="font-inter text-lg md:text-xl text-luxury-ivory/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO.description}
        </p>

        <div ref={statsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => sendBookingInquiry({})}
            className="btn-primary text-base flex items-center justify-center gap-2"
          >
            <FaCalendarCheck /> Book Your Stay
          </button>
          <a href="#listings" className="btn-secondary text-base flex items-center justify-center gap-2">
            <FaBed /> Explore Suites
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {STATS.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="font-playfair text-3xl md:text-4xl font-bold gold-gradient-text">
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                {stat.suffix}
              </div>
              <div className="font-inter text-sm text-luxury-ivory/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-luxury-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
