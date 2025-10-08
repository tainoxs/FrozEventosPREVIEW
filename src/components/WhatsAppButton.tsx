import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre os pacotes de viagem da FROZEVENTOS&TURISMO.'
    );
    const whatsappUrl = `https://wa.me/5511987654321?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;