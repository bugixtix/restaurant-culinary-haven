'use client';

import { Card, CardBody, CardHeader, Button, Chip } from '@heroui/react';
import { Leaf } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'signature' | 'vegetarian' | 'seasonal';
  image: string;
  tags: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Pan-Seared Scallops',
    description: 'Local scallops with citrus beurre blanc and microgreens',
    price: '$32',
    category: 'signature',
    image: 'https://images.unsplash.com/photo-1601314212732-047d4bdffd22?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Seafood', 'Signature'],
  },
  {
    id: 2,
    name: 'Herb-Crusted Lamb Chops',
    description: 'Prime lamb chops with rosemary jus and roasted root vegetables',
    price: '$38',
    category: 'signature',
    image: 'https://plus.unsplash.com/premium_photo-1668618296258-584ba1727f1e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Meat', 'Signature'],
  },
  {
    id: 3,
    name: 'Truffle Mushroom Risotto',
    description: 'Arborio rice with black truffle, parmesan, and wild mushrooms',
    price: '$28',
    category: 'vegetarian',
    image: 'https://plus.unsplash.com/premium_photo-1695240028318-68fe4db68eef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Vegetarian', 'Italian'],
  },
  {
    id: 4,
    name: 'Seasonal Vegetable Tart',
    description: 'Heirloom tomatoes, fresh basil, and burrata cheese',
    price: '$22',
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop',
    tags: ['Vegetarian', 'Vegan Friendly'],
  },
  {
    id: 5,
    name: 'Wagyu Beef Tenderloin',
    description: 'Premium Japanese Wagyu with wasabi mash and charred vegetables',
    price: '$58',
    category: 'signature',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=400&fit=crop',
    tags: ['Beef', 'Premium'],
  },
  {
    id: 6,
    name: 'Golden Beet Wellington',
    description: 'Roasted golden beets wrapped in phyllo with goat cheese',
    price: '$26',
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    tags: ['Vegetarian', 'Gluten-Free'],
  },
];

export function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 px-4 bg-restaurant-rich-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Menu</h2>
          <p className="section-subtitle">
            Carefully curated dishes showcasing seasonal ingredients and culinary innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-restaurant-forest-green transition-all duration-300 overflow-hidden group h-full"
              isPressable
            >
              <CardHeader className="absolute z-10 top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-lg">{item.name}</h3>
                </div>
                <span className="text-restaurant-yellow font-bold text-lg">{item.price}</span>
              </CardHeader>

              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <CardBody className="gap-4 p-6 bg-gradient-to-t from-gray-950 to-gray-900">
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Chip
                      key={tag}
                      size="sm"
                      variant="flat"
                      className="bg-restaurant-forest-green/20 text-restaurant-cyan border border-restaurant-forest-green/50"
                      startContent={tag === 'Vegetarian' ? <Leaf className="w-3 h-3" /> : undefined}
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>

                <a
                  className="w-full p-2 rounded-lg bg-restaurant-forest-green text-white font-semibold hover:bg-restaurant-deep-green transition-colors mt-2"
                  // size="sm"
                  type="button"
                >
                  View Details
                </a>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="bordered"
            className="border-2 border-restaurant-cyan text-restaurant-cyan font-semibold px-10 hover:bg-restaurant-cyan/10"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
