import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
}

export default function ServiceCard({ title, description, Icon, image }: ServiceCardProps) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl 
                      flex items-center justify-center transform group-hover:scale-110 
                      transition-transform duration-300">
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}