/**
 * 单链表
 * Singly Linked List
 */
class SList {
  constructor() {
    this.head = null;
    this.trail = null;
    this._length = 0;
  }
  get length() {
    return this._length;
  }
  /**
   * 在尾部添加
   */
  append(value) {
    let node = new Node(value);
    this.head = this.head || node;
    if (this.trail) {
      this.trail.next = node;
      this.trail = node;
    } else {
      this.trail = node;
    }
    this._length++;
    return node.value;
  }
  /**
   * 在位置插入值
   * @param {*} position
   * @param {*} value
   */
  instertAt(position = -1, value) {
    if (position < 0 || position >= this._length) {
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
    if (position !== 0) {
      prev.next = node;
    } else {
      this.head = node;
    }

    node.next = current;
    this._length++;

  }
  /**
   * 在某个位置移除节点和值
   * @param {*} position
   */
  removeAt(position = -1) {
    if (position < 0 || position >= this._length) {
      return;
    }

    let index = 0;
    let current = this.head;
    let prev;
    while (index++ !== position) {
      prev = current;
      current = prev.next;
    }
    if (position === 0) {
      this.head = current.next;
    } else {
      prev.next = current.next;
    }
    current.next = null;
    if (position === this._length - 1) {
      this.trail = prev;
    }
    this._length--;
    return current.value;
  }
  /**
   * 检测值是否在链表中
   * @param {*} value
   */
  indexOf(value) {
    let index = 0;
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return index;
      }
      node = node.next;
      index++;
    }
    return -1;
  }
  /**
   * 移除一个值
   * @param {*} value
   */
  remove(value) {
    let index = this.indexOf(value);
    if (index < 0) {
      return;
    }
    return this.removeAt(index);
  }

  /**
   * 遍历链表将值组合成数组输出
   */
  traversal() {
    let ary = [];
    let node = this.head;
    while (node) {
      ary.push(node.value);
      node = node.next;
    }
    return ary;
  }

  destroy() {
    this.head = null;
    this.trail = null;
    this._length = 0;
  }
}

/**
 * 数据节点
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = SList;
