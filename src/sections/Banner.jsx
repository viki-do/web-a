import React, { useState } from 'react';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div className='flex flex-col px-4 sm:px-9 bg-turquise py-4 sm:py-6 items-center text-white text-center lg:px-40 lg:py-8'>
      <div className='flex flex-col lg:flex-row lg:justify-between w-full lg:items-center'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-center'>
          <p className='text-2xl sm:text-3xl whitespace-nowrap lg:mr-2 lg:text-3xl'>
            Want to grow your business
          </p>
          <p className='text-2xl sm:text-3xl font-bold whitespace-nowrap hidden lg:inline lg:text-3xl'>
            digitally?
          </p>
          <span className='text-2xl sm:text-3xl font-bold whitespace-nowrap lg:hidden'>
            digitally?
          </span>
        </div>
        {/* Kis kijelzőn középre igazítás */}
        <div className="flex justify-center w-full lg:w-auto">
          <button
            className='bg-white text-dark-blue text-md font-bold py-4 px-6 rounded-full w-80 mt-4 lg:mt-0 lg:w-64' // Margin for spacing
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Let's go 🚀" : "Click here to get started"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

