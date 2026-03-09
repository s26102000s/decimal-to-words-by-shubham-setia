import { ToWords } from 'to-words';

const converter = new ToWords();

const applyTextTransform = (
  text: string,
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
): string => {
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
export const convertDecimalToWords = (
  num: number | string,
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
): string => {

  if (typeof num === 'string') {
    if (isNaN(Number(num))) {
      return 'NaN';
    }
    num = Number(num);
  }

  const [integerPart, decimalPart] = num.toString().split('.');

  const integerWords = converter.convert(Number(integerPart));

  if (!decimalPart) return applyTextTransform(integerWords, textTransform);

  const decimalWordsArray = decimalPart
    .split('')
    .map(digit => converter.convert(Number(digit)));

  const decimalWords = decimalWordsArray.join(' ');

  return applyTextTransform(
    `${integerWords} point ${decimalWords}`,
    textTransform
  );
};