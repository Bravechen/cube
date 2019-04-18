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
    } else {
      node.prev = this.trail;
      this.trail.next = node;
      this.trail = node;
    }
    this.length++;
  }
  /**
   * 查找值在链表中的索引
   * 存在返回索引值，否则返回-1
   * @param {*} value
   */
  indexOf(value) {
    let index = 0;
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
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
    let current = this.trail;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.prev;
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
      return;
    }
    let node = new Node(value);
    let mid = this.length >> 1;
    let current = getLinkedNode(
      position,
      position > mid ? this.trail : this.head,
      this.length,
      position > mid ? -1 : 1
    );
    let prev = current.prev;
    node.next = current;
    current.prev = node;
    node.prev = prev;
    if (position !== 0) {
      prev.next = node;
    } else {
      this.head = node;
    }
    this.length++;
  }

  /**
   * 在指定的位置删除元素
   * @param {*} position
   */
  removeAt(position = -1) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    let mid = this.length >> 1;
    let current = getLinkedNode(
      position,
      position > mid ? this.trail : this.head,
      this.length,
      position > mid ? -1 : 1
    );
    let next = current.next;
    let prev = current.prev;

    if (position === this.length - 1) {
      this.trail = prev;
    } else {
      next.prev = prev;
    }

    if (position !== 0) {
      prev.next = next;
    } else {
      this.head = next;
    }

    current.next = null;
    current.prev = null;
    this.length--;
    return current.value;
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

module.exports = DList;
