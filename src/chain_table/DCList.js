/**
 * 双向循环链表
 * Double Circular Linked List
 */
class DCList {
  constructor() {
    this.head = null;
    this.trail = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.trail.next = node;
      node.prev = this.trail;
    }
    this.trail = node;
    this.trail.next = this.head;
    this.head.prev = this.trail;
    this.length++;
  }

  indexOf(value) {
    if (this.length === 0) {
      return -1;
    }
    let index = 0;
    let current = this.head;
    while (index < this.length) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  lastIndexOf(value) {
    if (this.length === 0) {
      return -1;
    }
    let index = this.length-1;
    let current = this.trail;
    while (index >= 0) {
      if (current.value === value) {
        return index;
      }
      current = current.prev;
      index--;
    }
    return -1;
  }

  insertAt(position = -1, value) {}

  removeAt(position = -1, value) {}

  remove(value) {}

  traversal() {}

  destroy() {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

module.exports = DCList;
