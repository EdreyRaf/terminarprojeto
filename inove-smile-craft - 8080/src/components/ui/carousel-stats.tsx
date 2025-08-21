import { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: string;
  title: string;
  description: string;
}

interface CarouselStatsProps {
  items: StatItem[];
}

const CarouselStats = ({ items }: CarouselStatsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length, isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full">
      {/* Mobile: Carousel View */}
      <div className="md:hidden">
        <div 
          ref={carouselRef}
          className="overflow-hidden"
          onTouchStart={() => setIsAutoPlaying(false)}
          onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 10000)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 hover:bg-white/15">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="font-bold" style={{ fontSize: '27px', color: '#111827' }}>{item.value}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: '#111827' }}>{item.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#111827' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-accent' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid View */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
        {items.map((item, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 text-center transition-all duration-300 hover:bg-white/15 hover:scale-105">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="lg:text-4xl font-bold" style={{ fontSize: '27px', color: '#111827' }}>{item.value}</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4" style={{ color: '#111827' }}>{item.title}</h3>
            <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#111827' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselStats;
