import React from 'react';
import { infos } from '../constants';

const MaintainYourWebsite = () => {
  return (
    <div className='flex flex-col pl-12 pt-20 text-3xl bg-gradient2 lg:pt-40 lg:pl-40'>
      <p className='pb-20 text-3xl lg:text-7xl lg:pb-40'>
        <span className='font-bold'>Effortlessly maintain</span>
        <span className="hidden lg:inline"> </span>
        <span className='whitespace-nowrap lg:block'>your website<span className='text-turquise'>.</span></span>
      </p>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='lg:w-4/12'>
          {infos.map(({ title, desc, button }) => (
            <div key={title} className='text-sm pb-16'>
              <p className='pb-6 text-3xl'>{title}<span className='text-turquise'>.</span></p>
              <p className='pb-6 leading-6'>{desc}</p>
              <a
                href="#"
                className="relative inline-block text-lg font-semibold after:content-[''] after:block after:h-[3px] after:bg-turquise after:mt-1"
              >
                {button}
              </a>
            </div>
          ))}
        </div>
        <div className='lg:w-8/12 lg:flex lg:justify-end lg:items-start lg:pt-0 lg:pl-10'>
          <img 
            src="./src/assets/options.svg" 
            alt="web design" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MaintainYourWebsite;
