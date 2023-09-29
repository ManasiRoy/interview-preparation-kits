function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

const isPal = isPalindrome('A man, a plan, a canal, Panama');
console.log(isPal); // Outputs: true
