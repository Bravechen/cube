const expect = require('chai').expect;
const DCList = require('../src/chain_table/DCList');

function createDCList() {
  let ary = [1,2,3,4,5,6,7,8,9,10];
  let dclist = new DCList();
  for(let value of ary) {
    dclist.append(value);
  }
  return dclist;
}

describe('DCList', function() {
  describe('#DCList.append()', function() {
    let dclist = createDCList();
    it('dclist is a object and length equal 10', function() {
      expect(dclist)
        .to.be.a('object')
        .have.property('length')
          .equal(10);
    });

    it('property head is a object who has property value that equal 1', function() {
      expect(dclist.head)
        .to.be.a('object')
        .have.property('value')
          .equal(1);
    });

    it('property trail is a object who has property value that equal 10', function() {
      expect(dclist.trail)
        .to.be.a('object')
        .have.property('value')
          .equal(10);
    });

    it('dclist.trail.next is a object that reference is dclist.head', function() {
      expect(dclist.trail.next)
        .to.be.a('object').to.equal(dclist.head);
    });

    it('dclist.trail.prev is a object that reference is dclist.trail', function() {
      expect(dclist.head.prev)
        .to.be.a('object').to.equal(dclist.trail);
    });
  });

  describe('#DCList.indexOf()', function() {
    let dclist = createDCList();
    it('The value 5 at index 4', function() {
      expect(dclist.indexOf(5)).to.equal(4);
    });

    it('The value 12 is not in dclist', function() {
      expect(dclist.indexOf(12)).to.equal(-1);
    });

    it('The value 1 at index 0', function() {
      expect(dclist.indexOf(1)).to.equal(0);
    });

    it('The value 10 at index 9', function() {
      expect(dclist.indexOf(10)).to.equal(9);
    });
  });

  describe('#DCList.lastIndexOf()', function() {
    let dclist = createDCList();
    it('The value 6 at index 5', function() {
      expect(dclist.lastIndexOf(6)).to.equal(5);
    });

    it('The value 12 is not in dclist', function() {
      expect(dclist.lastIndexOf(12)).to.equal(-1);
    });

    it('The value 10 at index 9', function() {
      expect(dclist.lastIndexOf(10)).to.equal(9);
    });

    it('The value 1 at index 0', function() {
      expect(dclist.lastIndexOf(1)).to.equal(0);
    });
  });
});
