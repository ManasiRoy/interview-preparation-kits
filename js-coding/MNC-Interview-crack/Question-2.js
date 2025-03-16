// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// You can solve this problem efficiently using Kadane's Algorithm, which runs in O(n) time complexity.

function maxSubArray(nums) {
    let maxSum = nums[0]; // Initialize max sum with the first element
    let currentSum = nums[0]; // Tracks the sum of the current subarray

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // Extend or start new subarray
        maxSum = Math.max(maxSum, currentSum); // Update max sum if needed
    }

    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
