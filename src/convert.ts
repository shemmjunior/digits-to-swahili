/** Import numerals data */
import { numerals } from "./numerals";

/**
 * Convert number/digit to swahili word.
 * @param number number to convert
 * @returns swahili string
 */
export const toSwahili = (number: number): string => {
    if (number < 0) {
        return "hasi " + toSwahili(-number);
      } else if (number === 0) {
        return "sifuri";
      } else {
        let result = "";
        for (let numeral of numerals) {
          if (number >= numeral.value) {
            if (number < 100) {
              result += numeral.str;
              number -= numeral.value;
              if (number > 0) result += " na ";
            } else {
              let times = Math.floor(number / numeral.value);
              result += numeral.str + " " + toSwahili(times);
              number -= numeral.value * times;
              if (number > 0) result += " na ";
            }
          }
        }
        return result;
      }
}