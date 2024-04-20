// Flatten a nested array based on given depth?
// Ex: Array: [1, 2, [3, [4, 5]]] Depth: 2

function flattenArray(arr, depth) {
    if (depth === 0) {
        return arr;
    }

    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc.push(...flattenArray(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}

const array = [1, 2, [3, [4, 5]]];
const depth = 2;
const flattenedArray = flattenArray(array, depth);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]