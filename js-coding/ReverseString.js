function reverseString(str) {
    return str.split('').reverse().join('');
}

const reversed = reverseString('Hello, World!');
console.log(reversed); // Outputs: "!dlroW ,olleH"