/**
 * 单向循环链表
 * one-way circular linked list
 */
class OCList {
  constructor() {
    this.head = null;
    this.trail = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.trail = node;
    }
    this.trail.next = node;
    node.next = this.head;
    this.trail = node;
    this.length++;
  }

  insertAt(position = -1, value) {
    if (position < 0 || position >= this.length) {
      return;
    }

    let node = new Node(value);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      this.trail = node;
      this.length++;
      return;
    }

    let index = 1;
    let prev = this.head;
    let current = prev.next;
    while(current) {
      if (index === position) {
        prev.next = node;
        node.next = current;
        this.length++;
        return;
      }

      prev = current;
      current = current.next;
      index++;
    }
  }

  removeAt(position = -1) {
    if (position < 0 || position >= this.length) {
      return;
    } 

    if (position === 0) {
      let node = this.head;
      this.head = node.next;
      this.trail.next = this.head;
      this.head.prev = this.trail;
      this.length--;
      return node.value;
    }

    let index = 1;
    let prev = this.head;
    let current = prev.next;
    while (index < this.length) {
      if (index === position) {
        let next = current.next;
        if (current === this.trail) {
          this.trail = prev;
        }
        prev.next = next;
        next.prev = prev;
        this.length--;
        return current.value;
      }
      prev = current;
      current = current.next;
      index++;
    }
  }

  remove(value) {}

  indexOf(value) {}

  traversal() {
    let index = 0;
    let ary = [];
    let current = this.head;
    while (index < this.length) {
      ary[i] = current.value;
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
    this.next = null;
  }
}

module.exports = OCList;
