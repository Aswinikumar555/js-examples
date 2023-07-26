class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubble();
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
}

let heap = new MaxBinaryHeap();
