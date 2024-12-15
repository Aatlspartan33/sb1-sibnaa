import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

interface LogoProps {
  isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className={cn(
        "relative h-14 w-14 rounded-xl flex items-center justify-center transition-all duration-500 overflow-hidden",
        isScrolled 
          ? "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" 
          : "bg-white"
      )}>
        <Lightbulb className={cn(
          "absolute h-8 w-8 transition-all duration-500",
          isScrolled 
            ? "opacity-100 text-white scale-100" 
            : "opacity-100 text-blue-600 scale-100"
        )} />
        <Sparkles className={cn(
          "absolute h-5 w-5 transition-all duration-500",
          isScrolled 
            ? "opacity-100 text-blue-200 translate-x-3 translate-y-3" 
            : "opacity-100 text-blue-400 translate-x-3 translate-y-3"
        )} />
      </div>
      <div className="flex flex-col">
        <span className={cn(
          "text-2xl md:text-3xl font-black tracking-wider transition-all duration-300",
          isScrolled 
            ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent"
            : "text-white"
        )}>
          BRIGHTER MIND
        </span>
        <span className={cn(
          "text-sm font-medium tracking-wider",
          isScrolled ? "text-blue-600" : "text-white/90"
        )}>
          AI SOLUTIONS
        </span>
      </div>
    </div>
  );
}