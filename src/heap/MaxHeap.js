function swap(list, i, num) {
  if (i === 1) {
    return;
  }

  const j = (i/2)>>0;
  const p = list[j];
  if (num <= p) {
    return;
  }
  list[j] = num;
  list[i] = p;
  return swap(list, j, num);
}

function isNot(value) {
  return value === void 0 || value === null;
}

function replace(list, i) {
  list[i] = null;
  const j = i * 2;
  const k = j + 1;

  const c1 = list[j];
  const c2 = list[k];
  if (isNot(c1) && isNot(c2)) {
    return;
  }

  if (isNot(c1)) {
    list[i] = c2;
    return replace(list, k);
  }

  if (isNot(c2)) {
    list[i] = c1;
    return replace(list, j);
  }

  return replace(list, c1 >= c2 ? j : k);
}


class MaxHeap {
  constructor() {
    this.list = [-1];
    this._length = 0;
  }

  insert(num) {
    this.list[this.list.length] = num;
    this._length++;
    return swap(this.list, this.list.length - 1, num);
  }

  remove() {
    if (this.list.length === 1) {
      return;
    }
    const top = this.list[1];
    replace(this.list, 1);
    this._length--;
    if (this._length === 0) {
      this.list = [-1];
    }
    return top;
  }

  output() {
    const list = this.list;
    const len = list.length;
    let i = 0;
    let index = 1;
    let s = '';
    out: while(true) {
      let n = 2 ** i;

      for (; index < n; index++) {
        if (index === len) {
          break out;
        }
        let value = list[index];
        s += (value == void 0 ? '_' : value) + ' ';
      }
      s+='\n';
      i++;
    }
    return s;
  }

  get length() {
    return this._length;
  }
}

let maxHeap = new MaxHeap();
let list = [2, 4, 6, 1, 12, 26, 7, 8, 15, 17, 2, 58, 39, 14, 10, 22];
for (let i = 0, len = list.length; i < len; i++) {
  maxHeap.insert(list[i]);
  // console.log(maxHeap.output());
}
// let ary = [];
// for (let i = 0; i < 100; i++) {
//   let value = Math.floor(Math.random()*100+1);
//   // console.log(value);
//   ary.push(value);
//   maxHeap.insert(value);
// }
console.log(maxHeap.output());
console.log('length: ', maxHeap.length);
let res = [];
let len = maxHeap.length;
for (let i = 0; i<len; i++) {
  let value = maxHeap.remove();
  res.unshift(value);
}
console.log('after heap sort:', res, maxHeap.list, maxHeap.length);
module.exports = MaxHeap;
