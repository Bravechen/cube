const expect = require('chai').expect;
const MaxHeap = require('../src/heap/MaxHeap');
describe('max heap', function () {
  describe('create a max heap', function () {
    let maxHeap = new MaxHeap();
    let list = [2, 4, 6, 1, 12, 26, 7, 8, 15, 17, 2, 58];
    for (let i = 0, len = list.length; i < len; i++) {
      maxHeap.insert(list[i]);
    }
    console.log(maxHeap.output());
    it('should be an object', function () {
      expect(maxHeap)
        .to.be.a('object');
    });
  });
});
