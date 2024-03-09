function customSortArray(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArray = customSortArray(myArray);
console.log(sortedArray);

// remove duplicate array
let duplicate = [...new Set(sortedArray)]
console.log(duplicate);