function fnWithCallback(cb) {
  setTimeout(cb, 100);
}
console.log((0.1 + 0.2).toFixed(1));
for (let i = 0; i < 1; i = i + 0.1) {
  i = Number(i.toFixed(1));
  console.log("- ", i.toFixed(1));
  // console.log(Number(i.toString().slice(0, 3)));
  // console.log(" - ",Number(i.toFixed(1)));
  //   i = Number(i.toString().slice(0, 3));
  if (i === 0.3) {
    fnWithCallback(function () {
      console.log("1/3rd completed");
    });
  } else {
    fnWithCallback(function () {
      console.log("ran for i =", i);
    });
  }
}
