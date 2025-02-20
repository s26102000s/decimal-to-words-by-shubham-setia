# Decimal to Words by [Shubham Setia](https://github.com/s26102000s)

[![npm version](https://badge.fury.io/js/decimal-to-words-by-shubham-setia.svg)](https://badge.fury.io/js/decimal-to-words-by-shubham-setia)
[![Build Status](https://travis-ci.org/s26102000s/decimal-to-words-by-shubham-setia.svg?branch=master)](https://travis-ci.org/s26102000s/decimal-to-words-by-shubham-setia)

A TypeScript utility function to convert decimal numbers to words with exact decimal values, designed for use in JavaScript and TypeScript projects.

## Installation

You can install this package using npm:

## bash
```
npm install decimal-to-words-by-shubham-setia
```

or using yarn:

## bash
```
yarn add decimal-to-words-by-shubham-setia
```

## Usage

```
import { convertDecimalToWords } from 'decimal-to-words-by-shubham-setia';

const number = 123.456;
const words = convertDecimalToWords(number, 'capitalize');
console.log(words); // "One Hundred Twenty-Three Point Four Five Six"
```

## API
convertDecimalToWords(num: number, textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'): string

- `num`: The decimal number to convert.
- `textTransform`: Optional. The text transformation to apply. Can be 'none', 'capitalize', 'uppercase', or 'lowercase'. Default is 'none'.

Returns: The word representation of the number.

Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Created by [Shubham Setia](https://github.com/s26102000s).
