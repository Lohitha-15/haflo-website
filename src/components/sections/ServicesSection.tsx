import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "https://framerusercontent.com/images/KvS0CxxXMGLbAHAfLEaof3rdAg.png",
      title: "Commercial service",
      description: "Assisting clients in buying, selling, or leasing to commercial properties such office for in buildings retail spaces, and industrial."
    },
    {
      icon: "https://framerusercontent.com/images/tBGoOyVqWNmhlIZaqfTetGsk.png",
      title: "Rental services",
      description: "Helping clients buy, sell, or lease commercial properties, including office buildings, retail spaces, and industrial facilities."
    },
    {
      icon: "https://framerusercontent.com/images/PJu3iVmrd6f9VNeL3blmgjAUCA.png",
      title: "Property management",
      description: "We assist clients with buying, selling, or leasing commercial properties such as office buildings, retail, and industrial spaces."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-900 mb-16">
        Your trusted ally in finding<br />your dream home
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-gray-50 p-10 rounded-lg flex flex-col items-center justify-center min-h-[520px]"
    >
      <img src={service.icon} alt={service.title} className="w-28 h-28 mb-6" />
      <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{service.title}</h3>
      <p className="text-center text-gray-600">{service.description}</p>
    </div>
  ))}
</div>



    </section>
  );
};

export default ServicesSection;