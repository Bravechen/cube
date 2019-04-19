class Stack {
  constructor() {
    this._list = [];
  }

  get length() {
    return this._list.length;
  }

  push(...args) {
    return this._list.push(...args);
  }

  pop() {
    return this._list.pop();
  }

  top() {
    return this._list[this._list.length - 1];
  }

  bottom() {
    return this._list[0];
  }

  isEmpty() {
    return this._list.length === 0;
  }

  clear() {
    this._list = [];
  }

  /**
   * @override
   * @description 将栈合成字符串输出
   */
  toString() {
    let str = this._list.reduce((prev, item) => prev += ` ${item},`, `Stack:[`);
    return `${str.slice(0, str.length-1)} ]`;
  }

  destroy() {
    this._list = null;
  }
}

module.exports = Stack;
