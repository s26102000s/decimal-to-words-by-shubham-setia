import { toWords } from 'number-to-words';

// Utility function to convert a decimal number to words with exact decimal values
export const convertDecimalToWords = (num: number): string => {
  const [integerPart, decimalPart] = num.toString().split('.');
  const integerWords = toWords(Number(integerPart));
  if (!decimalPart) return integerWords;
  
  const decimalWordsArray = decimalPart.split('').map(digit => toWords(Number(digit)));
  const decimalWords = decimalWordsArray.join(' ');
  
  return `${integerWords} point ${decimalWords}`;
};
