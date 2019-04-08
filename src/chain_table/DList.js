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
    let newOne = new Node(value);
    if (position === 0) {
      this.head.prev = newOne;
      newOne.next = this.head;
      this.head = newOne;
      this.length++;
      return true;
    }
    let index = 0;
    let node = this.head;
    while(node) {
      if (position === index) {
        node.prev.next = newOne;
        newOne.prev = node.prev;
        newOne.next = node;
        node.prev = newOne;
        this.length++;
        return true;
      }
      node = node.next;
      index++;
    }
    return false;
  }

  /**
   * 在指定的位置删除元素
   * @param {*} position
   */
  removeAt(position = -1) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    if (position === 0) {
      let node = this.head;
      let next = node.next;
      this.head = next;
      next.prev = null;
      this.length--;
      return node.value;
    }

    let index = 0;
    let node = this.head;
    while (node) {
      if (position === index) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        if (position === this.length - 1) {
          this.trail = prev;
        } else {
          next.prev = prev;
        }

        this.length--;
        return node.value;
      }
      node = node.next;
      index++;
    }
  }

  /**
   * 从链表中移除一个值
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
   * 由值查找链表中的Node节点
   * @param {*} value
   */
  findNode(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
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
    this.prev = null;
  }
}

module.exports = DList;
