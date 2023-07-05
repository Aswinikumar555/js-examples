function first() {
  for (let index = 1; index <= 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
  console.log("gg");
}
first();
