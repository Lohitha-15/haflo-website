import React from 'react';
import PropertyCard from './PropertyCard';
import { PropertyListing } from '../types';

interface PropertiesSectionProps {
  properties: PropertyListing[];
}

const PropertiesSection: React.FC<PropertiesSectionProps> = ({ properties }) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl md:text-5xl font-bold text-blue-900">
            Discover popular listing
          </h2>
          <a 
            href="#" 
            className="flex items-center text-blue-900 font-bold px-4 py-2 rounded-full"
          >
            Explore All Listing
            <span className="inline-flex items-center justify-center bg-[#c4fc68] p-1 rounded-full ml-2 group">
              <img
                src="https://framerusercontent.com/images/PBrvPBqTFiz7UgdIym57kgkaLtk.png"
                alt="Arrow Icon"
                className="h-6 w-6 group-hover:scale-110 transition-all duration-200"
              />
            </span>
          </a>
        </div>
        
        {/* Apply padding to the grid container here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6"> {/* Added pt-6 for top padding */}
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
