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
