import { NavigationBar } from '@/components/NavigationBar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedMenu } from '@/components/FeaturedMenu';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';



export default function Home() {
  return (
    <main className="bg-restaurant-rich-black">
      <NavigationBar />
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
