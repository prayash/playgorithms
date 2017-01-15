'use strict';

function LinkedList() {
  var head = null;
  var data = 0;

  var isEmpty = function() {
    return head === null;
  }

  function contains(value) {
    var current = head;
    while (current !== null) {
      if (current.data == value) {
        return true;
      } else {
        current = current.next;
      }
    }

    return false;
  }

  return {
    head: function() {
      return head;
    },

    isEmpty: isEmpty,

    contains: function(value) {
      return contains(value);
    },

    size: function() {
      var current = head;
      var count = 0;

      while (current !== null) {
        count++;
        current = current.next;
      }

      return count;
    },

    append: function(value) {
      var newNode = {
        data: value,
        next: null
      };

      if (isEmpty()) {
        head = newNode;
        return;
      }

      var current = head;
      while (current.next !== null) {
        current = current.next;
        current.next = newNode;
      }

      return head;
    },

    prepend: function(value) {
      var newNode = {
        data: value,
        next: head
      };

      head = newNode;
      return newNode;
    },

    remove: function(value) {
      if (!contains(value)) return;

      if (head.data === value) {
        head = head.next;
        return;
      }

      var previous = null;
      var current = head;

      while (current.data !== value) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      return head;
    },

    print: function() {
      var output = '[';
      var current = head;
      // console.log(current);
      while (current !== null) {
        output += current.data;
        current = current.next;

        if (current !== null) {
          output += ', ';
        }
      }

      output += ']';
      return output;
    }
  }
}

var list = LinkedList();

console.log('\t -> append: ', list.append(25));
console.log('\t -> append: ', list.append(25));
console.log('\t -> append: ', list.append(25));
console.log('\t -> prepend: ', list.prepend(5));
console.log('\t -> prepend: ', list.prepend(69));

console.log('\t -> isEmpty: ', list.isEmpty());
console.log('\t -> size: ', list.size());
console.log('\t -> contains 60?: ', list.contains(60));

console.log('\t -> remove: ', list.remove(5));
console.log('\t -> prepend: ', list.prepend(36));
console.log('\t -> append: ', list.append(6));

console.log('\t -> head: ', list.head());

console.log('\t -> print: ', list.print());

class LinkedList() {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value, position) {
    var node = {
      value: value,
      next: null
    };

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      var prev = this.get(position - 1);
      var current = prev.next;
      node.next = current;
      prev.next = node;
    }

    this.length++;
  }

  remove(position) {
    if (position === 0) {
      this.head = this.head.next;
    } else {
      var prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    this.length--;
  }

  get(position) {
    var current = this.head;

    for (var i = 0; i < position; i++) {
      current = current.next;
    }

    return current;
  }
}
