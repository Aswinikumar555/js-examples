const getData = (val) => {
  console.log("api call ", val);
};
const optimize = (fn, d) => {
  let timer;
  return () => {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(2);
    }, d);
  };
};

const debounce = optimize(getData, 300);
