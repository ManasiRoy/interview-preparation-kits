//Find largest number within array
function findLargest(arr) {
    return Math.max(...arr);
}

const numbers = [3, 9, 1, 25, 7];
const largest = findLargest(numbers);
console.log(largest);


//Second largest number within array
function twoLargest(arr) {
    let one = arr[0];
    let two = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > one) {
            two = one;
            one = arr[i]
        } else if (arr[i] > two && arr[i] != one) {
            two = arr[i];
        }
    }
    return two;
}
console.log(twoLargest([10, 20, 5, 6, 8, 9]))