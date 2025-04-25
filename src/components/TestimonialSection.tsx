import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Working with Haflo was an absolute pleasure. Their team guided us through every step of the home-buying process, answering all of our questions & providing invaluable advice. and thanks to their expertise we found our dream home.",
      name: "Brooklyn Simmons",
      location: "Los Angeles, CA",
      profileImages: [
        "https://framerusercontent.com/images/cXX2ryPARm4xVyO03c9kj6ybIE.png",
        "https://framerusercontent.com/images/9QFoWDOoAweQPj2ybTEOaaBO5PQ.png",
        "https://framerusercontent.com/images/r46iZ5lfZWXZYNSw2IehsQQ4M.png"
      ],
    },
    {
      quote: "Partnering with Haflo was a great decision. They led us through every stage of the home-buying process, addressing all our concerns and offering expert advice. Their guidance made finding our dream home an enjoyable experience.",
      name: "Harper Adams",
      location: "New York, NY",
      profileImages: [
        "https://framerusercontent.com/images/cXX2ryPARm4xVyO03c9kj6ybIE.png",
        "https://framerusercontent.com/images/9QFoWDOoAweQPj2ybTEOaaBO5PQ.png",
        "https://framerusercontent.com/images/r46iZ5lfZWXZYNSw2IehsQQ4M.png"
      ],
    },
    {
      quote: "Haflo made the entire home-buying process seamless. Their team answered every question, provided expert advice, and guided us through each step. Thanks to their professionalism and knowledge, we found the perfect home for our needs.",
      name: "Madison Parker",
      location: "San Francisco, CA",
      profileImages: [
        "https://framerusercontent.com/images/cXX2ryPARm4xVyO03c9kj6ybIE.png",
        "https://framerusercontent.com/images/9QFoWDOoAweQPj2ybTEOaaBO5PQ.png",
        "https://framerusercontent.com/images/r46iZ5lfZWXZYNSw2IehsQQ4M.png"
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 max-w-7xl mx-auto">
      {/* Quotation mark replaced with image */}
      <div className="mb-8">
        <img 
          src="https://framerusercontent.com/images/CnLdPHg27E1XJ2io3n5NUoa68KM.svg" 
          alt="Quotation mark" 
          className="w-10 h-10" 
        />
      </div>
      
      {/* Testimonial Text */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-2xl font-bold text-blue-900 mb-6" style={{ lineHeight: '1.5' }}>
          "{testimonials[activeIndex].quote}"
        </p>
        
        <h3 className="text-lg font-bold text-blue-900 mb-1">
          {testimonials[activeIndex].name}
        </h3>
        
        <p className="text-sm text-gray-600">
          {testimonials[activeIndex].location}
        </p>
      </div>
      
      {/* Profile Images */}
      <div className="flex justify-center space-x-4 mb-8">
        {[0, 1, 2].map((index) => (
          <div 
            key={index} 
            className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
              index === activeIndex ? 'scale-105' : ''
            }`}
            style={{
              borderColor: index === activeIndex ? '#c4fc68' : 'transparent',
              transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
            }}
            onClick={() => setActiveIndex(index)}
          >
            <img 
              src={testimonials[0].profileImages[index]} 
              alt={`Profile ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
