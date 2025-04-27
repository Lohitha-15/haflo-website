import React from 'react';

const PropertyGallery: React.FC = () => {
  const properties = [
    {
      id: 1,
      img: "https://framerusercontent.com/images/pqFVETxJqkOCG7nQr1a17UqBb8.png?scale-down-to=1024",
      size: "large"
    },
    {
      id: 2,
      img: "https://framerusercontent.com/images/wp5mJKuuwPh7rXGdpFk75JY2NsU.png?scale-down-to=512",
      size: "small"
    },
    {
      id: 3,
      img: "https://framerusercontent.com/images/U6XpFcbSK5SroGZCL1GaFcibw.png?scale-down-to=512",
      size: "small"
    },
    {
      id: 4,
      img: "https://framerusercontent.com/images/O57vg4ETDIR6BidUkG43vFFZc.png?scale-down-to=512",
      size: "small"
    },
    {
      id: 5,
      img: "https://framerusercontent.com/images/1SQTOoaty1Jd5bLChK5KhP9yeKU.png?scale-down-to=1024",
      size: "small"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-1">
        {/* Left: Large image */}
        <div className="col-span-12 md:col-span-6 h-[590px] overflow-hidden">
          <img 
            src={properties[0].img}
            alt="Featured property"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right: Small images */}
        <div className="col-span-12 md:col-span-6 h-[590px] flex flex-col gap-1"> {/* Full height match left */}
          {/* Top two images */}
          <div className="flex flex-1 gap-1">
            {properties.slice(1, 3).map((property) => (
              <div key={property.id} className="flex-1 overflow-hidden">
                <img
                  src={property.img}
                  alt={`Property ${property.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Bottom two images */}
          <div className="flex flex-1 gap-1">
            {properties.slice(3, 5).map((property) => (
              <div key={property.id} className="flex-1 overflow-hidden">
                <img
                  src={property.img}
                  alt={`Property ${property.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;

