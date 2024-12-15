import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-4xl h-[80vh] mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="w-full h-full">
          <iframe
            src="https://calendly.com/terrell-massey3/30min?embed_domain=stackblitz.com&embed_type=inline"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a consultation"
            className="rounded-xl"
            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *"
          />
        </div>
      </div>
    </div>
  );
}