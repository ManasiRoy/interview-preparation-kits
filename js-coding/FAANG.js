// 🏁 Problem 1 — Two Sum (LeetCode #1)
// Problem:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (because nums[0] + nums[1] == 9)

// Constraints:

// 2 <= nums.length <= 10⁴

// -10⁹ <= nums[i] <= 10⁹

// Only one valid answer exists.



function twoSum(nums, target) {
    const map = new Map(); // to store number and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return []; // No solution (theoretically won't happen as per the problem statement)
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);


// 🏁 Problem 2 — Valid Parentheses(LeetCode #20)
// Problem:
// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

// A string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

//     Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's an opening bracket, push to stack
        if (map[char]) {
            stack.push(char);
        } else {
            // If it's a closing bracket, check for matching
            const top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
}
