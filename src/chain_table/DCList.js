/**
 * 双向循环链表
 * Double Circular Linked List
 */
class DCList {
  constructor() {
    this.head = null;
    this.trail = null;
    this.length = null;
  }

  append(value) {}

  indexOf(value) {}

  lastIndexOf(value) {}

  insertAt(position = -1, value) {}

  removeAt(position = -1, value) {}

  remove(value) {}

  traversal() {}

  destroy() {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.head = null;
    this.trail = null;
  }
}

module.exports = DCList;