import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TimelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  isEven: boolean;
  onClick: () => void;
}

export default function TimelineStep({
  icon: Icon,
  title,
  description,
  isActive,
  isEven,
  onClick
}: TimelineStepProps) {
  return (
    <div className={cn(
      "relative md:flex items-center justify-between group",
      isEven ? "flex-row" : "flex-row-reverse"
    )}>
      <div className={cn(
        "w-full md:w-[calc(50%-2rem)] p-6 bg-white rounded-xl transform transition-all duration-500",
        "hover:shadow-2xl hover:-translate-y-1",
        isActive && "ring-2 ring-blue-500 ring-offset-4 shadow-xl"
      )}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300",
              isActive
                ? "bg-gradient-to-br from-blue-500 to-blue-600 scale-110"
                : "bg-gray-100"
            )}>
              <Icon className={cn(
                "h-6 w-6 transition-all duration-300",
                isActive ? "text-white" : "text-blue-600"
              )} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 md:static flex items-center justify-center">
        <button
          onClick={onClick}
          className={cn(
            "h-8 w-8 rounded-full border-4 transition-all duration-500",
            "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            isActive
              ? "bg-blue-600 border-blue-200 scale-110"
              : "bg-white border-blue-500"
          )}
        >
          <span className="sr-only">Step {title}</span>
        </button>
      </div>

      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}