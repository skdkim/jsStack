var assert = require('assert');

var Stack = require('../stack.js');

describe('#isEmpty()', function () {
  it('should return true if the stack is empty', function () {
    let stack = new Stack();

    let boolean = stack.isEmpty();

    assert.deepEqual(boolean, true);
  });
});
