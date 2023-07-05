// O(log n)
// binary search work only sorted arrays
function binarySearch(array, val) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== val && start <= end) {
    if (val < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  return array[middle] === val;
}
binarySearch([1, 3, 5, 6, 7, 8, 9, 12, 14, 15, 24, 29, 40], 50);
