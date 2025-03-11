// NumberConversion.js

import { toWords } from 'number-to-words';

// Function to convert numbers into Indian words (Lakhs, Crores)
const convertToIndianWords = (num) => {
  if (num === 0) return 'Zero';

  let words = [];
  const units = ['Hundred', 'Thousand', 'Lakh', 'Crore'];

  const getDigitsInWords = (num) => {
    const ones = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
      'Eighteen', 'Nineteen'
    ];

    const tens = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    if (num < 20) return ones[num];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + ones[num % 10] : '');
    return ones[Math.floor(num / 100)] + ' Hundred ' + getDigitsInWords(num % 100);
  };

  // Indian Number system for larger numbers (Lakh, Crore)
  let crore = Math.floor(num / 10000000);
  let lakh = Math.floor((num % 10000000) / 100000);
  let thousand = Math.floor((num % 100000) / 1000);
  let hundred = Math.floor((num % 1000) / 100);
  let remainder = num % 100;

  if (crore > 0) words.push(getDigitsInWords(crore) + ' Crore');
  if (lakh > 0) words.push(getDigitsInWords(lakh) + ' Lakh');
  if (thousand > 0) words.push(getDigitsInWords(thousand) + ' Thousand');
  if (hundred > 0) words.push(getDigitsInWords(hundred) + ' Hundred');
  if (remainder > 0) words.push(getDigitsInWords(remainder));

  return words.join(' ').trim();
};

// Component to handle number to words conversion based on currency
const NumberConversion = ({ num, currency }) => {
  let numberInWords = '';

  // If the currency is INR, convert using Indian numbering system (Lakhs, Crores)
  if (currency === 'INR') {
    numberInWords = convertToIndianWords(num);
  } else {
    // Use `toWords` from the `number-to-words` library for USD, GBP, EUR
    numberInWords = toWords(num);
  }

  let currencyWord = '';
  switch (currency) {
    case 'INR':
      currencyWord = 'Rupees';
      break;
    case 'USD':
      currencyWord = 'Dollars';
      break;
    case 'GBP':
      currencyWord = 'Pounds';
      break;
    case 'EUR':
      currencyWord = 'Euros';
      break;
    default:
      currencyWord = '';
  }

  return (
    <div className="text-center text-xl font-semibold text-gray-700">
      {numberInWords ? `${numberInWords} ${currencyWord}` : 'Please enter a number and select a currency'}
    </div>
  );
};

export default NumberConversion;
