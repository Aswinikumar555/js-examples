let sum = 0;
const calc = (n) => {
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

// console.time();
// console.log(calc(5));
// console.timeEnd();

const memoize = (fun) => {
  let cache = {};
  return (...args) => {
    console.log("args ", args);
    let val = args[0];
    if (val in cache) {
      return cache[val];
    } else {
      let result = fun(val);
      cache[val] = result;
      return result;
    }
  };
};

console.log("memoize - 1");
const memoVal = memoize(calc);
console.time();
console.log(memoVal(5));
console.timeEnd();
console.log("memoize - 2");
console.time();
console.log(memoVal(5));
console.timeEnd();
