// Given an array of integers and an integer target, return indices of the two numbers such that they add up to target

function twoSum(nums, target) {
    let map = {}; // Object to store the number and its index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // Return indices if complement exists
        }

        map[nums[i]] = i; // Store the current number and its index
    }

    return []; // Return empty array if no solution exists
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
