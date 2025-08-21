import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const ProceduresSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="procedimentos"
      ref={sectionRef}
      className="py-24 lg:py-40 bg-gray-50 flex"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 font-playfair leading-tight tracking-tight">
            Nossos Procedimentos
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Especialização em técnicas avançadas para devolver função, estética e confiança ao seu sorriso
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          
          {/* Implantes Dentários */}
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl transform -rotate-3" />
                <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-card">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-8">
                    <span className="text-3xl">🦷</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-playfair leading-tight">
                    Implantes Dentários
                  </h3>
                  <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
                    Recupere a função mastigatória e a estética do seu sorriso com implantes de alta qualidade. 
                    Nossa técnica minimamente invasiva garante maior conforto, cicatrização rápida e resultados 
                    naturais que duram para toda a vida.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Implantes unitários e múltiplos
                    </li>
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Cirurgia guiada por computador
                    </li>
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Carga imediata quando possível
                    </li>
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Garantia e acompanhamento
                    </li>
                  </ul>
                  <Button 
                    className="btn-hero"
                    onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843&text=Olá! Gostaria de saber mais sobre implantes dentários.', '_blank')}
                  >
                    SAIBA MAIS SOBRE IMPLANTES
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4d9e5641bae44afb2e6b6c54e973be7%2F24eee623b9f24dc3acf245eebce5c858?format=webp&width=800"
                alt="Implantes Dentários"
                className="w-full rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500"
              />
            </div>
          </div>

          {/* Prótese Protocolo */}
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe4d9e5641bae44afb2e6b6c54e973be7%2F8fbbcb5e15a746bf8980a56eb076e87d?format=webp&width=800"
                alt="Prótese Protocolo"
                className="w-full rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-card">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-8">
                    <span className="text-3xl">😁</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-playfair leading-tight">
                    Prótese Protocolo
                  </h3>
                  <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
                    Recupere todos os dentes com segurança e estabilidade total. A prótese protocolo é a 
                    solução definitiva para quem perdeu todos ou quase todos os dentes, oferecendo 
                    um sorriso fixo, natural e funcional.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Reabilitação completa em 24h
                    </li>
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Prótese fixa sobre implantes
                    </li>
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Mastigação eficiente imediata
                    </li>
                    <li className="flex items-center text-foreground text-lg">
                      <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                      Estética natural e confortável
                    </li>
                  </ul>
                  <Button 
                    className="btn-hero"
                    onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5587981164843&text=Olá! Gostaria de saber mais sobre prótese protocolo.', '_blank')}
                  >
                    SAIBA MAIS SOBRE PROTOCOLO
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
