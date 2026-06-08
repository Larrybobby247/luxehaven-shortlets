import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-sm ${index < rating ? 'text-luxury-gold' : 'text-luxury-ivory/20'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
