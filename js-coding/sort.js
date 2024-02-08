function customSortArray(arr) {
    // Use the Array.prototype.sort() method with a comparator function
    arr.sort(function(a, b) {
        // Compare function to sort elements in ascending order
        // For descending order, you can swap the order of a and b in the return statement
        return a - b;
    });

    // Return the sorted array
    return arr;
}

// Example usage:
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArray = customSortArray(myArray);

console.log(sortedArray);