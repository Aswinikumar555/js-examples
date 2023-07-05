function averagePair(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let rigth = arr.length - 1;
  while (left < rigth) {
    const avg = (arr[left] + arr[rigth]) / 2;
    if (avg === val) {
      return true;
    } else if (avg < val) {
      left++;
    } else {
      rigth--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
