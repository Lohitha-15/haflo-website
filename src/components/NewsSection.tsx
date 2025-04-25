import React from 'react';
import NewsCard from './NewsCard';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      image: 'https://framerusercontent.com/images/GIh7zrRVZsc2KnB156dOWhEJcw.png?scale-down-to=1024',
      date: 'APRIL 24, 2024',
      title: 'How to lock in the best mortgage rates now.'
    },
    {
      id: 2,
      image: 'https://framerusercontent.com/images/jadRD6i7Z2xwOYJDE8vEiGONmms.png',
      date: 'JUN 18, 2024',
      title: 'Steps to obtain the best mortgage rates for homes.'
    },
    {
      id: 3,
      image: 'https://framerusercontent.com/images/ndWOxVAuhu1MNqPjpPOxl8UBQ.png',
      date: 'MARCH 23, 2024',
      title: 'Adding value to your real estate investment project.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold text-[#0a2463] text-center mb-16">Latest in the news</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <NewsCard 
            key={item.id}
            image={item.image}
            date={item.date}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;