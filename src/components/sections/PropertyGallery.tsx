// import React from 'react';

// const PropertyGallery: React.FC = () => {
//   const properties = [
//     {
//       id: 1,
//       img: "https://framerusercontent.com/images/pqFVETxJqkOCG7nQr1a17UqBb8.png?scale-down-to=1024",
//       size: "large"
//     },
//     {
//       id: 2,
//       img: "https://framerusercontent.com/images/wp5mJKuuwPh7rXGdpFk75JY2NsU.png?scale-down-to=512",
//       size: "small"
//     },
//     {
//       id: 3,
//       img: "https://framerusercontent.com/images/U6XpFcbSK5SroGZCL1GaFcibw.png?scale-down-to=512",
//       size: "small"
//     },
//     {
//       id: 4,
//       img: "https://framerusercontent.com/images/O57vg4ETDIR6BidUkG43vFFZc.png?scale-down-to=512",
//       size: "small"
//     },
//     {
//       id: 5,
//       img: "https://framerusercontent.com/images/1SQTOoaty1Jd5bLChK5KhP9yeKU.png?scale-down-to=1024",
//       size: "small"
//     }
//   ];

//   return (
//     <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
//       <div className="grid grid-cols-12 gap-4">
//         {/* Large image on the left */}
//         <div className="col-span-12 md:col-span-6 lg:col-span-8 h-[600px] overflow-hidden rounded-lg">
//           <img 
//             src={properties[0].img}
//             alt="Featured property"
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//           />
//         </div>

//         {/* Grid of smaller images on the right */}
//         <div className="col-span-12 md:col-span-5 lg:col-span-4 grid grid-cols-2 gap-4">
//           {properties.slice(1).map((property) => (
//             <div 
//               key={property.id}
//               className="h-[290px] overflow-hidden rounded-lg"
//             >
//               <img 
//                 src={property.img}
//                 alt={`Property ${property.id}`}
//                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertyGallery;

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
        {/* Left: Large image takes exactly 6/12 (half) */}
        <div className="col-span-12 md:col-span-6 h-[600px] overflow-hidden ">
          <img 
            src={properties[0].img}
            alt="Featured property"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right: Small images in 2-column grid, also takes 6/12 (half) */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-1">
          {properties.slice(1).map((property) => (
            <div 
              key={property.id}
              className="h-[290px] overflow-hidden "
            >
              <img 
                src={property.img}
                alt={`Property ${property.id}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
