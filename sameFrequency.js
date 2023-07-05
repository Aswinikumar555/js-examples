// frequence counter
function sameFrequency(val1, val2) {
  val1 = val1.toString();
  val2 = val2.toString();
  if (val1.length !== val2.length) {
    return false;
  }
  let ob1 = {};
  let ob2 = {};

  for (let char of val1) {
    ob1[char] = (ob1[char] || 0) + 1;
  }
  for (let char of val2) {
    ob2[char] = (ob2[char] || 0) + 1;
  }
  console.log(ob1);
  console.log(ob2);

  for (const prop in ob1) {
    if (ob1[prop] !== ob2[prop]) {
      return false;
    }
  }
  return true;
}
