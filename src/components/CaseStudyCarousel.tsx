import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Streamlining Operations for Local Retailers",
    description: "Implemented predictive AI tools resulting in 40% reduction in inventory costs",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    client: "Local Retail Co."
  },
  {
    id: 2,
    title: "AI-Powered Family Management",
    description: "Custom AI solution helping parents save 10+ hours weekly on family scheduling",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    client: "Family Solutions App"
  },
  {
    id: 3,
    title: "Entrepreneur Productivity Boost",
    description: "AI tools increasing productivity by 60% for small business owners",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80",
    client: "Startup Accelerator"
  }
];

export default function CaseStudyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative h-[500px]">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={cn(
              "absolute inset-0 transition-transform duration-500 ease-in-out",
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            )}
            onTransitionEnd={() => setIsAnimating(false)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${study.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                  <p className="text-lg mb-4">{study.description}</p>
                  <p className="text-sm text-gray-300">Client: {study.client}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm
                   hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm
                   hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}