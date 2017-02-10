let assert = require('assert');

let Stack = require('../stack.js');

describe('#isEmpty()', () => {
  let stack = new Stack();
  it('should return true if the stack is empty', () => {
    assert.equal(stack.isEmpty(), true);
  });

  it('should return false if the stack is not empty', () => {
    stack.push(1);

    assert.equal(stack.isEmpty(), false);
  });
});

describe('#peek()', () => {
  let stack = new Stack();
  it('should throw an error if stack is empty', () => {
    assert.throws(() => {
      stack.peek();
    }, /stack is empty/);
  });


  it('should return the top element of the stack', () => {
    stack.push(1);
    assert.equal(stack.peek(), 1);
  });
});
