import React, { useEffect, useState } from 'react';
import { Menu, X, Lightbulb, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';
import CalendlyModal from './CalendlyModal';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo isScrolled={isScrolled} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={cn(
                    "text-xl font-semibold transition-colors",
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-white/80"
                  )}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => setShowCalendly(true)}
                className={cn(
                  "transition-all text-xl px-8",
                  isScrolled ? "btn-primary" : "btn-secondary"
                )}
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={cn("h-8 w-8", isScrolled ? "text-gray-900" : "text-white")} />
              ) : (
                <Menu className={cn("h-8 w-8", isScrolled ? "text-gray-900" : "text-white")} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={cn(
                    "block py-2 text-xl font-semibold",
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-white/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setShowCalendly(true);
                }}
                className={cn(
                  "w-full mt-4 text-xl",
                  isScrolled ? "btn-primary" : "btn-secondary"
                )}
              >
                Book Consultation
              </button>
            </div>
          )}
        </nav>
      </header>

      <CalendlyModal 
        isOpen={showCalendly} 
        onClose={() => setShowCalendly(false)} 
      />
    </>
  );
}