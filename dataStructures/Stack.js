'use strict';

class Stack {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value) {
    this.list.push(value);
    this.length++;
    return this.list;
  }

  pop() {
    if (this.length === 0) return;
    this.length--;
    return this.list.pop();
  }

  peek() {
    return this.list[this.length - 1];
  }
}

var s = new Stack();
console.log(s);
console.log(s.push(9));
console.log(s.push(69));
console.log(s.pop());
console.log(s.peek());
