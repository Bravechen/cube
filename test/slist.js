const expect = require('chai').expect;
const SList = require('../src/chain_table/SList');

function createSList() {
  let slist = new SList();
  let ary = [1,2,3,4,5,6,7,8];
  for(let value of ary) {
    slist.append(value);
  }
  return slist;
}

describe('Singly Linked List', () => {

  describe('Create a SList instance', function() {
    it(`should be a object and property length equal 8`, function() {
      let slist = createSList();
      console.log('value list:', slist.traversal());
      expect(slist)
        .to.be.a('object')
        .have.lengthOf(8);
    });

    it('should have a property head whose value equal 1', function() {
      expect(createSList())
        .have.property('head')
          .to.be.a('object')
          .have.property('value')
            .to.equal(1);
    });

    it('should have a property trail whose value equal 8', function() {
      expect(createSList())
        .have.property('trail')
          .to.be.a('object')
          .have.property('value')
            .to.equal(8);
    })
  });

  describe('#SList.indexOf()', function() {
    let slist = createSList();
    it('has an element 4 at 3', function() {
      console.log('value list', slist.traversal());
      expect(slist.indexOf(4)).to.equal(3);
    });
  });

  describe('#SList.insterAt()', function() {
    function insertNum(slist, value, position) {
      slist.instertAt(position, value);
      return slist;
    }

    it(`instert a element 10 at index 4, and length should equal 9`, function() {
      let slist = insertNum(createSList(), 10, 4);
      console.log('after insert', slist.traversal());
      expect(slist)
        .have.property('length')
        .to.equal(9);
    });

    it('after instert, the slist has the element 10 at index 4', function() {
      let slist = insertNum(createSList(), 10, 4);
      expect(slist.indexOf(10))
        .to.equal(4);
    });

    it('have property head equal 1 and hanve property trail equal 8 after invoke insertAt()', function() {
      let slist = insertNum(createSList(), 10, 4);
      expect(slist)
        .have.property('head')
          .to.be.a('object')
          .have.property('value')
          .to.equal(1);
      expect(slist).have.property('trail')
        .to.be.a('object')
        .have.property('value')
        .to.equal(8);
    });

    it('insert an element 5 at index -1, back undefined ', function() {
      let slist = createSList();
      expect(slist).to.be.a('object');
      expect(slist.instertAt(-1, 5)).to.equal(void 0);
    });

    describe('after inster a element 12 at index 0', function() {
      let slist = insertNum(createSList(), 12, 0);
      it('have property length equal 9', function() {
        console.log('after insert', slist.traversal());
        expect(slist)
          .to.be.a('object')
          .have.lengthOf(9);
      });

      it('have property head whose property value equal 12 ', function() {
        expect(slist)
        .have.property('head')
          .have.property('value')
          .equal(12);
      });

      it('The old element 1 at index 0 who at index 1 now', function() {
        expect(slist.indexOf(1)).to.equal(1);
      });
    });

    describe('after inster a element 11 at slice.length - 1', function() {
      let slist = createSList();
      slist.instertAt(slist.length - 1, 11);
      it('have property length equal 9', function() {
        console.log('after insert', slist.traversal());
        expect(slist)
          .to.be.a('object')
          .have.lengthOf(9);
      });

      it('after insert the element 11 at index 7 ', function() {
        expect(slist.indexOf(11)).to.equal(7);
      });

      it('The old element 8 at index slist.length - 1 who still at index slist.length - 1', function() {
        expect(slist.indexOf(slist.trail.value)).to.equal(slist.length-1);
      });
    });
  });

  describe('#SList.removeAt()', function() {

    describe('remove the element 5 at index 4', function() {
      let slist = createSList();
      let value = slist.removeAt(4);
      console.log('remove the element 5 at index 4', slist.traversal());
      it('property length equal 7', function() {
        expect(slist).have.lengthOf(7);
      });

      it(`after remove the element at index 4, back 5`, function() {
        expect(value).to.equal(5);
      });
    });

    it('remove an element at index -1, back undefined.', function() {
      let slist = createSList();
      expect(slist.removeAt(-1)).to.equal(void 0);
    });

    describe('remove the element at index 0', function() {
      let slist = createSList();
      let value = slist.removeAt(0);
      console.log('remove the element at index 0', slist.traversal());
      it('property length should equal 7', function() {
        expect(slist).have.lengthOf(7);
      })
      it('property head whose property value should equal 2', function() {
        expect(slist.head)
          .to.be.a('object')
          .have.property('value')
          .equal(2);
      });
    });

    describe('remove the element at slist.length - 1', function() {
      let slist = createSList();
      let value = slist.removeAt(slist.length - 1);
      console.log('remove the element at slist.length - 1', slist.traversal());
      it('property length should equal 7', function() {
        expect(slist).have.lengthOf(7);
      });

      it('property trail whose property value should equal 7', function() {
        expect(slist.trail)
          .to.be.a('object')
          .have.property('value')
            .equal(7);
      });
    });

  });

  describe('#SList.remove()', function() {
    let slist = createSList();
    it('remove the element 8 and back it', function() {
      expect(slist.remove(8)).to.equal(8);
    });
  });
});
