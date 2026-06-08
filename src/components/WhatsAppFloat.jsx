import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsapp';

const WhatsAppFloat = () => {
  return (
    <button
      onClick={() => openWhatsApp('Hello LuxeHaven! I would like to make an inquiry.')}
      className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white text-[28px] z-[998] transition-all duration-300 hover:scale-110 animate-pulse-glow"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppFloat;
