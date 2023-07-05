console.log("Curring Start --");

function getSum(x, y) {
  console.log("bind sum ", x + y);
}
const sumBind = getSum.bind(this, 2);
sumBind(3);

function sum(a) {
  return function (b) {
    return b ? sum(a + b) : a;
  };
}

const sum2 = (a) => (b) => b ? sum2(a + b) : a;

const sumVal = sum(1)(2)(3)();
const sumVal_2 = sum2(1)(2)(3)();
console.log("sumVal", sumVal);
console.log("sumVal_2", sumVal_2);

console.log("Curring end --");
