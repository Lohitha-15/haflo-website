import React from 'react';

const PropertyHero: React.FC = () => {
  return (
    <section className="relative w-full h-[750px] overflow-hidden">
      {/* Cross lines image within the gradient area */}
      <div className="absolute inset-0 z-10 w-[65%] h-[90%]">
        <img 
          src="https://framerusercontent.com/images/sfIfXIbZPGgFFDVJtJ4gzQ8.png" 
          alt="Cross Lines Overlay"
          className="w-full h-full object-cover opacity-100"
        />
      </div>
      
      {/* Updated Gradient overlay: now using Tailwind blue-900 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent z-20 w-[65%] h-[85%]"></div>
      
      <img 
        src="https://framerusercontent.com/images/wSAuoeWCYl4SaCACycTvJJg4wmg.png?scale-down-to=2048" 
        alt="Happy couple looking at real estate options" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-30 h-full flex flex-col justify-center px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Ready to get<br />your home?
        </h1>
        <p className="text-white text-xl max-w-lg mb-8">
          Let's turn your vision into reality with tailored solutions that fit your needs.
        </p>
        <div>
          <a 
            href="#listings" 
            className="bg-[#c4fc68] hover:bg-[#b3e85c] transition-colors text-[#0a2463] font-semibold py-3 px-6 rounded-md inline-flex items-center"
          >
            Explore All Listing
            <img 
              src="https://framerusercontent.com/images/PBrvPBqTFiz7UgdIym57kgkaLtk.png" 
              alt="Arrow icon" 
              className="ml-2 h-5 w-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
