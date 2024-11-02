import React, { useState } from 'react';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div className='flex flex-col lg:flex-row items-center lg:justify-between px-9 bg-turquise py-8 text-white text-2xl text-center lg:text-left gap-y-4 lg:gap-0 lg:px-40 lg:py-9'>
      <p className='lg:text-3xl'>
        <span className='font-bold'>Unleash</span> your digital potential, get in touch today.
      </p>
      
      <button
        className='bg-white text-dark-blue text-md font-bold py-4 px-6 rounded-full w-80 text-base lg:w-64' // Fixed width
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
      >
        {isHovered ? "Let's go 🚀" : "Click here to get started"}
      </button>
    </div>
  );
};

export default Banner;
