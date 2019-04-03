const expect = require('chai').expect;
const SList = require('../src/chain_table/SList');

let slist = new SList();
let ary = [1,2,3,4,5,6,7,8];
let len = ary.length;
for(let value of ary) {
  slist.append(value);
}

describe('Singly Linked List', () => {
  let list = slist.traversal();
  it(`should be a arry and property length equal${ary.length}`, function() {
    expect(list)
      .to.be.a('array')
      .to.have.lengthOf(ary.length);
  });

  it('has a element 4 at 3', function() {
    expect(slist.indexOf(4)).to.equal(3, 'shuold have a number 4 at 3');
  });

});

describe('#SList.insterAt()', function() {
  let list = slist.traversal();
  it(`instert a number 10 at index 4, and length should equal ${list.length+1}`, function() {
    slist.instertAt(4, 10);
    console.log(slist.traversal());
    expect(slist)
      .have.property('length')
      .to.equal(list.length + 1);
  });

  it('after instert, the slist has the element 10 at index 4', function() {
    expect(slist.indexOf(10)).to.equal(4);
  });

  it('Passing -1 to insterAt() as the first parameter(position), back undefined ', function() {
    expect(slist.instertAt(-1, 5)).to.equal(void 0);
  });
});

describe('#SList.removeAt()', function() {

  it(`Remove the element at index 5, back 5`, function() {
    let list = slist.traversal();
    console.log(list);
    expect(slist.removeAt(5)).to.equal(list[5]);
    console.log(slist.traversal());
  });

  it('Passing -1 to removeAt(), back undefined.', function() {
    expect(slist.removeAt(-1)).to.equal(void 0);
  });

});
