import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient items-center justify-center pt-28 lg:pt-60 lg:pl-40">
      <div className="text-center lg:text-left max-w-screen-lg lg:w-9/12 text-white">
        <p className="mb-2 text-4xl md:text-8xl">
          <span className="whitespace-nowrap">
            Your <span className="text-turquise">trusted web</span>
          </span>
          <span className="block lg:mt-2">
            design agency<span className="text-turquise">.</span>
          </span>
        </p>
        <p className="text-lg font-regular mb-4 leading-7 md:text-2xl lg:text-2xl text-center lg:text-left">
          <span className="block">
            Web Agency creates stunning, fast
          </span>
          <span className="block">
            and effective websites for new and
          </span>
          <span className="block lg:mt-2">
            established businesses.
          </span>
        </p>
        <button className="bg-turquise text-dark-blue text-md font-bold py-4 w-48 rounded-full mt-4 hover:bg-white">
          View our work
        </button>
      </div>
    </div>
  );
};

export default Hero;
