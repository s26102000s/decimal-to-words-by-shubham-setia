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

  const value = typeof num === "number" ? num.toString() : num;

  if (isNaN(Number(value))) {
    return "NaN";
  }

  const [integerPart, decimalPart] = value.split(".");

  const integerWords = converter.convert(Number(integerPart));

  if (!decimalPart) return applyTextTransform(integerWords, textTransform);

  const decimalWords = decimalPart
    .split("")
    .map((digit) => converter.convert(Number(digit)))
    .join(" ");

  return applyTextTransform(`${integerWords} point ${decimalWords}`, textTransform);
};