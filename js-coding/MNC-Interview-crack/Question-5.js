// Given an array of intervals where intervals[i] = [starti, endi], merge all 
// overlapping intervals, and return an array of the non - overlapping 
// intervals that cover all the intervals in the input.

// ===================================================================


// Approach:
// Sort the intervals based on the start time.
// Iterate through the intervals and merge overlapping ones.
// Use a result array to store merged intervals.
function mergeIntervals(intervals) {
    if (!intervals.length) return [];

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let prev = result[result.length - 1];
        let curr = intervals[i];

        if (curr[0] <= prev[1]) {
            // Merge overlapping intervals
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            result.push(curr);
        }
    }

    return result;
}

// Example usage:
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Output: [[1, 6], [8, 10], [15, 18]]
