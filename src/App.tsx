import React, { useState } from 'react';
import {
  Brain,
  Users,
  BookOpen,
  Target,
  Rocket
} from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import ServiceCarousel from './components/ServiceCarousel';
import ContactForm from './components/ContactForm';
import CalendlyModal from './components/CalendlyModal';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

// Import images
import brighterMind1 from './assets/Brighter Mind 1.png';
import brighterMind2 from './assets/Brighter Mind 2.png';
import brighterMind3 from './assets/Brighter Mind 3.png';

function App() {
  const [showCalendly, setShowCalendly] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "AI for Small Businesses",
      description: "Streamline operations, enhance customer experiences, and make data-driven decisions with affordable AI solutions customized for your business.",
      image: brighterMind1
    },
    {
      icon: Users,
      title: "AI for Parenting Help",
      description: "Transform how you manage your family's needs with AI-driven tools for tracking milestones, curating personalized advice, and finding balance as a parent.",
      image: brighterMind2
    },
    {
      icon: Target,
      title: "AI for Self-Development",
      description: "From goal-setting to mindfulness, use AI to unlock your potential with tailored tools and strategies for personal growth.",
      image: brighterMind3
    },
    {
      icon: BookOpen,
      title: "General AI Education",
      description: "Not sure where to start? We'll help you understand AI in simple terms and show you practical ways to incorporate it into your daily life or business.",
      image: brighterMind1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/MasseyAI.jpeg"
            alt="Brighter Mind Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-3xl text-white ml-0 md:ml-8">
            <div className="w-24 h-2 bg-blue-500 mb-8" />
            <h1 className="hero-title mb-8">
              Empowering You to Harness the Power of AI
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light hero-text">
              From small businesses to personal growth, Brighter Mind specializes in accessible, tailored AI solutions that make your life easier, your business smarter, and your goals achievable.
            </p>
            <button 
              onClick={() => setShowCalendly(true)}
              className="btn-secondary group backdrop-blur-md"
            >
              Discover How AI Can Work for You
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      <About />
      <Timeline />
      <ServiceCarousel services={services} />
      <ContactForm />
      <Footer />
      
      <CalendlyModal 
        isOpen={showCalendly} 
        onClose={() => setShowCalendly(false)} 
      />
      <Chatbot />
    </div>
  );
}

export default App;