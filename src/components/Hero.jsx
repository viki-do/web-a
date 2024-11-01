import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient items-center pt-28 lg:items-start justify-center lg:justify-start lg:pt-60 lg:pl-40">
      <div className="text-center lg:text-left max-w-screen-lg lg:w-9/12 px-4 text-white">
        <p className=" mb-7 text-4xl px-4 md:px-12 lg:px-0">
          <span className="whitespace-nowrap lg:text-8xl lg:block">
            Your <span className="text-turquise">trusted web</span>
          </span>
          <span className="block lg:text-8xl lg:mt-2">
            design agency<span className="text-turquise">.</span>
          </span>
        </p>
        <p className="text-lg font-regular mb-8 leading-7 px-4 md:px-12 lg:px-0 lg:text-2xl lg:w-9/12">
          <span className="lg:block">
            Web-Agency creates stunning, fast, and effective
          </span>
          <span className="block lg:mt-2">
            websites for new and established businesses.
          </span>
        </p>
        <button className="bg-turquise text-dark-blue text-md font-bold py-4 w-48 rounded-full mt-4 hover:bg-white lg:mx-0 mx-auto">
          View our work
        </button>
      </div>
    </div>
  );
};
export default Hero;