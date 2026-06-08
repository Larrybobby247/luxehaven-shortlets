/**
 * WhatsApp Integration Utilities for LuxeHaven
 * All booking and inquiry functions send messages directly to WhatsApp
 */

const WHATSAPP_NUMBER = '2349036568518';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Send a general booking inquiry to WhatsApp
 */
export const sendBookingInquiry = (bookingData) => {
  const { checkin, checkout, guests, suite } = bookingData;

  const message = `Hello LuxeHaven! I would like to book a stay:

📅 Check-in: ${checkin || 'To be confirmed'}
📅 Check-out: ${checkout || 'To be confirmed'}
👥 Guests: ${guests || 'Not specified'}
🏨 Suite: ${suite || 'Any available'}

Please confirm availability and pricing. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, '_blank');
};

/**
 * Send a suite-specific booking request to WhatsApp
 */
export const bookSuite = (suiteType) => {
  const suiteNames = {
    sapphire: 'The Sapphire Executive (Premium 3-Bedroom)',
    emerald: 'The Emerald Suite (Executive 2-Bedroom)',
    ruby: 'The Ruby Studio (Luxury 1-Bedroom)',
    platinum: 'The Platinum Penthouse (Elite 3-Bedroom Penthouse)',
  };

  const suiteName = suiteNames[suiteType] || suiteType;

  const message = `Hello LuxeHaven! I am interested in booking the ${suiteName}.

Please provide:
✓ Availability for my preferred dates
✓ Pricing details
✓ Any special packages or discounts

Looking forward to my stay!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, '_blank');
};

/**
 * Send a special offer inquiry to WhatsApp
 */
export const bookOffer = (offerType) => {
  const offerNames = {
    weekend: 'Weekend Package (15% OFF)',
    honeymoon: 'Honeymoon Deal (20% OFF)',
    corporate: 'Corporate Booking (25% OFF)',
    longstay: 'Long-Stay Discount (30% OFF)',
  };

  const offerName = offerNames[offerType] || offerType;

  const message = `Hello LuxeHaven! I am interested in the ${offerName}.

Please provide more details about:
✓ Package inclusions
✓ Valid dates
✓ Terms and conditions
✓ How to redeem

Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, '_blank');
};

/**
 * Send contact form inquiry to WhatsApp
 * This takes the form data and sends it as a formatted WhatsApp message
 */
export const sendContactFormToWhatsApp = (formData) => {
  const { name, email, phone, suiteType, message } = formData;

  const suiteNames = {
    sapphire: 'Sapphire Executive',
    emerald: 'Emerald Suite',
    ruby: 'Ruby Studio',
    platinum: 'Platinum Penthouse',
    '': 'Not specified',
  };

  const formattedMessage = `Hello LuxeHaven! I have an inquiry:

👤 Name: ${name || 'Not provided'}
📧 Email: ${email || 'Not provided'}
📱 Phone: ${phone || 'Not provided'}
🏨 Interested Suite: ${suiteNames[suiteType] || suiteType || 'Not specified'}

💬 Message:
${message || 'No additional message'}

Please get back to me with more information. Thank you!`;

  const encodedMessage = encodeURIComponent(formattedMessage);
  window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, '_blank');
};

/**
 * Send a quick inquiry from any page element
 */
export const sendQuickInquiry = (subject, details = '') => {
  const message = `Hello LuxeHaven! I have a question about ${subject}.

${details ? `Details: ${details}` : ''}

Please assist me. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, '_blank');
};

/**
 * Open WhatsApp chat directly
 */
export const openWhatsApp = (message = '') => {
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, '_blank');
  } else {
    window.open(WHATSAPP_BASE_URL, '_blank');
  }
};

export default {
  sendBookingInquiry,
  bookSuite,
  bookOffer,
  sendContactFormToWhatsApp,
  sendQuickInquiry,
  openWhatsApp,
};
