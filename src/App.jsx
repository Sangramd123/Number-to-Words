
import React, { useState } from 'react';

import NumberConversion from "./components/NumberConversion";  

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [wordOutput, setWordOutput] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputNumber(value);
  };

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
  };

  const handleSubmit = () => {
    if (inputNumber) {
      setWordOutput(Number(inputNumber));

    }
  };

  const handleReset = () => {
    setInputNumber('');
    setCurrency('INR');
    setWordOutput('');
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray p-8 rounded-lg shadow-md pt-8 bg-gray-50">
        <h1 className="xl:text-[40px] text-[#1c2f44] md:text-2xl pt-4 pb-4 text-xl font-bold text-start mb-4 leading-normal md:leading-[2.5rem] xl:leading-[3rem]">
          Number to Words Converter
        </h1>
        
        {/* Currency Dropdown */}
        <div className="mb-4">
          <label htmlFor="currency" className="block text-gray-600 mb-2">Select Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="INR">Indian Rupee (INR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>

        {/* Number Input */}
        <input
          type="number"
          value={inputNumber}
          onChange={handleInputChange}
          placeholder="Enter a number"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />

        {/* Submit and Reset Buttons */}
        <div className="flex justify-between mb-4">
          <button
            onClick={handleSubmit}
            className="inline-flex items-center px-6 py-1 text-base justify-center rounded font-medium transition-all duration-200 ease-in-out border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-105 active:scale-95"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="ml-10  px-6 py-1 rounded font-medium bg-gray-600 text-white hover:bg-gray-700 hover:shadow-md hover:scale-105 focus:outline-none"
          >
            Reset
          </button>
        </div>

        {/* Pass data to the NumberConversion component */}
        { wordOutput !== '' && (<NumberConversion num={Number(inputNumber)} currency={currency} />)}
        
      </div>
    </div>
  );
}

export default App;
