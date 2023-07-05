// frequency counter
const annagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let accrency1 = {};
  let accrency2 = {};

  for (let char of str1) {
    accrency1[char] = (accrency1[char] || 0) + 1;
  }
  for (let char of str2) {
    accrency2[char] = (accrency2[char] || 0) + 1;
  }

  for (let char in accrency1) {
    if (accrency2[char] !== accrency1[char]) {
      return false;
    }
  }
  return true;
};
console.log(annagram("cat", "tac"));
