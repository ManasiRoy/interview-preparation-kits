//Write a function that accepts an integer and converts the result to Roman numerals.

function intToRoman(num) {
    const romanNumerals = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let result = '';

    for (const [value, symbol] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}


// Test the function
console.log(intToRoman(3));  // Output: "III"
console.log(intToRoman(9));  // Output: "IX"
console.log(intToRoman(58));  // Output: "LVIII"
console.log(intToRoman(1994));  // Output: "MCMXCIV"