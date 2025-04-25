import React from 'react';

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, title }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg mb-4 cursor-pointer">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="bg-[#c4fc68] px-2.5 py-0.5 inline-block w-fit mb-2 rounded-md"> {/* Slight rounding with rounded-md */}
        <span className="text-xs font-medium">{date}</span>
      </div>
      <h3 className="text-[#0a2463] text-2xl font-bold leading-relaxed">{title}</h3>
    </div>
  );
};

export default NewsCard;
