//Write a function that accepts an integer and converts the result to Roman numerals.

function intToRoman(num) {
    const romanNumerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    let result = '';

    for (let i in romanNumerals) {
        while (num >= i) {
            result += romanNumerals[i];
            num -= i;
        }
    }

    return result;
}

// Test the function
console.log(intToRoman(3));  // Output: "III"
console.log(intToRoman(9));  // Output: "IX"
console.log(intToRoman(58));  // Output: "LVIII"
console.log(intToRoman(1994));  // Output: "MCMXCIV"