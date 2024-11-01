import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white px-6 lg:px-40 leading-7 mt-20 flex flex-col relative lg:grid lg:grid-cols-12 lg:gap-4">
      {/* Left side content */}
      <div className="flex flex-col col-span-7 relative">
        <img 
          src="./src/assets/quote.svg" 
          alt="quote icon" 
          className='absolute left-10 -top-8 z-0 w-40 lg:w-60'
        />
        <p className="my-8 text-lg z-10 lg:text-xxl"> 
          "This is the second time I've worked with the team at Web-a, and you don't return for round 2 with an agency unless they delivered the first time. These guys are a pleasure to deal with and I will continue to work with and recommend them."
        </p>
        <div className="flex gap-4 items-center z-10 relative">
          <div className="w-12 h-12 border-dark-blue-2 border-2 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./src/assets/company.jpg" alt="Company Logo" className="h-full object-cover" />
          </div>
          <div className='font-bold leading-tight'>
            <p>John Doe</p>
            <p className='text-light-gray'>Co-Founder & Chairman at Web-a</p>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex pt-10 col-span-5 justify-center lg:justify-end">
        <img src="./src/assets/person.png" alt="Person" className="h-85 object-cover lg:h-100" />
      </div>
    </div>
  );
};

export default Testimonial;
