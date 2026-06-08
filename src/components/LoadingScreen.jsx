import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center flex-col bg-luxury-navy transition-all duration-800 ${
        hidden ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="text-center">
        <div className="font-playfair text-4xl md:text-6xl font-bold gold-gradient-text mb-4">
          LH
        </div>
        <div className="font-cormorant text-xl text-luxury-gold/60 tracking-widest">
          LUXEHAVEN
        </div>
        <div className="w-[200px] h-[2px] bg-luxury-gold/20 rounded-sm overflow-hidden mt-6 mx-auto">
          <div
            className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-sm"
            style={{
              animation: 'loading-fill 2s ease-in-out forwards',
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loading-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
