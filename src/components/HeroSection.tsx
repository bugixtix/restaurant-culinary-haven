'use client';

import { Button } from '@heroui/react';
import { ChefHat, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-restaurant-cyan rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-restaurant-forest-green rounded-full mix-blend-screen opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-restaurant-forest-green/20 border border-restaurant-forest-green rounded-full p-4">
            <ChefHat className="w-12 h-12 text-restaurant-cyan" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Culinary Excellence
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-restaurant-cyan to-restaurant-yellow">
            Redefined
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience award-winning cuisine crafted by our master chefs in an atmosphere of timeless elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            size="lg"
            className="bg-restaurant-forest-green text-white font-semibold text-lg px-8 hover:bg-restaurant-deep-green transition-all duration-200 transform hover:scale-105"
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            variant="bordered"
            className="border-2 border-restaurant-cyan text-restaurant-cyan font-semibold text-lg px-8 hover:bg-restaurant-cyan/10 transition-all duration-200"
          >
            Reserve Table
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-gray-300 mt-16">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-restaurant-cyan" />
            <span>Open Daily 5PM - 11PM</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="flex items-center gap-2">
            <span className="text-restaurant-yellow font-semibold">★★★★★</span>
            <span>Michelin Starred</span>
          </div>
        </div>
      </div>
    </section>
  );
}
