//Iterative two pointer
function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));

console.log("----------------");
//Recursive but not O(1) Space

function isSubsequenceRec(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) {
    return isSubsequenceRec(str1.slice(1), str2.slice(1));
  }
  return isSubsequenceRec(str1, str2.slice(1));
}

console.log(isSubsequenceRec("hello", "hello world"));
console.log(isSubsequenceRec("abc", "acb"));
