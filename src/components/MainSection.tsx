import React from 'react';
import ServicesSection from './sections/ServicesSection';
import PartnersSection from './sections/PartnersSection';
import PropertyGallery from './sections/PropertyGallery';

const MainSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ServicesSection />
      <PartnersSection />
      <PropertyGallery />
    </div>
  );
};

export default MainSection;