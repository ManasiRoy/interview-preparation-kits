function isPalindrome(str) {
    const cleanStr = str.toLowerCase().trim();
    const reversed = cleanStr.split("").reverse().join("");

    return cleanStr === reversed;
}

const isPal = isPalindrome('madam');
console.log(isPal); // Outputs: true