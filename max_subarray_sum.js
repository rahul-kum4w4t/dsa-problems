// Maximum Subarray Sum | Kadane's Algorithm
//Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Kadane's Algorithm is an example of dynamic programming algorithm, which uses the solutions of previous sub-problems to find the overall optimum solution.

let arr = [2, -4, 3, -1, 2];
let gStart = 0;
let lStart = 0;
let end = 0;
let max = Number.NEGATIVE_INFINITY;
let localMax = Number.NEGATIVE_INFINITY;
for (let i = 0; i < arr.length; i++) {
    localMax = Math.max(arr[i], arr[i] + localMax);
    if (arr[i] == localMax) {
        lStart = i;
    }
    if (localMax > max) {
        gStart = lStart;
        max = localMax;
        end = i;
    }
}

console.log("Start: ", gStart, "\tEnd: ", end, "\tMax: ", max);