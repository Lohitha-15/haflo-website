import React from 'react';

const LuxuryLivingSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Step into a world of<br />luxury & refined living
          </h2>

          <p className="text-lg text-gray-700 mt-4 mb-8">
            Step into a world of luxury and refined living, where<br />
            every detail is designed to elevate your lifestyle.
          </p>

          <div className="space-y-5 mt-16">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-medium text-blue-900">Expertise you can trust</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-medium text-blue-900">Proven track record</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-medium text-blue-900">Luxury and comfort at every step</span>
            </div>
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-visible rounded-lg text-left">
            <img 
              src="https://framerusercontent.com/images/tQR0dgR77ADU8ZQAGf0KSY9gBQ.png" 
              alt="Father and son browsing property listings" 
              className="w-4/5 h-auto rounded-lg shadow-lg object-cover"
            />

            {/* Blue overlay box - final correct placement */}
            <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-6 md:p-8 rounded-t-lg shadow-lg">
              <div className="text-[#c4fc68] text-6xl md:text-7xl font-bold">1992</div>
              <div className="text-lg md:text-xl font-semibold leading-tight mt-2">
                Building & sharing<br />dreams since
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LuxuryLivingSection;



