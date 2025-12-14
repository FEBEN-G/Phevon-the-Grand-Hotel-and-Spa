export const AIService = {
  processQuery: (message: string): string => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('much')) {
      return "Our luxury rooms start from $300/night for the Classic Elegance Room up to $2500/night for the Presidential Penthouse. You can see detailed pricing on the Rooms page.";
    }

    if (lowerMsg.includes('check-in') || lowerMsg.includes('check in') || lowerMsg.includes('time')) {
      return "Check-in time is 3:00 PM and Check-out time is 11:00 AM. Early check-in or late check-out can be arranged upon request.";
    }

    if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('where')) {
      return "We are located at 123 Luxury Avenue, Addis Ababa, Ethiopia. We offer complimentary airport shuttle services.";
    }

    if (lowerMsg.includes('wifi') || lowerMsg.includes('internet')) {
      return "Yes, we offer complimentary high-speed Wi-Fi throughout the hotel for all our guests.";
    }

    if (lowerMsg.includes('pool') || lowerMsg.includes('spa') || lowerMsg.includes('gym')) {
      return "We have a temperature-controlled infinity pool, a world-class Spa, and a 24/7 fitness center available for all guests.";
    }
    
    if (lowerMsg.includes('book')) {
        return "You can book a room directly through this website. Just go to the 'Rooms' page, select your preferred suite, and click 'View Details' to find the Booking Form.";
    }
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
        return "Hello! I am Phevon, your virtual concierge. How can I assist you with your stay today?";
    }

    return "I apologize, I didn't quite catch that. Could you please rephrase your question? I can help with room rates, check-in times, amenities, and location.";
  }
};
