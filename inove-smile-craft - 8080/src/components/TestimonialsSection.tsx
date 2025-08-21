import { useEffect, useRef, useState } from 'react';
import CarouselTestimonials from '@/components/ui/carousel-testimonials';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Dr. Eterno transformou minha vida! Depois dos implantes, recuperei minha autoestima e posso sorrir sem medo novamente.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "João Santos",
    text: "A prótese protocolo foi a melhor decisão que tomei. Em 24 horas, saí da clínica com um sorriso novo e funcional.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Carolina",
    text: "Profissionalismo e carinho em cada consulta. Dr. Eterno é um excelente profissional e a clínica é impecável.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos Mendes",
    text: "Recomendo de olhos fechados! Tratamento humanizado e resultados que superaram minhas expectativas.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "Luciana Oliveira",
    text: "Equipe maravilhosa e Dr. Eterno é muito competente. Meus implantes ficaram perfeitos, muito naturais!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
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
      id="depoimentos"
      ref={sectionRef}
      className="py-24 lg:py-40 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 font-playfair leading-tight tracking-tight">
            Depoimentos de Pacientes
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Veja o que nossos pacientes falam sobre os resultados alcançados
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <CarouselTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;