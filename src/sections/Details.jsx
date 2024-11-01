import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services } from '../constants';

const Details = () => {
  return (
    <div className='flex flex-col lg:flex-row mx-10 lg:mx-40 mb-16'>
      <div className='left-side w-full lg:w-1/2 text-dark-blue mb-3 flex flex-col justify-between'>
        <button className="bg-turquise text-white text-xs shadow-xl font-semibold w-44 py-3 tracking-wider rounded-3xl mb-5">
          WHAT WE DO
        </button>
        <p className='text-3xl pb-3 leading-tight lg:text-5xl'>
          <span className='font-bold hidden lg:inline'>Web design solutions</span>
          <span className='font-bold lg:hidden'>Web design solutions</span>
          <br className='hidden lg:inline' />
          <span className='hidden lg:inline'>for businesses</span>
          <span className='lg:hidden'>for businesses</span>
          <br className='hidden lg:inline' />
          <span className='hidden lg:inline'>growth</span>
          <span className='lg:hidden'>growth</span>
          <span className='text-turquise'>.</span>
        </p>
        <div className='flex-grow text-xs leading-6 lg:text-base lg:leading-7 pb-4'>
          <p>At Web-A Ltd, we're passionate about crafting exceptional digital experiences that drive results. As a leading web design agency, we specialise in creating visually stunning, user-friendly, and high-performing websites that elevate your brand and engage your audience. We believe that a well-designed website is more than just an online presence - it's a powerful tool for achieving your business goals.</p>
          <p>Our team of talented designers, developers, and strategists collaborate closely with you to understand your unique vision and objectives. We then translate those insights into a <span className='text-turquise'>custom web design solution</span> that reflects your brand identity, resonates with your target audience, and delivers measurable results.</p>
          <p>
            <span className='font-bold'>Ready to transform your online presence? <br /> </span>
            <span className='text-turquise'>Contact us</span> today for a free consultation and discover how our web design expertise can help your business thrive.
          </p>
          <button className='bg-turquise text-white text-md font-bold w-60 py-4 rounded-full hover:bg-black mt-5 mb-5'>
            Get my Free Consultation
          </button>
        </div>
      </div>

      <div className='min-w-12'></div> 

      <div className='right-side w-full lg:w-1/2 flex flex-col'>
        {services.map(({ title, desc, logo }) => (
          <div key={title} className='bg-card-gray py-3 px-2 mb-3 lg:py-5 h-44 lg:h-40 flex flex-col'>
            <div className='flex p-2 flex-grow'>
              <div className='flex-col w-1/12 justify-center items-center pr-8 pl-1 '>
                <FontAwesomeIcon icon={logo.icon} style={{ color: logo.color }} className='lg:h-5' />
              </div>
              <div className='w-11/12 text-dark-blue'>
                <div className='block pb-2 '>
                  <p className='text-lg font-medium lg:text-xl'>{title}</p>
                </div>
                <p className='text-sm leading-7 lg:text-sm'>{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
