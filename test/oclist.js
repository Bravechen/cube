const expect = require('chai').expect;
const OCList = require('../src/chain_table/OCList');

function createOCList() {
  let ary = [1,2,3,4,5,6,7,8,9,10];
  let oclist = new OCList();
  for(let value of ary) {
    oclist.append(value);
  }
  return oclist;
}

describe('One-way Circular Linked List', function() {
  describe('#OCList.append()', function() {
    it('after create a oclist, it will be a object,\n have three properties(head:objct, trail:object, length:number)', function() {
      let oc = createOCList();
      expect(oc).to.be.a('object');
      expect(oc)
        .have.property('head')
        .to.be.a('object')
          .have.property('value')
          .equal(1);
      expect(oc)
        .have.property('trail')
        .to.be.a('object')
          .have.property('value')
          .equal(10);
      expect(oc)
        .have.lengthOf(10);
    });

    it('property head equal property next who belong property trail', function() {
      let oc = createOCList();
      expect(oc.head).to.equal(oc.trail.next);
    });
  });

  describe('#OCList.insertAt()', function() {

    it('after insert 12 at index 5, property length equal 11', function() {
      let oclist = createOCList();
      oclist.insertAt(5, 12);
      expect(oclist).have.lengthOf(11);
    });

    it('after insert 12 at index 0, property head who has property value equal 12', function() {
      let oclist = createOCList();
      oclist.insertAt(0, 12);
      expect(oclist.head)
        .to.be.a('object')
        .have.property('value')
        .equal(12);
    });

    it('after insert 12 at index -1, nothing happend', function() {
      let oclist = createOCList();
      oclist.insertAt(-1, 12);
      expect(oclist)
        .have.property('length')
        .equal(10);
    });
  });

  describe('#OCList.removeAt()', function() {
    it();
  });
});
