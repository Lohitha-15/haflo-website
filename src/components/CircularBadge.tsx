import React from 'react';

const CircularBadge: React.FC = () => {
  return (
    <div className="relative w-48 h-48"> {/* Reduced the size of the badge */}
      {/* Outer circle with background color */}
      <div className="absolute inset-0 bg-[#c4fc68] rounded-full flex items-center justify-center shadow-xl">
        {/* Replaced the circle with an image, and decreased the size */}
        <div className="w-16 h-16 flex items-center justify-center"> {/* Reduced the size of the icon */}
          <img 
            src="https://framerusercontent.com/images/4mxjV4wbiYYEUTPXZl7MOhr9HkY.svg" 
            alt="Badge Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Rotating text path */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            id="textPath"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            stroke="none"
          />
          <text className="text-[7.5px] font-medium uppercase tracking-[0.2em] fill-blue-900"> {/* Reduced text size */}
            <textPath href="#textPath" startOffset="0%">
              Trusted Real Estate Experts Since 1992 • 
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircularBadge;



