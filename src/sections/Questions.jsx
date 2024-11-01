import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '../constants'

const Questions = () => {
  const [openQuestions, setOpenQuestions] = useState({})

  const toggleQuestion = (question) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [question]: !prev[question]
    }))
  }

  return (
    <div className='flex flex-col mt-16 px-12 lg:mx-60 lg:pb-10'>
      <p className='text-dark-blue text-4xl pb-8 text-center lg:text-5xl'>FAQ's</p>
      <p className='text-dark-blue text-sm font-normal pb-6 text-center leading-8'>
        Have questions about our WordPress website design services? We've compiled a list of frequently asked questions to help you make an informed decision. If you don't find what you're looking for, feel free to <span className='text-turquise'>contact</span> our team for personalised assistance.
      </p>
      {faqs.map(({ question, answer, answer2 }) => (
        <div key={question} className='mb-6 border-gray-200 shadow-md rounded-lg'>
          <div 
            className='p-4 cursor-pointer flex justify-between items-center h-20' 
            onClick={() => toggleQuestion(question)}
          >
            <p className='font-semibold'>{question}</p>
            {openQuestions[question] ? (
              <FontAwesomeIcon icon={faMinus} style={{ color: "#09d691" }} className='h-6' />
            ) : (
              <FontAwesomeIcon icon={faPlus} style={{ color: "#09d691" }} className='h-6' />
            )}
          </div>
          {openQuestions[question] && (
            <div className='p-4'>
              <p>{answer}</p>
              <p>{answer2}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Questions