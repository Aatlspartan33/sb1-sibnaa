import React, { useState, useEffect } from 'react';
import { Newspaper, ArrowRight, ArrowLeft } from 'lucide-react';
import NewsCard from './NewsCard';
import { cn } from '../utils/cn';

// Simulated news data - replace with actual API call
const mockNews = [
  {
    id: 1,
    title: "OpenAI Announces GPT-5 Development Progress",
    description: "Latest developments in language model capabilities and their impact on various industries.",
    source: "AI Weekly",
    date: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    url: "#",
    category: "AI" as const
  },
  {
    id: 2,
    title: "AI Revolutionizes Healthcare Diagnostics",
    description: "New AI models achieve breakthrough accuracy in early disease detection.",
    source: "Tech Insights",
    date: "4 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    url: "#",
    category: "Technology" as const
  },
  {
    id: 3,
    title: "Small Businesses Embrace AI Tools",
    description: "How AI is transforming operations for small and medium enterprises.",
    source: "Business Today",
    date: "6 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    url: "#",
    category: "Business" as const
  },
  {
    id: 4,
    title: "AI Ethics Guidelines Updated",
    description: "New framework for responsible AI development and implementation.",
    source: "AI Ethics Board",
    date: "8 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    url: "#",
    category: "AI" as const
  },
  {
    id: 5,
    title: "Machine Learning Breakthroughs",
    description: "Latest advancements in machine learning algorithms and applications.",
    source: "Tech Review",
    date: "10 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    url: "#",
    category: "Technology" as const
  },
  {
    id: 6,
    title: "AI Investment Trends 2024",
    description: "Analysis of current AI investment patterns and future projections.",
    source: "Finance Weekly",
    date: "12 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
    url: "#",
    category: "Business" as const
  }
];

export default function NewsFeed() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'All' | 'AI' | 'Technology' | 'Business'>('All');
  const itemsPerPage = 3;

  const filteredNews = mockNews.filter(news => 
    filter === 'All' ? true : news.category === filter
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const categories = ['All', 'AI', 'Technology', 'Business'] as const;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="section-title flex items-center">
              <Newspaper className="h-8 w-8 mr-3 text-blue-600" />
              Latest AI News
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest developments in AI technology and its impact across industries.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setCurrentPage(1);
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Category Filter */}
        <div className="md:hidden mb-6 overflow-x-auto flex space-x-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentPage(1);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-full transition-colors",
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-50"
              )}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-full transition-colors",
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-50"
              )}
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}