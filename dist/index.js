"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDecimalToWords = void 0;
var to_words_1 = require("to-words");
var converter = new to_words_1.ToWords();
var applyTextTransform = function (text, textTransform) {
    switch (textTransform) {
        case 'capitalize':
            return text.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        default:
            return text;
    }
};
// Utility function to convert a decimal number to words with exact decimal values
var convertDecimalToWords = function (num, textTransform) {
    var value = typeof num === "number" ? num.toString() : num;
    if (isNaN(Number(value))) {
        return "NaN";
    }
    var _a = value.split("."), integerPart = _a[0], decimalPart = _a[1];
    var integerWords = converter.convert(Number(integerPart));
    if (!decimalPart)
        return applyTextTransform(integerWords, textTransform);
    var decimalWords = decimalPart
        .split("")
        .map(function (digit) { return converter.convert(Number(digit)); })
        .join(" ");
    return applyTextTransform("".concat(integerWords, " point ").concat(decimalWords), textTransform);
};
exports.convertDecimalToWords = convertDecimalToWords;
