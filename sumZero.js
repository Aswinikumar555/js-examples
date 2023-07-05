// two pointer

let arr = [-4, -3, -2, 0, 1, 2, 10];

const sumZero = () => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(sum);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero());

[
  {
    nodeId: "5e874f65964ac23b9b3eaf37",
    contextId: "5e874f63bb85ed774d7d63f3",
    contextType: "OTF_BATCH",
    teacherId: "4102399600048969",
    callingUserId: "4102399600048969",
    title: "Electronic configuration",
    sessionId: "64100291bad8447ac3a61e00",
    newStatus: "INPROGRESS",
  },
];
