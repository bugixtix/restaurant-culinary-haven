# Culinary Haven - Modern Restaurant Website

A stunning, production-ready restaurant website built with **Next.js 15** (App Router), **TypeScript**, and **HeroUI** components. Features a modern design with smooth animations, responsive layout, and a complete reservation system.

## 🎨 Design Features

- **Modern & Clean Aesthetic**: Minimalist design with striking visual elements
- **Custom Color Palette**:
  - Forest Green (`#118949`) - Primary accent
  - Cyan Blue (`#19bcdf`) - Secondary accent
  - Yellow (`#e6e711`) - Highlight/Warning
  - Deep Green (`#0a632b`) - Dark accent
  - Rich Black (`#0d0808`) - Background

- **Fully Responsive**: Mobile-first design that works flawlessly on all devices
- **High-Quality Imagery**: Professional food photography placeholders
- **Smooth Animations**: Hover effects and transitions throughout
- **Production-Ready Code**: Clean, organized, and maintainable TypeScript

## 📦 What's Included

### Components

1. **NavigationBar** - Sticky navbar with smooth scrolling links
2. **HeroSection** - Eye-catching hero with CTAs and decorative elements
3. **FeaturedMenu** - 6 showcase menu items with cards and filters
4. **AboutSection** - Restaurant story with highlights and imagery
5. **ContactSection** - Complete reservation form with validation
6. **Footer** - Social links, info, and legal pages

### Key Files

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   ├── providers.tsx       # HeroUI provider
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── NavigationBar.tsx
│       ├── HeroSection.tsx
│       ├── FeaturedMenu.tsx
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── tailwind.config.ts          # Tailwind config with theme
├── next.config.js              # Next.js config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd restaurant-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You'll see the live restaurant website!

### Build for Production

```bash
npm run build
npm run start
```

## 🎯 Features Breakdown

### Hero Section
- Gradient background with decorative blur elements
- Dual CTAs (Explore Menu & Reserve Table)
- Operating hours and rating display
- Responsive typography

### Featured Menu
- 6 menu items with filtering
- High-quality image placeholders
- Price display with tags
- Hover animations
- Category chips (Vegetarian, Seafood, etc.)

### About/Story
- Compelling restaurant narrative
- Three key highlights with icons
- Responsive image layout
- Award, team, and sourcing highlights

### Reservation Form
- Comprehensive form with validation
- Date picker, time selector, guest count
- Special requests textarea
- Contact information display
- Success message on submission

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly buttons and inputs
- Flexible grid layouts

## 🛠️ Customization

### Update Restaurant Info

**In `src/components/NavigationBar.tsx`**:
```typescript
<p className="font-bold text-xl text-white">Your Restaurant Name</p>
```

**In `src/components/HeroSection.tsx`**:
```typescript
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  Your Heading
</h1>
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  restaurant: {
    'forest-green': '#YOUR_COLOR',
    'deep-green': '#YOUR_COLOR',
    cyan: '#YOUR_COLOR',
    yellow: '#YOUR_COLOR',
    'rich-black': '#YOUR_COLOR',
  },
}
```

### Update Menu Items

Edit `src/components/FeaturedMenu.tsx` - Modify the `menuItems` array:
```typescript
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Your Dish',
    description: 'Delicious description',
    price: '$XX',
    category: 'signature',
    image: 'https://your-image-url.jpg',
    tags: ['Tag1', 'Tag2'],
  },
  // Add more items...
];
```

### Connect the Form

Update `src/components/ContactSection.tsx` to integrate with your backend:
```typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Replace with your API call
  await fetch('/api/reservations', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Component Library

### HeroUI Components Used
- `Navbar` - Navigation bar
- `NavbarBrand`, `NavbarContent`, `NavbarItem`
- `Button` - Action buttons with variants
- `Card`, `CardBody`, `CardHeader` - Content containers
- `Input` - Text inputs
- `Textarea` - Multi-line text
- `Select`, `SelectItem` - Dropdowns
- `Chip` - Tags and labels
- `Divider` - Separators
- `Link` - Navigation links

### Icons (Lucide React)
- `UtensilsCrossed`
- `ChefHat`
- `Clock`
- `Flame`
- `Leaf`
- `Award`
- `Users`
- `Heart`
- `Mail`
- `Phone`
- `MapPin`
- `Calendar`
- `Facebook`
- `Instagram`
- `Twitter`

## 🔒 TypeScript Strict Mode

All components are built with strict TypeScript for:
- Type safety
- Better IDE support
- Fewer runtime errors
- Self-documenting code

## 📊 Performance Optimizations

- Next.js Image optimization ready
- CSS-in-JS with Tailwind (no extra HTTP requests)
- Client component splitting for better code organization
- Semantic HTML for better SEO

## 🤝 Contributing

Feel free to customize and extend this template for your restaurant!

## 📄 License

This template is free to use and modify for your project.

## 💡 Tips

1. **Images**: Replace placeholder URLs with your own high-quality food photos
2. **SEO**: Update metadata in `src/app/layout.tsx`
3. **Analytics**: Add Google Analytics or your preferred solution
4. **Forms**: Connect to backend service (Formspree, SendGrid, etc.)
5. **Hosting**: Deploy to Vercel, Netlify, or your preferred platform

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the `.next` folder to Netlify
```

## 📞 Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Documentation](https://heroui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Built with ❤️ using Next.js, TypeScript, and HeroUI**
