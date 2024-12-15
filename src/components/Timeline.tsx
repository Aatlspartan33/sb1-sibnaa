import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { Search, Settings, Zap, BarChart, CheckCircle } from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: TimelineStep[] = [
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

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">The Journey to AI Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven methodology ensures a smooth transition into AI-powered operations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-600 to-blue-500 transform -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={cn(
                    "relative md:flex items-center justify-between group",
                    isEven ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-2rem)] p-6 bg-white rounded-xl shadow-xl",
                    "hover:shadow-2xl transition-all duration-300",
                    activeStep === step.id && "ring-2 ring-blue-500 ring-offset-2"
                  )}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 md:static flex items-center justify-center">
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className={cn(
                        "h-8 w-8 rounded-full border-4 transition-all duration-300",
                        "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                        activeStep === step.id
                          ? "bg-blue-600 border-blue-200"
                          : "bg-white border-blue-500"
                      )}
                    >
                      <span className="sr-only">Step {step.id}</span>
                    </button>
                  </div>

                  {/* Spacer for even distribution */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}