// Given an array nums with n objects colored red, white, or blue, sort them in -place so that objects of the same color are adjacent, with  the colors in the order red, white, and blue.


/* ==========  Solution ========== */

// You have an array nums with values representing 3 colors:
// 0 → red
// 1 → white
// 2 → blue

function sortColors(nums) {
    nums.sort((a, b) => a - b);
}

// Example usage:
let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]
