import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-white px-12 pt-20 lg:px-40 lg:pt-24 lg:w-4/6'>
      <h2 className='font-regular text-dark-blue tracking-tighter text-3xl pb-4 lg:text-6xl'>
        Hi, we're a <span className='font-bold'>web design<br/> agency </span> based in Oxfordshire, <br /> UK <span className='text-turquise'>.</span>
      </h2>
      <p className='pb-5 lg:text-sm leading-6'>Web-A is a full-service <span className='font-bold'>web design agency</span> specialising in crafting captivating online experiences. We partner with businesses of all sizes to build high-performing <span className='text-turquise'>WordPress websites</span> , optimise search visibility through <span className='text-turquise'>SEO</span>  and PPC, and capture brand essence through professional <span className='text-turquise'>photography and video production</span>.</p>
      <p className='pb-8 lg:text-sm left-6'>Our client-centric approach and proven expertise ensure measurable results that drive your business forward. Elevate your brand with Web-A, your trusted web design agency.</p>
      <button className='bg-turquise text-white text-md font-bold py-4 px-10 rounded-full hover:bg-black'>
          View our web design work
      </button>
    </div>
  );
};

export default About;
