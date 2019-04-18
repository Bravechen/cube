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
  /**
   * 在链表尾部添加数据
   * @param {*} value
   */
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.trail = node;
    }
    this.trail.next = node;
    node.next = this.head;
    this.trail = node;
    this.length++;
  }
  /**
   * 在指定位置插入数据
   * @param {*} position
   * @param {*} value
   */
  insertAt(position = -1, value) {
    if (position < 0 || position >= this.length) {
      return;
    }

    let node = new Node(value);
    let index = 0;
    let current = this.head;
    let prev;
    while (index++ !== position) {
      prev = current;
      current = current.next;
    }

    if (position === 0) {
      prev = this.trail;
      this.head = node;
    }
    prev.next = node;
    node.next = current;
    this.length++;
  }
  /**
   * 移除指定位置的数据
   * @param {*} position
   */
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
  /**
   * 移除链表中的指定数据
   * @param {*} value
   */
  remove(value) {
    let index = this.indexOf(value);
    if (index < 0) {
      return false;
    }

    this.removeAt(index);
    return true;
  }
  /**
   * 查找一个值在链表中的索引号，
   * 没有返回-1，有则返回索引号
   * @param {*} value
   */
  indexOf(value) {
    if (this.length <= 0) {
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
  /**
   * 以数组的形式输出链表中的数值集合
   */
  traversal() {
    let index = 0;
    let ary = [];
    let current = this.head;
    while (index < this.length) {
      ary[i] = current.value;
    }
    return ary;
  }
  /**
   * 销毁链表
   */
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
