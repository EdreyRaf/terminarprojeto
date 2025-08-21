import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 section-hero" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen py-20">
          
          {/* Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight tracking-tight" style={{ color: '#111827', fontFamily: 'Inter, sans-serif', fontWeight: '900' }}>
              O dentista que você procura!
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl font-normal" style={{ color: '#111827' }}>
              Na Clínica Inove, acreditamos que a verdadeira estética começa pela função. 
              Nossa especialidade é transformar sorrisos com segurança e excelência clínica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                className="btn-accent text-base lg:text-lg px-10 py-6"
                onClick={() => scrollToSection('clinica')}
                style={{ color: '#f9fafb' }}
              >
                CLIQUE AQUI PARA SABER MAIS
              </Button>
              
              <Button
                className="btn-secondary bg-white/10 hover:bg-white hover:text-primary mt-1"
                onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843', '_blank')}
                style={{ paddingTop: '8px', paddingBottom: '6px', color: '#111827', border: '2px solid #111827' }}
              >
                FALAR NO WHATSAPP
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary-light/20 rounded-3xl transform rotate-3" />
              <img 
                src="/lovable-uploads/a67cd8e0-b30d-4b4a-8023-7b9330b63d62.png"
                alt="Dr. Eterno Freitas - Especialista em Implantes Dentários"
                className="relative z-10 w-full rounded-3xl shadow-glow"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-light/10 rounded-full blur-xl animate-pulse-glow" />
    </section>
  );
};

export default HeroSection;
