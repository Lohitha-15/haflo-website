import React from 'react';
const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 bg-[#c4fc68] rounded-full mr-2">
        <div className="w-6 h-6 bg-blue-900 rounded-l-full"></div>
      </div>
      <span className="text-2xl font-bold text-blue-900">Haflo</span>
    </div>
  );
};

export default Logo;