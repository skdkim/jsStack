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
    if (!this.top.value){
      throw new Error("stack is empty");
    }
    let popped = this.top.value;
    this.top = this.top.next;

    return popped;
  }

  peek(){
    if (this.top.value){
      return this.top.value;
    } else {
      throw new Error("stack is empty");
    }
  }

  isEmpty(){
    return (!this.top.value);
  }
}

module.exports = Stack;
