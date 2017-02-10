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
    stack.push(2);
    assert.equal(stack.peek(), 2);
  });
});

describe('#push()', () => {
  let stack = new Stack();
  it('should add argument to the top of the stack', () => {
    stack.push(15);
    assert.equal(stack.peek(), 15);
    stack.push(17);
    assert.equal(stack.peek(), 17);
  });
});

describe('#pop()', () => {
  let stack = new Stack();
  it('should throw an error if stack is empty', () => {
    assert.throws(() => {
      stack.pop();
    }, /stack is empty/);
  });

  it('should remove top element and return the element', () => {
    stack.push(15);
    stack.push(17);
    assert.equal(stack.pop(), 17);
    assert.equal(stack.peek(), 15);

  });
});
