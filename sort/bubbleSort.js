const bubbleSort = (arry) => {
  for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length - i - 1; j++) {
      if (arry[j] > arry[j + 1]) {
        [arry[j], arry[j + 1]] = [arry[j + 1], arry[j]];
      }
    }
  }
  return arry;
};

console.log(bubbleSort([1, 9, 3, 7, 6, 4, 2]));
