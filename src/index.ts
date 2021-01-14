export function toswahili(n: number):string {
    
    var numerals = [
      { value: 1000000000000000000000, str: "sextillion" },
      { value: 1000000000000000000, str: "quintillion" },
      { value: 1000000000000000, str: "quadrillion" },
      { value: 1000000000000, str: "trilioni" },
      { value: 1000000000, str: "bilioni" },
      { value: 1000000, str: "Milioni" },
      { value: 100000, str: "laki" },
      { value: 1000, str: "elfu" },
      { value: 100, str: "mia" },
      { value: 90, str: "tisini" },
      { value: 80, str: "themanini" },
      { value: 70, str: "sabini" },
      { value: 60, str: "sitini" },
      { value: 50, str: "hamsini" },
      { value: 40, str: "arobaini" },
      { value: 30, str: "thelathini" },
      { value: 20, str: "ishirini" },
      { value: 19, str: "kumi na tisa" },
      { value: 18, str: "kumi na nane" },
      { value: 17, str: "kumi na saba" },
      { value: 16, str: "kumi na sita" },
      { value: 15, str: "kumi na tano" },
      { value: 14, str: "kumi na nne" },
      { value: 13, str: "kumi na tatu" },
      { value: 12, str: "kumi na mbili" },
      { value: 11, str: "kumi na moja" },
      { value: 10, str: "kumi" },
      { value: 9, str: "tisa" },
      { value: 8, str: "nane" },
      { value: 7, str: "saba" },
      { value: 6, str: "sita" },
      { value: 5, str: "tano" },
      { value: 4, str: "nne" },
      { value: 3, str: "tatu" },
      { value: 2, str: "mbili" },
      { value: 1, str: "moja" }    
    ];

    if (n < 0) {
      return "hasi " + toswahili(-n);
    } else if (n === 0) {
      return "sifuri";
    } else {
      let result = "";
      for (let numeral of numerals) {
        if (n >= numeral.value) {
          if (n < 100) {
            result += numeral.str;
            n -= numeral.value;
            if (n > 0) result += " na ";
          } else {
            let times = Math.floor(n / numeral.value);
            result += numeral.str + " " + toswahili(times);
            n -= numeral.value * times;
            if (n > 0) result += " na ";
          }
        }
      }
      return result;
    
}
}