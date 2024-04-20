// Longest substring in the given string without repeating any duplicate characters
// EX: "ababcda" --> "abcd"

function longestSubstringWithoutRepeatingCharacters(str) {
    let longestSubstring = '';
    let currentSubstring = '';
    const charMap = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charMap[char] !== undefined) {
            currentSubstring = str.slice(charMap[char] + 1, i);
        }

        // Update the index of the current character in the charMap
        charMap[char] = i;

        // Add the current character to the current substring
        currentSubstring += char;

        // Update the longest substring if the current substring is longer
        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring;
}

const str = "ababcda";
const longestSubstr = longestSubstringWithoutRepeatingCharacters(str);
console.log(longestSubstr); // Output: "abcd"