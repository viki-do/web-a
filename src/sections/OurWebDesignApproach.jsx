import React from 'react';
import { details } from '../constants';

const OurWebDesignApproach = () => {
  return (
    <div className='flex flex-col pt-20'>
      <p className='text-3xl text-center pb-10 lg:text-5xl lg:pb-20'>Our web design approach<span className='text-turquoise'>.</span></p>
      
      {/* Container for Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 mx-12'>
        {details.map(({ title, desc, img }) => (
          <div key={title} className='mb-10 rounded-md px-10 py-10 border-b-4 border-turquise shadow-md transition duration-300 ease-in-out hover:shadow-xl'>
            <img src={img} alt={title} className='h-12 mb-4'/>
            <p className='text-2xl font-normal pb-3'>{title}<span className='text-turquoise'>.</span></p>
            <p className='leading-6  lg:text-md'>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWebDesignApproach;
