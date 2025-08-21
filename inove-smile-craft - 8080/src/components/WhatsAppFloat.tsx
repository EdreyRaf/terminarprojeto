import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843&text=Olá! Gostaria de agendar uma consulta na Clínica Inove.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppFloat;