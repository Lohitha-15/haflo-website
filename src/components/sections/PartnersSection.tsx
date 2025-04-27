import React from 'react';

const PartnersSection: React.FC = () => {
  const partnerLogos = [
    "https://framerusercontent.com/images/m2iRqc0vjWCAjaKDXwpBZLHL6Q.svg",
    "https://framerusercontent.com/images/VjMEe07s9HEE81fRBplh6VeiilY.svg",
    "https://framerusercontent.com/images/54zZDCErP56bz06CFc8rgyRqJbI.svg",
    "https://framerusercontent.com/images/c79tfRehsXD5pu167lnIsRMVvnk.svg",
    "https://framerusercontent.com/images/z5fRaFVV36hlMpbcgIeNIFBCs.svg"
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-12">
        Check our best clients & partners
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: '160px',
                height: '90px',
                margin: '0 36px',
                backgroundColor: '#fff',
                padding: '8px', // ensures a buffer around logos
                boxSizing: 'border-box',
              }}
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  minHeight: '60px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


