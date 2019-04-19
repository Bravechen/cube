class Queue {
  constructor() {
    this._list = [];
  }

  get length() {
    return this._list.length;
  }

  enqueue(...args) {
    return this._list.push(...args);
  }

  dequeue() {
    return this._list.shift();
  }

  font() {
    return this._list[0];
  }

  end() {
    return this._list[this._list.length - 1];
  }

  isEmpty() {
    return this._list.length === 0;
  }

  toString() {
    let str = this._list.reduce((prev, item) => prev += ` ${item},`, `Queue:[`);
    return `${str.slice(0, str.length-1)} ]`;
  }
}
