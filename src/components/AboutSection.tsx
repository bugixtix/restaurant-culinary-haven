'use client';

import { Card, CardBody } from '@heroui/react';
import { Award, Users, Heart } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Michelin-starred cuisine prepared with passion and precision',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Internationally trained chefs with 15+ years of experience',
    },
    {
      icon: Heart,
      title: 'Farm-to-Table',
      description: 'Sourcing the finest ingredients from local producers',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-restaurant-rich-black to-restaurant-deep-green/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-restaurant-forest-green to-restaurant-cyan opacity-20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-restaurant-forest-green/30 aspect-video">
              
                <img src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Interieur eines Luxusrestaurants" className="w-full h-full object-cover"/>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2015, Culinary Haven has become a destination for food lovers seeking an unforgettable dining experience. Our philosophy centers on celebrating the finest ingredients and techniques from around the world.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Each dish is a masterpiece, crafted with meticulous attention to detail. Our team of award-winning chefs believes that great food is more than just sustenance—it's an art form that brings people together.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gray-900/60 border border-restaurant-forest-green/30 hover:border-restaurant-forest-green transition-colors p-0"
                  >
                    <CardBody className="flex-row gap-4 py-4 px-6">
                      <div className="bg-restaurant-forest-green/20 rounded-lg p-3 flex-shrink-0">
                        <Icon className="w-6 h-6 text-restaurant-cyan" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
