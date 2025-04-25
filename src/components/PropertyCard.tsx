import React from 'react';
import { PropertyListing } from '../types';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number, type: 'sale' | 'rent'): string => {
    if (type === 'sale') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(price);
    } else {
      return `${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(price)}/mo`;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <div className="absolute bottom-2.5 left-2.5">
          <span className="bg-white py-2 px-3 rounded-sm text-blue-900 font-bold text-sm ">
            FOR SELL
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-blue-900">{property.address.street}</h3>
            <p className="text-base font-bold text-blue-900">
              {property.address.city}, {property.address.state} {property.address.zip}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-blue-900 bg-gray-100 p-1 rounded-sm">
              {formatPrice(property.price.amount, property.price.type)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center pt-4 border-t border-gray-100 space-x-6">
          <div className="flex items-center">
            <img 
              src="https://framerusercontent.com/images/o2rcR8ryys1TMz70FrodkPQ4Tc.png"  
              alt="bedroom icon" 
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm font-medium text-gray-700">{property.bedrooms} Room</span>
          </div>
          <div className="flex items-center">
            <img 
              src="https://framerusercontent.com/images/NnMoyyERiaS6iqJL8gmh5fnNe90.png"
              alt="bathroom icon" 
              className="w-5 h-5 mr-2"
            />
            <span className=" text-sm font-medium text-gray-700">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <img 
              src="https://framerusercontent.com/images/AbOtWG6aXQ6Mqq3QJPHzLdyW5Ww.png" 
              alt="sqft icon" 
              className="w-5 h-5 mr-2"
            />
            <span className=" text-sm font-medium text-gray-700">{property.sqft} SQFT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
