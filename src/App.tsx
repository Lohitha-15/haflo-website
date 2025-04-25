import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PropertiesSection from './components/PropertiesSection';
import AboutSection from './components/AboutSection';
import PlaySection from './components/PlaySection';
import TestimonialSection from './components/TestimonialSection';
import LuxuryLivingSection from './components/LuxuryLivingSection'; // Import the new component
import Footer from './components/Footer';
import { properties } from './data/properties';
import MainSection from './components/MainSection';
import NewsSection from './components/NewsSection';
import PropertyHero from './components/PropertyHero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <PropertiesSection properties={properties}  /> {/* Removed title prop */}
      <AboutSection />
      <PlaySection />
      <TestimonialSection />
      <LuxuryLivingSection /> {/* Added LuxuryLivingSection after TestimonialSection */}
      <MainSection />
      <NewsSection />
      <PropertyHero />
      <Footer />
    </div>
  );
}

export default App;
