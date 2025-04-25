import React from 'react';

const PlaySection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="relative rounded-xl overflow-hidden h-[600px]"> {/* Increased height here */}
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/0 via-blue-800/60 to-blue-900/90 z-10 rounded-xl"></div>
        
        {/* Background image */}
        <img 
          src="https://framerusercontent.com/images/9f8OodxSNsMr83HEXXZXF2ztFc.png?scale-down-to=2048" 
          alt="Our team" 
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Video play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-[#c4fc68] rounded-xl w-60 h-48 flex flex-col items-center justify-center">
            {/* Play button */}
            <div className="mb-4">
              <img 
                src="https://framerusercontent.com/images/1YxI7LPwytsFzOlA9x3Ut8mSsQQ.svg" 
                alt="Play button"
                className="w-7 h-7"
              />
            </div>

            <div className="w-40 h-0.5 bg-gray-900/10 mb-4"></div>
            
            {/* Text below play button */}
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-900">See how we find</p>
              <p className="text-xl font-semibold text-blue-900">your home at Haflo</p>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default PlaySection;
