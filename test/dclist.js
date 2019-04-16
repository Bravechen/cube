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

  describe('#DCList.insertAt(position, value)', function() {

    it('after insert, property length equal 11', function() {
      let dclist = createDCList();
      dclist.insertAt(6, 12);
      expect(dclist.length).to.equal(11);
    });

    it('after insert 12 at index 6, will get 12 at index 6', function() {
      let dclist = createDCList();
      dclist.insertAt(6, 12);
      expect(dclist.indexOf(12)).to.equal(6);
    });

    it('after insert 11 at index 0, dclist.head.value equal 11', function() {
      let dclist = createDCList();
      dclist.insertAt(0, 11);
      expect(dclist.head)
        .to.be.a('object')
        .have.property('value')
          .equal(11);
    });

    it('after insert 12 at dclist.length-1, dclist.trail.value equal 12', function() {
      let dclist = createDCList();
      dclist.insertAt(dclist.length-1, 12);
      expect(dclist.trail)
        .to.be.a('object')
        .have.property('value')
          .equal(12);
    });

  });

  describe('#DCList.removeAt(position, value)', function() {
    it('after invoke removeAt(), property length equal 9', function() {
      let dclist = createDCList();
      dclist.removeAt(5);
      expect(dclist.length).to.equal(9);
    });

    it('after invoke removeAt(0), property length not change that equal 10', function() {
      let dclist = createDCList();
      dclist.removeAt(-1);
      expect(dclist.length).to.equal(10);
    });

    it('after invoke removeAt(dclist.length), property length not change that equal 10', function() {
      let dclist = createDCList();
      dclist.removeAt(dclist.length);
      expect(dclist.length).to.equal(10);
    });

    it('remove value 5 at index 4, back value equal 5', function() {
      let dclist = createDCList();
      let value = dclist.removeAt(4);
      expect(value).to.equal(5);
    });

    it('remove value 5 at index 4, get value 6 at index 4', function() {
      let dclist = createDCList();
      let value = dclist.removeAt(4);
      console.log(dclist.traversal());
      expect(dclist.indexOf(6)).to.equal(4);
    });

    it('remove value 1 at index 0, dclist.head.value equal 2', function() {
      let dclist = createDCList();
      let value = dclist.removeAt(0);
      expect(dclist.head)
        .to.be.a('object')
        .have.property('value')
          .equal(2);
    });

    it('remove value 10 at index dclist.length - 1, dclist.trail.value equal 9', function() {
      let dclist = createDCList();
      let value = dclist.removeAt(dclist.length - 1);
      expect(dclist.trail)
        .to.be.a('object')
        .have.property('value')
          .equal(9);
    });
  });
});
