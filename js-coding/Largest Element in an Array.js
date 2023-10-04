function findLargest(arr) {
    return Math.max(...arr);
}

const numbers = [3, 9, 1, 25, 7];
const largest = findLargest(numbers);
console.log(largest); // Outputs: 25