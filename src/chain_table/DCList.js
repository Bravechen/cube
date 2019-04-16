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

  insertAt(position = -1, value) {
    if (position < 0 || position >= this.length) {
      return;
    }
    let node = new Node(value);
    let mid = this.length>>1;
    let current = getLinkedNode(
      position,
      position > mid ? this.trail : this.head,
      this.length,
      position > mid ? -1 : 1
    );
    let prev = current.prev;
    prev.next = node;
    node.prev = prev;
    node.next = current;
    current.prev = node;
    if (position === 0) {
      this.head = node;
    }

    if (position === this.length -1) {
      this.trail = node;
    }
    this.length++;
  }

  removeAt(position = -1) {
    if (position < 0 || position >= this.length) {
      return;
    }
    let mid = this.length >> 1;
    let current = getLinkedNode(
      position,
      position > mid ? this.trail : this.head,
      this.length,
      position > mid ? -1 : 1
    );
    let prev = current.prev;
    let next = current.next;
    prev.next = next;
    next.prev = prev;
    if (position === 0) {
      this.head = next;
    }

    if (position === this.length - 1) {
      this.trail = prev;
    }
    this.length--;
    return current.value;
  }

  remove(value) {
    let index = this.indexOf(value);
    if (index < 0) {
      return;
    }
    return this.removeAt(index);
  }

  traversal() {
    let node = this.head;
    let index = 0;
    let ary = [];
    while (index++ < this.length) {
      ary.push(node.value);
      node = node.next;
    }
    return ary;
  }

  destroy() {
    this.head = null;
    this.trail = null;
    this.length = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

function getLinkedNode(position, start, length, direct) {
  let current = start;
  let index = direct === -1 ? length - 1 : 0;
  let key = direct === -1 ? 'prev' : 'next';
  let step = direct === -1 ? -1 : 1;
  while (index !== position) {
    current = current[key];
    index += step;
  }
  return current;
}

module.exports = DCList;
