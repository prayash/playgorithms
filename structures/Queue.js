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
