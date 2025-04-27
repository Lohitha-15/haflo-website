import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <nav className="bg-white py-6 px-6 md:px-12 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://framerusercontent.com/images/K6lNZXnvVHeBbjJ3KrDwApLl1g.svg" 
            alt="Logo"
            className="w-32" // Adjust the size as needed
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Grouping All Pages, Property, and Contact Us under a border */}
          <div className="flex items-center space-x-6 border border-gray-300 rounded-lg p-2 hover:border-blue-900 transition-all">
            {/* All Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownVisible(true)} 
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <button 
                className="flex items-center text-blue-900 font-medium rounded-md hover:text-blue-800 px-2 py-1 hover:bg-gray-100 transition-all"
              >
                All Pages 
                <ChevronDown 
                  className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isDropdownVisible ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md ${isDropdownVisible ? 'block' : 'hidden'}`}
              >
                <a href="#" className="block px-4 py-2 text-sm text-blue-900 rounded-sm hover:bg-blue-800 hover:text-blue-800">Home</a>
                <a href="#" className="block px-4 py-2 text-sm text-blue-900 rounded-sm hover:bg-blue-800 hover:text-blue-800">Properties</a>
                <a href="#" className="block px-4 py-2 text-sm text-blue-900 rounded-sm hover:bg-blue-800 hover:text-blue-800">About Us</a>
                <a href="#" className="block px-4 py-2 text-sm text-blue-900 rounded-sm hover:bg-blue-800 hover:text-blue-800">Contact</a>
              </div>
            </div>

            {/* Property */}
            <a 
              href="#" 
              className="text-blue-900 font-medium rounded-md px-2 py-1 hover:bg-gray-100 transition-all margin-2 hover:text-blue-800"
            >
              Property
            </a>

            {/* Contact Us */}
            <a 
              href="#" 
              className="text-blue-900 font-medium rounded-md px-2 py-1 hover:bg-gray-100 transition-all margin-2 hover:text-blue-800"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Search and Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <img 
              src="https://framerusercontent.com/images/mgLwZ6hOHvf2JQe3Je5XKJRE.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
            <input 
              type="text" 
              placeholder="Find a home" 
              className="py-2.5 pl-10 pr-4 bg-gray-100 rounded-lg w-48 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900/10 placeholder-blue-900 transition-all"
            />
          </div>

          {/* Get This Template Button with Image on the Right */}
          <button className="px-5 py-2.5 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center space-x-2">
            <span>Get This Template</span>
            <img 
              src="https://framerusercontent.com/images/LXgJNwvei75mGan5XZYhE1Pixeg.png" 
              alt="Template Icon" 
              className="h-5 w-5"
            />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t mt-4">
          <a href="#" className="block py-2 px-6 text-blue-900 font-medium hover:bg-gray-100 hover:text-blue-800">All Pages</a>
          <a href="#" className="block py-2 px-6 text-blue-900 font-medium hover:bg-gray-100 hover:text-blue-800">Property</a>
          <a href="#" className="block py-2 px-6 text-blue-900 font-medium hover:bg-gray-100 hover:text-blue-800">Contact Us</a>
          <div className="mt-3 px-6">
            <div className="relative">
              <img 
                src="https://framerusercontent.com/images/mgLwZ6hOHvf2JQe3Je5XKJRE.png"
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400"
              />
              <input 
                type="text" 
                placeholder="Find a home" 
                className="py-2.5 pl-10 pr-4 bg-gray-100 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900/10 placeholder-blue-900"
              />
            </div>
            <button className="mt-3 w-full px-5 py-2.5 bg-blue-900 text-white rounded-lg font-medium">
              Get This Template
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
