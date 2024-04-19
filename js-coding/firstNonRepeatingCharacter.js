function firstNonRepeatingCharacter(str) {
    const charCount = {}; // Object to store character frequencies

    // Count the frequency of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a frequency of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // Return null if no non-repeating character found
}

// Example usage:
const input = "aaaccff";
const output = firstNonRepeatingCharacter(input);
console.log(output); // Output: "c"
