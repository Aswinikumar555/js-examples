// in binary heap to know the root of child Math.floor((index - 1) / 2)

// to know the parent left child formula ((2 * index) + 1)
// to know the parent right child formula ((2 * index) + 2)
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubble();
    return this;
  }
  bubble() {
    let idx = this.values.length - 1;
    let elem = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentVal = this.values[parentIdx];
      if (elem <= parentVal) break;
      this.values[parentIdx] = elem;
      this.values[idx] = parentVal;

      idx = parentIdx;
    }
    return this;
  }

  extractMax() {
    if (this.values.length <= 0) return undefined;

    let lastVal = this.values.pop();
    this.values[0] = lastVal;

    this.bubbleUp();

    return lastVal;
  }

  bubbleDown() {
    let idx = 0;
    let elem = this.values[idx];

    let leftIndex = 2 * idx + 1,
      rightIndex = 2 * idx + 2;

    let rightVal,
      leftVal,
      temp = null;
    while (idx <= this.values.length) {
      console.log(this.values);
      console.log("idx ", idx);

      console.log(this.values[leftIndex], this.values[rightIndex]);
      
      if (leftIndex < this.values.length) {
        leftVal = this.values[leftIndex];

        if (leftVal > elem) {
          temp = leftIndex;
        }
      }

      if (rightIndex <= this.values.length - 1) {
        rightVal = this.values[rightIndex];
        if ((temp != null && temp > rightVal) || rightVal > leftVal) {
          temp = rightIndex;
        }
      }

      console.log("temp ", temp);
      if (temp === null) {
        break;
      }

      this.values[idx] = this.values[temp];

      this.values[temp] = elem;
      idx = temp;
      (leftIndex = 2 * idx + 1), (rightIndex = 2 * idx + 2);
      temp = null;
    }
    return this.values;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
