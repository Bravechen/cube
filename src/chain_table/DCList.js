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
}

class Node {
  constructor(value) {
    this.value = value;
    this.head = null;
    this.trail = null;
  }
}
