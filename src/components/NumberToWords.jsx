import React, { useState } from 'react';
import { toWords } from 'number-to-words';

const NumberToWords = () => {
  const [number, setNumber] = useState('');
  const [word, setWord] = useState('');

  const handleChange = (e) => {
    const inputNumber = e.target.value;
    setNumber(inputNumber);

    if (inputNumber && !isNaN(inputNumber)) {
      setWord(toWords(inputNumber));
    } else {
      setWord('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-50">
      <div className="w-full max-w-lg bg-gray p-8 rounded-lg shadow-md bg-stone-50 ">
        <h1 className="text-3xl font-bold text-center text-black-600 mb-6">
          Number to Words Converter
        </h1>
        <div className="mb-4">
          <input
            type="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter a number"
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {word && (
          <div className="mt-6 text-xl text-center text-gray-700 bg-sky-100">
            <strong>In words:</strong> <span className="text-black-600 ">{word}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberToWords;
