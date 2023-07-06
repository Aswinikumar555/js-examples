console.log("Protitypes start --");

let objP = {
  name: "asw",
  age: 25,
};

// console.log("objP", objP.__proto__);
// console.log("objP", objP.__proto__.__proto__);

let arr = [1];
// console.log("arr", arr.__proto__);
// console.log("arr", arr.__proto__.__proto__);
// console.log("arr", arr.__proto__.__proto__.__proto__);

function fun() {
  console.log("");
}

// console.log("fun", fun.__proto__);
// console.log("fun", fun.__proto__.__proto__);
// console.log("fun", arr.__proto__.__proto__.__proto__);

function getAge() {
  console.log("getAge ");
}
Array.prototype.getAge = getAge;
console.log(arr.getAge());

//implemention of bind

function myBind(...args) {
  console.log("myBind args ", args);
  let myFunc = this;
  return function (innerArg) {
    console.log("args ", args);
    console.log("args innerArg ", innerArg);
    let slArg = args.slice(1);
    myFunc.apply(args[0], [...slArg, innerArg]);
  };
}

Function.prototype.myBind = myBind;

function getName(a, b, c) {
  console.log("bind getName", this.name, this.age, a, b, c);
}

let myBindCal = getName.myBind(objP, "aswin", "kumar");
myBindCal("bhimavarapu");

console.log("Protitypes end --");

let arraEx = [1, 2, 3];

function printElem() {
  console.log("printElem this ", this);
  let ar = this;
  ar.push(10);
  return ar;
}

Array.prototype.printElem = printElem;

console.log(arraEx.printElem());

function priFilter(...args) {
  const result = [];
  console.log("priFilter this ", this);
  console.log("priFilter args ", args);
  let func = args[0];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    let val = func(element);
    if (val) {
      result.push(element);
    }
  }
  return result;
}

function isPrime(value) {
  console.log("isPrime value ", value);
  if (value % 2 === 0) {
    return value;
  }
}

Array.prototype.priFilter = priFilter;

let result = arraEx.priFilter(isPrime);
console.log("priFilter result ", result);
