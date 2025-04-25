import React from 'react';


const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-base text-blue-900 opacity-50">Our Story</h3>
          </div>

          <div className="md:w-3/4">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 " style={{ lineHeight: '1.5' }}>  {/* Custom line height */}
                At Haflo, we believe that finding the perfect property is into more than just a transaction it's a journey toward discovering a place where life's most precious form to the moments unfold.
              </h2>

              <a
                href="#"
                className="inline-flex items-center text-blue-900 font-medium  py-3 rounded-full"
              >
                Learn more about us
                <span className="inline-flex items-center justify-center bg-[#c4fc68] p-1 rounded-full ml-2 group">
                  <img
                    src="https://framerusercontent.com/images/PBrvPBqTFiz7UgdIym57kgkaLtk.png"
                    alt="Arrow Icon"
                    className="h-6 w-6 group-hover:scale-110 transition-all duration-200"
                  />
                </span>
              </a>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;