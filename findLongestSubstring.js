//Sliding Window

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log("char ", char);
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log("if start ", start, "seen ", seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    console.log("longest ", longest, "i ", i, " start ", start);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log("seen ", seen);
  }
  return longest;
}
console.log(findLongestSubstring("roolg"));
// console.log(findLongestSubstring("rithmschool"));
//   findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
