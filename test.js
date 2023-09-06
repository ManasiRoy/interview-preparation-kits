// Test 1 - The output should be; [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];
let numbersFirstAlphabetsSecond = (arr) => {
    let numbers = [];
    let alphabets = [];
    let finalArr = [];

    numbers = arr.filter((val) => typeof val === "number");

    alphabets = arr.filter((val) => typeof val === "string");

    finalArr = [...numbers, ...alphabets];

    return finalArr;
};

let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

console.log(numbersFirstAlphabetsSecond(arr));



// Test 2 - #1: Find the length of the longest substring without repeating characters
let getLength = function (str) {
    let currentString = [];
    let finalLength = 0;

    for (let i = 0; i < str.length; i++) {
        const currentCharacterIndex = currentString.indexOf(str[i]);

        if (currentCharacterIndex !== -1) {
            currentString.splice(0, currentCharacterIndex + 1);
        }

        currentString.push(str[i]);

        finalLength = Math.max(finalLength, currentString.length);
    }

    return finalLength;
};

const str = "abbbcabcdefef";

console.log(getLength(str));

// Test-3 - Rotate 2D matrix clockwise The output should be [[6, 3, 0], [7, 4, 1], [8, 5, 2]];
const clockWise = (mat) => {
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < r; c++) {
            let temp = mat[r][c];
            mat[r][c] = mat[c][r];
            mat[c][r] = temp;
        }
    }
    let finalMat = mat.map((r) => r.reverse());

    return finalMat;
};

let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];
console.log(clockWise(m));

// Test-4 - Find the second largest numbers
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    let largest = Math.max(arr[0], arr[1]);
    let secondLargest = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return "No second largest element found";
    }

    return secondLargest;
}

const numbers = [5, 2, 8, 9, 1, 10];
const secondLargest = findSecondLargest(numbers);
console.log("Second largest number:", secondLargest);

// Test-5 Find the number of decoding of digit sequence in javascript
function numDecodings(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }

        if (i > 1 && s[i - 2] !== '0' && parseInt(s[i - 2] + s[i - 1]) <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}

// Example usage
const digit_sequence = "226";
const num_ways = numDecodings(digit_sequence);
console.log("Number of decoding ways:", num_ways);

// Test-5 iven a number n find the number of pairs (x,y) where both x and y are less than n and highest common factor (hcf) of x and y is 1 javascript
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function countCoprimePairs(n) {
    let count = 0;

    for (let x = 1; x < n; x++) {
        for (let y = x + 1; y < n; y++) {
            if (gcd(x, y) === 1) {
                count++;
            }
        }
    }

    return count;
}

// Example usage
const n = 10;
const numPairs = countCoprimePairs(n);
console.log(`Number of coprime pairs less than ${n}:`, numPairs);
