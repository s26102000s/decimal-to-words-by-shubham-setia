import { ToWords } from 'to-words';

const toWords = new ToWords().convert;

const applyTextTransform = (text: string, textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'): string => {
  switch (textTransform) {
    case 'capitalize':
      return text.replace(/\b\w/g, char => char.toUpperCase());
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    default:
      return text;
  }
};
// Utility function to convert a decimal number to words with exact decimal values
export const convertDecimalToWords = (num: number, textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'): string => {
  const [integerPart, decimalPart] = num.toString().split('.');
  const integerWords = toWords(Number(integerPart));
  if (!decimalPart) return applyTextTransform(integerWords, textTransform);
  
  const decimalWordsArray = decimalPart.split('').map(digit => toWords(Number(digit)));
  const decimalWords = decimalWordsArray.join(' ');
  
  return applyTextTransform(`${integerWords} point ${decimalWords}`, textTransform);
};


