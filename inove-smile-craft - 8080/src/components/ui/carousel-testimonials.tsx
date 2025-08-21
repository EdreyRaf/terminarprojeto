import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar: string;
  rating: number;
}

interface CarouselTestimonialsProps {
  testimonials: Testimonial[];
}

const CarouselTestimonials = ({ testimonials }: CarouselTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="relative w-full">
      {/* Mobile: Single Card Carousel */}
      <div className="lg:hidden">
        <div 
          ref={carouselRef}
          className="overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="card-elegant p-8 mx-auto max-w-md">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Desktop: 3-Card Auto-Sliding View */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-8 xl:gap-12">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`card-elegant p-8 xl:p-10 transition-all duration-700 ${
                index === 1 ? 'scale-105 shadow-glow ring-2 ring-primary/20' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 8000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselTestimonials;