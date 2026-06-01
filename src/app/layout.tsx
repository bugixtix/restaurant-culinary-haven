import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Culinary Haven - Modern Restaurant Experience',
  description: 'Experience exceptional cuisine in an elegant setting. Visit Culinary Haven for unforgettable dining.',
  keywords: 'restaurant, dining, cuisine, reservations',
  openGraph: {
    title: 'Culinary Haven',
    description: 'Experience exceptional cuisine in an elegant setting',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-restaurant-rich-black text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
