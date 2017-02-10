# jsStack

jsStack is a Stack data structure implementation using Javascript.

This Stack implementation is also accompanied with Mocha tests.

Check out my full [portfolio](http://www.davidkim.tech/)!

Enjoy some of these code snippets.

##Stack Class

Here is a code snippet of the Stack class.
```javascript
class Stack{
  constructor(){
    this.top = new StackNode();
  }

  push(ele){
    let item = new StackNode(ele);
    item.next = this.top;
    this.top = item;
  }
```

##StackNode Class

Here is all of the StackNode class because it's so small.

I chose to put it in a different file from the Stack class.
```javascript
class StackNode{
  constructor(ele){
    this.value = ele;
    this.next = undefined;
  }
}
```

##Mocha tests

Here is a code snippet of the test file.

This is the test for the peek method. It makes sure that the method throws an error when the stack is empty and if it isn't, it gives us the value of the top element.

```javascript
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
```
