class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  berthFirstSearch() {
    let node = null,
      queue = [this.root],
      values = [];

    while (queue.length) {
      node = queue.shift();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;
  }

  depthFirstPreOrder() {
    let valuesList = [];

    function traverse(node) {
      valuesList.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return valuesList;
  }

  depthFirstPostrder() {
    let valuesList = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      valuesList.push(node.val);
    }

    traverse(this.root);

    return valuesList;
  }
  depthFirstInrder() {
    let valuesList = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      valuesList.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return valuesList;
  }
}

bTree = new BST();
bTree.insert(10);
bTree.insert(14);
bTree.insert(5);
bTree.insert(6);
bTree.insert(18);
bTree.insert(12);
