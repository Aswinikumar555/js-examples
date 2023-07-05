const array = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const num = 3;
const maxSubArray = () => {
  if (num > array.length) return null;

  let max = -Infinity;

  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
console.log(maxSubArray());

// sliding window
// when  sequential problem came sliding window is better
const slidingArr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const maxSubArraySliding = () => {
  if (num > slidingArr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += slidingArr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < slidingArr.length; i++) {
    tempSum = tempSum - slidingArr[i - num] + slidingArr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
console.log(maxSubArraySliding());
