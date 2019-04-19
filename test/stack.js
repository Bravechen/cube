const expect = require('chai').expect;
const Stack = require('../src/stack/Stack');

function createStack() {
  let ary = Array.from(new Array(10).fill(0), (v,i) => v+i);
  let stack = new Stack();
  for (let value of ary) {
    stack.push(value);
  }
  return stack;
}

describe('Stack', function() {
  describe('create a Stack and #Stack.push()', function () {
    let stack = createStack();
    it('stack is an object and length equal 10', function() {
      console.log(stack.toString());
      expect(stack)
        .to.be.a('object')
        .have.property('length')
        .equal(10);
    });
  });

  describe('#Stack.top()', function() {
    let stack = createStack();
    it('The stack top value equal 9', function() {
      expect(stack.top()).to.equal(9);
    });
  });

  describe('#Stack.bottom()', function() {
    let stack = createStack();
    it('should have bottom value equal 0', function() {
      expect(stack.bottom()).to.equal(0);
    });
  });

  describe('#Stack.pop()', function() {
    let stack = createStack();
    it('should back a value that equal 9', function() {
      expect(stack.pop()).to.equal(9);
    });
  });

  describe('#Stack.push()', function() {
    let stack = createStack();
    it('should back the length equal 11', function() {
      expect(stack.push(12)).to.equal(11);
    });

    it('top value equal 12', function() {
      stack.push(12);
      expect(stack.top()).to.equal(12);
    });
  });
});
