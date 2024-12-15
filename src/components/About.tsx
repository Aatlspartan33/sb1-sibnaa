import React from 'react';

export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl opacity-10 blur-lg"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="https://i.postimg.cc/d3Mh49TG/191203-AP-Coca-Cola-Terrell-1248.jpg"
                alt="AI Solutions Impact"
                className="w-full h-full object-cover object-center rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="w-24 h-2 bg-blue-500 mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-wider uppercase">
              About Brighter Mind
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At Brighter Mind, we believe artificial intelligence isn't just for tech giants—it's a tool that can transform the way you live, work, and grow. Whether you're a small business looking to streamline operations, a parent seeking tools to support your family, or an individual aiming to reach new levels of self-development, we're here to guide you every step of the way.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With expertise spanning AI-powered productivity tools, personalized parenting strategies, and small business optimization, our mission is to make AI accessible, practical, and empowering for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}