const expect = require('chai').expect;
const DList = require('../src/chain_table/DList');

function createDList() {
  let dlist = new DList();
  let ary = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0, len = ary.length; i < len; i++) {
    dlist.append(ary[i]);
  }
  return dlist;
}

describe('Double Linked List', function() {
  describe('create a double linked list', function() {
    let dlist = createDList();
    it('should be an object and length equal 8', function() {
      expect(dlist)
        .to.be.a('object')
        .have.property('length')
        .to.equal(8);
    });

    it('has property head is node whose value equal 1', function() {
      expect(dlist.head)
        .to.be.a('object')
        .have.property('value')
        .to.equal(1);
    });

    it('has property trail is node whose value equal 8', function() {
      expect(dlist.trail)
        .to.be.a('object')
        .have.property('value')
        .to.equal(8);
    });
  });

  describe('#DList.indexOf()', function() {
    let dlist = createDList();
    it('find value 5 at index 4', function() {
      // console.log(dlist.traversal());
      expect(dlist.indexOf(5)).to.equal(4);
    });
    it('Passing a value 10 who not in the dlist, will back -1', function() {
      expect(dlist.indexOf(10)).to.equal(-1);
    });
  });

  describe('#DList.lastIndexOf()', function() {
    let dlist = createDList();
    console.log(dlist.traversal());
    it('find value 5 at index 4', function() {
      expect(dlist.lastIndexOf(5)).to.equal(4);
    });
    it('Passing a value 10 who not in the dlist, will back -1', function() {
      expect(dlist.lastIndexOf(10)).to.equal(-1);
    });
  });

  describe('#DList.insertAt()', function() {
    let dlist = createDList();
    dlist.insertAt(6, 10);
    // let list = dlist.traversal();
    it('after insert a element 10 at index 6, length equal 9', function() {
      expect(dlist.length).to.equal(9);
    });

    it('after insert an element 10 whose index equal 6', function() {
      expect(dlist.indexOf(10)).to.equal(6);
    });

    it('insert a value 10 to a empty DList, will back false', function() {
      let dlist2 = new DList();
      expect(dlist2.insertAt(0, 10)).to.equal(false);
    });

    it('insert a value 11 at index that bigger then dlist.length, will back false', function() {
      expect(dlist.insertAt(12, 11)).to.equal(false);
    });
  });
});
