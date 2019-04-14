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
    it('remove value at index -1, back undefined', function() {
      let oclist = createOCList();
      expect(oclist.removeAt(-1)).to.equal(void 0);
    });

    it('remove value at oclist.length, back undefined', function() {
      let oclist = createOCList();
      expect(oclist.removeAt(oclist.length)).to.equal(void 0);
    });

    describe('remove the value 1 at index 0', function() {
      let oclist = createOCList();
      oclist.removeAt(0);
      it('property head who has property value equal 2', function() {
        expect(oclist.head)
          .have.property('value')
          .equal(2);
      });

      it('oclist.trail.next reference equal oclist.head', function() {
        expect(oclist.trail.next).to.equal(oclist.head);
      });
    });

    describe('remove the value 6 at index 5', function() {
      let oclist = createOCList();
      let value = oclist.removeAt(5);
      it('length equal 9', function() {
        expect(oclist).lengthOf(9);
      });

      it('after removeAt(4) back 5', function() {
        expect(value).to.equal(6);
      });
    });

    describe('remove the value who at oclist.length - 1', function() {
      let oclist = createOCList();
      let value = oclist.removeAt(oclist.length-1);
      it('lenth equal 9', function() {
        expect(oclist).lengthOf(9);
      });

      it('after remove(oclist.length-1), back 10', function() {
        expect(value).to.equal(10);
      });

      it('oclist.trail whose property value is equal 9', function() {
        expect(oclist.trail)
          .to.have.property('value')
          .equal(9);
      });
    });
  });
});
