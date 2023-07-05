// two pointer
let arr = [1, 1, 1, 1, 1, 2];
const countUniqueValues = () => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr);
  return i + 1;
};
console.log(countUniqueValues());
