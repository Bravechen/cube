/**
 * 单链表
 * Singly Linked List
 */
class SList {
  constructor() {
    this.head = null;
    this.trail = null;
    this.length = 0;
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
    this.length++;
    return node.value;
  }
  /**
   * 在位置插入值
   * @param {*} position
   * @param {*} value
   */
  instertAt(position = -1, value) {
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
    if (position !== 0) {
      prev.next = node;
    } else {
      this.head = node;
    }

    node.next = current;
    this.length++;

  }
  /**
   * 在某个位置移除节点和值
   * @param {*} position
   */
  removeAt(position = -1) {
    if (position < 0 || position >= this.length || !this.head) {
      return;
    }
    if (position === 0) {
      let next = this.head.next;
      if (this.head === this.trail) {
        this.trail = null;
        this.length = 1;
      }
      this.head = next;
      this.length--;
      return;
    }
    let index = 1;
    let prev = this.head;
    let node = prev.next;
    while (node) {
      if (index === position) {
        prev.next = node.next;
        if (node === this.trail) {
          this.trail = prev;
        }
        node.next = null;
        this.length--;
        return node.value;
      }
      prev = node;
      node = prev.next;
      index++;
    }
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
   * 查找某个值，如果存在则返回节点
   * 如果不存在则返回null
   * @param {*} value
   */
  findNode(value) {
    let node = this.head;
    while(node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return null;
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
    this.length = 0;
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
