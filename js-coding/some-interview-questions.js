// 1. Given a string, return the character that is most commonly used in the string
// example maxChar("abccccccd") === "c"
// maxChar("Apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxCount = 0;
    let maxChar = '';
  
    // Create character map
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    // Find the character with the highest count
    for (let char in charMap) {
      if (charMap[char] > maxCount) {
        maxCount = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  
  // Examples
  console.log(maxChar("abccccccd")); // Output: "c"
  console.log(maxChar("Apple 1231111")); // Output: "1"
  

// Title Case
// Capitalize the first letter of each word in the string
function titleCase(str) {
    return str
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word and convert the rest to lowercase
      .join(' '); // Join the words back into a single string
  }
  
  // Examples
  console.log(titleCase("I'm a little tea pot")); // Output: "I'm A Little Tea Pot"
  console.log(titleCase("sHoRt AnD sToUt")); // Output: "Short And Stout"
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Output: "Here Is My Handle Here Is My Spout"
  

// Count Vowels
// Write a function that returns the number of vowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let VowelsFind = []
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
        VowelsFind.push(char)
      }
    }
  
    return {count, VowelsFind};
  }
  
  // Examples
  console.log(countVowels("Hello World")); // Output: 3
  console.log(countVowels("JavaScript"));  // Output: 3
  console.log(countVowels("AEIOU aeiou")); // Output: 10
  console.log(countVowels("xyz"));         // Output: 0
  
// Pyramid String Pattern
// Write a funstion that accepts a positive number N. 
//The function should console log a pyramid shape with N levels using # character. 
//Make sure the pyramid has spaces on both the left *and* right hand sides
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);
    
    for (let row = 0; row < n; row++) {
      let level = '';
      
      for (let col = 0; col < 2 * n - 1; col++) {
        if (midpoint - row <= col && midpoint + row >= col) {
          level += '#';
        } else {
          level += ' ';
        }
      }
      
      console.log(level);
    }
  }
  
  pyramid(3);
  pyramid(5);

  
// Spiral Matrix
// Write a function that accepts an interger N and returns a NxN spiral matrix
function spiralMatrix(n) {
    // Create an empty NxN matrix
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;
    let counter = 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Fill the top row
      for (let col = startCol; col <= endCol; col++) {
        matrix[startRow][col] = counter++;
      }
      startRow++;
  
      // Fill the right column
      for (let row = startRow; row <= endRow; row++) {
        matrix[row][endCol] = counter++;
      }
      endCol--;
  
      // Fill the bottom row
      for (let col = endCol; col >= startCol; col--) {
        matrix[endRow][col] = counter++;
      }
      endRow--;
  
      // Fill the left column
      for (let row = endRow; row >= startRow; row--) {
        matrix[row][startCol] = counter++;
      }
      startCol++;
    }
  
    return matrix;
  }
  
  console.log(spiralMatrix(3));
  console.log(spiralMatrix(4));    