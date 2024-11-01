import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { cards } from '../constants';

const ServicesThatDriveResults = () => {
  return (  
    <div className='flex flex-col bg-dark-blue px-12 pt-20 pb-20 lg:px-40'>
      <div className='flex justify-center lg:justify-start items-center mb-12'>
        <p className='text-white text-4xl lg:text-6xl text-center lg:text-left'>
          <span className='text-turquise'>Web design services</span> <br /> 
          that drive results
          <span className='text-turquise'>.</span>
        </p>
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cards.map(({ title, desc, img }) => (
          <div 
            key={title} 
            className='mb-5 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-turquise'
          >
            <div className='relative overflow-hidden rounded-lg'>
              <img 
                src={img} 
                alt={title} 
                className="h-100 object-cover transition-transform duration-300 transform hover:scale-110" 
              />
              <div className='absolute inset-0 bg-dark-blue bg-opacity-70' />
              <div className='absolute bottom-0 left-0 p-5 text-white w-full'>
                <div className='flex justify-between items-end'>
                  <div className='flex flex-col flex-grow'>
                    <p className='text-3xl'>{title}<span className='text-turquise'>.</span></p>
                    <p>{desc}</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: '#09d691' }}
                    className="h-7 ml-2"
                  />
                </div>
              </div>
            </div>
            <hr className='h-0.5 border-none bg-turquise' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesThatDriveResults;
