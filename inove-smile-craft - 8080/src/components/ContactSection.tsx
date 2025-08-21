import { Button } from '@/components/ui/button';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: '#111827' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            <div className="space-y-8">
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Localização</h3>
                    <p className="text-white/90">
                      Rua Dr. José Mariano, 355B<br />
                      Garanhuns, PE
                    </p>
                    <Button 
                      className="btn-accent mt-4"
                      onClick={() => window.open('https://maps.google.com/?q=Rua+Dr.+José+Mariano,+355B+Garanhuns+PE', '_blank')}
                    >
                      TRAÇAR ROTA
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                    <p className="text-white/90 mb-4">
                      Agende sua consulta diretamente pelo WhatsApp
                    </p>
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
                    <p className="text-white/90 mb-4">
                      Acompanhe nossos casos e novidades
                    </p>
                    <Button 
                      className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                      onClick={() => window.open('https://www.instagram.com/espaco.inove/', '_blank')}
                    >
                      @espaco.inove
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Horário de Atendimento</h3>
                    <div className="text-white/90 space-y-1">
                      <p>Segunda a Sexta: 8:00 - 18:00</p>
                      <p>Sábado: 8:00 - 12:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Map */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-glow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5589!2d-36.4935!3d-8.8922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTMnMzIuMCJTIDM2wrAyOSczNi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Inove"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
