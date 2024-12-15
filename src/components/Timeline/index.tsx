import React, { useState, useEffect } from 'react';
import { Search, Settings, Zap, BarChart, CheckCircle } from 'lucide-react';
import TimelineStep from './TimelineStep';

const steps = [
  {
    id: 1,
    title: "Identify Needs",
    description: "We analyze your current processes and challenges to identify where AI can make the biggest impact.",
    icon: Search
  },
  {
    id: 2,
    title: "Choose Tools",
    description: "Our experts select the most suitable AI tools and technologies tailored to your specific requirements.",
    icon: Settings
  },
  {
    id: 3,
    title: "Implement Solutions",
    description: "We handle the seamless integration of AI solutions into your existing workflows and systems.",
    icon: Zap
  },
  {
    id: 4,
    title: "Monitor Progress",
    description: "Track the impact of AI implementation with detailed analytics and performance metrics.",
    icon: BarChart
  },
  {
    id: 5,
    title: "Optimize & Scale",
    description: "Continuously refine and expand your AI capabilities based on results and evolving needs.",
    icon: CheckCircle
  }
];

export default function Timeline() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(current => current === steps.length ? 1 : current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">The Journey to AI Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our proven methodology ensures a smooth transition into AI-powered operations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-600 to-blue-500 transform -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={activeStep === step.id}
                isEven={index % 2 === 0}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}