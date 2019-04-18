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

    it('dlist.head.prev equal null', function() {
      expect(dlist.head.prev).to.equal(null);
    });

    it('has property trail is node whose value equal 8', function() {
      expect(dlist.trail)
        .to.be.a('object')
        .have.property('value')
        .to.equal(8);
    });

    it('dlist.trail.next equal null', function() {
      expect(dlist.trail.next).to.equal(null);
    });
  });

  describe('#DList.indexOf()', function() {
    let dlist = createDList();
    it('find value 5 at index 4', function() {
      expect(dlist.indexOf(5)).to.equal(4);
    });
    it('Passing a value 10 who not in the dlist, will back -1', function() {
      expect(dlist.indexOf(10)).to.equal(-1);
    });
  });

  describe('#DList.lastIndexOf()', function() {
    let dlist = createDList();
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
    it('after insert a element 10 at index 6, length equal 9', function() {
      expect(dlist.length).to.equal(9);
    });

    it('after insert an element 10 whose index equal 6', function() {
      expect(dlist.indexOf(10)).to.equal(6);
    });

    it('insert a value 10 to a empty DList, nothing happen', function() {
      let dlist2 = new DList();
      dlist2.insertAt(0, 10);
      expect(dlist2.length).to.equal(0);
    });

    it('insert a value 11 at index that bigger then dlist.length, nothing happen', function() {
      let dlist = createDList();
      dlist.insertAt(12, 11)
      expect(dlist.length).to.equal(8);
    });

    describe('after insert a element 100 at index 0, then can get the value at index 0', function() {
      let dlist = createDList();
      dlist.insertAt(0, 100);
      it('dlist.head.value equal 100', function() {
        expect(dlist.head)
         .have.property('value')
         .equal(100);
      });
      it('dlist.head.next is a object has property value equal 1', function() {
        expect(dlist.head.next)
          .to.be.a('object')
          .have.property('value')
          .equal(1);
      });

      it('dlist.head.prev equal null', function() {
        expect(dlist.head.prev)
          .to.equal(null);
      });

    });

    describe('insert a element 123 at dlist.length - 1', function() {
      let dlist = createDList();
      dlist.insertAt(dlist.length - 1, 123);
      it('dlist.length equal 9', function() {
        expect(dlist).lengthOf(9);
      });

      it('dlist.trail.value still equal 8', function() {
        expect(dlist.trail)
          .to.be.a('object')
          .have.property('value')
            .equal(8);
      });

      it('find the element 123 where at index dlist.length - 2', function() {
        expect(dlist.indexOf(123)).to.equal(dlist.length - 2);
      });

      it('dlist.trail.next still equal null', function() {
        expect(dlist.trail.next).to.equal(null);
      });


    });
  });

  describe('#DList.removeAt()', function() {

    describe('remove element 3 at index 2', function() {
      let dlist = createDList();
      let value = dlist.removeAt(2);
      it('after remove, then back value equal 3', function() {
        expect(value).to.equal(3);
      });

      it('after remove, then property length equal 7', function() {
        expect(dlist.length).to.equal(7);
      });
    });

    describe('remove element at 0', function() {
      let dlist = createDList();
      let value = dlist.removeAt(0);
      it('after remove, then property length equal 7', function() {
        expect(dlist.length).to.equal(7);
      });

      it('dlist.head.value equal 2', function() {
        expect(dlist.head)
          .to.be.a('object')
          .have.property('value')
          .equal(2);
      });

      it('dlist.head.prev equal null', function() {
        expect(dlist.head.prev).to.equal(null);
      });
    });

    describe('remove element at dlist.length - 1', function() {
      let dlist = createDList();
      let value = dlist.removeAt(dlist.length - 1);
      it('after remove, the property length equal 7', function() {
        expect(dlist).lengthOf(7);
      });

      it('after remove, dlist.trail.value equal 7', function() {
        expect(dlist.trail)
          .to.be.a('object')
          .have.property('value')
          .equal(7);
      });

      it('dlist.trail.next equal null', function() {
        expect(dlist.trail.next).to.equal(null);
      });
    });
  });
});
