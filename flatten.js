const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]];
const objMain = {
  name: "aswin",
  age: "24",
  address: { flatNo: 24, city: "Chennai" },
};

console.log(arr.flat(2));
console.log(arr.flat(Infinity));

// flatten array
const getFalattenArray = (args) => {
  const newArray = [];
  const getFalattenArrayRec = (valArr) => {
    valArr.forEach((val) => {
      if (Array.isArray(val)) {
        getFalattenArrayRec(val);
      } else {
        newArray.push(val);
      }
    });
  };
  getFalattenArrayRec(args);
  return newArray;
};

console.log(getFalattenArray(arr));

//object

const getObjetFormate = (objs) => {
  let newObj = {};
  const getObjetFormateRec = (innnerObj) => {
    Object.keys(innnerObj).forEach((key) => {
      if (typeof innnerObj[key] === "object") {
        getObjetFormateRec(key);
      } else {
        newObj[key] = innnerObj[key];
      }
    });
  };
  getObjetFormateRec(objs);
  return newObj;
};
console.log(getObjetFormate(objMain));
