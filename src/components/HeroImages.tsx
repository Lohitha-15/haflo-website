import React from 'react';
import CircularBadge from './CircularBadge';

const HeroImages: React.FC = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-6 items-center">
        {/* Left Image */}
        <div className="col-span-8 relative">
          <img
            src="https://framerusercontent.com/images/YypRGNg5H19KgzjV9YmpcFFVM.png"
            alt="Modern home interior"
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          {/* Badge Positioned on the Right Edge of Left Image */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
            <CircularBadge />
          </div>
        </div>

        {/* Right Image */}
        <div className="col-span-4">
          <img
            src="https://framerusercontent.com/images/cgEdE9zJS1KjfHnBIz7BSy0D4A.png"
            alt="Modern home exterior"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
