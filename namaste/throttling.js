const getDataAPi = (count) => {
  console.log("throttling ", count);
};

const optimizeT = (fn, d) => {
  let time = true;
  let count = 0;
  return () => {
    if (time) {
      time = false;
      setTimeout(() => {
        count++;
        fn(count);
        time = true;
      }, d);
    }
  };
};
const throttling = optimizeT(getDataAPi, 300);
