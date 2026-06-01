'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from '@heroui/react';
import { UtensilsCrossed } from 'lucide-react';

export function NavigationBar() {
  return (
    <Navbar
      maxWidth="2xl"
      className="bg-gradient-to-r from-restaurant-rich-black via-restaurant-deep-green to-restaurant-rich-black border-b border-restaurant-forest-green/30"
      isBlurred={false}
    >
      <NavbarBrand className="mr-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-restaurant-forest-green p-2 rounded-lg">
            <UtensilsCrossed className="w-6 h-6 text-white" />
          </div>
          <p className="font-bold text-xl text-white">Culinary Haven</p>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#menu" className="text-white hover:text-restaurant-cyan transition-colors">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" className="text-white hover:text-restaurant-cyan transition-colors">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact" className="text-white hover:text-restaurant-cyan transition-colors">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as="a"
            href="#reservation"
            className="hidden bg-restaurant-forest-green text-white font-semibold hover:bg-restaurant-deep-green transition-colors"
          >
            Reserve Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
