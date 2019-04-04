/**
 * 双向链表
 * Double Linked List
 */
class DList {
  constructor() {
    this.head = null;
    this.trail = null;
    this.length = 0;
  }
  /**
   * 在链表尾部添加值
   * @param {*} value
   */
  append(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.trail = node;
      this.length = 1;
      return;
    }
    this.trail.next = node;
    node.prev = this.trail;
    this.trail = node;
    this.length++;
  }
  /**
   * 查找值在链表中的索引
   * 存在返回索引值，否则返回-1
   * @param {*} value
   */
  indexOf(value) {
    let index = 0;
    let node = this.head;
    while(node) {
      if (node.value === value) {
        return index;
      }
      node = node.next;
      index++;
    }
    return -1;
  }
  /**
   * 从尾节点到头结点的顺序，
   * 查找给定的值。
   * 如果存在返回索引号，反之返回-1
   * @param {*} value
   */
  lastIndexOf(value) {
    let index = this.length - 1;
    let node = this.trail;
    while (node) {
      if (node.value === value) {
        return index;
      }
      node = node.prev;
      index--;
    }
    return -1;
  }
  /**
   * 在指定的位置插入元素
   * @param {*} position
   * @param {*} value
   */
  insertAt(position = -1, value) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let index = 0;
    let node = this.head;
    while(node) {
      if (position === index) {
        let newOne = new Node(value);
        node.prev.next = newOne;
        newOne.prev = node.prev;
        newOne.next = node;
        node.prev = newOne;
        this.length++;
        return;
      }
      node = node.next;
      index++;
    }
    return true;
  }
  /**
   * 遍历链表，以数组的形式输出
   */
  traversal() {
    let ary = [];
    let node = this.head;
    while(node) {
      ary.push(node.value);
      node = node.next;
    }
    return ary;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

module.exports = DList;
