// frequence counter
function areThereDuplicates(...args) {
  console.log(args);
  let ob = {};
  for (const iterator of args) {
    ob[iterator] = (ob[iterator] || 0) + 1;
  }
  for (const val in ob) {
    if (1 < ob[val]) {
      return true;
    }
  }
  return false;
}
var v1 = 1,
  v2 = 2,
  v3 = 2;
console.log(areThereDuplicates(v1, v2, v3));

//two pointer
function areThereDuplicatesTwoPointer(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  console.log("sort args ", args);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
console.log("two pointer ", areThereDuplicatesTwoPointer("a", "b", "c", "a"));
console.log("two pointer ", areThereDuplicatesTwoPointer(1, 2, 2));

//One Liner Solution
function areThereDuplicatesLinear() {
  console.log("arguments ", arguments);
  return new Set(arguments).size !== arguments.length;
}
console.log("areThereDuplicatesLinear ", areThereDuplicatesLinear(1, 2, 3, 3));

const areThereDuplicatesLinearES6 = (...args) => {
  console.log(args[0]);
};

console.log(
  "areThereDuplicatesLinearES6 ",
  areThereDuplicatesLinearES6(1, 2, 3, 3)
);
