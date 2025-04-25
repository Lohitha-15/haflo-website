import React from 'react';

const Footer: React.FC = () => {
  const navigationLinks = [
    { title: 'About Us', href: '#' },
    { title: 'Properties', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Contact Us', href: '#' }
  ];

  const resourceLinks = [
    { title: 'Pricing', href: '#' },
    { title: 'FAQs', href: '#' },
    { title: 'How it works', href: '#' },
    { title: 'Blog', href: '#' }
  ];

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and contact section */}
          <div className="col-span-1">
            <img 
              src="https://framerusercontent.com/images/K6lNZXnvVHeBbjJ3KrDwApLl1g.svg" 
              alt="Haflo Logo" 
              className="h-12 mb-6"
            />
            <a href="tel:(907) 357-4333" className="block text-blue-900 hover:text-blue-700 mb-2">
              (907) 357-4333
            </a>
            <a href="mailto:hello@haflo.com" className="block text-blue-900 hover:text-blue-700">
              hello@haflo.com
            </a>
          </div>

          {/* Navigation links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-900">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-900">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office location */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-6">Office Location</h3>
            <p className="text-gray-600">
              Emily Hattson 940<br />
              Goldendale Dr, Wasilla,<br />
              Alaska 99654, USA
            </p>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex gap-4 mb-8">
          <a href="#">
            <img 
              src="https://framerusercontent.com/images/ajGTAVyaNz1bmhFQUoV4NrxQ.png" 
              alt="Facebook" 
              className="w-12 h-12"
            />
          </a>
          <a href="#">
            <img 
              src="https://framerusercontent.com/images/5qTYjgDrjW8EEEbqg7GzrgCSbU.png" 
              alt="LinkedIn" 
              className="w-12 h-12"
            />
          </a>
          <a href="#">
            <img 
              src="https://framerusercontent.com/images/EQn59DkUAodvArsKpHqM5UZIOjI.png" 
              alt="YouTube" 
              className="w-12 h-12"
            />
          </a>
        </div>

        {/* Copyright, Terms & Conditions, and Privacy Policy */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © Copyright 2024. All Rights Reserved by FramerBite
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-900 hover:text-blue-700 text-sm">
              License
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
