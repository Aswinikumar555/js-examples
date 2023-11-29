const kadanesAlgorithmWithIndices = (arr) => {
  let start = 0;
  let end = 0;
  let tempStart = 0;
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxCurrent + arr[i]) {
      tempStart = i;
      maxCurrent = arr[i];
    } else {
      maxCurrent = maxCurrent + arr[i];
    }

    if (maxCurrent > maxGlobal) {
      start = tempStart;
      maxGlobal = maxCurrent;
      end = i;
    }
  }
  return {
    maxSum: maxGlobal,
    startIndex: start,
    endIndex: end,
    subarray: arr.slice(start, end + 1),
  };
};

const arrayExample = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = kadanesAlgorithmWithIndices(arrayExample);
console.log(result);
