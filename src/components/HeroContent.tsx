import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="container mx-auto mb-24">
      <div className="flex flex-wrap md:flex-nowrap items-end w-full">
        {/* Left: 60% width - Heading + Paragraph */}
        <div className="w-full md:w-3/5 pr-4">
          <h1 className="text-[64px] md:text-[80px] font-bold leading-[1.2] tracking-tight text-blue-900 mb-8 framer-text">
            Discover your dream home today
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Finding a place you'll love to live is more than just choosing a house its for about discovering a space that complements your lifestyle.
          </p>
        </div>

        {/* Right: 40% width - Button bottom aligned & horizontally centered */}
        <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
          <div className="self-end">
            <button className="px-6 py-4 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center">
              Explore Listing
              <img
                src="https://framerusercontent.com/images/LXgJNwvei75mGan5XZYhE1Pixeg.png"
                alt="Explore Icon"
                className="ml-2 w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
