import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(true);

  const openWhatsApp = () => {
    const phoneNumber = "8394047901";
    const message = "Hello, I'm interested in your furniture products. Can you help me?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    visible && (
      <button
        onClick={openWhatsApp}
        className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="text-white w-6 h-6" />
        
        {/* Floating animation */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-600 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-700 rounded-full"></div>
      </button>
    )
  );
};

export default WhatsAppButton;