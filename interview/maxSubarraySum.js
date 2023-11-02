// Kadane's algorithm
function maxSubarraySum(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

let array = [1, 2, -4, 3, -6, 5, 7, 8, 2];
let maxSum = maxSubarraySum(array);

console.log("Maximum subarray sum:", maxSum);
