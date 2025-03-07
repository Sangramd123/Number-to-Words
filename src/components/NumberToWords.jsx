import React, { useState } from 'react';
import { toWords } from 'number-to-words';

const NumberToWords = () => {
  const [number, setNumber] = useState('');
  const [word, setWord] = useState('');

  const handleChange = (e) => {
    const inputNumber = e.target.value;
    setNumber(inputNumber);

  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (number && !isNaN(number)) {
      setWord(toWords(number));
    } else {
      setWord('');
    }
  }

  const handleReset = ()=> {
    setNumber('');
    setWord('');
  }

  return (
    
    <div className="flex justify-center pt-6  h-screen bg-gray-50 ">
      <form onSubmit={handleSubmit}>
      <h1 class="xl:text-[40px] text-[#1c2f44] md:text-2xl pt-10 pb-8 text-xl font-bold text-start mb-4 leading-normal md:leading-[2.5rem] xl:leading-[3rem]">Number to Words Converter </h1>
      <div className="w-full max-w-lg bg-gray p-8 rounded-lg shadow-md pt-8 bg-gray-50 ">
        <div className="mb-6">
          <label className='text-xl font-bold '> Enter the Number </label>
          <input
            type="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter a number"
            className="w-full p-4 text-lg bg-white border mt-8 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
       
        <button type="submit" class=" inline-flex items-center px-6 py-1 text-base justify-center rounded font-medium transition-all duration-200 ease-in-out border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-105 active:scale-95"> Submit </button>
        <button type="button" onClick={handleReset} class="ml-10 px-6 py-1 rounded font-medium bg-gray-600 text-white hover:bg-gray-700 hover:shadow-md hover:scale-105 focus:outline-none">Reset</button>
        
      </div>
      <label>{word && (
          <div className="mt-6 text-xl max-w-lg text-center text-gray-700 bg-sky-100">
            <strong>In words:</strong> <span className="text-black-600 ">{word}</span>
          </div>
        )}</label>
      </form>
    </div>

  );
};

export default NumberToWords;
