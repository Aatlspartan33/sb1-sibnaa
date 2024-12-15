import React from 'react';
import { Lightbulb, Sparkles, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
                <Lightbulb className="absolute h-6 w-6 text-white" />
                <Sparkles className="absolute h-4 w-4 text-blue-200 translate-x-2 translate-y-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  BRIGHTER MIND
                </span>
                <span className="text-sm font-medium tracking-wider text-blue-400">
                  AI SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-gray-400">
              Making AI Accessible, Practical, and Transformative for Everyone
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@brightermind.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brighter Mind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}