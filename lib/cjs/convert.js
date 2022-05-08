"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSwahili = void 0;
/** Import numerals data */
const numerals_1 = require("./numerals");
/**
 * Convert number/digit to swahili word.
 * @param number number to convert
 * @returns swahili string
 */
const toSwahili = (number) => {
    if (number < 0) {
        return "hasi " + (0, exports.toSwahili)(-number);
    }
    else if (number === 0) {
        return "sifuri";
    }
    else {
        let result = "";
        for (let numeral of numerals_1.numerals) {
            if (number >= numeral.value) {
                if (number < 100) {
                    result += numeral.str;
                    number -= numeral.value;
                    if (number > 0)
                        result += " na ";
                }
                else {
                    let times = Math.floor(number / numeral.value);
                    result += numeral.str + " " + (0, exports.toSwahili)(times);
                    number -= numeral.value * times;
                    if (number > 0)
                        result += " na ";
                }
            }
        }
        return result;
    }
};
exports.toSwahili = toSwahili;
