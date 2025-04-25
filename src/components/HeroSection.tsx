import React from 'react';
import HeroContent from './HeroContent';
import HeroImages from './HeroImages';

const HeroSection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 md:px-12 bg-white bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://framerusercontent.com/images/Ri1EH9SBu5XOQCL91Q95Hmmx8MM.png?scale-down-to=2048)',
      }}
    >
      <HeroContent />
      <HeroImages />
    </section>
  );
};

export default HeroSection;
