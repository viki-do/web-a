import React, { useState } from 'react';
import { nextButton, activeButton } from '../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import heatmap from '../assets/heatmap.svg';
import landingPage from '../assets/landingPage.svg';
import webDevelopment from '../assets/webDevelopment.svg';
import webDevices from '../assets/webDevices.svg';

const images = [
  { id: 1, src: heatmap, alt: 'Web Design 1' },
  { id: 2, src: landingPage, alt: 'Web Design 2' },
  { id: 3, src: webDevelopment, alt: 'Web Design 3' },
  { id: 4, src: webDevices, alt: 'Web Design 4' },
  
];

const Creations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col ">
      <p className='text-dark-blue text-4xl leading-7 pb-10 pl-12 pt-30 lg:text-6xl lg:pl-40 lg:pt-20 lg:pb-6'>
        View our latest web creations<span className='text-turquise'>.</span>
      </p>
      <div className='flex justify-center items-center mb-6 overflow-hidden relative h-52 lg:h-100'>
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className='object-cover transition-transform duration-300 ease-in-out h-full w-[70%] max-w-[640px]' // Szélesség beállítása
        />
      </div>
      <div className='pt-10 pb-10 items-center'>
        <div className='flex items-center w-full justify-center gap-3 mb-24 lg:gap-5'>
          <button onClick={prevImage}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#484A60' }} className='h-7 pr-4 lg:pr-14' />
          </button>
          {images.map((image, index) => (
            <button key={image.id} onClick={() => selectImage(index)}>
              <img 
                src={index === currentIndex ? activeButton : nextButton} 
                alt="button" 
                className={`transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
              />
            </button>
          ))}
          <button onClick={nextImage}>
            <FontAwesomeIcon icon={faArrowRight} style={{ color: '#484A60' }} className='h-7 pl-4 lg:pl-14' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Creations;
