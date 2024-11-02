import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Info = () => {
  const [bgColor, setBgColor] = useState('bg-gradient-to-r from-gray-blue to-turquise-blue'); 

  const changeBackground = () => {
    console.log(window.scrollY); 
    if (window.scrollY > 110) {
      setBgColor('bg-purple-blue'); 
    } else {
      setBgColor('bg-gradient-to-r from-gray-blue to-turquise-blue'); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full transition-colors duration-300 z-30 h-8 ${bgColor}`}>
      <nav className='w-full h-full flex justify-center md:justify-end items-center gap-3 px-8'>
        {/* Wrap both items in a single div for alignment */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#09d691' }} />
            <p className='text-white font-bold ml-1 text-xxs'>1234 567 890</p>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#09d691' }} />
            <p className='text-white font-bold ml-1 text-xxs'>hello@web-a.com</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Info;
