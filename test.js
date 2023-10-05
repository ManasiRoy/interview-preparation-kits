// Test-1 - Rotate 2D matrix clockwise The output should be [[6, 3, 0], [7, 4, 1], [8, 5, 2]];
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

// ======================================================================== //

// Test-2 Find the number of decoding of digit sequence in javascript
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


// =============================================================== //

//Test-3 given a number n find the number of pairs (x,y) where both x and y are less than n and highest common factor (hcf) of x and y is 1 javascript
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