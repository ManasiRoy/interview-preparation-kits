function missingNumber(nums) {
    const n = nums.length;
    let sum = (n * (n + 1)) / 2;
    for (const num of nums) {
        sum -= num;
    }
    return sum;
}

console.log(missingNumber([3, 0, 1]));    // 2
console.log(missingNumber([0, 1]));       // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
