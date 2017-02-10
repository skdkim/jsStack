let assert = require('assert');

let Stack = require('../stack.js');

describe('#isEmpty()', () => {
  let stack = new Stack();
  it('should return true if the stack is empty', () => {
    assert.deepEqual(stack.isEmpty(), true);
  });

  it('should return false if the stack is not empty', () => {
    stack.push(1);

    assert.deepEqual(stack.isEmpty(), false);
  });
});

describe('#peek()', () => {
  let stack = new Stack();
  it('should return the top element of the stack', () => {
    stack.push(1);
    assert.deepEqual(stack.peek(), 1);
  });
});
