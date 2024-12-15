import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { cn } from '../utils/cn';

interface NewsCardProps {
  title: string;
  description: string;
  source: string;
  date: string;
  imageUrl: string;
  url: string;
  category: 'AI' | 'Technology' | 'Business';
}

export default function NewsCard({
  title,
  description,
  source,
  date,
  imageUrl,
  url,
  category
}: NewsCardProps) {
  const categoryColors = {
    AI: 'bg-purple-100 text-purple-800',
    Technology: 'bg-blue-100 text-blue-800',
    Business: 'bg-green-100 text-green-800'
  };

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <span className={cn(
          'absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium',
          categoryColors[category]
        )}>
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <span>{source}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          Read more
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </article>
  );
}