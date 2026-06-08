import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { sendBookingInquiry } from '../utils/whatsapp';
import { FaSearch } from 'react-icons/fa';

const BookingWidget = () => {
  const ref = useScrollReveal();
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState('2');
  const [suite, setSuite] = useState('all');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCheckin(today.toISOString().split('T')[0]);
    setCheckout(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleBooking = () => {
    if (!checkin || !checkout) {
      alert('Please select check-in and check-out dates.');
      return;
    }
    sendBookingInquiry({ checkin, checkout, guests, suite });
  };

  const suiteOptions = [
    { value: 'all', label: 'All Suites' },
    { value: 'sapphire', label: 'Sapphire Executive' },
    { value: 'emerald', label: 'Emerald Suite' },
    { value: 'ruby', label: 'Ruby Studio' },
    { value: 'platinum', label: 'Platinum Penthouse' },
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5+ Guests' },
  ];

  return (
    <section id="booking" className="relative z-30 mt-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="booking-widget p-6 md:p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-1">
              <label className="block font-inter text-xs text-luxury-gold/60 mb-2 uppercase tracking-wider">
                Check In
              </label>
              <input
                type="date"
                className="luxury-input"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
            <div className="md:col-span-1">
              <label className="block font-inter text-xs text-luxury-gold/60 mb-2 uppercase tracking-wider">
                Check Out
              </label>
              <input
                type="date"
                className="luxury-input"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
            <div className="md:col-span-1">
              <label className="block font-inter text-xs text-luxury-gold/60 mb-2 uppercase tracking-wider">
                Guests
              </label>
              <select className="luxury-select" value={guests} onChange={(e) => setGuests(e.target.value)}>
                {guestOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block font-inter text-xs text-luxury-gold/60 mb-2 uppercase tracking-wider">
                Suite Type
              </label>
              <select className="luxury-select" value={suite} onChange={(e) => setSuite(e.target.value)}>
                {suiteOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <button onClick={handleBooking} className="btn-primary w-full flex items-center justify-center gap-2">
                <FaSearch /> Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
