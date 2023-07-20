class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let lastNode = this.tail;
      this.tail.next = newNode;
      newNode.prev = lastNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || this.length === 0) return false;
    let lastNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      lastNode = this.tail;
      this.tail = lastNode.prev;
      lastNode.next = null;
    }
    this.length--;
    return lastNode;
  }
  traversal() {
    console.log("gg");
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let firstNode = this.head;
      this.head = newNode;
      newNode.next = firstNode;
      firstNode.prev = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return false;
    let firstNode = this.head;
    this.head = firstNode.next;
    this.head.prev = null;
    this.length--;
    return firstNode;
  }

  reverse() {
    if (!this.head) return false;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = node.next,
      prev = null;

    for (let index = 0; index < this.length; index++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
  }
}

let list = new DoubleLinkedList();
list.push(1);
list.push(2);
list.push(3);
