const merge = (arry1, arry2) => {
  let i = 0;
  let j = 0;
  const result = [];
  while ((i < arry1.length) & (j < arry2.length)) {
    if (arry1[i] < arry2[j]) {
      result.push(arry1[i]);
      i++;
    } else {
      result.push(arry2[j]);
      j++;
    }
  }

  while (i < arry1.length) {
    result.push(arry1[i]);
    i++;
  }
  while (j < arry2.length) {
    result.push(arry2[j]);
    j++;
  }
  return result;
};

// console.log(merge([1, 3, 6], [2, 4, 7, 9]));

const mergeSort = (arry) => {
  if (arry.length <= 1) {
    return arry;
  }
  let mid = Math.floor(arry.length / 2);
  let left = mergeSort(arry.slice(0, mid));
  let right = mergeSort(arry.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([1, 9, 3, 7, 6, 4, 2]));
