class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traversal() {
    if (!this.head) return "Empty";
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  pop() {
    if (!this.head) return "Empty";
    let cNode = this.head;
    let newNode = cNode;

    while (cNode.next) {
      newNode = cNode;
      cNode = cNode.next;
    }
    newNode.next = null;
    this.tail = newNode;
    this.length--;
  }

  shift() {
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }

  get(index) {
    if (!this.head || this.length === 0) return false;
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  set(index, val) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  delete(index) {
    if (!this.head || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    if (this.length === index) {
      this.pop();
      return true;
    }
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = temp.next;
    this.length--;
  }

  reverse() {
    if (!this.head) {
      return "Empty";
    }
    let node = this.head;
    let prev = null;
    let next = null;

    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let list = new SingleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.traversal();
