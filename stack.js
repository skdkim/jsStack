const StackNode = require('./stackNode.js');

class Stack{
  constructor(){
    this.top = new StackNode();
  }

  push(ele){
    let item = new StackNode(ele);
    item.next = this.top;
    this.top = item;
  }

  pop(){
    let popped = this.top.value;
    this.top = this.top.next;

    return popped;
  }

  peek(){
    if (this.top.value){
      return this.top;
    } else {
      return "stack is empty";
    }
  }

  isEmpty(){
    return (!this.top.value);
  }
}

module.exports = Stack;

// let stack = new Stack();
//
// console.log(stack.isEmpty());

//
// // console.log(stack.peek());
// stack.push(1);
// stack.push(5);
// stack.push(3);
// stack.push(7);
//
// // console.log(stack.peek());
//
// stack.pop();
// console.log(stack.peek());
