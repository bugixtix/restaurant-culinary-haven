'use client';

import { Divider } from '@heroui/react';
import { Facebook, Instagram, Twitter, UtensilsCrossed } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Restaurant',
      links: ['Menu', 'Reservations', 'Private Events', 'Gift Cards'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-restaurant-rich-black to-restaurant-deep-green/40 border-t border-restaurant-forest-green/30">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-restaurant-forest-green p-2 rounded-lg">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white">Culinary Haven</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Award-winning culinary destination offering exquisite dining experiences and memorable moments.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-restaurant-cyan transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="bg-restaurant-forest-green/30 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} Culinary Haven. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              123 Gourmet Avenue, Culinary City, CC 12345 | +1 (555) 123-4567
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-restaurant-forest-green/20 hover:bg-restaurant-forest-green/40 text-restaurant-cyan p-3 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
