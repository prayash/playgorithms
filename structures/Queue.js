'use strict';

class Queue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value) {
    this.length++;
    this.list.push(value);
    return this.list;
  }

  dequeue() {
    if (this.length === 0) return;
    this.length--;
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }

}

var q = new Queue();

// ***********************************

class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(val) {
    this.inStack.push(val);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        var newestInStackItem = this.inStack.pop();
        this.outStack.push(newestInStackItem);
      }

      if (this.outStack.length === 0) {
        return undefined;
      }
    }

    return this.outStack.pop();
  }
}

var q = new QueueTwoStacks();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.dequeue());
q.enqueue('d');
console.log(q.dequeue());
console.log(q.dequeue());
