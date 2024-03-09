function secondLargestNumber(arr) {
    if (arr.length > 2) {
        console.log("Array should be 2 elements")
    }

    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

const arr = [10, 20, 5, 6, 8, 9];
console.log(secondLargestNumber(arr))