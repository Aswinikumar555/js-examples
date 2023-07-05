// Helper Method Recursion

function collectOddNumbers(arr) {
  let result = [];

  function helper(nums) {
    console.log("-", nums.lenght);
    if (nums.length === 0) return;
    if (nums[0] % 2 !== 0) result.push(nums[0]);
    helper(nums.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddNumbers([2, 3, 0, 9]));

//pure recursion

function collectOddValues(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);
  result = result.concat(collectOddValues(arr.slice(1)));
  return result;
}

console.log(collectOddValues([2, 3, 0, 9]));
